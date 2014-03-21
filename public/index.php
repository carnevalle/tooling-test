<?php

require '../vendor/autoload.php';

$app = new \Slim\Slim(array(
    'debug' => true,
    'templates.path' => '../app/views',
));

$app->get('/test', function() use ($app) {
    $app->render('test.html');
});

$app->get('/hello/:name', function ($name) {
    echo "Hello, $name";
});

$app->get('/', function () {
    echo "HELLO WORLD";
});

$app->run();