<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Shipschedule extends Model
{
    protected $fillable = [
        'vessel_name', 'voyage_no', 'vessel_type', 'rotation_no', 'arrival_status', 'arrival_date', 'departure_status', 'departure_date', 'eta', 'liner', 'invoice_status'
    ];
}
