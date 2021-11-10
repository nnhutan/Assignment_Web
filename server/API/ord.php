<?php
	require_once '../database/dbhelper.php';
	require '../utils/rest_api.php';
	//header('Access-Control-Allow-Origin: ','http://localhost:3000');
	//header("Access-Control-Allow-Headers: Content-Type");
	//header("Access-Control-Allow-Credentials: true");
	$_POST = json_decode(file_get_contents('php://input'), true);
	class ord extends rest_api{
		function listOrder()
		{
			$sql = "select * from Orders order by status asc, order_date desc";
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

		function addOrder()
		{
			if (!empty($_POST)) {
				$user_id =$this-> getPost('user_id');
				$note =$this-> getPost('note');
				$order_date = date("Y-m-d H:i:s");
				$status =$this-> getPost('status');
				$total_money =$this-> getPost('total_money');

				$sql = "insert into Orders(user_id, note, order_date,status,total_money) values ('$user_id', '$note', '$order_date', '$status', '$total_money')";
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

		function editOrder()
		{
			if (!empty($_POST)) {
				$id =$this-> getPost('id');
				$status =$this->	 getPost('status');

				$sql = "update orders set status = $status where id = $id";
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

		function deleteOrder()
		{
			$id =$this-> getPost('id');
			if ($id != '') {
				$sql = "delete from Orders where id = $id";
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
$newList=new ord();