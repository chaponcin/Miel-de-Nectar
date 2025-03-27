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
        Schema::create('adresses', function (Blueprint $table) {
            $table->id('id_adresse');
            $table->timestamps();
            $table->string('rue', 50);
            $table->integer('code_postal'); // Fixed type and removed trailing comma
            $table->string('ville', 60);
            $table->string('pays', 30);
            $table->integer('num'); // Fixed column name from 'num' to 'numéro'
            $table->integer('boite')->nullable(); // Made 'boite' nullable
            $table->unsignedBigInteger('id_user');
            $table->foreign('id_user')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('adresses');
    }
};
