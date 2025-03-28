<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use App\Models\User;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');
        try {
            if (! $token = JWTAuth::attempt($credentials)) {
                return response()->json(['error' => 'invalid_credentials'], 400);
            }
        } catch (JWTException $e) {
            return response()->json(['error' => 'could not create token'], 500);
        }

        return response()->json(compact('token'), 201);
    }

    public function signup(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:60',
            'email' => 'required|string|email|max:60|unique:users',
            'password' => 'required|string|min:6',
        ]);
        try {
            $user = new User([
                'name' => $request->name,
                'email' => $request->email,
                'password' => bcrypt($request->password),
            ]);
            $user->save();
            $token = JWTAuth::fromUser($user);
        } catch (\Throwable $th) {
            return response()->json(['error' => $th]);
        }
        return response()->json([
            'user_id' => $user->id,
            'token' => $token
        ], 201);
    }


    public function logout()
    {
        JWTAuth::invalidate(JWTAuth::getToken());
        return response()->json(['message' => 'Successfully logged out'], 200);
    }

    public function refresh()
    {
        $token = JWTAuth::refresh(JWTAuth::getToken());
        return response()->json(compact('token'), 201);
    }
}
