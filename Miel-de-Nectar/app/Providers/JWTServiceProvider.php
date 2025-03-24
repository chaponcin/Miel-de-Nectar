<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Tymon\JWTAuth\Providers\LaravelServiceProvider;

class JWTServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->app->register(LaravelServiceProvider::class);
    }

    public function boot(): void
    {
        //
    }
}
