<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Carbon\Carbon;
use App\Models\RefreshToken;
use Illuminate\Http\JsonResponse;

class RefreshTokensController extends Controller
{
    public static function storeRefreshToken($id_user)
    {
        $refreshToken = Str::random(60);

        DB::table('refresh_tokens')->updateOrInsert(
            ['id_user' => $id_user],
            [
                'token' =>  hash('sha256',$refreshToken),
                'expires_at' => now()->addDay(),
                'revoked' => false,
                'user_id' => $id_user,
            ]
        );

        return $refreshToken;
    }

    public function refreshToken(Request $request): JsonResponse
    {
        $request->validate([
            'refresh_token' => 'required|string',
        ]);

        $hashedToken = hash('sha256', $request->refresh_token);

        $refreshToken = RefreshToken::where('token', $hashedToken)->first();

        if (!$refreshToken || !$refreshToken->isValid()) {
            return response()->json(['message' => 'Token invalide ou expiré.'], 401);
        }

        $user = $refreshToken->user;

        $refreshToken->update(['revoked' => true]);

        $newToken = RefreshTokensController::storeRefreshToken($user->id);
        $accessToken = $user->createToken('access-token')->accessToken;

        return response()->json([
            'access_token' => $accessToken,
            'refresh_token' => $newToken['token'],
            'token_type' => 'Bearer',
            'expires_in' => 3600,
        ]);
    }
    public static function revokeUser($id_user)
    {
        DB::table('refresh_tokens')->where('user_id', $id_user)->update(['revoked' => true]);
    }
}
