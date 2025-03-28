<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProduitController;
use App\Http\Controllers\CommandeController;
use Illuminate\Support\Facades\Artisan;


Route::post('login', [AuthController::class, 'login']);
Route::post('signup', [AuthController::class, 'signup']);

Route::group(["middleware" => ["auth:api"]], function(){
    Route::get('profile', [AuthController::class, 'profile']);
    Route::post('refresh', [AuthController::class, 'refresh']);
    Route::post('logout', [AuthController::class, 'logout']);
    Route::put('update',[UserController::class, 'update']);
    Route::delete('delete',[UserController::class, 'delete']);
});

