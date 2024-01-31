<?php
    $coordinatesFile = 'coordinates.json';

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        
 

        //json decode returns associative array
        $associativeArrayFromClient = json_decode(file_get_contents('php://input'), true);
        $newId = $associativeArrayFromClient['id'];

        //object or null
        $coordObj = null;
        if (file_exists($coordinatesFile)) {
            $coordObj = json_decode(file_get_contents($coordinatesFile));

            if(!isset($coordObj)){
                $coordObj = [
                    $newId => [
                        'x' => $associativeArrayFromClient['x'],
                        'y' => $associativeArrayFromClient['y']
                    ]
                ];
            }else{
                $coordObj->$newId = [
                    'x' => $associativeArrayFromClient['x'],
                    'y' => $associativeArrayFromClient['y']
                ];
            }


        } else {
            $coordObj = [
                $newId => [
                    'x' => $associativeArrayFromClient['x'],
                    'y' => $associativeArrayFromClient['y']
                ]
            ];
        }

        file_put_contents($coordinatesFile, json_encode($coordObj));

    }else{
        $coordinates = file_get_contents($coordinatesFile);
        header('Content-Type: application/json');
        echo $coordinates;
    }