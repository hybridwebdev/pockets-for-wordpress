<?php
namespace pockets\crud\documentation;
use \pockets\utils\get_class_documentation;

/**
    documents crud models read_resource/update_resource walkers
*/
class resource_walker_documentation extends get_class_documentation {

    use templates;

    function __construct( public string $model_name, public array $model, public string $action ){}
    
    function document_class_info( \ReflectionClass $class) : array {

        $data = parent::document_class_info($class);
        
        $data = $this->addTag($data, 'class-document-html', $this->template_class_info( $data ) );

        return $data;
    }

    function document_method( \ReflectionMethod $method ) : array | false {

        $data = parent::document_method($method);
        
        /**
            Flagging all methods as reserved, and conditionally unsetting below. 
            Allows methods to be filtered by isReservedMethod value in documentation.
        */
        $data['isReservedMethod'] = true;        

        $reservedMethods = call_user_func( [
            $this->data['info']['name'], 
            'getReservedMethods'
        ] );

        if( !in_array($data['name'], $reservedMethods) && !str_starts_with( haystack: $data['name'], needle: "__" ) ) {
            $data = $this->template_resource_walker( $data );
            $data['isReservedMethod'] = false;
        }
 
        $data = $this->template_validateResource($data);

        return $data; 
 
    } 
   
    function template_class_info( array $class ) : string {   

        $code = [
            // phpcs:disable PluginCheck.CodeAnalysis.Heredoc.NotAllowed -- no external variables
            'query:example' => <<<'PHP'
            [
                "foo_1" => "some arg",
                "foo_2" => "some other arg",
                "invalid_key" => "i wont return anything",
                "foo_3", 
            ]
            PHP,
            // phpcs:disable PluginCheck.CodeAnalysis.Heredoc.NotAllowed -- no external variables
            'query:result' => <<<'PHP'
            [
                "foo_1" => "value is some arg",
                "foo_2" => [
                    "key-1" => "value-1 is some other arg",
                    "key-2" => "value-2 is some other arg",
                ];,
                "foo_3" => "this argument is optional", 
            ]
            PHP,
            // phpcs:disable PluginCheck.CodeAnalysis.Heredoc.NotAllowed -- no external variables
            'model:example' => <<<'PHP'
            <?php
            class my_resource_walker extends \pockets\crud\resource_walker {
                function foo_1(string $arg){
                    return "value is $arg";
                }
                function foo_2(string $arg){
                    return [
                        "key-1" => "value-1 is $arg",
                        "key-2" => "value-2 is $arg",
                    ];
                }
                function foo_3($arg = "this argument"){
                    return "$arg is optional";
                }   
            }
            PHP,
            // phpcs:disable PluginCheck.CodeAnalysis.Heredoc.NotAllowed -- no external variables
            'flattening:before' => <<<PHP
            [
                "foo_1" => "my value",
                "foo_2:<=" => "my argument"
            ]
            PHP,
            // phpcs:disable PluginCheck.CodeAnalysis.Heredoc.NotAllowed -- no external variables
            'flattening:after' => <<<PHP
            [
                "foo_1" => "value is my value",
                "key-1" => "value-1 is my argument",
                "key-2" => "value-2 is my argument"
            ]
            PHP,
            // phpcs:disable PluginCheck.CodeAnalysis.Heredoc.NotAllowed -- no external variables
            'aliasing:before' => <<<PHP
            [
                "foo_1:aliased_key" => "my arg"
            ]
            PHP,
            // phpcs:disable PluginCheck.CodeAnalysis.Heredoc.NotAllowed -- no external variables
             'aliasing:after' => <<<PHP
            [
                "aliased_key" => "value is my arg"
            ]
            PHP
        ];
 
        ob_start();?>
            <div class='grid columns-1 gap-2'>
                 <p>
                    This class is responsible for handling the <b class='text-primary-lt'><?php echo esc_html($this->action) ?></b> operations of the <b>CRUD</b> model.

                    It takes a single argument of an array, and iterates each entry. It uses the <b>key</b> portion of the array entry, and calls a method 
                    with the same name on this class. 
                    If the <b>key</b> does not have a corresponding function, that <b>key</b> is ommitted from the returned result. 
                    Each function call gets the <b>value</b> of the array entry as its argument. Some methods arguments are optional,
                    and in those cases the <b>value</b> can be omitted.
                </p>
                <p>Here's an example of what a <b>walker</b> class looks like:</p>
                <pockets-ux-code-block class='fw-4 fs-18' language='javascript' code='<?php echo $code['model:example'] // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- sanitized earlier ?>'/>

                <p>
                    The walker takes the array given to it, and applies the following logic:
                </p>

                <ul>
                    <li>
                        The <b>walker</b> iterates through each entry in the array, processing them one by one.
                    </li>
                    <li>
                        For each entry in the array, the <b>walker</b> executes the corresponding function using its <b>key</b>. If a <b>value</b> is provided, it
                        is given to the method as an argument. 
                    </li>
                    <li>
                        The <b>walker</b> combines the results of each methods execution into a single response. 
                    </li>
                </ul>
                <p>For example, a query like this:</p>
                <pockets-ux-code-block class='fw-4 fs-18' language='javascript' code='<?php echo $code['query:example'] // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- sanitized earlier ?>'/>
                <p>Would return a result of:</p>
                <pockets-ux-code-block class='fw-4 fs-18' language='javascript' code='<?php echo $code['query:result'] // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- sanitized earlier ?>'/>
                <p>
                    Notice that <code>invalid_key</code> is omitted from the result, as it does not have a corresponding function with the same name.
                    Also note that <code>foo_3</code> applies the functions default argument, as no <b>value</b> was given for its entry. 
                </p>
                <p>The <b>walker</b> also has 2 ways to manipulate the shape of the returned results: <b class='text-primary-dk'>Aliasing</b> and <b class='text-primary-dk'>Flattening</b>.</p>
                <h1>
                    Aliasing
                </h1>
                <p>
                   Aliasing allows you to provide custom names for data returned in a <b>CRUD</b> operation. 
                   They allow you to format the results according to your requirements, manipulating 
                   their structure as needed. 

                   Consider the following query:
                </p>
                <pockets-ux-code-block class='fw-4 fs-18' language='javascript' code='<?php echo $code['aliasing:before'] // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- sanitized earlier ?>'/>
                <p>
                    The original key <code>foo_1</code> is renamed to <code>aliased_key</code>.
                    So, when you retrieve data using <code>aliased_key</code> you get the return value as illustrated below:
                </p>
                <pockets-ux-code-block class='fw-4 fs-18' language='javascript' code='<?php echo $code['aliasing:after'] // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- sanitized earlier ?>'/>
                <h1>
                    Flattening
                </h1>
                <p>
                    Flattening is another way of manipulating the returned results of a <b>CRUD</b> operation.
                    Nested fields within the response are "flattened" by taking their fields and bringing them up a level. This process may be used recursively for deeply nested fields.

                    Consider the following query:
                </p>
                <pockets-ux-code-block class='fw-4 fs-18' language='javascript' code='<?php echo $code['flattening:before'] // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- sanitized earlier ?>'/>
                <p>
                    The nested values of <code>foo_2</code> are "brought up" a level, providing the following result:
                </p>
                <pockets-ux-code-block class='fw-4 fs-18' language='javascript' code='<?php echo $code['flattening:after'] // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- sanitized earlier ?>'/>
                <p>
                    The result is a one-dimensional array where all keys and values are at the same level, making it simpler to work with 
                    and access data. This is useful when you want to process or display data without dealing with nested structures.
                </p>
                <p>
                    See 
                    <class-document-link class='fw-8 text-primary-lt' link='<?php echo esc_attr($class['name'])?>|method'>
                        methods
                    </class-document-link> 
                    for more info.
                </p>
            </div>
        <?php return ob_get_clean();
    }

