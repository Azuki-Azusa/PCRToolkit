<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Token extends Model
{
    public function verify($token)
    {
        if ($this->verifyToken($token)) {
            $data = array('errcode' => 0, 'errmsg' => 'success');
        }
        else {
            $data = array('errcode' => 401, 'errmsg' => 'token error');
        }
        return $data;
    }

    public function verifyToken($token)
    {
        return $token == $this->find(1)->token;
    }
}
