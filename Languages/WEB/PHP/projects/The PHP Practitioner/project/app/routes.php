<?php

$router->get('', 'PagesController@home');
$router->post('risposta', 'PagesController@risposta');

$router->get('antonio', 'ParoleController@antonio');
$router->post('inserire', 'ParoleController@inserire');