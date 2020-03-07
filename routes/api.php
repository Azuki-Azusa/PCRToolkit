<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/verify/{token}', 'TokenController@verify');

Route::get('/dates/{token}', 'DateController@getDates')->middleware('verifyToken');

Route::post('/createReference', 'ReferenceworkController@createReference')->middleware('verifyToken');
Route::get('/references/{token}/{date_id}', 'ReferenceworkController@getReferences')->middleware('verifyToken');
Route::post('/removeReference', 'ReferenceworkController@removeReference')->middleware('verifyToken');

Route::fallback(function () {
    $req = array('errcode' => 404, 'errmsg' => "Not found", 'data' => null);
    echo json_encode($req, JSON_UNESCAPED_UNICODE);
});
