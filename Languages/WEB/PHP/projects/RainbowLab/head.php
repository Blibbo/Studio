<!DOCTYPE html>
<html class="unselectable">
	<head>
		<!--link rel="stylesheet" href="style.css"-->
	</head>
	<body>
	<center>
	<?php
		ini_set('display_errors', 1);
		ini_set('display_startup_errors', 1);
		error_reporting(E_ALL);
		
		$crewmateColors = [
			'white' =>	['name' => 'white', 'light' => "#d6e1f0", 'dark' => "#8396bf"],
			'black' =>	['name' => 'black', 'light' => "#3f484e", 'dark' => "#1e1f25"],
			'red' =>	['name' => 'red', 'light' => "#c71111", 'dark' => "#7b0838"],
			'blue' =>	['name' => 'blue', 'light' => "#132fd2", 'dark' => "#09158e"],
			'green' =>	['name' => 'green', 'light' => "#10802d", 'dark' => "#0a4d2d"],
			'cyan' =>	['name' => 'cyan', 'light' => "#39e2dd", 'dark' => "#24a9be"],
			'purple' =>	['name' => 'purple', 'light' => "#6b30bc", 'dark' => "#2c198d"],
			'lime' =>	['name' => 'lime', 'light' => "#50f038", 'dark' => "#16a843"],
			'brown' =>	['name' => 'brown', 'light' => "#72491e", 'dark' => "#5e2614"],
			'yellow' =>	['name' => 'yellow', 'light' => "#f6f757", 'dark' => "#c38821"],
			'pink' =>	['name' => 'pink', 'light' => "#ee55ba", 'dark' => "#ac2cad"],
			'orange' =>	['name' => 'orange', 'light' => "#f17d0e", 'dark' => "#b53e15"]
		];
		require ('style.php');
	?>