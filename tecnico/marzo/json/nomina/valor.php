<?php
class Valores {
    public $valorDia;
    public $subTras;
    public $arl;
    public $salud;
    public $pension;

    public function __construct() {
        $this->valorDia = 60000;
        $this->subTras = 117172;
        $this->arl = 0.00522;
        $this->salud = 0.04;
        $this->pension = 0.04;
    }
}
?>
