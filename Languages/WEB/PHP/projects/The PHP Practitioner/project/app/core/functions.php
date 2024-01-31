<?php

function dumper($var){
    echo '<pre>';
    var_dump($var);
    echo '</pre>';
}

function view($name, $data=[]){
    //$data is an associative array, by extracting it you get all your variables.
    extract($data);

    return require "app/views/$name.view.php";
}

function redirect($path){
    header("Location: /$path");
}