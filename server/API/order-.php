<?php
	require_once '../database/dbhelper.php';
	require '../utils/rest_api.php';
	//header('Access-Control-Allow-Origin: ','http://localhost:3000');
	//header("Access-Control-Allow-Headers: Content-Type");
	//header("Access-Control-Allow-Credentials: true");
	$_POST = json_decode(file_get_contents('php://input'), true);
	class order extends rest_api{
		function listOrderDetail()
		{
			$orderId =$this-> getPost('order_id');

			$sql = "select Order_Details.*, Product.title, Product.thumbnail from Order_Details left join Product on Product.id = Order_Details.product_id where Order_Details.order_id = $orderId";
			$result = executeResult($sql);
			if (!empty($result)) {
				$res = [
					"status" => 1,
					"msg" => "success!!!",
					"orderList" => $result,
				];
				$this->response(200,$res);
			} else {
				$res = [
					"status" => 2,
					"msg" => "failure!!!",
					"orderList" => [],
				];
				$this->response(404,"No order");
			}
			//echo json_encode($res);
		}

		function addOrderDetail()
		{
			if (!empty($_POST)) {
				$orderId =$this-> getPost('order_id');
				$product_id =$this-> getPost('product_id');
				$num =$this-> getPost('num');
				$totalMoney =$this-> getPost('total_money');

				$sql = "update order_details set product_id = $product_id num = $num total_money = $totalMoney where order_id = $order_id";
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

		function deleteOrderDetail()
		{
			$id =$this-> getPost('id');
			if ($id != '') {
				$sql = "delete from Order_details where id = $id";
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
$newOrder=new order();