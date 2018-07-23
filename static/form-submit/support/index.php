<?php

    // check if the honeypot field is filled out. If not, send a mail.
    if(isset($_POST['firstname']) && $_POST['firstname'] != "") {
        echo "Message sent. Thank you!"; // not really but in case the robot is listening
        return;
    }
    $to = "rivet@iu.edu";
    if(isset($_POST['email']) && $_POST['email'] != "") {
        $from = $_POST['email'];
    } else {
        $from = "Rivet Website <uxo@iu.edu>";
    }
    if(isset($_POST['name']) && $_POST['name'] != "") {
        $name = $_POST['name'];
    }
    $subject = "Rivet support question";
    $message = $name . " asked a question about Rivet:" . "\n\n" . $_POST['description']. "\n\n";

    $message .= "Submitted from: $_SERVER[HTTP_REFERER]\n\n";

    $headers = "From:" . $from;
    mail($to,$subject,$message,$headers);
    if(isset($name)) {
        echo "Question sent. Thank you " . $name . ".";
    }

