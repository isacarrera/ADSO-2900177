<?php
include('cuadrado.php');
include('rectangulo.php');
include('triangulo.php');

class Areas {
    private $cuadrado;
    private $rectangulo;
    private $triangulo;

    public function __construct(Valores $valores) {
        $this->cuadrado = new Cuadrado($valores->lado);
        $this->rectangulo = new Rectangulo($valores->base, $valores->altura);
        $this->triangulo = new Triangulo($valores->base, $valores->altura, $valores->lado);
    }

    public function areaCuad() {
        return $this->cuadrado->calcularArea();
    }

    public function areaRect() {
        return $this->rectangulo->calcularArea();
    }

    public function areaTriangulo() {
        return $this->triangulo->calcularArea();
    }
}
?>
