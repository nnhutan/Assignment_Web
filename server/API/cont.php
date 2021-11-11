<?php
	require_once '../database/dbhelper.php';
	require '../utils/rest_api.php';
	//header('Access-Control-Allow-Origin: ','http://localhost:3000');
	//header("Access-Control-Allow-Headers: Content-Type");
	//header("Access-Control-Allow-Credentials: true");
	$_POST = json_decode(file_get_contents('php://input'), true);
	class cont extends rest_api{
		function listContact() {

		$sql = 'SELECT * from contact_public';
		$result = executeResult($sql);
		$res =[
			"status" => 1,
			"msg"=> "Success!!!",
			"contactList"=> $result
		];
		$this->response(200,$res);
		}

		function addContact() {
		if (!empty($_POST)) {
				$id =$this-> getPost("id");
				$type =$this-> getPost("type");
				$content =$this-> getPost("content");
				$created_at = $updated_at = date('Y-m-d H:s:i');

				$sql = "insert into contact_public(type, content, created_at, updated_at) values ('$type', '$content', '$created_at', '$updated_at')";
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

		function editContact() {
		if (!empty($_POST)) {
				$id =$this-> getPost("id");
				$type =$this-> getPost("type");
				$content =$this-> getPost("content");
				$updated_at = date('Y-m-d H:s:i');

				$sql = "update contact_public set type='$type', content='$content', updated_at='$updated_at' where id=$id";
				execute($sql);

				$res = [
					"status" => 1,
					"msg" => "success!!!",
					"sql" => $sql
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

		function deleteContact() {
		if (!empty($_POST)) {
				$id =$this-> getPost("id");

				$sql = "delete from contact_public where id =$id";
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
$newContact=new cont();