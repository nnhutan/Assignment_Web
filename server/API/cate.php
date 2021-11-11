<?php
	require_once '../database/dbhelper.php';
	require '../utils/rest_api.php';
	//header('Access-Control-Allow-Origin: ','http://localhost:3000');
	//header("Access-Control-Allow-Headers: Content-Type");
	//header("Access-Control-Allow-Credentials: true");
	$_POST = json_decode(file_get_contents('php://input'), true);
	class cate extends rest_api{

		protected function listCategory()
		{
			$sql = "select * from category";
			$result = executeResult($sql);
			if (!empty($result)) {
				$res = [
					"status" => 1,
					"msg" => "success!!!",
					"categoryList" => $result,
				];
				$this->response(200,$result);
			} else {
				$res = [
					"status" => 2,
					"msg" => "failure!!!",
					"categoryList" => [],
				];
				$this->response(404,"No list");
			}
			
			//echo json_encode($res);
		}

		protected function addCategory()
		{
			if (!empty($_POST)) {
				$id =$this-> getPost("id");
				$name =$this-> getPost("name");

				$sql = "insert into Category(name) values ('$name')";
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
				$this->response(500,"failed");
			}
			//echo json_encode($res);
		}

		protected function editCategory()
		{
			if (!empty($_POST)) {
				$id =$this-> getPost("id");
				$name =$this-> getPost("name");

				$sql = "update Category set name = '$name' where id = $id";
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
				$this->response(500,"failed");
			}
			//echo json_encode($res);
		}

		protected function deleteCategory()
		{
			$id =$this-> getPost('id');
			if ($id != '') {
				$sql = "select count(*) as total from Product where category_id = $id";
				$data = executeResult($sql, true);
				$total = $data['total'];
				if ($total > 0) {
					$res = [
						"status" => 2,
						"msg" => "failure!!! Danh muc chua san pham",
					];
					$this->response(423,"Failed");
				} else {
					$sql = "delete from Category where id = $id";
					execute($sql);
					$res = [
						"status" => 1,
						"msg" => "success!!!",
					];
					$this->response(200,"success!");
				}
			} else {
				$res = [
					"status" => 2,
					"msg" => "failure!!!",
				];
				$this->response(404,"not exist");
			}
			//echo json_encode($res);
		}
	}
$cates=new cate();