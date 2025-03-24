<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    public function getUserById(Request $request, $id)
    {
        #Vérifier l'utilisateur avec le Baerer
        #try
        #Faire la Query pour delete l'User
        #catch retourne l'erreur "message" => $message "status" => false
        #return un json "message" => "User deleted" "status" => true
        try {

        } catch (\Throwable $th) {
            //throw $th;
        }
    }

    public function updateUserById(Request $request, $id)
    {
                #Vérifier l'utilisateur avec le Baerer
        #try
        #Faire la Query pour delete l'User
        #catch retourne l'erreur "message" => $message "status" => false
        #return un json "message" => "User deleted" "status" => true
    }
    public function deleteUserById(Request $request, $id)
    {
        #Vérifier l'utilisateur avec le Baerer
        #try
        #Faire la Query pour delete l'User
        #catch retourne l'erreur "message" => $message "status" => false
        #return un json "message" => "User deleted" "status" => true
    }
}
