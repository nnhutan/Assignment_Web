<?php
	require_once '../database/dbhelper.php';
	require '../utils/rest_api.php';
	//header('Access-Control-Allow-Origin: ','http://localhost:3000');
	//header("Access-Control-Allow-Headers: Content-Type");
	//header("Access-Control-Allow-Credentials: true");
	$_POST = json_decode(file_get_contents('php://input'), true);
	class newa extends rest_api{
		function listNews() {
		$sql = 'SELECT * from news';
		$result = executeResult($sql);
		$res =[
			"status" => 1,
			"msg"=> "Success!!!",
			"newsList"=> $result
		];
		$this->response(200,$res);
		//echo json_encode($res);
		}

		function addNews() {
		if (!empty($_POST)) {
				$title =$this-> getPost("title");
				$content =$this-> getPost("content");
				$thumbnail =$this-> getPost("thumbnail");
				$created_at = $updated_at = date('Y-m-d H:s:i');

				$sql = "insert into news(title, content, thumbnail, created_at, updated_at) values ('$title', '$content', '$thumbnail', '$created_at', '$updated_at')";
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

		function editNews() {
		if (!empty($_POST)) {
				$id =$this-> getPost("id");
				$title =$this-> getPost("title");
				$content =$this-> getPost("content");
				$thumbnail =$this-> getPost("thumbnail");
				$updated_at = date('Y-m-d H:s:i');

				$sql = "update news set title='$title', content='$content', thumbnail='$thumbnail', updated_at='$updated_at' where id=$id";
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

		function deleteNews() {
		if (!empty($_POST)) {
				$id =$this-> getPost("id");

				$sql = "delete from news where id =$id";
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
	}
$newaNews= new newa();