    function template_resource_walker( array $entry ) : array {

        $arg = $entry['args'][0] ?? null;
        
        $has_arg = is_array( $arg );

        $merge_args = [
            '{key}' => $entry['name'],
            '{value}' => $arg['name'] ?? null
        ];

        $code = $this->template_example_code( [
            'vue' => [
                '{action}' => $this->action,
                '{model}' => $this->model_name,
                '{args}' => match( $has_arg ) {
                    true => strtr( '{ {key} : ${value} }', $merge_args ),
                    false => strtr( '["{key}"]', $merge_args )
                },
                '{init}' => '$init'
            ],
            'php' => [
                '{action}' => $this->action,
                '{model}' => $this->model_name,
                '{args}' => match( $has_arg ) {
                    true => strtr( '[ "{key}" => ${value} ]', $merge_args ),
                    false => strtr( '["{key}"]', $merge_args )
                },
                '{init}' => '$init'
            ],
            'rest' => [
                '{action}' => $this->action,
                '{model}' => $this->model_name,
                '{input}' => match( $has_arg ) {
                    true => strtr( '{ {key} : ${value} }', $merge_args ),
                    false => strtr( '["{key}"]', $merge_args )
                },
                '{output}' => '$output',
                '{init}' => '$init'
            ],
        ] );
        ob_start(); ?>
            <div class='grid columns-1 gap-2'>
                <p>
                    This is a <b>CRUD</b> 
                    <span class='text-primary-lt fw-8'>
                        <?php echo wp_kses_post($this->action) ?> 
                    </span>
                    field.
                    It can be used server side, client side or as a <b>REST Request</b> to interact with a <b>CRUD</b> model resource. 
                </p>
                <b>
                    Javascript
                </b>
                <pockets-ux-code-block class='fw-4 fs-18' language='javascript' code='<?php echo $code['vue'] // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- sanitized earlier ?>'/>
                <b>
                    PHP
                </b>
                <pockets-ux-code-block class='fw-4 fs-18' language='php' code='<?php echo $code['php'] // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped sanitized earlier ?>'/>
                <b>
                    REST Request
                </b>
                <?php echo $this->template_rest_help_text() // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- sanitized in fn ?>
                <pockets-ux-code-block class='fw-4 fs-18' language='php' code='<?php echo $code['rest'] // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- santized earlier ?>'/>
            </div>
        <?php 
        return $this->addTag( $entry, 'class-document-html', ob_get_clean() );
    }

}
