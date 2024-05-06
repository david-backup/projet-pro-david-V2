<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use OpenApi\Annotations as OA;

/**
 * @OA\Info(
 *     title="API xxxx",
 *     version="1.0.0",
 *     description="Une description de votre API",
 *     @OA\Contact(
 *       email="support@votre-domaine.com",
 *       name="Support Technique",
 *       url="https://www.votre-domaine.com/contact"
 *     )
 *   )
 */

class AuthController extends Controller
{
    /**
     * @OA\Post(
     *     path="/api/login",
     *     summary="Se connecter",
     *     operationId="login",
     *     tags={"Authentification"},
     *     @OA\RequestBody(
     *         description="Informations d'identification nécessaires pour le login",
     *         required=true,
     *         @OA\JsonContent(
     *             required={"pseudo","password"},
     *             @OA\Property(property="pseudo", type="string", example="pseudo"),
     *             @OA\Property(property="password", type="string", format="password", example="password")
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Succès",
     *         @OA\JsonContent(
     *             @OA\Property(property="success", type="boolean", example=true),
     *             @OA\Property(property="token", type="string", example="token"),
     *             @OA\Property(property="idUser", type="integer", example=1),
     *         )
     *     ),
     *     @OA\Response(
     *         response=401,
     *         description="Non autorisé"
     *     )
     * )
     */
    public function login(Request $request)
    {
        $request->validate([
            'pseudo' => 'required',
            'password' => 'required',
        ]);

        $user = user::where('pseudo', $request->pseudo)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json(['success' => false, 'message' => 'Unauthorized'], 401);
        }

        $token = $user->createToken('authToken')->plainTextToken;

        // Mettez à jour les champs lors de la connexion
        $user->dateLastConnexion = now();
        $user->deconnexion = null;
        $user->token = explode('|', $token)[1];
        $user->statutConnexion = 1;
        $user->save();

        return response()->json([
            'success' => true,
            'pseudo' => $user->pseudo,
            'token' => explode('|', $token)[1], // Renvoie seulement la partie token sans l'ID
            'idUser' => $user->idUser
        ]);
    }
}
