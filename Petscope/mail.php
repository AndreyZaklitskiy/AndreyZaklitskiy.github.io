<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPmailer.php';

    $mail = new PHPmailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', 'phpmailer/lanuage/');
    $mail->IsHTML(true);
    //От кого письмо
    $mail->setForm('info@fls.guru', 'тестовая форма');
    // кому отправить
    $mail->Subject = 'Привет, это письмо из тестовой формы';
    //Тело письма
    $body = '<h1>Тело письма</h1>';
    if(trim(!empty($_POST['name']))){
        $body.='<p><strong>Имя:</strong> ' . $_POST['name'].'</p>';
    }
    if(trim(!empty($_POST['email']))){
        $body.='<p><strong>E-mail:</strong> '.$_POST['email'].'</p>';
    }
    $mail->Body = $body;
    // Отправляем
    if(!$mail->send()) {
        $message = 'Ошибка';
    }else {
        $message = 'Данные отправлены!';
    }
    $response = ['message' => $message];
    header('Content-type: application/json');
    echo json_encode($response);
?>
