<?php
session_start();
header('Access-Control-Allow-Origin:  http://localhost:3000');
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Credentials: true");
require_once '../database/dbhelper.php';
require_once '../utils/utility.php';

$_POST = json_decode(file_get_contents('php://input'), true);
$action = getPost('action');
switch ($action) {
    case 'list':
        listCategory();
        break;
    case 'add':
        addCategory();
        break;
    case 'edit':
        editCategory();
        break;
    case 'delete':
        deleteCategory();
        break;
}

function listCategory()
{
    $sql = "select * from category";
    $result = executeResult($sql);
    if (!empty($result)) {
        $res = [
            "status" => 1,
            "msg" => "success!!!",
            "categoryList" => $result,
        ];
    } else {
        $res = [
            "status" => 2,
            "msg" => "failure!!!",
            "categoryList" => [],
        ];
    }
    echo json_encode($res);
}

function addCategory()
{
    if (!empty($_POST)) {
        $id = getPost("id");
        $name = getPost("name");

        $sql = "insert into Category(name) values ('$name')";
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

function editCategory()
{
    if (!empty($_POST)) {
        $id = getPost("id");
        $name = getPost("name");

        $sql = "update Category set name = '$name' where id = $id";
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

function deleteCategory()
{
    $id = getPost('id');
    if ($id != '') {
        $sql = "select count(*) as total from Product where category_id = $id";
        $data = executeResult($sql, true);
        $total = $data['total'];
        if ($total > 0) {
            $res = [
                "status" => 2,
                "msg" => "failure!!! Danh muc chua san pham",
            ];
        } else {
            $sql = "delete from Category where id = $id";
            execute($sql);
            $res = [
                "status" => 1,
                "msg" => "success!!!",
            ];
        }
    } else {
        $res = [
            "status" => 2,
            "msg" => "failure!!!",
        ];
    }
    echo json_encode($res);
}