<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Referencework;

class ReferenceworkController extends Controller
{
    public function createReference(Request $request)
    {
        $referenceWork = $request->referenceWork;
        $referenceworkObject = new Referencework();
        $data = $referenceworkObject->createReference($referenceWork);
        return $this->res($data);
    }

    public function getReferences(Request $request)
    {
        $date_id = $request->date_id;
        $referenceWork = new Referencework();
        $data = $referenceWork->getReferences($date_id);
        return $this->res($data);
    }

    public function removeReference(Request $request)
    {
        $reference_id = $request->reference_id;
        $referenceWork = new Referencework();
        $data = $referenceWork->removeReference($reference_id);
        return $this->res($data);
    }
}
