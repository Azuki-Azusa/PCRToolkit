<?php

namespace App\Http\Middleware;

use Closure;
use App\Token;

class VerifyToken
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $tokenObj = new Token();
        if ($request->token) {
            if (!$tokenObj->verifyToken($request->token)) {
                $data = array('errcode' => 401, 'errmsg' => 'token error1');
                return response()->json($data);
            }
        }
        else {
            $data = array('errcode' => 401, 'errmsg' => 'token error2');
            return response()->json($data);
        }
        return $next($request);
    }
}
