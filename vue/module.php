<?php

namespace pockets\vue;

#[\AllowDynamicProperties]
class module {
	
	use \pockets\traits\init;
	
	function __construct(){ 
		
		meta_keys::init();
		load_assets::init();

	}
 
}