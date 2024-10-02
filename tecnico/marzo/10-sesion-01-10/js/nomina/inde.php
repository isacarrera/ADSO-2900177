<?php
include('persona.php');
include('valores.php');
include('nomina.php');

$jsonData = file_get_contents('nomina.json');
$data = json_decode($jsonData, true);

$persona = new Persona($data['persona']['nombre'], $data['persona']['apellido']);

$valores = new Valores();
$valores->valorDia = $data['valores']['valorDia'];
$valores->subTras = $data['valores']['subTras'];
$valores->arl = $data['valores']['arl'];
$valores->salud = $data['valores']['salud'];
$valores->pension = $data['valores']['pension'];

$nomina = new Nomina($persona, $valores, $data['diasTrabajados']);
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calcular Nómina</title>
</head>
<body>
    <h1>Detalles de la Nómina</h1>
    <p>
        <?php
        $nomina->calcularValorBruto();
        $nomina->calcularDeducibles();
        $nomina->calcularTotalPagar();

        echo 
            "<strong>Nombre:</strong> " . $persona->nombre . " " . $persona->apellido . "<br>" .
            "<strong>Valor Bruto:</strong> $" . number_format($nomina->valorBruto, 2) . "<br>" .
            "<strong>Deducibles:</strong> $" . number_format($nomina->deducibles, 2) . "<br>" .
            "<strong>Subsidio de Transporte:</strong> $" . number_format($valores->subTras, 2) . "<br>" .
            "<strong>Total a Pagar:</strong> $" . number_format($nomina->totalPagar, 2);
        ?>
    </p>
</body>
</html>
