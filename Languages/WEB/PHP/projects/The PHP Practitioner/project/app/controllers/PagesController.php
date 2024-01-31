<?php

namespace App\Controllers;
use App\Core\App;

class PagesController{
    public function home(){
        $storie = App::get('database')->selectAll('everythingantonio');
        return view('index', ['storie' => $storie]);
    }

    public function risposta(){
        dumper($_REQUEST);
    }
}