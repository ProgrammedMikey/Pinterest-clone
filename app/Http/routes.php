<?php

use Illuminate\Http\Request;
use App\User;
use Tymon\JWTAuth\Facades\JWTAuth;


Route::get('/', function (){
    return view('welcome');
});


Route::group(['prefix' => 'api'], function(){
    Route::get('user/{id}', 'PostController@view_post');
    
    Route::resource('posts', 'PostController');

    Route::get('userinfo', function () {
        return JWTAuth::parseToken()->authenticate();
    });

    Route::post('register',[
        'uses' => 'AuthenticateController@register'
    ]);

    Route::post('login',[
        'uses' => 'AuthenticateController@authenticate'
    ]);
    
});

Route::get('/redirect', 'SocialAuthController@redirect');
Route::get('/callback', 'SocialAuthController@callback');



