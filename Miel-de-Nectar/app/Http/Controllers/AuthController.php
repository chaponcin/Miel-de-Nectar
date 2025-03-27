<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

class AuthController extends Controller
{

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function register(Request $request)
    {
        $data = $request->validate([
            "name" => "required|string",
            "email" => "required|email|unique:users,email",
            "password" => "required|confirmed"
        ]);

        User::create($data);

        return response()->json([
            "status" => true,
            "message" => "User Registered succssfully"
        ])->status(201);

    }



    public function profile()   {
        $userData = auth()->user();

        return response()->json([
            "status" => true,
            "message" => "User data",
            "data" => $userData
        ])->status(200);
    }



    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');
        if(empty($credentials)) return response()->json(['error'=> "Email and the password are required"]);
        try {
            if (!$token = JWTAuth::attempt($credentials)) return response()->json(['error' => 'invalid credentials'])->status(400);
        } catch (JWTException $e) {
            return response()->json(['error' => 'could not create token'])->status(500);
        }

        return response()->json(compact('token'))->status(201);
    }

    public function logout()
    {
        JWTAuth::invalidate(JWTAuth::getToken());
        return response()->json(['message' => 'Successfully logged out'])->status(200);
    }

    public function refresh()
    {
        $token = JWTAuth::refresh(JWTAuth::getToken());
        return response()->json(compact('token'))->status(201);
    }
}
