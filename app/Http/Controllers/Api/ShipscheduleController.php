<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Shipschedule;

class ShipscheduleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Shipschedule::latest()->paginate(10);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        //return  $request->all();
        $this->validate($request, [
            'vessel_name' => 'required|string|max:191',
            'voy_no' => 'required|string|max:191',
            'vessel_type' => 'required|string|max:191',

        ]);

        return Shipschedule::create([
            'vessel_name' => $request['vessel_name'],
            'voyage_no' => $request['voy_no'],
            'vessel_type' => $request['vessel_type'],
            'rotation_no' => $request['rotation_no'],
            'arrival_status' => $request['arrival_status'],
            'arrival_date' => $request['arrival_date'],
            'departure_status' => $request['departure_status'],
            'departure_date' => $request['departure_date'],
            'eta' => $request['eta'],
            'liner' => $request['liner'],
            'invoice_status' => $request['invoice_status'],

        ]);

        // $request->all();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'vessel_name' => 'required|string|max:191',
            'voy_no' => 'required|string|max:191',
            'vessel_type' => 'required|string|max:191',

        ]);

        $shipschedule = Shipschedule::findOrFail($id);

        $shipschedule->update($request->all());
        return ['message' => 'succesfully updated'];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $shipschedule = Shipschedule::findOrFail($id);
        //delete the user

        $shipschedule->delete();

        return ['message' => 'succesfully deleted'];
    }
}
