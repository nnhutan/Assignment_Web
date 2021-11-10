<?php
	require_once '../database/dbhelper.php';
	require '../utils/rest_api.php';
	//header('Access-Control-Allow-Origin: ','http://localhost:3000');
	//header("Access-Control-Allow-Headers: Content-Type");
	//header("Access-Control-Allow-Credentials: true");
	$_POST = json_decode(file_get_contents('php://input'), true);
	class cust extends rest_api{
		function listCustomerContact() {
		$sql = 'SELECT * from customer_contact';
		$result = executeResult($sql);
		$res =[
			"status" => 1,
			"msg"=> "Success!!!",
			"customer_contactList"=> $result
		];
		$this->response(200,$res);
		//echo json_encode($res);
		}

		function addCustomerContact() {
		if (!empty($_POST)) {
				$lastname =$this-> getPost('lastname');
				$firstname =$this-> getPost('firstname');
				$email =$this-> getPost("email");
				$phone_number =$this-> getPost("phone_number");

				$sql = "insert into customer_contact(lastname,firstname,email,phone_number) values ('$lastname','$firstname','$email', '$phone_number')";
				execute($sql);

				$res = [
					"status" => 1,
					"msg" => "success!!!",
				];
				$this->response(200,$res);
			} else {
				$res = [
					"status" => 2,
					"msg" => "failure!!!",
				];
				$this->response(404,"No entry");
			}
			//echo json_encode($res);
		}

		function deleteCustomerContact() {
		if (!empty($_POST)) {
				$id =$this-> getPost("id");

				$sql = "delete from customer_contact where id =$id";
				execute($sql);

				$res = [
					"status" => 1,
					"msg" => "success!!!",
				];
				$this->response(200,$res);
			} else {
				$res = [
					"status" => 2,
					"msg" => "failure!!!",
				];
				$this->response(404,"no entry");
			}
			//echo json_encode($res);
		}
	}
$newCustomer=new cust();