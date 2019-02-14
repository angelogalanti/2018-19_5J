<?php
ini_set('error_reporting',E_STRICT);
$obj=array();




$obj[0]->name = "A";
$obj[0]->age = 21;
$obj[0]->city = "Torino";

$obj[1]->name="B";
$obj[1]->age=22;
$obj[1]->city="Milano";

$obj[3]->name="C";
$obj[3]->age=25;
$obj[3]->city="Roma";

$obj[4]->name="D";
$obj[4]->age=34;
$obj[4]->city="Napoli";

$classe_A[0]=$obj[0];
$classe_A[1]=$obj[1];

$classe_B[0]=$obj[3];
$classe_B[1]=$obj[4];

$tot[0]=$classe_A;
$tot[1]=$classe_B;

$vet = json_encode($tot);
echo $vet;
?>
