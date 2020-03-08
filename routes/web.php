<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/', 'Controller@homePage');

Route::get('/weigemen', function() {
    echo '有大事宣布';
});

Route::fallback(function () {
    $req = array('errcode' => 404, 'errmsg' => "Not found", 'data' => null);
    echo json_encode($req, JSON_UNESCAPED_UNICODE);
});
