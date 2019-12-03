<?php


namespace App\Services;

use App\User;
use Illuminate\Support\Facades\Hash;

class UserService
{
    public function signUp($data)
    {
        $data['pwd'] = bcrypt($data['pwd']);
        //加密密碼
        User::create($data);

    }

    public function logIn($data)
    {
        $user = User::where('faccount', $data['faccount'])->first();
        // $user = User::select('*')->where('faccount', $data['faccount'])->first();
        //select('*')可省略
        if ($user) {
            //有此用戶
            if (Hash::check($data['pwd'], $user->pwd))
                return $user;
            else
                return "密碼錯誤";
        }

        return '無此用戶';


    }




}
