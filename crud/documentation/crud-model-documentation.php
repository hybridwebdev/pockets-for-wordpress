<?php
namespace pockets\crud\documentation;
use \pockets\utils\get_class_documentation;

/**
    documents crud model   
*/
class crud_model_documentation extends get_class_documentation {

    use templates;  

    function __construct( public string $model_name ){}

    function document_class_info( \ReflectionClass $class) : array {

        $data = parent::document_class_info($class);
        
        $data = $this->addTag($data, 'class-document-html', $this->template_class_info( $data ) );

        return $data;
    }

    function document_method( \ReflectionMethod $method ) : array {
       
        $data = parent::document_method($method);
        $data = $this->template_validateResource($data);
       
        if( in_array( $data['name'], ['create', 'read', 'update', 'delete'] ) ){
            $data = $this->template_crud_model_actions($data);
        }
       
        if( in_array( $data['name'], [ 'canCreate', 'canRead', 'canUpdate', 'canDelete' ]) ) {
            $data = $this->template_crud_model_permissions($data);
        }

        return $data;

    }

    function document_property( \ReflectionProperty $property ) : array  {

        $data = parent::document_property($property);

        if( in_array( $data['name'], [ 'read_resource', 'update_resource', 'get_resource' ] ) ) {
            $data = $this->template_crud_model_resource_property( $data );
        }

        if( $data['name'] == 'model_name') {
            $data = $this->template_property_model_name($data);
        }
        
        return $data;
    }
    
