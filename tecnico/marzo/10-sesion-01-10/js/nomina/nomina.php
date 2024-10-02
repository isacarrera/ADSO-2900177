<?php
class Nomina {
    public $persona;
    public $valores;
    public $diasTrabajados;
    public $valorBruto;
    public $deducibles;
    public $totalPagar;

    public function __construct(Persona $persona, Valores $valores, $diasTrabajados) {
        $this->persona = $persona;
        $this->valores = $valores;
        $this->diasTrabajados = $diasTrabajados;
    }

    public function calcularValorBruto() {
        $this->valorBruto = $this->valores->valorDia * $this->diasTrabajados;
    }

    public function calcularDeducibles() {
        $arl = $this->valorBruto * $this->valores->arl;
        $salud = $this->valorBruto * $this->valores->salud;
        $pension = $this->valorBruto * $this->valores->pension;
        $this->deducibles = $arl + $salud + $pension;
    }

    public function calcularTotalPagar() {
        $this->totalPagar = ($this->valorBruto + $this->valores->subTras) - $this->deducibles;
    }
}
?>
