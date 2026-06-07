<?php 
namespace pockets\crud\models\images;

/**
    Accepts same arguments that posts/get_resource accepts.
    @class-document-link WP_Query
*/
#[ \pockets\crud\schema\attribute( [ '$ref' => '/posts/get_resource/' ] ) ]
class get extends \pockets\crud\models\posts\get {
}
