<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Passport\HasApiTokens;
use Illuminate\Notifications\Notifiable;


class User extends Authenticatable

{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory;
    use HasApiTokens;
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'id',
        'name',
        'email',
        'role',
        'password',
    ];

    public function avis()
    {
        return $this->hasMany(Avis::class, 'id_user');
    }

    public function commandes()
    {
        return $this->hasMany(Commande::class, 'id_user');
    }

    public function livraisons()
    {
        return $this->hasMany(Livraison::class, 'id_user');
    }

    public function refreshTokens()
    {
        return $this->hasMany(RefreshToken::class, 'id_user');
    }
}

