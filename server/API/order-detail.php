<?php
session_start();
header('Access-Control-Allow-Origin: *');

require_once '../database/dbhelper.php';
require_once '../utils/utility.php';

$_POST = json_decode(file_get_contents('php://input'), true);
$action = getPost('action');
switch ($action) {
    case 'list':
        listOrderDetail();
        break;
    case 'add':
        addOrderDetail();
        break;
    case 'edit':
        editOrderDetail();
        break;
    case 'delete':
        deleteOrderDetail();
        break;
}

function listOrderDetail()
{
    $orderId = getPost('order_id');

    $sql = "select Order_Details.*, Product.title, Product.thumbnail from Order_Details left join Product on Product.id = Order_Details.product_id where Order_Details.order_id = $orderId";
    $result = executeResult($sql);
   
        $res = [
            "status" => 1,
            "msg" => "success!!!",
            "orderList" => $result,
        ];

    echo json_encode($res);
}

function addOrderDetail()
{
    if (!empty($_POST)) {
        $orderId = getPost('order_id');
        $product_id = getPost('product_id');
        $num = getPost('num');
        $totalMoney = getPost('total_money');

        $sql = "update order_details set product_id = $product_id num = $num total_money = $totalMoney where order_id = $order_id";
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

function deleteOrderDetail()
{
    $id = getPost('id');
    if ($id != '') {
        $sql = "delete from Order_details where id = $id";
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