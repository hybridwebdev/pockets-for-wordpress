<?php
namespace pockets\crud\reducers;
class validator_reducer {
	
	function __construct(
		public mixed $data
	) {}

	private function prepareData(){
		$this->data = is_array( $this->data ) ? $this->data : [];
		return $this;
	}

	static function init(...$args){
		return ( new static( ...$args ) )->prepareData();
	}

	function sanitize( array $sanitizer ){
		$this->data = \pockets\crud\reducer::applyIterator( $this->data, $sanitizer );
		return $this;
	}

	function whitelist( array $whitelist ){
		$this->data = wp_parse_args( $this->data, $whitelist );
		return $this;
	}

	function getData() {
		return $this->data;
	}

	static function enforceType ( string | array $type, mixed $value, mixed $fallback){

		if( !is_array( $type ) ) {
			$type = [ $type ];
		}

		if( !in_array( getType( $value ), $type ) ) {
			return $fallback;
		}

		return $value;

	}

}
