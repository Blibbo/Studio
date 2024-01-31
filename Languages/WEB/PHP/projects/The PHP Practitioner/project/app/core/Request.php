<?php

namespace App\Core;

//this file helps figure out what kind of request has been sent
class Request{
    public static function uri(){//tells you the uri (the name you chose for the route)
        return trim(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH), '/');
    }
    public static function method(){//POST or GET
        return $_SERVER['REQUEST_METHOD'];
    }
}