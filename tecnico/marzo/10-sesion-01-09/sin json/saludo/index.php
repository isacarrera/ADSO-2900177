<?php
    include('saludo.php');

    $saludo = new saludo();
    $saludo->setSaludar('hola mundo word');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
  echo $saludo->getSaludar();
?>
</body>
</html>