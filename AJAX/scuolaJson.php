<?php

$persona1 = new stdClass();
$persona1->name = "A";
$persona1->age = 10;
$persona1->city = "New York";

$persona2 = new stdClass();
$persona2->name = "B";
$persona2->age = 20;
$persona2->city = "New";

$persona3 = new stdClass();
$persona3->name = "C";
$persona3->age = 30;
$persona3->city = "York";

$persona4 = new stdClass();
$persona4->name = "D";
$persona4->age = 40;
$persona4->city = "NewYork";

$persona5 = new stdClass();
$persona5->name = "E";
$persona5->age = 50;
$persona5->city = "Nk";



$classe1[0] = $persona1;
$classe1[1] = $persona2;
$classe1[2] = $persona3;

$classe2[0] = $persona4;
$classe2[1] = $persona5;


$scuola[0] = $classe1;
$scuola[1] = $classe2;

$myJSON = json_encode($scuola);

echo $myJSON;
?>