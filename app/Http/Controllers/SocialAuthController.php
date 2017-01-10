<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Http\Requests;
use App\SocialAccountService;
use Socialite; // socialite namespace
use JWTAuth;
class SocialAuthController extends Controller
{
    // redirect function
    public function redirect(){
        return Socialite::driver('facebook')->redirect();
    }
    // callback function
    public function callback(SocialAccountService $service){
        // when facebook call us a with token
        $user = $service->createOrGetUser(Socialite::driver('facebook')->user());
        $token = JWTAuth::fromUser($user);
//        dd($token);
        return response()->json(['token' => $token]);
//        return redirect()->to('http://localhost:8080?' . 'token=' . $token);
    }
}