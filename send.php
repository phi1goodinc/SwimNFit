<?php

/* https://api.telegram.org/botXXXXXXXXXXXXXXXXXXXXXXX/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['message'];
$token = "2029950475:AAGiGZ5zNa1AeLctSl27gNmjMmPFdx4Zfu8";
$chat_id = "-480861190";
$arr = array(
    'Имя пользователя: ' => $name,
    'Телефон: ' => $phone,
    'Сообщение' => $email
);

foreach($arr as $key => $value) {
    $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

exit();
?>
