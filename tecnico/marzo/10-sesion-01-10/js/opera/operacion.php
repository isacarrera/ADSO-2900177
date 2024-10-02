<?php
class Operaciones {
    private $num1;
    private $num2;
    public $suma;
    public $resta;
    public $multiplicacion;
    public $division;

    public function __construct(Numero $num1, Numero $num2) {
        $this->num1 = $num1->getValor();
        $this->num2 = $num2->getValor();
    }

    public function suma() {
        $this->suma = $this->num1 + $this->num2;
        return $this->suma;
    }

    public function resta() {
        $this->resta = $this->num1 - $this->num2;
        return $this->resta;
    }

    public function multiplicar() {
        $this->multiplicacion = $this->num1 * $this->num2; 
        return $this->multiplicacion;
    }

    public function dividir() {
        if ($this->num2 != 0) {
            $this->division = $this->num1 / $this->num2;
            return $this->division;
        } else {
            return "Error: División por cero"; 
        }
    }
}
?>
