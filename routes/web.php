<?php


Auth::routes(); 
//rute autentikasi

Route::get('/{any}', 'AppController@index')->where('any', '.*');
