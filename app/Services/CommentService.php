<?php


namespace App\Services;

use App\User;
use App\Comment;
use Illuminate\Support\Facades\Hash;

class CommentService
{
    public function comment($data)
    {
        $data['cfid'] = $data['user']->fid;
        $newComment = Comment::create($data);
        return Comment::select('comments.*', 'name')
            ->join('followers', 'followers.fid', 'comments.cfid')
            ->find($newComment->cid);
//        for ($i = 0; $i < 100; $i++) {
//            $data['title'] = "test title $i";
//            $data['content'] = "test content $i";
//            Comment::create($data);
//        }


    }

    public function showComment($data)
    {
        //array_key_exists("cid",$data)
        if (array_key_exists("cid", $data)) {
//             Comment::where('cid', '<', $data['cid'])
//                ->orderByDesc('cid')
//                ->take(20)
//                ->get();
            return Comment::select('comments.*', 'name')
                ->join('followers', 'followers.fid', 'comments.cfid')
                ->where('cid', '<', $data['cid'])
                ->orderByDesc('cid')
                ->take(20)
                ->get();
            //get(),first()都是抓資料，get()是陣列,first()只抓第一筆
        } else {
            return Comment::select('comments.*', 'name')
                ->join('followers', 'followers.fid', 'comments.cfid')
                ->orderByDesc('cid')
                ->take(20)
                ->get();
        }


    }

    public function inquireComment($data)
    {
        if (array_key_exists("cid", $data)) {
            return Comment::where('cid', $data['cid'])
                ->orderByDesc('cid')
                ->take(20)
                ->first();

            //get(),first()都是抓資料，get()是陣列,first()只抓第一筆
        } else {
            return '該留言簿不存在';
        }

    }

    public function editComment($data)
    {
        $comment = Comment::find($data['cid']);
        if ($comment) {
            if ($comment->cfid == $data['user']->fid) {

                $comment->update(['title' => $data['title'], 'content' => $data['content']]);
                return '留言修改成功';

            } else {
                return '你不能編輯此留言';
            }
        } else
            return '無此留言';


    }

    public function deleteComment($data)
    {
        $comment = Comment::find($data['cid']);
        if ($comment) {
            if ($comment->cfid == $data['user']->fid) {

                $comment->delete();
                return '留言刪除成功';

            } else {
                return '你不能刪除此留言';
            }
        } else
            return '無此留言';


    }


}
