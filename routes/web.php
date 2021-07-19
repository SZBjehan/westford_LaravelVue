<?php

use Illuminate\Support\Facades\Route;

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


Route::get('/{any}', function () {
    return view('post');
})->where('any', '.*');


Route::get('/post', [postController::class,'index']);
Route::post('/posts', [postController::class,'store']);
Route::get('/post/{id}', [postController::class,'show']);
Route::put('/post/{id}', [postController::class,'update']);
Route::delete('/post/{id}', [postController::class,'destroy']);


