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

Route::get('/', function () {
    return \File::get(public_path() . '/index.html');
});

//if (!request()->ajax()) {
//    Route::combine([
//        '/{vue?}',
//        '/signup/{vue?}',
//        '/message/{vue?}',
//        '/login/{vue?}',
//    ], function () {
//        return \File::get(public_path() . '/index.html');
//    });
//}