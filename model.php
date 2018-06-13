<?php
	require_once 'libs/Calculator.php';

	if($_SERVER['REQUEST_METHOD'] == 'POST') {
		$action = $_POST['action'];
		$number = $_POST['number'];
		$numberTwo = $_POST['numberTwo'];
	}

	$obj = new Calculator();
	
	switch($action) {
		
		case '1/x': echo $obj->onDivideBy($number);
					break;
					
		case ' ': echo $obj->addition($number, $numberTwo);
					break;
					
		case ' -': echo $obj->plusMinus($number);
					break;
					
		case 'sqrt': echo $obj->sqrtNumber($number);
					break;
					
		case '-': echo $obj->subtraction($number, $numberTwo);
				  break;
				  
		case '*': echo $obj->multiplication($number, $numberTwo);
					break;
					
		case '/': echo $obj->division($number, $numberTwo);
					break;
					
		case '%': echo $obj->percentageDivision($number, $numberTwo);
					break;
					
		case 'X-pow-Y': echo $obj->squareNumber($number, $numberTwo);
					break;
	}