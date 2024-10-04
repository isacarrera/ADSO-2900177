<?php
include('valores.php');
include('areas.php');

$valores = new Valores(8, 8, 10); 
$areas = new Areas($valores);

$response = [];
$response['cuadrado'] = $areas->areaCuad(); 
$response['rectangulo'] = $areas->areaRect(); 
$response['triangulo'] = $areas->areaTriangulo(); 

header('Content-Type: application/json');
echo json_encode($response);
?>
