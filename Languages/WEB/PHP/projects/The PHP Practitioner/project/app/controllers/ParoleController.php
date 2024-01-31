<?php

namespace App\Controllers;
use App\Core\App;

class ParoleController{
    public function antonio(){
        return view('antonio');
    }

    public function inserire(){
        App::get('database')->insertData('parole', [
            'parola' => $_POST['parola'],//if you put attributes that aren't database columns it'll say "qualcosa è andato storto"
        ]);
        //dumper(App::get('database')->selectAll('parole'));
        redirect('antonio');
    }
}