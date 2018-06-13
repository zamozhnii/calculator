<?php
class Calculator
{
	public function addition($num1, $num2) {
		return $num1 + $num2;
	}
	
	public function subtraction($num1, $num2) {
		return $num1 - $num2;
	}

	public function division($num1, $num2) {
		return $num1 / $num2;
	}

	public function multiplication($num1, $num2) {
		return $num1 * $num2;
	}

	public function percentageDivision($num1, $num2) {
		return $num1 % $num2;
	}

	public function squareNumber($num1, $num2) {
		if($num2 === 0)
			return "can not divide it by zero";
		return pow($num1, $num2);
	}

	public function sqrtNumber($c) {
		return sqrt($c);
	}

	public function plusMinus($c) {
		return $c * (-1);
	}
	
	public function onDivideBy($num) {
		return 1/$num;
	}
}