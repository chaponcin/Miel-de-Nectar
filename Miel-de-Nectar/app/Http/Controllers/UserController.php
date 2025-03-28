<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class UserController extends Controller
{
    public function profile()      {
        $userData = auth()->user();

        return response()->json([
            "status" => true,
            "message" => "User data",
            "data" => $userData
        ], 200);
    }

    public function getUserById(Request $request, $id)
    {
        #Vérifier l'utilisateur avec le Baerer pour l'avoir faut que j'utilise la fonction profile pour avoir le Bear de l'user
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
