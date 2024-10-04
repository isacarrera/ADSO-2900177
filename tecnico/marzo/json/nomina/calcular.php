<?php
include('valor.php');
include('nomina.php');
include('persona.php');

$persona = new Persona("Isabella", "Carrera");
$valores = new Valores();
$diasTrabajados = 30;

$nomina = new Nomina($persona, $valores, $diasTrabajados);

$nomina->calcularValorBruto();
$nomina->calcularDeducibles();
$nomina->calcularTotalPagar();

$response = [];
$response['salario'] = $nomina->valorBruto;
$response['salud'] = $valores->salud * $nomina->valorBruto;
$response['pension'] = $valores->pension * $nomina->valorBruto;
$response['arl'] = $valores->arl * $nomina->valorBruto;
$response['descuento'] = $nomina->deducibles;
$response['subTransporte'] = $valores->subTras;
$response['retencion'] = $nomina->calRetencion(); 
$response['pagoTotal'] = $nomina->totalPagar - $response['retencion'];

header('Content-Type: application/json');
echo json_encode($response);
