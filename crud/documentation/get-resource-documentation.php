<?php
namespace pockets\crud\documentation;
use \pockets\utils\get_class_documentation;

/** 
    documents crud models get_resource class    
*/
class get_resource_documentation extends get_class_documentation {

    use templates;

    function __construct( public string $model_name, public array $model ){}

    function template_class_info(array $class_info) : string {

        $by_example = <<<_
        [
            "by" => "ID"
            ...other request info here
        ]
        _;   // a

        ob_start(); ?>
            <div class='grid columns-1 gap-2'>
                <p>
                    This class is responsible for translating a crud models <code>init</code> argument into a corresponding resource that
                    the model uses for its various operations. It will look at the <code>type</code>of the argument given, and call a 
                    corresponding <code> request_using_{$type}</code> method on this class. For example if the type of the argument is an 
                    <code>array</code>, it will call the
                    <class-document-link class='fw-8 text-primary-lt' link='<?= $class_info['name'] ?>|method|request_using_array'>request_using_array</class-document-link> 
                    method of this class.
                </p>
                <p>
                    By default, arrays are handled by looking for a <code>by</code> parameter. If a <code>by</code> parameter is not 
                    provided in the argument, it will fall back to what is set on the 
                    <class-document-link class='fw-8 text-primary-lt' link='<?= $class_info['name'] ?>|property|default_array_by'>
                        default_array_by
                    </class-document-link> property of this class. For example:
                </p>
                <pockets-ux-code-block language='PHP' code='<?= $by_example ?>'/>
                <p>
                    This will map to a corresponding <code>array_by_{$by_argument}</code> method on this class. In this example
                    it would call <code>array_by_ID</code>. The method called will be given the <code>argument</code> and
                    is expected to return the resource using the data in the <code>argument</code> like this:
                </p>
                <pockets-ux-code-block language='PHP' code='return $some_value;'/>
                <p>
                    Or it can return an 
                    <class-document-link class='fw-8 text-primary-lt' link='pockets|method|error'>error</class-document-link>:
                </p>
                <pockets-ux-code-block code='return \pockets::error("error message");'/>
                <p>
                    Subsequent actions will validate the resource returned by this method, and run their logic based on if it's a 
                    valid resource or an error.
                </p>
            </div>
        <?php return ob_get_clean();
    }
 
    function template_request_using_method(array $method) : string {
        $type = str_replace("request_using_", '', $method['name']); 
        ob_start(); ?>
            <div class='grid columns-1 gap-2'>
                <p>
                    This method handles setting up the resource for this crud model. It handles requests of type <code><?= $type ?></code>.
                </p>
                <p>
                    See <class-document-link class='fw-8 text-primary-lt' link='<?= $this->data['info']['name'] ?>|class'>class info</class-document-link>  for more information.
                </p>
            </div>
        <?php return ob_get_clean(); 
    }
 
    function template_array_by_method(array $method) : string {
        $type = str_replace("array_by_", '', $method['name']); 

        $by_example = <<<_
        [
            "by" => "{$type}"
            ...other request info here
        ];
        _; 

        ob_start(); ?>
            <div class='grid columns-1 gap-2'>
                <p>
                    This method handles setting up the resource for this crud model. 
                    It handles requests when the type of argument is an <code>array</code> and a <code>by</code> parameter of <code><?= $type ?></code> is provided.
                </p>
                <pockets-ux-code-block language='PHP' code='<?= $by_example ?>'/>
                <p>
                    See <class-document-link class='fw-8 text-primary-lt' link='<?= $this->data['info']['name'] ?>|class'>class info</class-document-link>  for more information.
                </p>
            </div>
        <?php return ob_get_clean();
    }

    function template_default_array_by_property(array $property) : string {
        ob_start(); ?>
            <div class='grid columns-1 gap-2'>
                <p>
                    This property is used as a fallback for the <code>by</code> parameter for the 
                    <class-document-link class='fw-8 text-primary-lt' link='<?= $this->data['info']['name'] ?>|method|request_using_array'>request_using_array</class-document-link> 
                    
                    method when no <code>by</code> parameter is provided.
                </p>
                <p>
                    See <class-document-link class='fw-8 text-primary-lt' link='<?= $this->data['info']['name'] ?>|class'>class info</class-document-link>  for more information.
                </p>
            </div>
        <?php return ob_get_clean();
    }

    function document_class_info( \ReflectionClass $class) : array {

        $data = parent::document_class_info($class);
        
        $data = $this->addTag($data, 'class-document-html', $this->template_class_info($data));

        return $data;
    }

    function document_property( \ReflectionProperty $property ) : array {

        $data = parent::document_property($property);

        if( str_starts_with( haystack: $data['name'], needle: 'default_array_by') ) {
            $data = $this->addTag($data, 'class-document-html', $this->template_default_array_by_property($data) );
        }

        return $data; 

    }

    function document_method( \ReflectionMethod $method ) : array {

        $data = parent::document_method($method);

        if( str_starts_with( haystack: $data['name'], needle: 'request_using') ) {
            $data = $this->addTag($data, 'class-document-html', $this->template_request_using_method($data) );
        }

        if( str_starts_with( haystack: $data['name'], needle: 'array_by') ) {
            $data = $this->addTag($data, 'class-document-html', $this->template_array_by_method($data) );
        }

        $data = $this->template_validateResource($data);

        return $data;

    }
    
}
