<?php

use App\Core\App;

//APP viene definito un DI. Dependency Injection Container. A dic. Yeah.
App::bind('config', $config = require 'config.php'); //storing the config into a container, associated with a key called 'config'
//$config = App::get('config');
//dumper(App::get('config'));
//die();

App::bind('database', new QueryBuilder(
    Connection::make($config['database'])
));