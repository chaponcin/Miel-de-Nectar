<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // Drop the unwanted singular table
        Schema::dropIfExists('commande_produits');
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // Nothing to do here
    }
};
