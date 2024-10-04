<?php
class Operaciones{
    private $num1;
    private $num2;

    public function __construct(Numero $num1, Numero $num2){
        $this->num1 = $num1->getValor();
        $this->num2 = $num2->getValor();
    }
    
    public function sumar(){
        return $this->num1 + $this->num2;
    }
    
    public function restar(){
        return $this->num1 - $this->num2;
    }
    
    public function multiplicar(){
        return $this->num1 * $this->num2;
    }
    
    public function dividir(){
        return $this->num1 / $this->num2;
    }
}

?>