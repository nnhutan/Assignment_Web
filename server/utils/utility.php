<?php
//Bao gom cac ham ho tro

// Loai bo cac ki tu dac biet cua cau lenh
function fixSqlInject($sql)
{
    $sql = str_replace('\\', '\\\\', $sql);
    $sql = str_replace('\'', '\\\'', $sql);
    return $sql;
}

// Lay du lieu tu bien $_GET
function getGet($key)
{
    $value = '';
    if (isset($_GET[$key])) {
        $value = $_GET[$key];
        $value = fixSqlInject($value);
    }
    return trim($value);
}

// Lay du lieu tu bien $_POST
function getPost($key)
{
    $value = '';
    if (isset($_POST[$key])) {
        $value = $_POST[$key];
        $value = fixSqlInject($value);
    }
    return trim($value);
}

// Lay du lieu tu bien $_REQUEST
function getRequest($key)
{
    $value = '';
    if (isset($_REQUEST[$key])) {
        $value = $_REQUEST[$key];
        $value = fixSqlInject($value);
    }
    return trim($value);
}

// Lay du lieu tu bien $_COOKIE
function getCookie($key)
{
    $value = '';
    if (isset($_COOKIE[$key])) {
        $value = $_COOKIE[$key];
        $value = fixSqlInject($value);
    }
    return trim($value);
}

// Ma hoa mat khau hai lop MD5
function getSecurityMD5($pwd)
{
    return md5(md5($pwd) . PRIVATE_KEY);
}

// Khi dang nhap thanh cong -> setCookie(tokens) va luu thong tin user vao bien $_SESSION
// Ham nay giup lay thong tin user khi da dang nhap thanh cong
// Neu tra ve null -> not login
function getUserToken()
{
    if (isset($_SESSION['user'])) {
        return $_SESSION['user'];
    }
    $token = getCookie('token');
    $sql = "select * from Tokens where token = '$token'";
    $item = executeResult($sql, true);
    if ($item != null) {
        $userId = $item['user_id'];
        $sql = "select * from User where id = '$userId'";
        $item = executeResult($sql, true);
        if ($item != null) {
            $_SESSION['user'] = $item;
            return $item;
        }
    }

    return null;
}