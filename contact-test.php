<?php
if(isset( $_POST['firstName']))
$name = $_POST['firstName'];
if(isset( $_POST['email']))
$email = $_POST['email'];
if(isset( $_POST['message']))
$message = $_POST['message'];

$subject = "Website Inquiry";

$content="From: $name \n Email: $email \n Message: $message";
$recipient = "thomasratliff5@gmail.com";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $content, $mailheader) or die("Error!");
echo "Email sent!";
?>