    function template_class_info( array $entry) : string {

        $model_name = $this->get_property('model_name')['value'] ?? false;

        $example_code = $this->template_example_code([
            'vue' => [
                '{init}' => '$init',
                '{model}' => '$model',
                '{args}' => '$input, $output',
                '{action}' => '$action'
            ],
            'php' => [
                '{init}' => '$init',
                '{model}' => '$model',
                '{args}' => '$input, $output',
                '{action}' => '$action'
            ],
            'rest' => [
                '{model}' => '$model',
                '{init}' => '$init',
                '{action}' => '$action',
                '{input}' => '$input',
                '{output}' => '$output',
            ]
        ]);
 
        ob_start(); ?>
            <div class='grid columns-1 gap-2'>
                <p>
                    This is the <span class='text-primary-dk fw-8'>
                        <?php echo esc_html($model_name) ?>
                        </span> <b>CRUD</b> model. 
                    It is responsible for getting and interacting with a resource.
                </p>
                <p>
                    <b>CRUD</b> is an acronym that stands for 
                    <span class='text-primary-lt fw-8'>create</span>,
                    <span class='text-primary-lt fw-8'>read</span>,
                    <span class='text-primary-lt fw-8'>update</span>,
                    and
                    <span class='text-primary-lt fw-8'>delete</span>.
                    It is a set of actions used for managing and manipulating data in a database 
                    or other data source such as an API. 
                </p>
                <h1>Actions</h1>
                <p>
                    Each of these <b>CRUD</b> actions takes a set of one or more arguments and uses 
                    them to perform its task.
                </p>
                <ul>
                    <li>
                        <class-document-link 
                            class='text-primary-lt fw-8 ' 
                            link='<?php echo esc_attr($entry['name']) ?>|method|create'
                        >
                            create
                        </class-document-link>
                        <p>Used to create a new resource.</p>
                    </li>
                    <li>
                        <class-document-link 
                            class='text-primary-lt fw-8 ' 
                            link='<?php echo esc_attr($entry['name'])?>|method|read'
                        >
                            read
                        </class-document-link>
                        <p>
                            Used to read data from a resource. This method looks at the 
                            <class-document-link 
                                class='text-primary-lt fw-8' 
                                link='<?php echo esc_attr($entry['name'])?>|property|read_resource'
                            >
                                read_resource
                            </class-document-link> property on this class, which points to  
                            a class responsible for handling the read operation. The arguments are passed to this class, which 
                            returns the results.
                        </p>
                    </li>
                    <li>
                        <class-document-link 
                            class='text-primary-lt fw-8 ' 
                            link='<?php echo esc_attr($entry['name'])?>|method|update'
                        >
                            update
                        </class-document-link>
                        <p>
                            Used to update data on a resource. This method looks at the 
                            <class-document-link 
                                class='text-primary-lt fw-8' 
                                link='<?php echo esc_attr($entry['name']) ?>|property|update_resource'
                            >
                                update_resource
                            </class-document-link> property on this class, which points to  
                            a class responsible for handling the update operation. The arguments are passed to this class, which 
                            returns the results.
                        </p>
                    </li>
                    <li>
                        <class-document-link 
                            class='text-primary-lt fw-8' 
                            link='<?php echo esc_attr($entry['name']) ?>|method|delete'
                        >
                            delete
                        </class-document-link>
                        <p>
                            Used to delete a resource.
                        </p>
                    </li>
                </ul>
                <h1>Permission Checks</h1>
                <p>
                    Each <b>CRUD</b> action has a corresponding permission check that's called inside the action
                    to ensure that it has a valid resource, and that the user has permission to perform the action. If 
                    the permission check fails, it will not perform the action and instead will return an <class-document-link class='text-primary-lt fw-8' link='pockets|method|error'>error</class-document-link>.
                </p>
                <ul>
                    <li>
                        <class-document-link 
                            class='text-primary-lt fw-8 ' 
                            link='<?php echo esc_attr($entry['name']) ?>|method|canCreate'
                        >
                            canCreate
                        </class-document-link>
                    </li>
                    <li>
                        <class-document-link 
                            class='text-primary-lt fw-8' 
                            link='<?php echo esc_attr($entry['name']) ?>|method|canRead'
                        >
                            canRead
                        </class-document-link>
                    </li>
                    <li>
                        <class-document-link 
                            class='text-primary-lt fw-8 ' 
                            link='<?php echo esc_attr($entry['name']) ?>|method|canUpdate'
                        >
                            canUpdate
                        </class-document-link>
                    </li>
                    <li>
                        <class-document-link 
                            class='text-primary-lt fw-8 ' 
                            link='<?php echo esc_attr($entry['name'])?>|method|canDelete'
                        >
                            canDelete
                        </class-document-link>
                    </li>
                </ul>
                <h1>How to use</h1>
                <p>
                    <b>CRUD</b> actions can be called server side, client side or as a <b>REST Request</b>. A call is comprised of five parts:
                </p>
                <ul>
                    <li>
                        <span class='fw-8 text-primary-lt '>$model</span>
                        <p>
                            The <class-document-link 
                                class='text-primary-lt fw-8 ' 
                                link='<?php echo esc_attr($entry['name']) ?>|property|model_name'
                            >
                                model
                            </class-document-link>
                             the call is for. For this <b>CRUD</b> model it would be<span class='fw-8 text-primary-dk'> <?php echo esc_html($model_name) ?></span>.
                        </p>
                    </li>
                    <li>
                        <span class='fw-8 text-primary-lt '>$init</span>
                        <p>A single argument used to get the resource the action will be performed on.
                            This is handled by the 
                            <class-document-link 
                                class='text-primary-lt fw-8' 
                                link='<?php echo esc_attr($entry['name']) ?>|property|get_resource'
                            >
                                    get_resource
                                </class-document-link> 
                            class that transforms the argument into a resource or an
                            <class-document-link class='text-primary-lt fw-8' link='pockets|method|error'>error</class-document-link>.
                        </p>
                    </li>
                    <li>
                        <span class='fw-8 text-primary-lt '>$action</span>
                        <p>The <span class='fw-8 text-primary-lt'>create/read/update/delete</span> action to perform on the resource.</p>
                    </li>
                    <li>
                        <span class='fw-8 text-primary-lt '>$input</span>
                        <p>
                            Used by all four actions. This is an optional argument for the <span class='fw-8 text-primary-lt '>delete</span> action.
                        </p>
                    </li>
                    <li>
                        <span class='fw-8 text-primary-lt '>$output</span>
                        <p>
                            An optional argument that is used by the 
                            <span class='fw-8 text-primary-lt'>create</span> and <span class='fw-8 text-primary-lt'>update</span> 
                            actions. 
                            Once the <span class='fw-8 text-primary-lt'>create/update</span> action is performed, this will be passed to the 
                            <span class='fw-8 text-primary-lt'>read</span> action and used for the return value of the operation. 
                        </p>
                    </li>
                </ul>
                <span class='fw-8'>Javascript</span>
                <pockets-ux-code-block class='fw-4 fs-18' lang='javascript' code='<?php echo $example_code['vue'] // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- sanitized earlier ?>' />
                <span class='fw-8'>PHP</span>
                <pockets-ux-code-block class='fw-4 fs-18' lang='php' code='<?php echo $example_code['php'] // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- sanitized earlier ?>' />
                <span class='fw-8'>REST Request</span>
                <?php echo $this->template_rest_help_text() // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- sanitized earlier ?>
                <pockets-ux-code-block class='fw-4 fs-18' language='PHP' code='<?php echo $example_code['rest'] // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- sanitized earlier ?>' />
                
            </div>
        <?php return ob_get_clean(); 
    }

