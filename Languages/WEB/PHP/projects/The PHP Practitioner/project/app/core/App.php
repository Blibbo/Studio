<?php

namespace App\Core;

class App{
    protected static $registry = [];//contains [THE STUFFS]. Such as the config array and the querybuilder and stuff

    public static function bind($key, $value){
        static::$registry[$key] = $value;
    }

    public static function get($key){
        if(!array_key_exists($key, static::$registry)){
            throw new Exception("Didn't find any $key.");
        }
        return static::$registry[$key];
    }
}