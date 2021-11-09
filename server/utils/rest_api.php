<?php
	class rest_api{
	protected $method='';
	protected $params=array();
	protected $endpoint='';
	protected $file=NULL;
	public function __construct(){
		$this->_input();
		$this->_process_api();
	}
	private function _input(){
		session_start();
		header('Access-Control-Allow-Origin:  http://localhost:3000');
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Credentials: true");



		$this->method=$_SERVER['REQUEST_METHOD'];
		$this->params=explode('/',trim($_SERVER['PATH_INFO'],'/'));
		$this->endpoint=array_shift($this->params);
		switch ($this->method){
			case 'POST':
				$this->params=$_POST;
				break;
			case 'GET':
				$this->params=$_GET;
				break;
			case 'PUT':
				$this->file=file_get_contents("php://input");
				break;
			case 'DELETE':
				$this->params=explode('/',trim($_SERVER['PATH_INFO'],'/'));
				break;
			default:
				$this->response(500,"invalid Method");
				break;
		}
	}
	private function _process_api(){
		if(method_exists($this,$this->endpoint)){
			$this->{$this->endpoint}();
		}
		else $this->response(500,"Unknown endpoint");
	}
	protected function response($status_code, $data=NULL){
		header($this->_build_http_header_string($status_code));
		header("Content-Type: application/json");
		//echo json_encode($data,JSON_PRETTY_PRINT);
		echo json_encode($data,JSON_HEX_QUOT | JSON_HEX_TAG);
		//echo json_encode($this->endpoint);
	}	
	private function _build_http_header_string($status_code){
		$status=array(
			200=>'OK',
			404=>'NOT FOUND',
			405=>'Method not allowed',
			500=>'Internal Server Error'
		);
		return "HTTP/1.1 ".$status_code." ".$status[$status_code];

	}

	private function fixSqlInject($sql)
	{
		$sql = str_replace('\\', '\\\\', $sql);
		$sql = str_replace('\'', '\\\'', $sql);
		return $sql;
	}

// Lay du lieu tu bien $this->params
	 private function getGet($key){
		$value = '';
		if (isset($this->params[$key])) {
			$value = $this->params[$key];
			$value = fixSqlInject($value);
		}
		return trim($value);
	}

	// Lay du lieu tu bien $this->params
	private function getPost($key)
	{
		$value = '';
		if (isset($this->params[$key])) {
			$value = $this->params[$key];
			$value = fixSqlInject($value);
		}
		return trim($value);
	}

	// Lay du lieu tu bien $_REQUEST
	private function getRequest($key)
	{
		$value = '';
		if (isset($_REQUEST[$key])) {
			$value = $_REQUEST[$key];
			$value = fixSqlInject($value);
		}
		return trim($value);
	}

	// Lay du lieu tu bien $_COOKIE
	private function getCookie($key)
	{
		$value = '';
		if (isset($_COOKIE[$key])) {
			$value = $_COOKIE[$key];
			$value = fixSqlInject($value);
		}
		return trim($value);
	}

	// Ma hoa mat khau hai lop MD5
	private function getSecurityMD5($pwd)
	{
		return md5(md5($pwd) . PRIVATE_KEY);
	}

	// Khi dang nhap thanh cong -> setCookie(tokens) va luu thong tin user vao bien $_SESSION
	// Ham nay giup lay thong tin user khi da dang nhap thanh cong
	// Neu tra ve null -> not login
	private function getUserToken()
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

}
?>