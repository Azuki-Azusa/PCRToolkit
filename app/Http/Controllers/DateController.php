<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Date;

class DateController extends Controller
{
    public function getDates($token)
    {
        $date = new Date();
        $data = $date->getMonthDates();
        return $this->res($data);
    }
}
