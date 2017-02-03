<!DOCTYPE html>
<html>
<head>
	<title>CELLULAR AUTOMATON</title>
</head>
<body>
	<h1>Cellular Ecosystem Experiments</h1>
	<p>This website is dedicated to store all my experiments related to ecosystem modelling using celluler automata techniques & state based agent as the creature models.</p>
	<?php foreach (scandir('.') as $filename) {
		if (is_file($filename)) echo '<a href="'.$filename.'">'.$filename.'</a><br/>';
	} ?>
</body>
</html>