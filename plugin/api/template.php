<?php
namespace pockets\plugin\api;

class templates {

    private static $templates_cached = false;

    /**
        A template should be an array containing the following:
        [
            'name' => (string) Name used to display template in lists etc
            'path' => (string) location of template
            'type' => (string) group template applies to such as "post", "post-loop"
            'ID' => optional (string) unique ID of template. If none is provided, one
                    will be generated using its path
        ]
    */
    private static array $templates = [];

    /**
        You can provide a type argument to get a specific group of templates
        based on their type declaration
    */
    static function get( string | array $type = 'all' ) : array {
        
        $type_list = is_array($type) ? $type : [ $type ];

        if( !self::$templates_cached ) {
            self::add_found_templates();
        }

        $results = match( $type ) {
            default => array_filter(
                array: static::$templates,
                callback: fn($e) => in_array($e['type'], $type_list)
            ),
            'all' => static::$templates
        };
        
        return array_reduce(
            array: $results,
            callback: function( $acc, $entry ) {
                $acc[ $entry['path'] ] = $entry;
                return $acc;
            },
            initial: []
        );

    }

    /**
        Adds template to registered list. 
        Can be chain called.
    */
    static function add( array $template ) {
        static::$templates[] = $template + [
            'ID' => $template['ID'] ?? $template['path']
        ];
        return static::class;
    }
    
    /**
        Removes template from registered list, based on ID provided. 
        Can be chain called.
    */
    static function remove( string $ID ) {
        static::$templates = array_filter(
            array: static::$templates,
            callback: fn($e) => $e['ID'] != $ID
        );
        return static::class;
    }

    static function add_found_templates(){
        array_map(
            array: static::find_templates(),
            callback: fn( array $template ) => static::add($template)
        );
    }

    private static function find_templates() {
        
        if( !self::$templates_cached ) {

            self::$templates_cached = array_reduce(
                array: \pockets::get_template_locations(), 
                callback: fn( $acc, $location ) => self::get_templates_from_dir( $location.\pockets::$templates_root_path, $acc ), 
                initial: []
            );

        }

        return self::$templates_cached;

    }
    
    /**
        replaces _cleanup_header_comment which wp complains about if you use.  
    */
    private static function cleanup_header_comment(string $str): string {
        return trim(
            preg_replace('/\s*(?:\*\/|\?>).*/', '', $str)
        );
    }

    private static function get_templates_from_dir( string $dir, array $collected_paths = [] ){

        $dir = \pockets::normalize_file_path( $dir );

        $RecursiveDirectoryIterator = new \RecursiveDirectoryIterator( $dir );
        $RecursiveDirectoryIterator->setFlags(\RecursiveDirectoryIterator::SKIP_DOTS);
        $objects = new \RecursiveIteratorIterator( $RecursiveDirectoryIterator );
        
        $paths = array_values( iterator_to_array($objects) );

        return array_reduce( 
            array: $paths, 
            initial: $collected_paths,
            callback: function($acc, $o) use($dir) {
                
                $path = \pockets::normalize_file_path( $o->getpathName() );
                $template_path = str_replace($dir, "", $path );

                $ext = strtolower( substr($template_path, -4) );
                if( $ext != '.php') return $acc;

                $file_contents = file_get_contents( $path );

                preg_match( '|Template name:(.*)$|mi', $file_contents, $template_name );
                preg_match( '|Template type:(.*)$|mi', $file_contents, $template_type );
                
                $name = static::cleanup_header_comment( $template_name[1] ?? false );
                $type = static::cleanup_header_comment( $template_type[1] ?? false );

                if( !$name || !$type ) return $acc;

                $final_path = str_replace( $ext, "", $template_path );

                $acc[ $final_path ] = apply_filters( 'pockets/static-templates/register', [
                    'name' => $name,
                    'type' => $type,
                    'path' => $final_path,
                ], $file_contents );
                
                return $acc;

            }, 
            
        );

    }

}

trait template {
    
    static $templates = __NAMESPACE__.'\templates';
    /**
        Path that locate_template searches in. 
        Eg: my-theme/templates or my-plugin/templates
    */
    static $templates_root_path = "/templates/";

    /**
        Can be modified with add_filter( 'pockets/template-locations', callback );
        Any directories returned in this filter will be used as locations to look in
        when locate_template is called. It builds off $templates_root_path.

        So if you returned 'my-plugin-dir' it would look in 'my-plugin-dir/templates/'
    */
    static function get_template_locations(){
        return apply_filters( 'pockets/template-locations', [] );
    }

    /**
        Will attempt to find a json file with same logic as load_template uses.
    */
    static function load_json( string $path, bool $encode = false ) {

        $file = static::locate_template( $path, '.json');

        if( $file ) {
            $data = @file_get_contents( $file );
            return $encode ? json_decode( $data, true ) : $data;
        }

        return \pockets::error("File not found");

    }

    /**
        This function is an immitation of wordpresses equivalent, with
        one small difference. It also looks in a filterable list of folders, 
        allowing developers to add their own set of templates for use.
    */
    static function locate_template( string | array $paths, string $ext = '.php' ) : false | string {

        $match = false;
        /**
            Automatically cast $paths to an array so that it can be passed
            either way as an arg.
        */
        foreach( (array) $paths as $path) { 
            foreach( self::get_template_locations() as $location){
                $template = static::normalize_file_path(
                    $location.self::$templates_root_path.$path.$ext
                );
                if( file_exists( $template ) ){
                    
                    $match = $template;
                    if($match) break;
                }
            }
            if($match) break;
        }
        return $match;
    }
    
    static function load_template(array $data){
        if(!isset($data['template'])) return;
        $template = self::locate_template($data['template']);
        if( !$template ) return \pockets::error('Template not found');
        ob_start();
            require($template);
        return ob_get_clean();
    }

    static function normalize_file_path( string $path ) : string {
        return str_replace(['\\', '//'], '/', $path);
    }
    
}