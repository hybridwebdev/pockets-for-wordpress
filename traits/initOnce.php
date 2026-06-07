<?php
namespace pockets\traits;

/**
    Provides a singleton pattern where __contruct is run once and then
    a cached version of the instance is returned. 
*/
trait initOnce {

    use singleton;

}