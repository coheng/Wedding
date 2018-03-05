<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width">
	<title>Gary & Lara Wedding</title>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/foundation/5.5.2/css/foundation.min.css">
	<link rel="script" href="https://cdnjs.cloudflare.com/ajax/libs/foundation/5.5.2/js/vendor/modernizr.js">
	<script src="js/vendor/jquery-1.11.1.min.js"></script>
</head>

<?php


if( isset($_POST['rsvp_submit']) ){

	$name = filter_var($_POST['attendee_name'], FILTER_SANITIZE_STRING);
	$guests = filter_var($_POST['guests'], FILTER_SANITIZE_STRING);
	$attending = filter_var($_POST['attending'], FILTER_SANITIZE_STRING);
	$comments = filter_var($_POST['comments'], FILTER_SANITIZE_STRING);


	$to  = 'rsvp@garyandlaracohen.com';


	$subject = 'You have received a new Wedding RSVP';


	$message = '
	<html>
	<head>
	  <title>Wedding RSVP</title>
	</head>
	<body>
	  <h2>Wedding RSVP</h2>
	  <p>
	  	<strong>Name:</strong> '.$name.'<br>
	  	<strong>Attending?</strong> '.$attending.'<br>
	  	<strong>Total number of Guests:</strong> '.$guests.'
	  </p>
	  <p>
	  	<strong>Comments:</strong> '.$comments.'
	  </p>
	</body>
	</html>
	';


	$headers  = 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

	$headers .= '' . "\r\n";


	if(mail($to, $subject, $message, $headers)){
		echo '<div data-alert class="alert-box success">Thank you so much! We have received your RSVP!</div>
		<div class="columns large-12 text-center"><a href="http://www.garyandlaracohen.com" class="button">Go back to our Invite</a> </div>';
	} else{
		echo '<div data-alert class="alert-box alert">Whoops! An error occurred. Please try resending your RSVP.</div>';
	}

}

?>
	<script>
		jQuery(document).foundation();
	</script>
	<link rel="script" href="https://cdnjs.cloudflare.com/ajax/libs/foundation/5.5.2/js/foundation.min.js">
</body>
</html>