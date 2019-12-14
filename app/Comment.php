<?php

namespace App;

use Illuminate\Database\Eloquent\Model;


class Comment extends Model
{

    protected $table = 'comments';
    protected $primaryKey = 'cid';
    const UPDATED_AT = null;

    protected $fillable = [
        'cfid', 'title', 'content',
    ];
}
