<?php

namespace App\Core;

class Router{
    protected $routes = [
        'GET' => [],
        'POST' => []
    ];

    public function get($routeName, $path){ //routeName è l'URI, path è il file controller
        $this->routes['GET'][$routeName] = $path;
    }
/*"add get route, add post route". I really don't think it's even necessary to make the distinction HERE
since the forms on the actual views are what handles this stuff. It's just a label as of now really*/
    public function post($routeName, $path){
        $this->routes['POST'][$routeName] = $path;
    }

    public function direct($uri, $type){//type is get or post
        if(array_key_exists($uri, $this->routes[$type])){
            
            return $this->callAction(
                ...explode('@', $this->routes[$type][$uri])
            );
        }
        throw new Exception("There's no route for the given URI.");
    }

    protected function callAction($controller, $action){
        $controller = "App\\Controllers\\{$controller}";
        $controller = new $controller;

        if(!method_exists($controller, $action)){
            throw new Exception(
                "$controller has no action $action."
            );
        }

        return $controller->$action();
    }
}