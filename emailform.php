<?php

if(isset($_POST[''])) {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $email = $_POST["message"];

    $mailTo = $_POST["dawsonblack0816@gmail.com"];

    $headers = "Name: " . $name .
    "\r\n Email: " . $email . 
    "\r\n Message: " . $message . "\r\n";

    mail($mailTo, "mail form email", $headers);
    header("Location: index.php?mailsend");
}

?>
