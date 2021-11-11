<?php
	require_once '../database/dbhelper.php';
	require '../utils/rest_api.php';
	//header('Access-Control-Allow-Origin: ','http://localhost:3000');
	//header("Access-Control-Allow-Headers: Content-Type");
	//header("Access-Control-Allow-Credentials: true");
	$_POST = json_decode(file_get_contents('php://input'), true);
	class com extends rest_api{
		protected function listComment()
		{
			$sql = "select comment.*, user.fullname, product.title from comment, user, product where comment.user_id = user.id and comment.product_id = product.id";
			$result = executeResult($sql);
			if (!empty($result)) {
				$res = [
					"status" => 1,
					"msg" => "success!!!",
					"commentList" => $result,
				];
				$this->response(200,$res);
			} else {
				$res = [
					"status" => 2,
					"msg" => "failure!!! Have no comment",
					"commentList" => [],
				];
				$this->response(404,"no comment");
			}
			//echo json_encode($res);
		}

		protected function addComment()
		{
			if (!empty($_POST)) {
				$userId =$this-> getPost("user_id");
				$productID =$this-> getPost("product_id");
				$content =$this-> getPost("content");

				$sql = "insert into comment(user_id, product_id, content) values ('$userId','$productID', '$content')";
				execute($sql);

				$res = [
					"status" => 1,
					"msg" => "success!!!",
				];
				$this->response(200,"success");
			} else {
				$res = [
					"status" => 2,
					"msg" => "failure!!!",
				];
				$this->response(500,"failure");
			}
			//echo json_encode($res);
		}

		protected function editComment()
		{
			if (!empty($_POST)) {
				$id =$this-> getPost("id");
				$content =$this-> getPost("content");

				$sql = "update comment set content = '$content' where id = $id";
				execute($sql);

				$res = [
					"status" => 1,
					"msg" => "success!!!",
				];
				$this->response(200,"success!");
			} else {
				$res = [
					"status" => 2,
					"msg" => "failure!!!",
				];
			$this-> response(404,"No entry");
			}
			//echo json_encode($res);
		}

		protected function deleteComment()
		{
			$id =$this-> getPost('id');
			if ($id != '') {
				$sql = "delete from comment where id = $id";
				execute($sql);
				$res = [
					"status" => 1,
					"msg" => "success!!!",
				];
				$this->response(200,"success");
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
$newCom= new com();