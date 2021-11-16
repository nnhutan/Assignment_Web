<?php
	require_once '../database/dbhelper.php';
	require '../utils/rest_api.php';
	//header('Access-Control-Allow-Origin: ','http://localhost:3000');
	//header("Access-Control-Allow-Headers: Content-Type");
	//header("Access-Control-Allow-Credentials: true");
	$_POST = json_decode(file_get_contents('php://input'), true);
	class product extends rest_api{
		function listProduct()
		{
			$sql = 'select Product.*, Category.name as category_name, Category.id as category_id from Product left join Category on Product.category_id = Category.id';
			$result = executeResult($sql);
			if (!empty($result)) {
				$res = [
					"status" => 1,
					"msg" => "success!!!",
					"productList" => $result,
				];
				$this->response(200,$res);
			} else {
				$res = [
					"status" => 2,
					"msg" => "failure!!!",
					"productList" => [],
				];
				$this->response(404,"No list");
			}
			//echo json_encode($res);
		}

		function addProduct()
		{
			if (!empty($_POST)) {
				$id =$this-> getPost('id');
				$title =$this-> getPost('title');
				$price =$this-> getPost('price');
				$discount =$this-> getPost('discount');
				$thumbnail =$this-> getPost('thumbnail');
				$description =$this-> getPost('description');
				$category_id =$this-> getPost('category_id');
				$created_at = $updated_at = date('Y-m-d H:s:i');

				$sql = "insert into Product(thumbnail, title, price, discount, description, updated_at, created_at, category_id) values ('$thumbnail', '$title', '$price', '$discount', '$description', '$updated_at', '$created_at', $category_id)";
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

		function editProduct()
		{
			if (!empty($_POST)) {
				$id =$this-> getPost('id');
				$title =$this-> getPost('title');
				$price =$this-> getPost('price');
				$discount =$this-> getPost('discount');
				$thumbnail =$this-> getPost('thumbnail');
				$description =$this-> getPost('description');
				$category_id =$this-> getPost('category_id');
				$created_at = $updated_at = date('Y-m-d H:s:i');

				if ($thumbnail != '') {
					$sql = "update Product set thumbnail = '$thumbnail', title = '$title', price = $price, discount = $discount, description = '$description', updated_at = '$updated_at', category_id = '$category_id' where id = $id";
				} else {
					$sql = "update Product set title = '$title', price = $price, discount = $discount, description = '$description', updated_at = '$updated_at', category_id = '$category_id' where id = $id";
				}

				execute($sql);

				$res = [
					"status" => 1,
					"msg" => "success!!!",
					"sql"=> $sql
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

		function deleteProduct()
		{
			$id =$this-> getPost('id');
			if ($id != '') {
				$sql = "delete from product where id = $id";
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
				$this->response	(404,"No entry");
			}
			//echo json_encode($res);
		}
	}
$newProduct=new product();