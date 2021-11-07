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
        listCustomerContact();
        break;
    case 'add':
        addCustomerContact();
        break;
    case 'delete':
        deleteCustomerContact();
        break;
}

function listCustomerContact() {
$sql = 'SELECT * from customer_contact';
$result = executeResult($sql);
$res =[
    "status" => 1,
    "msg"=> "Success!!!",
    "customer_contactList"=> $result
];
echo json_encode($res);
}

function addCustomerContact() {
 if (!empty($_POST)) {
        $lastname = getPost('lastname');
        $firstname = getPost('firstname');
        $email = getPost("email");
        $phone_number = getPost("phone_number");

        $sql = "insert into customer_contact(lastname,firstname,email,phone_number) values ('$lastname','$firstname','$email', '$phone_number')";
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

function deleteCustomerContact() {
if (!empty($_POST)) {
        $id = getPost("id");

        $sql = "delete from customer_contact where id =$id";
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