    function template_property_model_name( array $entry) : array {
        
        $code = $this->template_example_code( [
            'vue' => [
                '{action}' => 'some_crud_action',
                '{model}' => $this->model_name,
                '{args}' => '$args',
                '{init}' => '$init'
            ],
            'php' => [
                '{action}' => "some_crud_action",
                '{model}' => $this->model_name,
                '{args}' => '$args',
                '{init}' => '$init',
                '{input}' => '$input',
                '{output}' => '$output',
            ],
            'rest' => [
                '{action}' => "create|read|update|delete",
                '{model}' => $this->model_name,
                '{args}' => '$args',
                '{init}' => '$init',
                '{input}' => '$input',
                '{output}' => '$output',
            ]
        ] );
        
        ob_start(); ?>
            <div class='grid columns-1 gap-2'>
                <p>
                    This is a unique ID that is used to call this <b>CRUD</b> model.
                    When a <b>CRUD</b> model is registered, this is the value that is used to add it to the list of registered models.
                </p>
                <b>
                    In Javascript
                </b>
                <pockets-ux-code-block class='fw-4 fs-18' language='javascript' code='<?php echo $code['vue'] // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- sanitized earlier ?>' />
                <b>
                    In PHP
                </b>
                <pockets-ux-code-block class='fw-4 fs-18' language='php' code='<?php echo $code['php'] // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped --sanitized earlier ?>' />
                <b>
                    REST Request
                </b>
                <?php echo $this->template_rest_help_text() // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- sanitized earlier ?>
                <pockets-ux-code-block class='fw-4 fs-18' language='php' code='<?php echo $code['rest'] // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- sanitized earlier ?>' />
            </div>
        <?php return $this->addTag( $entry, 'class-document-html', ob_get_clean() ); 
    }

