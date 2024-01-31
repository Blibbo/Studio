<?php
/*%_GET è la lista di coppie key-value contenuta nei parametri dell'URL
EX: localhost?key=value&key1=value1

ECHO PUò STAMPARE CODICE HTML E VERRà COMPILATO
il terrore
*/

die(phpinfo());

require 'vendor/autoload.php';
require 'app/core/functions.php';
//dumper(PDO::getAvailableDrivers());

$query = require 'app/core/bootstrap.php';

use App\Core\{Request, Router};

$router = new Router;

require 'app/routes.php';


$uri = Request::uri();
$method = Request::method();
$router->direct($uri, $method);//basically prints out the page you're trying to get to. A controller in this case
//the controller will then delegate the visual thingys to the views