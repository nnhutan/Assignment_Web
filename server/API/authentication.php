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
    case 'login':
        login();
        break;
    case 'logout':
        logout();
        break;
    case 'register':
        register();
        break;
    case 'list':
        userList();
        break;
    case 'delete':
        deleteUser();
        break;
    case 'edit':
        editUser();
        break;
    case 'add':
        addUser();
        break;
        case 'role':
            getRole();
            break;
}

function getRole() {
      $user = getUserToken();
    if ($user == null) {
        $res = [
            "status" => -1,
            "msg" => "Not login!!!",
            "userList" => [],
        ];
        echo json_encode($res);
        return;
    }
    $sql = "select * from role";
    $result = executeResult($sql);
     $res = [
        "status" => 1,
        "msg" => "success!!!",
        "roleList" => $result,
    ];
    echo json_encode($res); 
}

function login()
{
    $email = $pwd = '';
    $user = getUserToken();
    if ($user != null) {
        $res = [
            "status" => 1,
            "msg" => "Login successfully!!!",
            "user" => $user,
        ];
    } else if (!empty($_POST)) {
        $email = getPost('email');
        $pwd = getPost('password');
        $pwd = getSecurityMD5($pwd);

        $sql = "select * from User where email = '$email' and password = '$pwd'";
        $userExist = executeResult($sql, true);
        if ($userExist == null) {
            $res = [
                "status" => 2,
                "msg" => "Login failed!!!",
            ];
        } else {
            //login successfully
            $token = getSecurityMD5($userExist['email'] . time());

            // Ho tro viec duy tri login
            setcookie('token', $token, time() + 7 * 24 * 60 * 60, '/');
            $_COOKIE['token'] = $token;

            $_SESSION['user'] = $userExist;

            $created_at = date('Y-m-d H:i:s');
            $userId = $userExist['id'];
            $sql = "insert into tokens (user_id, token, created_at) values ('$userId', '$token', '$created_at')";
            execute($sql);

            $res = [
                "status" => 1,
                "msg" => "Login successfully!!!",
                "user" => $userExist,
            ];
        }
    } else {
        $res = [
            "status" => 2,
            "msg" => "Login failed!!!",
        ];
    }
    echo json_encode($res);
    return;
}

function logout()
{
    $user = getUserToken();
    if ($user != null) {
        $token = getCookie('token');
        $id = $user['id'];
        $sql = "delete from Tokens where user_id = '$id' and token = '$token'";
        execute($sql);
        setcookie('token', '', time() - 100, '/');
    }

    $res = [
        "status" => 1,
        "msg" => "Logout successfully!!!",
    ];
    echo json_encode($res);
    session_destroy();
}

function register()
{
    $fullname = $email = $phone = $address = '';

    if (!empty($_POST)) {
        $fullname = getPost('fullname');
        $email = getPost('email');
        $pwd = getPost('password');
        $phone = getPost('phone');
        $address = getPost('address');
        if (empty($fullname) || empty($email) || empty($pwd) || strlen($pwd) < 6) {
            $res = [
                "status" => 3,
                "msg" => "Register failed!!!",
            ];
        } else {
            $userExist = executeResult("select * from User where email = '$email'", true);
            if ($userExist != null) {
                $res = [
                    "status" => 2,
                    "msg" => "Register failed!!! Email exists!!!",
                ];
            } else {
                $created_at = $updated_at = date('Y-m-d H:i:s');
                $pwd = getSecurityMD5($pwd);

                $sql="select * from user where role_id = 1";
                $result = executeResult($sql);
                if(empty($result)){
                      $sql = "insert into User (fullname, email, password, role_id, phone_number, address, created_at, updated_at) values ('$fullname', '$email', '$pwd', 1, '$phone', '$address', '$created_at', '$updated_at')";
                }
                else{
                        $sql = "insert into User (fullname, email, password, role_id, phone_number, address, created_at, updated_at) values ('$fullname', '$email', '$pwd', 2, '$phone', '$address', '$created_at', '$updated_at')";
                }

            
                execute($sql);

                $res = [
                    "status" => 1,
                    "msg" => "Register successfully!!!",
                ];
            }
        }
    } else {
        $res = [
            "status" => 2,
            "msg" => "Register failed!!!",
        ];
    }

    echo json_encode($res);
}

