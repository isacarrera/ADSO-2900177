<?php
    include('persona.php');
    include('valores.php');
    include('nomina.php');

    $persona = new Persona("Isabella", "Carrera");
    $valores = new Valores();
    $nomina = new Nomina($persona, $valores, 20); 
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
