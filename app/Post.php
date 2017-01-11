<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $table = "posts";

    protected  $fillable = ['id','title','body', 'user_id', 'user_name'];

    public function user() { return $this->belongsTo('App\User'); }

    public function scopeDeneme($query)
    {
        return $query->orderBy('id','DESC')->get();
    }
    
}