    function template_crud_model_actions( array $entry ) : array {
        
        $resource_property = match($entry['name']){
            'read' => [
                "link" => "{$this->data['info']['name']}|property|read_resource",
                'text' => "read_resource class"
            ],
            'update' => [
                "link" => "{$this->data['info']['name']}|property|update_resource",
                'text' => "update_resource class"
            ],
            default => [
                "link" => "{$this->data['info']['name']}|method|{$entry['name']}",
                'text' => "{$entry['name']} method"
            ]
        };

        $args = $entry['args'];

        $arg_count = is_array( $args  ) ? count( $args  ) : 0;

        $args = match( $arg_count ) {
            1 => strtr('${input}', [ '{input}' => $args[0]['name'] ] ),
            2 => strtr('${input}, ${output}', [ '{input}' => $args[0]['name'], '{output}' => $args[1]['name'] ] ),
            default => "",
        };

        $code = $this->template_example_code( [
            'vue' => [
                '{action}' => $entry['name'],
                '{model}' => $this->model_name,
                '{args}' => $args,
                '{init}' => '$init'
            ],
            'php' => [
                '{action}' => $entry['name'],
                '{model}' => $this->model_name,
                '{args}' => $args,
                '{init}' => '$init'
            ],
            'rest' => [
                '{action}' => $entry['name'],
                '{model}' => $this->model_name, 
                '{init}' => '$init',
                '{input}' => '$input',
                '{output}' => '$output'
            ]
        ] );

        ob_start(); ?>
            <div class='grid columns-1 gap-2'>
                <p>
                    This is the <b>CRUD</b> models
                    <span class='text-primary-lt fw-8'>
                        <?php echo esc_html($entry['name']) ?> 
                    </span>
                    action.
                </p>
                <p>
                    It can be used server side, client side or as a <b>REST Request</b> to interact with a <b>CRUD</b> model resource. It takes the arguments
                    provided, and passes them to the 
                    <class-document-link 
                        class='text-primary-lt fw-8' 
                        link='<?php echo esc_attr($resource_property['link']) ?>'>
                        <?php echo wp_kses_post($resource_property['text']) ?>
                    </class-document-link> for handling, which returns the results.
                </p>
                <span class='fw-8'>
                    Javascript
                </span>
                <pockets-ux-code-block class='fw-4 fs-18' language='javascript' code='<?php echo $code['vue'] // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- sanitized earlier?>'/>
                <span class='fw-8'>
                    PHP
                </span>
                <pockets-ux-code-block class='fw-4 fs-18' language='php' code='<?php echo $code['php'] // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- sanitized earlier?>' />
                <b>
                    REST Request
                </b>
                <?php echo $this->template_rest_help_text() // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- sanitized earlier ?>
                <pockets-ux-code-block class='fw-4 fs-18' language='php' code='<?php echo $code['rest'] // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- sanitized earlier ?>' />
            </div>
        <?php return $this->addTag( $entry, 'class-document-html', ob_get_clean() ); 
    }

    function template_crud_model_resource_property(array $entry) : array {

        $text = match($entry['name']) {
            'read_resource' => "It is used internally by the <b>CRUD</b> model to perform <b class='text-primary-lt'>read</b> actions.", 
            'update_resource' => "It is used internally by the <b>CRUD</b> model to perform <b class='text-primary-lt'>update</b> actions.", 
            'get_resource' => "It is used internally by the <b>CRUD</b> model to get the resource required for actions.",
            default => ""
        };

        $link = implode('|', [
            $entry['value'],
            'method'
        ]);

        ob_start(); ?>
            <p class='fw-6'>
                This is the <b>CRUD</b> models 
                <class-document-link 
                    class='text-primary-lt fw-8' 
                    link='<?php echo esc_attr($link) ?>'>
                    <?php echo esc_html($entry['name']) ?> 
                </class-document-link>
                class.
                <?php echo wp_kses_post( $text ) ?>
            </p>
        <?php return $this->addTag( $entry, 'class-document-html', ob_get_clean() ); 
    }

    function template_crud_model_permissions( array $entry ) : array {
        
        $action = match( $entry['name'] ){
            'canCreate' => 'create',
            'canRead' => 'read',
            'canUpdate' => 'update',
            'canDelete' => 'delete',
            default => ""
        };

        $link = implode('|', [
            $this->data['info']['name'],
            'method',
            $action
        ]);

        ob_start(); ?>
            <p>
                This is a permission check. It is used to check if a user can perform this <b>CRUD</b> models 
                <class-document-link 
                    class='text-primary-lt fw-8' 
                    link='<?php echo esc_attr($link) ?>'
                >
                    <?php echo esc_html($action) ?> 
                </class-document-link>
                action. It will return a <code>boolean</code> and if true, this <b>CRUD</b> models 
                <class-document-link 
                    class='text-primary-lt fw-8' 
                    link='<?php echo esc_attr($link) ?>'
                >

                    <?php echo esc_html($action); ?>
                </class-document-link> 
                action will be performed.
            </p>
        <?php return $this->addTag( $entry, 'class-document-html', ob_get_clean() ); 
    }
 
}
