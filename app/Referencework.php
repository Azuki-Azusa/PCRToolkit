<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Date;

class Referencework extends Model
{
    public function createReference($referenceWork)
    {
        $date = new Date();
        $referenceWork['date'] = date('m.d');
        $this->insert([
            'json' => json_encode($referenceWork, JSON_UNESCAPED_UNICODE),
            'date_id' => $date->getMaxId()
        ]);
        $data = array('errcode' => 0, 'errmsg' => 'success');
        return $data;
    }

    public function getReferences($date_id)
    {
        $referenceWorks = array();
        foreach($this->where('date_id', $date_id)->get() as $referenceWork) {
            $temp = json_decode($referenceWork->json);
            $temp->reference_id = $referenceWork->id;
            array_push($referenceWorks, $temp);
        }
        $data = array('errcode' => 0, 'errmsg' => 'success', 'references' => $referenceWorks);
        return $data;
    }

    public function removeReference($reference_id)
    {
        $this->destroy($reference_id);
        $data = array('errcode' => 0, 'errmsg' => 'success');
        return $data;
    }
}
