<?php
    include('numero.php');
    include('operacion.php');

    $num1 = new Numero(10);
    $num2 = new Numero(5);

    $operaciones = new Operaciones($num1, $num2);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<h1>Operaciones</h1>
<p>
<p> 
    
    <?php

    echo 
        "<strong>Suma</strong> ".$operaciones->suma()."<br>".
        "<strong>resta</strong> ".$operaciones->resta()."<br>".
        "<strong>multiplicacion</strong> ".$operaciones->multiplicar()."<br>".
        "<strong>division</strong> ".$operaciones->dividir()
    ;

    ?>
</p>
</p>
</body>
</html>