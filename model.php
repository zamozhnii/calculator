<?php


	if($_SERVER['REQUEST_METHOD'] == 'POST') {
		$action = $_POST['action'];
		$number = $_POST['number'];
	}
	
	echo $action . '---' . $number;