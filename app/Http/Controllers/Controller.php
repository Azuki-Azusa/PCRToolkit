<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\View;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    // 路由存在
    public function res($data) {
        return array('errcode' => 200, 'errmsg' => null, 'data' => $data);
    }

    public function homePage()
    {
        View::addExtension('html', 'php');
        return view()->file(public_path().'/index.html');
    }
}
