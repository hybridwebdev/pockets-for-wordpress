<?php
namespace pockets\crud;

/**
    Acts as a wrapper for initCached crud method. 

    Note: Crud operations like create/read/update/delete 
    do not directly return a result. Instead they return the wrappers
    instance. 

    You can retrieve them via $wrapper->get( $key )
    where $key can be 'all', 'query' or 'response'

*/
#[\AllowDynamicProperties]
class initCachedWrapper {
    
    use \pockets\traits\init_new;

    private string $action;
    private mixed $args;
    private int $hash = 0;
    private bool | string $contextURL = false;

    private array $whitelistedMethods = [
        'create',
        'read',
        'update',
        'delete'
    ];

    function __construct( private model $model, private $init ) {

        add_filter( 'pockets/crud/cache', function( array $cache ) {
            $cache[] = $this->get('all');
            return $cache;
        } );

    }

    public function setContextURL( bool | string $url ) {
        $this->contextURL = $url;
        return $this;
    }
    
    /**
        For edge cases, you can set the starting hash value which is used for cache busting 
    */
    public function setHash( int $hash ) {
        $this->hash = $hash;
        return $this;
    }

    public function get( string $key ){
        
        $map = [
            'query' => [
                'model' => $this->model::$model_name,
                'action' => $this->action,
                'init' => $this->init,
                /**
                    Hash is for incremental purposes.
                    It can be passed client side to "break" cache and force a re-fresh.
                    eg something.hash++
                */
                'hash' => $this->hash,
            ],
            'response' => $this->response
        ];

        if( array_key_exists( 0, $this->args ) ) {
            $map['query']['input'] = $this->args[0] ?? null;
        }

        if( array_key_exists( 1, $this->args ) ) {
            $map['query']['output'] = $this->args[1] ?? null;
        }

        $map['query']['contextURL'] = $this->contextURL;
        
        return match( $key ) {
            'query' => $map['query'],
            'response' => $map['response'],
            'all' => $map
        };

    }
 
    function __call( $method, $args ) {

        if( in_array( $method, $this->whitelistedMethods ) ) {
            
            $this->args = $args;
            
            $this->action = $method;
            
            $this->response = call_user_func( [ $this->model, $method ], ...$args );

        }

        return $this;

    }

}

#[\AllowDynamicProperties]
abstract class model {
    use implementation;
    use publicApi;
    use adapters;
    use permissions;
    use documentation\get_documentation;
}

trait permissions {
    public function canCreate() : bool {
        return false;
    }
    public function canRead()   : bool {
        return false;
    }
    public function canUpdate() : bool {
        return false;
    }
    public function canDelete() : bool {
        return false;
    }
}

trait adapters {

    /**
        adapters consists of 2 components. A public string ${type}_resource eg: "read_resource" property
        that is a reference to a class, and method with the same name that invokes that class and calls the relevant method. 
        These methods should be called within a crud model to read/write as well as get the resource. 
    */

    /**
        @class-document-advanced

        read_resource

        Should be a string that maps to a class that extends pockets\crud\resource_walker
    */
    public string $read_resource     = '\pockets\crud\resource_walker';
    
    /**
        @class-document-advanced

        update_resource

        Should be a string that maps to a class that extends pockets\crud\resource_walker
    */
    public string $update_resource   = '\pockets\crud\resource_walker';
    
    /**
        @class-document-advanced

        get_resource

        Should be a string that maps to a class that extends pockets\crud\get_resource
    */
    public string $get_resource      = '\pockets\crud\get_resource';

    /**
        @class-document-advanced

        update_resource

        Should be used in model to perform actual update operations. Applies $update_resource resource walker
    */
    final function update_resource(array $fields){
        return $this->update_resource::init( $this->resource )->walk($fields);
    }

    /**
        @class-document-advanced

        read_resource

        Should be used in model to perform actual read operations. Applies $read_resource resource walker
    */
    final function read_resource(array $fields){
        return $this->read_resource::init( $this->resource )->walk($fields);
    }

    /**
        
        @class-document-advanced

        setResource becomes the extending classes pseudo contructor, being invoked every time 
        ::init is called.
        This should be used to do setup like fetch a resource using the $resource
        argument that can be used by crud methods.
    */

    function setResource( $resource = null ) {
        $this->resource = $this->get_resource ::init($resource);
    }
 
}

trait publicApi {

    /**
        Exposes all extendable methods for class.
    */

    /**
        model_name several things.
        It's used to call models through the \pockets::crud(model_name) method.
        This should be a unique id eg: 'post'.
        It's also used to collect and build documentation through introspection on the model class and 
        its various helpers such as the read/update/get_resource adapters.
    */
    public static string $model_name; 

    /**
        @class-document-advanced
        resource represents the thing crud operations are run on.
        This is set with the setResource method and validated with validateResource.
    */
    public $resource;

    /**
        For crud methods, query should be an array containing the values you want to use for that action.
        Eg for a post you'd pass in ['title'] which would map to the resources post title.

        For the create and update methods $read is optional and can be passed to define what you would 
        like back. This is returned using the read method of the crud model. 
        Eg for a post crud model, you could define $output as ['ID] which would return an array with its
        ID. Methods MUST provide a default read argument. 
    */
    public function create(array $query, array $read){}
    public function   read(array $query){}
    public function update(array $query, array $read){}
    public function delete(array $query){}
    
    /**
        @class-document-advanced
        Generates Schema for this class. 
    */
    static function getSchema() {
        return \pockets\crud\schema\model::init()->build( static::class );
    }
    
}

trait implementation {

    /**
        Internal implementation logic. This should not be touched by extending clases.
    */

    static function getModels(){
        return self::$models;
    }
    /**
        @class-document-advanced

        $models is an array of all models that extend this class.
        eg: ['post' => reference to post model class ].
        A model is added to this when the register method is called.
    */
    protected static array $models = [];
    
    /**
        @class-document-advanced

        @function init 
        
        Serves as the public api for a model.
        It invokes the models request method and then returns 
        the instance for chaining.
        Eg model::init($resource)->create($query);
    */
    final static function init($resource = null){
        $instance = new static;
        $instance->setResource($resource);
        return $instance;
    }

    /**
        initCached serves as a wrapper that takes a normal crud
        operation and stores it in a filter that passes it clientside.
        This is used to "prime" the dataloader so that the requests 
        data is already ready when a crud request calls it. 
    */
    final static function initCached( $init = null ) {
        return initCachedWrapper::init( static::init( $init ), $init );
    }

    /**
        @class-document-advanced
        
        @function unregister
        used to removel model from the static $models property.
        
        You can overload this method in your extended model if you
        wish to perform cleanup before your model is removed, but you 
        MUST call parent::unregister() somewhere in your method. 
    */

    static function unregister() {
        $model = self::get( static::$model_name );
        if( is_wp_error( $model ) ){
            return $model;
        }
        unset( self::$models[static::$model_name] );
        return static::class;
    }

    /**
        @class-document-advanced

        @function register
        used to add model to the static $models property.
        The model can then be called like so:

        \crud\model::get(model_name)

        this will return the related crud model.
        If the model is not found, it will return a wp_error instance.
        
    */

    static function register(){
        self::$models[static::$model_name] = static::class;
        return static::class;
    }

    /**
        @class-document-advanced
    */
    final static function get(string $model_name ){
        $model = self::$models[$model_name] ?? false;
        if($model) {
            return self::$models[$model_name];
        }
        return \pockets::error("Model Not found", $model);
    }
 
}   
