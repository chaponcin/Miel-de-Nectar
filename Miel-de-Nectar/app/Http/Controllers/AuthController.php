<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use App\Models\User;
use App\Http\Controllers\RefreshTokensController;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\JsonResponse;
use Laravel\Passport\Bridge\RefreshToken;

class AuthController extends Controller
{


    public function register(Request $request): JsonResponse
    {
        $data = $request->validate([
            'name' => 'required|min:2|max:60',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:6|confirmed'
        ]);

        $data['name'] = htmlspecialchars($data['name']);
        $data['email'] = htmlspecialchars($data['email']);
        $data['password'] = bcrypt(htmlspecialchars($data['password']));

        $user = User::create($data);
        $userData = (object) ['id' => $user->id, 'role' => $user->role];
        $accessToken = $userData->createToken('API Token')->accessToken;
        $refreshToken = RefreshTokensController::storeRefreshToken($user->id);
        return response()->json([
            '$accessToken' => $accessToken,
            '$refreshToken' => $refreshToken],
            201
        );
    }

    public function login(Request $request): JsonResponse
    {
        $data = $request->validate([
            'email' => 'required|email|unique:users',
            'password' => 'required|min:6|confirmed'
        ]);

        $data['email'] = htmlspecialchars($data['name']);
        $data['password'] = htmlspecialchars($data['password']);

        if (!Auth::attempt($data)) {
            return response()->json(['error_message' => 'Incorrect Details. Please try again'], 401);
        }

        $id = Auth::user()->id;
        $role = Auth::user()->role;
        $userData = (object) ['id' => $id, 'role' => $role];
        $accessToken = $userData->createToken('API Token')->accessToken;
        $refreshToken = RefreshTokensController::storeRefreshToken($id);
        return response()->json([
            '$accessToken' => $accessToken,
            '$refreshToken' => $refreshToken],
            201
        );
    }

    public function logout($id_user, Request $request){
        try {
            RefreshTokensController::revokeUser($id_user);
            return response()->json([
                'status' => true,
                'message' => "The user is log out"],
                201
            );
        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()],
                500
            );
        }
    }


}
