<?php
include('cuadrado.php');
include('rectangulo.php');
include('triangulo.php');

$jsonData = file_get_contents('figuras.json');
$figurasArray = json_decode($jsonData, true);
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Figuras Geométricas</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <h1>Figuras Geométricas</h1>

    <?php 
    foreach ($figurasArray['figuras'] as $figura) {
        if ($figura['tipo'] === 'cuadrado') {
            $cuadrado = new Cuadrado($figura['lado']);
            echo "<h2>Cuadrado</h2>";
            echo "<p>Área: " . $cuadrado->calcularArea() . "</p>";
            echo "<p>Perímetro: " . $cuadrado->calcularPerimetro() . "</p>";
        } elseif ($figura['tipo'] === 'rectangulo') {
            $rectangulo = new Rectangulo($figura['base'], $figura['altura']);
            echo "<h2>Rectángulo</h2>";
            echo "<p>Área: " . $rectangulo->calcularArea() . "</p>";
            echo "<p>Perímetro: " . $rectangulo->calcularPerimetro() . "</p>";
        } elseif ($figura['tipo'] === 'triangulo') {
            $triangulo = new Triangulo($figura['lado1'], $figura['lado2'], $figura['lado3']);
            echo "<h2>Triángulo</h2>";
            echo "<p>Área: " . $triangulo->calcularArea() . "</p>";
            echo "<p>Perímetro: " . $triangulo->calcularPerimetro() . "</p>";
        }
    }
    ?>
</body>
</html>
