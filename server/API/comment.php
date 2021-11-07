<?php
session_start();
header('Access-Control-Allow-Origin:  http://localhost:3000');
header("Access-Control-Allow-Headers: Content-Type");

require_once '../database/dbhelper.php';
require_once '../utils/utility.php';

$_POST = json_decode(file_get_contents('php://input'), true);
$action = getPost('action');
switch ($action) {
    case 'list':
        listComment();
        break;
    case 'add':
        addComment();
        break;
    case 'edit':
        editComment();
        break;
    case 'delete':
        deleteComment();
        break;
}

function listComment()
{
    $sql = "select comment.*, user.fullname, product.title from comment, user, product where comment.user_id = user.id and comment.product_id = product.id";
    $result = executeResult($sql);
    if (!empty($result)) {
        $res = [
            "status" => 1,
            "msg" => "success!!!",
            "commentList" => $result,
        ];
    } else {
        $res = [
            "status" => 2,
            "msg" => "failure!!!",
            "commentList" => [],
        ];
    }
    echo json_encode($res);
}

function addComment()
{
    if (!empty($_POST)) {
        $userId = getPost("user_id");
        $productID = getPost("product_id");
        $content = getPost("content");

        $sql = "insert into comment(user_id, product_id, content) values ('$userId','$productID', '$content')";
        execute($sql);

        $res = [
            "status" => 1,
            "msg" => "success!!!",
        ];
    } else {
        $res = [
            "status" => 2,
            "msg" => "failure!!!",
        ];
    }
    echo json_encode($res);
}

function editComment()
{
    if (!empty($_POST)) {
        $id = getPost("id");
        $content = getPost("content");

        $sql = "update comment set content = '$content' where id = $id";
        execute($sql);

        $res = [
            "status" => 1,
            "msg" => "success!!!",
        ];
    } else {
        $res = [
            "status" => 2,
            "msg" => "failure!!!",
        ];
    }
    echo json_encode($res);
}

function deleteComment()
{
    $id = getPost('id');
    if ($id != '') {
        $sql = "delete from comment where id = $id";
        execute($sql);
        $res = [
            "status" => 1,
            "msg" => "success!!!",
        ];
    } else {
        $res = [
            "status" => 2,
            "msg" => "failure!!!",
        ];
    }
    echo json_encode($res);
}