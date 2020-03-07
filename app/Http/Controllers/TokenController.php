<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Token;

class TokenController extends Controller
{
    public function verify($token)
    {
        $tokenObject = new Token();
        $data = $tokenObject->verify($token);
        return $this->res($data);
    }
}
