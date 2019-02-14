<?php
ini_set('error_reporting',E_STRICT);
$obj=array();

$obj[0]->name = "A";
$obj[0]->age = 21;
$obj[0]->city = "Torino";

$obj[1]->name="B";
$obj[1]->age=22;
$obj[1]->city="Milano";

$obj = json_encode($obj);
echo $obj;
?>
