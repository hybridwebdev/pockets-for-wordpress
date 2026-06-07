<?php
namespace pockets\crud\documentation;

trait templates {

    function template_rest_help_text(){
        ob_start();?>
        <p>
            When directly calling the endpoint, requests are sent as an array of requests, with each one returning its own
            result. This allows for multiple <b>CRUD</b> actions to be performed in one request. 

            For authorization, you will need to send <code>"X-WP-Nonce"</code> with a valid nonce created with <code>wp_create_nonce</code> as part of the headers, otherwise
            all actions will be performed in the context of a visitor with no privileges.
        </p>
        <p class='alert alert-danger fw-8'>
            There is no guarantee in what order requests will be handled. 
            Do not rely on operations being run in a specific order.
        </p>
        <?php return ob_get_clean();
    }
    function template_example_code( array $data ) : array { 

        $url = \pockets\crud\end_point\module::url();
        
        $vue = <<<'_'
        let response = await $pockets.crud("{model}").init({init}).{action}({args});
        _;

        $php = <<<_
        <?php \pockets::crud("{model}")::init({init})->{action}({args});
        _;

        $rest = <<<_
        let responses = await axios.post( "{url}", [ {
            model: "{model}",
            init: {init},
            action: "{action}",
            input: {input},
            output: {output},
        } ] )

        responses.forEach( response => ... )
        _;
        
        return [
            'vue'  => strtr( $vue, $data['vue'] ?? [] ),
            'php'  => strtr( $php, $data['php'] ?? [] ),
            'rest' => strtr( strtr( $rest, $data['rest'] ?? [] ), ['{url}' => $url])
        ];
    }
    function template_validateResource( array $entry ) : array {
        if( $entry['name'] !='validateResource' )  return $entry;
        ob_start(); ?>
            <span>
                This is the <b>CRUD</b> models resource validator. It is used internally by the <b>CRUD</b> model and its various
                actions to validate that the resource provided is of the type it expects.
            </span>
        <?php return $this->addTag( $entry, 'class-document-html', ob_get_clean() );
    }
}