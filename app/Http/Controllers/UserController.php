<?php

namespace App\Http\Controllers;

use App\Services\UserService;
use Illuminate\Http\Request;
use Auth;
use Tymon\JWTAuth\Facades\JWTAuth;
use Validator;

class UserController extends Controller
{
    public function signUp(Request $request)
    {
        $postData = $request->all();
        $objValidator = Validator::make(
            $postData,
            [
                'faccount' => [
                    'required',
                    'between:6,20',
                    'regex:/^(([a-z]+[0-9]+)|([0-9]+[a-z]+))[a-z0-9]*$/i',
                    'unique:followers'
                ],
                'pwd' => [
                    'required',
                    'between:6,20',
                    // 'regex:/^(([a-z]+[0-9]+)|([0-9]+[a-z]+))[a-z0-9]*$/i'

                ],
                'name' => [
                    'required',
                    'max:20',
                    //  'unique:users'
                ],
                'address' => [
                    'sometimes',
                    'max:100',
                    //  'unique:users'
                ],
                'mphone' => [
                    'required',
                    'max:20',
                    //  'unique:users'
                ],
                /*'sex' => [
                    'required',
                    'between:0,2',
                    'integer'
                ],*/
            ],
            [
                'faccount.required' => '請輸入帳號',
                'faccount.between' => '帳號需介於6-20字元',
                'faccount.regex' => '帳號需包含英文數字',
                'faccount.unique' => '帳號已存在',
                'pwd.required' => '請輸入密碼',
                'pwd.between' => '密碼需介於 6-20 字元',
                //'password.regex' => '密碼需包含英文數字',
                'name.required' => '請輸入暱稱',
                'name.max' => '暱稱不可超過 20 字元'
                // 'name.unique' => '暱稱已存在',
                // 'sex.*' => '性別錯誤'
            ]
        );
        if ($objValidator->fails())
            return response()->json($objValidator->errors()->all(), 400);
        //抓出request全部資料
        $userService = new UserService();
        $userService->signUp($postData);
        return response()->json("註冊成功 ", 200);
    }

    public function logIn(Request $request)
    {
        $postData = $request->all();
        $objValidator = Validator::make(
            $postData,
            [
                'faccount' => [
                    'required',
                    //'between:6,20',
                    //'regex:/^(([a-z]+[0-9]+)|([0-9]+[a-z]+))[a-z0-9]*$/i',
                    //'unique:followers'
                ],
                'pwd' => [
                    'required',
                    //'between:6,20',
                    // 'regex:/^(([a-z]+[0-9]+)|([0-9]+[a-z]+))[a-z0-9]*$/i'

                ],
            ],
            [
                'faccount.required' => '請輸入帳號',
                'pwd.required' => '請輸入密碼',
            ]
        );
        if ($objValidator->fails())
            return response()->json($objValidator->errors()->all(), 400);
        //抓出request全部資料
        $userService = new UserService();
        $result = $userService->logIn($postData);
        if (!is_string($result)) {
//            return response()->json($request->only(['faccount','pwd']), 200);
            $token = JWTAuth::fromUser($result);
            //token
            return response()->json($token, 200);
        } else
            return response()->json([$result], 400);

    }

    public function getUserData(Request $request)
    {
        $userData = $request->input('user');
        return response()->json($userData, 200);
    }
}
