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
		header('Access-Control-Allow-Origin: *');


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

}
?>