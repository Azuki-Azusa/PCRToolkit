<?php

namespace App;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Model;

class Date extends Model
{
    public function getMonthDates()
    {

        $dates = array();
        foreach($this->all() as $date) {
            $temp = array(
                'date_id' => $date->id,
                'date' => $date->date
            );
            array_push($dates, $temp);
        }
        $data = array('errcode' => 0, 'errmsg' => 'success', 'dates' => $dates);
        return $data;
    }

    public function getMaxId()
    {
        return $this->max('id');
    }
}
