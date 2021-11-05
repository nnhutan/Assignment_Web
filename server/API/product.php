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
        listProduct();
        break;
    case 'add':
        addProduct();
        break;
    case 'edit':
        editProduct();
        break;
    case 'delete':
        deleteProduct();
        break;
}

function listProduct()
{
    $sql = 'select Product.*, Category.name as category_name from Product left join Category on Product.category_id = Category.id';
    $result = executeResult($sql);
    if (!empty($result)) {
        $res = [
            "status" => 1,
            "msg" => "success!!!",
            "productList" => $result,
        ];
    } else {
        $res = [
            "status" => 2,
            "msg" => "failure!!!",
            "productList" => [],
        ];
    }
    echo json_encode($res);
}

function addProduct()
{
    if (!empty($_POST)) {
        $id = getPost('id');
        $title = getPost('title');
        $price = getPost('price');
        $discount = getPost('discount');
        $thumbnail = getPost('thumbnail');
        $description = getPost('description');
        $category_id = getPost('category_id');
        $created_at = $updated_at = date('Y-m-d H:s:i');

        $sql = "insert into Product(thumbnail, title, price, discount, description, updated_at, created_at, category_id) values ('$thumbnail', '$title', '$price', '$discount', '$description', '$updated_at', '$created_at', $category_id)";
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

function editProduct()
{
    if (!empty($_POST)) {
        $id = getPost('id');
        $title = getPost('title');
        $price = getPost('price');
        $discount = getPost('discount');
        $thumbnail = getPost('thumbnail');
        $description = getPost('description');
        $category_id = getPost('category_id');
        $created_at = $updated_at = date('Y-m-d H:s:i');

        if ($thumbnail != '') {
            $sql = "update Product set thumbnail = '$thumbnail', title = '$title', price = $price, discount = $discount, description = '$description', updated_at = '$updated_at', category_id = '$category_id' where id = $id";
        } else {
            $sql = "update Product set title = '$title', price = $price, discount = $discount, description = '$description', updated_at = '$updated_at', category_id = '$category_id' where id = $id";
        }

        execute($sql);

        $res = [
            "status" => 1,
            "msg" => "success!!!",
            "sql"=> $sql
        ];
    } else {
        $res = [
            "status" => 2,
            "msg" => "failure!!!",
        ];
    }
    echo json_encode($res);
}

function deleteProduct()
{
    $id = getPost('id');
    if ($id != '') {
        $sql = "delete from product where id = $id";
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