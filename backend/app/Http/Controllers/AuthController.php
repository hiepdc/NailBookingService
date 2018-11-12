<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use Validator, Hash;

class AuthController extends Controller
{
    public $loginAfterSignUp = true;

    public function register(Request $request)
    {
        $credentials = $request->only('name', 'password');

        $rules = [
            'name' => 'required|max:255|unique:users',
            'password' => 'required|min:6|max:10'
        ];
        $validator = Validator::make($credentials, $rules);
        if ($validator->fails()) {
            return response()->json(['success' => false, 'error' => $validator->messages()]);
        }
        $name = $request->name;
        $password = $request->password;

        $user = User::create(['name' => $name, 'password' => Hash::make($password)]);
//        $verification_code = str_random(30); //Generate verification code
//        DB::table('users')->insert(['user_id'=>$user->id,'token'=>$verification_code]);
//        $subject = "Please verify your email address.";
//        Mail::send('email.verify', ['name' => $name, 'verification_code' => $verification_code],
//            function($mail) use ( $name, $subject){
//                $mail->from(getenv('FROM_EMAIL_ADDRESS'), "From User/Company Name Goes Here");
//                $mail->to($name);
//                $mail->subject($subject);
//            });
        return response()->json(['success' => true,
            'data' => $user,
            'message' => 'Thanks for signing up!']);
    }

    public function login(Request $request)
    {
        $credentials = $request->only('name', 'password');

        $rules = [
            'name' => 'required',
            'password' => 'required',
        ];
        $validator = Validator::make($credentials, $rules);
        if ($validator->fails()) {
            return response()->json(['success' => false, 'error' => $validator->messages()], 401);
        }

        //$credentials['is_verified'] = 1;

        try {
            // attempt to verify the credentials and create a token for the user
            if (!$token = JWTAuth::attempt($credentials)) {
                return response()->json(['success' => false, 'error' => 'Invalid Name or Password'], 404);
            }
        } catch (JWTException $e) {
            // something went wrong whilst attempting to encode the token
            return response()->json(['success' => false, 'error' => 'Failed to login, please try again.'], 500);
        }
        // all good so return the token
        return response()->json(['success' => true, 'data' => ['token' => $token]], 200);
    }

    /**
     * Log out
     * Invalidate the token, so user cannot use it anymore
     * They have to relogin to get a new token
     *
     * @param Request $request
     */
    public function logout(Request $request)
    {
        $this->validate($request, ['token' => 'required']);

        try {
            JWTAuth::invalidate($request->input('token'));
            return response()->json(['success' => true, 'message' => "You have successfully logged out."]);
        } catch (JWTException $e) {
            // something went wrong whilst attempting to encode the token
            return response()->json(['success' => false, 'error' => 'Failed to logout, please try again.'], 500);
        }
    }
//    public function register(RegisterAuthRequest $request)
//    {
//        $user = new User();
//        $user->name = $request->name;
//        $user->password = bcrypt($request->password);
//        $user->save();
//
//        if ($this->loginAfterSignUp) {
//            return $this->login($request);
//        }
//
//        return response()->json([
//            'success' => true,
//            'data' => $user
//        ], 200);
//    }
//
//    public function login(Request $request)
//    {
//        $input = $request->only('name', 'password');
//        $jwt_token = null;
//
//        if (!$jwt_token = JWTAuth::attempt($input)) {
//            return response()->json([
//                'success' => false,
//                'message' => 'Invalid Name or Password',
//            ], 401);
//        }
//
//        return response()->json([
//            'success' => true,
//            'token' => $jwt_token,
//        ]);
//    }

//    public function logout(Request $request)
//    {
//        $this->validate($request, [
//            'token' => 'required'
//        ]);
//
//        try {
//            JWTAuth::invalidate($request->token);
//
//            return response()->json([
//                'success' => true,
//                'message' => 'User logged out successfully'
//            ]);
//        } catch (JWTException $exception) {
//            return response()->json([
//                'success' => false,
//                'message' => 'Sorry, the user cannot be logged out'
//            ], 500);
//        }
//    }

    public function getAuthUser(Request $request)
    {
        $this->validate($request, [
            'token' => 'required'
        ]);

        $user = JWTAuth::authenticate($request->token);

        return response()->json(['user' => $user]);
    }
}