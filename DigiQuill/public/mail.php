<?php
if(isset($_POST['submit'])){
//Taking all values
$fname 		= $_POST['fname'];
$email 		= $_POST['email'];
$msg 		= $_POST['msg'];
$subject = 'DigiQuill Website Enquiry';
$output 	= "Name: ".$fname."\n\nEmail: ".$email."\n\nMessage: ".$msg;

$to 		= 'gary.cohen@pipware.net';
$headers	= 'FROM: "'.$email.'"';

$send		= mail($to, $subject, $output."\n\n***This message has been sent", $headers);
}
?>
