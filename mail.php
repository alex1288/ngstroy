<?php

$recepient = "641011@bk.ru";
$sitename = "Новый город";

$name = trim($_GET["name"]);
$phone = trim($_GET["phone"]);
$fee = trim($_GET["fee"]);
$cost = trim($_GET["cost"]);

$pagetitle = "Новая заявка с сайта \"$sitename\"";
$message = "Имя: $name \nТелефон: $phone \nПервоначальный взнос: $fee \nСтоимость квартиры: $cost ";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>

