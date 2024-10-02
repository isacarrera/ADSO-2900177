<?php
include('numero.php');
include('operacion.php');

$jsonData = file_get_contents('operaciones.json');
$operacionesArray = json_decode($jsonData, true);

$resultados = [];

foreach ($operacionesArray['operaciones'] as $operacion) {
    $num1 = new Numero($operacion['num1']);
    $num2 = new Numero($operacion['num2']);

    $operaciones = new Operaciones($num1, $num2);

    $resultados[] = [
        'suma' => $operaciones->suma(),
        'resta' => $operaciones->resta(),
        'multiplicacion' => $operaciones->multiplicar(),
        'division' => $operaciones->dividir(),
        'num1' => $num1->getValor(),
        'num2' => $num2->getValor()
    ];
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Operaciones</title>
</head>
<body>
    <h1>Operaciones</h1>
    <p>
        <?php
        foreach ($resultados as $resultado) {
            echo 
                "<strong>{$resultado['num1']} + {$resultado['num2']} = </strong>" . $resultado['suma'] . "<br>" .
                "<strong>{$resultado['num1']} - {$resultado['num2']} = </strong>" . $resultado['resta'] . "<br>" .
                "<strong>{$resultado['num1']} x {$resultado['num2']} = </strong>" . $resultado['multiplicacion'] . "<br>" .
                "<strong>{$resultado['num1']} / {$resultado['num2']} = </strong>" . $resultado['division'] . "<br><br>";
        }
        ?>
    </p>
</body>
</html>
