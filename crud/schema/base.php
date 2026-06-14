<?php 
namespace pockets\crud\schema;
trait base {

    static function init(...$args){
        return new static(...$args);
    }

    final static function type_mapper(string $type) {
        return match($type) {
            'array', 'object', 'string', 'integer', 'null', 'boolean' => $type,
            'int' => "integer",
            'bool' => "boolean",
            default => 'invalid-type'
        };
    }

    final static function refPath( string $path){
        $path = trim($path, '/\\');
        return str_replace("\\", "/", "/{$path}/");
    }

    final static function getSchemaAttribute( ?array $attributes = [], $fallback = null ) { 
        return $attributes['pockets\crud\schema\attribute'] ?? $fallback;
    }

}