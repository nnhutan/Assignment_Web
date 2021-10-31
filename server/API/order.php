<?php
session_start();
header('Access-Control-Allow-Origin: *');

require_once '../database/dbhelper.php';
require_once '../utils/utility.php';

$_POST = json_decode(file_get_contents('php://input'), true);
$action = getPost('action');
switch ($action) {
    case 'list':
        listOrder();
        break;
    case 'add':
        addOrder();
        break;
    case 'edit':
        editOrder();
        break;
    case 'delete':
        deleteOrder();
        break;
}

function listOrder()
{
    $sql = "select * from Orders order by status asc, order_date desc";
    $result = executeResult($sql);
    if (!empty($result)) {
        $res = [
            "status" => 1,
            "msg" => "success!!!",
            "orderList" => $result,
        ];
    } else {
        $res = [
            "status" => 2,
            "msg" => "failure!!!",
            "orderList" => [],
        ];
    }
    echo json_encode($res);
}

function addOrder()
{
    if (!empty($_POST)) {
        $user_id = getPost('user_id');
        $note = getPost('note');
        $order_date = date("Y-m-d H:i:s");
        $status = getPost('status');
        $total_money = getPost('total_money');

        $sql = "insert into Orders(user_id, note, order_date,status,total_money) values ('$user_id', '$note', '$order_date', '$status', '$total_money')";
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

function editOrder()
{
    if (!empty($_POST)) {
        $id = getPost('id');
        $status = getPost('status');

        $sql = "update orders set status = $status where id = $id";
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

function deleteOrder()
{
    $id = getPost('id');
    if ($id != '') {
        $sql = "delete from Orders where id = $id";
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