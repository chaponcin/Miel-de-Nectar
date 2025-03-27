<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CommandesProduit extends Model
{
    use HasFactory;

    protected $table = 'commandes_produits';

    protected $fillable = [
        'commande_id',
        'produit_id',
        'quantity',
        'price',
        // Add other columns as needed
    ];
}