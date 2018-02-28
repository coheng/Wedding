<?php

//Taking all values
$fname 		= $_POST['fname'];
$email 		= $_POST['email'];
$msg 		= $_POST['msg'];
$output 	= "Name: ".$fname."\n\nEmail: ".$email."\n\nMessage: ".$msg;

$to 		= 'foundationirs@gmail.com';
$headers	= 'FROM: "'.$email.'"';

$send		= mail($to, $fname, $output."\n\n***This message has been sent from Softy", $headers);
?>