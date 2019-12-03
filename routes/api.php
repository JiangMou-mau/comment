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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware' => 'cors'], function () {
    Route::group(['middleware' => 'jwtAuth'], function () {
        Route::get('getUserData', 'UserController@getUserData');
        Route::post('comment', 'CommentController@comment');
        Route::get('showComment', 'CommentController@showComment');
        Route::get('inquireComment', 'CommentController@inquireComment');
        Route::post('editComment', 'CommentController@editComment');
        Route::delete('deleteComment', 'CommentController@deleteComment');

    });
    Route::post('signUp', 'UserController@signUp');
    Route::post('logIn', 'UserController@logIn');
});

