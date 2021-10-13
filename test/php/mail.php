<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$email = $_POST['user_email'];
$phone = $_POST['user_phone'];
$name = $_POST['user_names'];
$name_message = $_POST['text_input_name'];
$email_message = $_POST['text_input_email'];
$sms_message = $_POST['input_message'];

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'kolaf.2000@mail.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'vj,abvflibirf'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('kolaf.2000@mail.ru'); // от кого будет уходить письмо?
$mail->addAddress('jigaleh991@smuvaj.com');     // Кому будет уходить письмо 
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка с тестового сайта';
$mail->Body    = ''. "Скрипт сработал <br>". $email . "<br>". $phone . "<br>". $name . $name_message . "<br>". $email_message . "<br>". $sms_message ; ;
$mail->AltBody = '';

if(!$mail->send()) {
    return false;
} else {
    return true;
}
?>