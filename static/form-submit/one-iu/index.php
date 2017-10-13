<?php
    header('Content-Type: application/json');

    // load autoloader
    $autoloader = __DIR__.'/../../../vendor/autoload.php';
    if(!file_exists($autoloader)) {
        // abort if the autoload file is missing (don't forget to `composer install`!)
        http_response_code('500');
        die('Failed loading autoloader - ensure dependencies are installed!');
    }
    require($autoloader);


    /* validate parameters */
    if(empty($_GET['q'])) {
        http_response_code(400);
        echo json_encode([
            'status' => 'error',
            'message' => 'A query string is required'
        ]);
        die();
    }

    /* make a request to the One.IU API */
    use GuzzleHttp\Client;
    $client = new Client([
        'base_uri' => "https://one.iu.edu/rest-api/",
        'timeout' => 15
    ]);

    $size = $_GET['size'] ? $_GET['size'] : 5;
    $query = $_GET['q'];

    $response = $client->get("tasks?size=$size&q=$query");

    if($response && $response->getStatusCode()==200) {
        echo $response->getBody();
    } else {
        http_response_code(500);
        echo json_encode([
            'status' => 'error',
            'message' => 'Error retrieving results from One.IU'
        ]);
        die();
    }