function userList()
{
    $user = getUserToken();
    if ($user == null) {
        $res = [
            "status" => -1,
            "msg" => "Not login!!!",
            "userList" => [],
        ];
        echo json_encode($res);
        return;
    }
    $sql = "select User.*, Role.name as role_name from User left join Role on User.role_id = Role.id";
    $data = executeResult($sql);

    $res = [
        "status" => 1,
        "msg" => "success!!!",
        "userList" => $data,
    ];
    echo json_encode($res);
}

function deleteUser()
{
    $user = getUserToken();
    if ($user == null) {
        $res = [
            "status" => -1,
            "msg" => "Not login!!!",
        ];
        echo json_encode($res);
        return;
    }
    $id = getPost('id');
    if ($id != '') {
        $sql = "delete from User where id = $id";
        execute($sql);
        $res = [
            "status" => 1,
            "msg" => "success!!!",
            "id" => $id
        ];
    } else {
        $res = [
            "status" => 2,
            "msg" => "failure!!!",
        ];
    }
    echo json_encode($res);
}

function editUser()
{
    $user = getUserToken();
    if ($user == null) {
        $res = [
            "status" => -1,
            "msg" => "Not login!!!",
        ];
        echo json_encode($res);
        return;
    }
    if (!empty($_POST)) {
        $id = getPost('id');
        $fullname = getPost('fullname');
        $email = getPost('email');
        $phone_number = getPost('phone_number');
        $address = getPost('address');
        $password = getPost('password');
        if ($password != '') {
            $password = getSecurityMD5($password);
        }

        $created_at = $updated_at = date("Y-m-d H:i:s");

        $role_id = getPost('role_id');

        $sql = "select * from User where email = '$email' and id <> $id";
        $userItem = executeResult($sql, true);

        if ($userItem != null) {
            $res = [
                "status" => 2,
                "msg" => "Email exists!!!",
            ];
        } else {
            if ($password != '') {
                $sql = "update User set fullname = '$fullname', email = '$email', phone_number = '$phone_number', address = '$address', password = '$password', updated_at = '$updated_at', role_id = $role_id where id = $id";
            } else {
                $sql = "update User set fullname = '$fullname', email = '$email', phone_number = '$phone_number', address = '$address', updated_at = '$updated_at', role_id = $role_id where id = $id";
            }
            execute($sql);

            if(isset($_SESSION['user'])){
                if($_SESSION['user']['id']==$id) {
                    $_SESSION['user'] = executeResult("select * from User where id = '$id'", true);
                }
            }

            $res = [
                "status" => 1,
                "msg" => "Edit success!!!",
                "sql" => $sql
            ];
        }
    }
    echo json_encode($res);
}

function addUser()
{
    $user = getUserToken();
    if ($user == null) {
        $res = [
            "status" => -1,
            "msg" => "Not login!!!",
        ];
        echo json_encode($res);
        return;
    }
    if (!empty($_POST)) {
        $id = getPost('id');
        $fullname = getPost('fullname');
        $email = getPost('email');
        $phone_number = getPost('phone_number');
        $address = getPost('address');
        $password = getPost('password');
        if ($password != '') {
            $password = getSecurityMD5($password);
        }

        $created_at = $updated_at = date("Y-m-d H:i:s");

        $role_id = getPost('role_id');

        $sql = "select * from User where email = '$email'";
        $userItem = executeResult($sql, true);
        //insert
        if ($userItem == null) {
            //insert
            $sql = "insert into User(fullname, email, phone_number, address, password, role_id, created_at, updated_at) values ('$fullname', '$email', '$phone_number', '$address', '$password', '$role_id', '$created_at', '$updated_at')";
            execute($sql);
            $res = [
                "status" => 1,
                "msg" => "Add success!!!",
            ];
        } else {
            //Tai khoan da ton tai -> failed
            $res = [
                "status" => 2,
                "msg" => "Email exists!!!",
            ];
        }
    }
    echo json_encode($res);
}