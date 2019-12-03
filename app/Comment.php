<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class Comment extends Authenticatable
{
    use Notifiable;
    protected $table = 'comments';
    protected $primaryKey = 'cid';
    const UPDATED_AT = null;

    protected $fillable = [
        'cfid', 'title', 'content',
    ];
}
