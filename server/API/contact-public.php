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
        listContact();
        break;
    case 'add':
        addContact();
        break;
    case 'edit':
        editContact();
        break;
    case 'delete':
        deleteContact();
        break;
}

function listContact() {
$sql = 'SELECT * from contact_public';
$result = executeResult($sql);
$res =[
    "status" => 1,
    "msg"=> "Success!!!",
    "contactList"=> $result
];
echo json_encode($res);
}

function addContact() {
 if (!empty($_POST)) {
        $id = getPost("id");
        $type = getPost("type");
        $content = getPost("content");
        $created_at = $updated_at = date('Y-m-d H:s:i');

        $sql = "insert into contact_public(type, content, created_at, updated_at) values ('$type', '$content', '$created_at', '$updated_at')";
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

function editContact() {
 if (!empty($_POST)) {
        $id = getPost("id");
        $type = getPost("type");
        $content = getPost("content");
        $updated_at = date('Y-m-d H:s:i');

        $sql = "update contact_public set type='$type', content='$content', updated_at='$updated_at' where id=$id";
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

function deleteContact() {
if (!empty($_POST)) {
        $id = getPost("id");

        $sql = "delete from contact_public where id =$id";
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