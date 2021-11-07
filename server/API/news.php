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
        listNews();
        break;
    case 'add':
        addNews();
        break;
    case 'edit':
        editNews();
        break;
    case 'delete':
        deleteNews();
        break;
}

function listNews() {
$sql = 'SELECT * from news';
$result = executeResult($sql);
$res =[
    "status" => 1,
    "msg"=> "Success!!!",
    "newsList"=> $result
];
echo json_encode($res);
}

function addNews() {
 if (!empty($_POST)) {
        $title = getPost("title");
        $content = getPost("content");
        $thumbnail = getPost("thumbnail");
        $created_at = $updated_at = date('Y-m-d H:s:i');

        $sql = "insert into news(title, content, thumbnail, created_at, updated_at) values ('$title', '$content', '$thumbnail', '$created_at', '$updated_at')";
        execute($sql);

        $res = [
            "status" => 1,
            "msg" => "success!!!",
            "sql" => $sql
        ];
    } else {
        $res = [
            "status" => 2,
            "msg" => "failure!!!",
        ];
    }
    echo json_encode($res);
}

function editNews() {
 if (!empty($_POST)) {
        $id = getPost("id");
        $title = getPost("title");
        $content = getPost("content");
        $thumbnail = getPost("thumbnail");
        $updated_at = date('Y-m-d H:s:i');

        $sql = "update news set title='$title', content='$content', thumbnail='$thumbnail', updated_at='$updated_at' where id=$id";
        execute($sql);

        $res = [
            "status" => 1,
            "msg" => "success!!!",
            "sql" => $sql
        ];
    } else {
        $res = [
            "status" => 2,
            "msg" => "failure!!!",
        ];
    }
    echo json_encode($res);
}

function deleteNews() {
if (!empty($_POST)) {
        $id = getPost("id");

        $sql = "delete from news where id =$id";
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