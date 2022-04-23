<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{
    public function register(Request $request)
    {

        $this->validate($request, [
            'first_name' => 'required|string|max:191',
            'last_name' => 'required|string|max:191',
            'email' => 'required|string|email|max:191|unique:users',
            'password' => 'required|string|min:5',

        ]);

        return User::create([
            'first_name' => $request['first_name'],
            'last_name' => $request['last_name'],
            'type' => $request['type'],
            'photo' => $request['photo'],
            'email' => $request['email'],
            'password' => Hash::make($request['password']),


        ]);

        return ["message" => "saved"];
    }
}
