<?php
include('cuadrado.php');
include('rectangulo.php');
include('triangulo.php');

$cuadrado = new Cuadrado(4);
$rectangulo = new Rectangulo(5, 3);
$triangulo = new Triangulo(3, 4, 5);
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

    <h2>Cuadrado</h2>
    <p>Área: <?php echo $cuadrado->calcularArea(); ?></p>
    <p>Perímetro: <?php echo $cuadrado->calcularPerimetro(); ?></p>

    <h2>Rectángulo</h2>
    <p>Área: <?php echo $rectangulo->calcularArea(); ?></p>
    <p>Perímetro: <?php echo $rectangulo->calcularPerimetro(); ?></p>

    <h2>Triángulo</h2>
    <p>Área: <?php echo $triangulo->calcularArea(); ?></p>
    <p>Perímetro: <?php echo $triangulo->calcularPerimetro(); ?></p>
</body>
</html>
