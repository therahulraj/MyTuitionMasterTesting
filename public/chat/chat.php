<?php

	if(count($_POST) > 0) {

		$chatEmailid = $_POST['chatEmailid'];
		$chatPhone = $_POST['chatPhone'];
		$chatMessage = $_POST['chatMessage'];
		$header = "Content-Type: text/html\r\nReply-To: $chatEmailid\r\nFrom: <$chatEmailid>";

		$body =
		@"Email sent from ".$_SERVER['REMOTE_ADDR']." at ".date("d/m/Y H:i",time())."<br />
		<hr />
		$chatMessage
		<hr />
		Email end";
		if(mail("rahulraj16mar@gmail.com", "A user sent you an email", $body, $header)) {
			die("true");
		} else {
			die("There was an error sending the email.");
		}
	}

?>
