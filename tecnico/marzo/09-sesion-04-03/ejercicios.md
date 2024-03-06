## Ejercicios

1.	Tres personas deciden invertir su dinero para fundar una empresa. Cada una de ellas invierte una cantidad distinta. Obtener el porcentaje que cada quien invierte con respecto a la cantidad total invertida.

2.	Un alumno desea saber cuál será su promedio general en las tres materias más difíciles que cursa y cuál será el promedio que obtendrá en cada una de ellas. Estas materias se evalúan como se muestra a continuación:

    -	La calificación de Matemáticas se obtiene de la siguiente manera:
        Examen 90%
        Promedio de tareas 10%
        En esta materia se pidió un total de tres tareas.
        
    -	La calificación de Física se obtiene de la siguiente manera:
        Examen 80%
        Promedio de tareas 20%
        En esta materia se pidió un total de dos tareas.
        
    -	La calificación de Química se obtiene de la siguiente manera:
        Examen 85%
        Promedio de tareas 15%
    En esta materia se pidió un promedio de tres tareas.

3. Leer un real e imprimir si el número es positivo o negativo.
4.	Leer un real e imprimir si el número es mayor a 200 o no.
5.	Leer un real e imprimir si el número está en el rango de 50 y 100
   
## solucion
```
INICIO

  Definir inversion1, inversion2, inversion3, porcentaje1, porcentaje2, porcentaje3 total COMO REAL
   

  inversion1 = 0.0
  inversion2 = 0.0
  inversion3 = 0.0
  porcentaje1 = 0.0
  porcentaje2 = 0.0
  porcentaje3 = 0.0
  total = 0.0
  Escribir "Digite la primera inversión: "
  Leer inversion1
  
  Escribir "Digite la segunda inversión: "
  Leer inversion2
  
  Escribir "Digite la tercera inversión: "
  Leer inversion3
  
  total = inversion1 + inversion2 + inversion3
  
  Escribir "El total de la inversión es de: ", total
  
  porcentaje1 = (inversion1 / total) * 100
  porcentaje2 = (inversion2 / total) * 100
  porcentaje3 = (inversion3 / total) * 100
  
  Escribir "Porcentaje de la primera inversión: ", porcentaje1, "%"
  Escribir "Porcentaje de la segunda inversión: ", porcentaje2, "%"
  Escribir "Porcentaje de la tercera inversión: ", porcentaje3, "%"

FIN
```

```
INICIO
Definir promedioGeneral, promedioM, promedioF, promeddioQ, examenM, tareasM, tareasF, tareasQ, tm1, tm2, tm3, porcientoTM, porcientoEM, porcientoTF, porciento EF, porcientoTQ, porcientoEQ COMO REAL

promedioGeneral = 0.0
promedioM = 0.0
promedioF = 0.0
promeddioQ = 0.0
examenM = 0.0
tareasM = 0.0
tareasF = 0.0
tareasQ = 0.0
tm1 = 0.0
tm2 = 0.0
tm3 = 0.0
porcientoTM = 0.0
porcientoEM = 0.0
porcientoTF = 0.0
porcientoEF = 0.0
porcientoTQ = 0.0
porcientoEQ = 0.0

Escribir "Digite la calificación del examen de Matemáticas:"
    Leer examenM
    Escribir "Digite la calificación de la tarea 1 de Matemáticas:"
    Leer tareasM1
    Escribir "Digite la calificación de la tarea 2 de Matemáticas:"
    Leer tareasM2
    Escribir "Digite la calificación de la tarea 3 de Matemáticas:"
    Leer tareasM3
    
    promedioM = (examenM * 0.9) + ((tareasM1 + tareasM2 + tareasM3) / 3 * 0.1)
    
    Escribir "El promedio de Matemáticas es:", promedioM
    
    Escribir "Digite la calificación del examen de Física:"
    Leer examenF
    Escribir "Digite la calificación de la tarea 1 de Física:"
    Leer tareasF1
    Escribir "Digite la calificación de la tarea 2 de Física:"
    Leer tareasF2
    
    promedioF = (examenF * 0.8) + ((tareasF1 + tareasF2) / 2 * 0.2)
    
    Escribir "El promedio de Física es:", promedioF
    
    Escribir "Digite la calificación del examen de Química:"
    Leer examenQ
    Escribir "Digite la calificación de la tarea 1 de Química:"
    Leer tareasQ1
    Escribir "Digite la calificación de la tarea 2 de Química:"
    Leer tareasQ2
    Escribir "Digite la calificación de la tarea 3 de Química:"
    Leer tareasQ3
    
    promedioQ = (examenQ * 0.85) + ((tareasQ1 + tareasQ2 + tareasQ3) / 3 * 0.15)
    
    Escribir "El promedio de Química es:", promedioQ
    
    promedioGeneral = (promedioM + promedioF + promedioQ) / 3
    
    Escribir "El promedio general en las tres materias es:", promedioGeneral
    
FIN

```

```
INICIO
Definir numero como real

numero = 0.0

Escriba "Dijite un numero: "
Lea numero

Si numero >0 Entonces

Escriba "El numero es positivo"
SI NO

Escriba "El numero es negativo"
Fin si

FIN
```

```
INICIO

Definir numero COMO real
numero = 0.0

Escribir "Digite un numero: "
Leer numero

Si numero >200 entonces
Escriba "El numero es mayor a 200"
SI NO
Escribir " El numero es menor o igual a 200"

FIN SI

Fin
```

```
INICIO

Definir numero COMO REAL
numero = 0.0

Escriba "Dijite un numero: "
Leer numero

Si numero >=50 y numero <=100
Escriba "El numero esta en el rango de 50 y 100"

SI NO
Escriba "El numero no esta en el rango de 50 y 100"
FIN SI

FIN
```

```
p1 = float(input("Por favor ingrese la inversión de la persona 1: "))
if (p1 >= 0):
    p2 = float(input("Por favor ingrese la inversión de la persona 2: "))
    if (p2 >= 0):
        p3 = float(input("Por favor ingrese la inversión de la persona 3: "))
        if (p3>=0):
            totl = p1+p2+p3
            por1 = (p1/totl)*100
            por2 = (p2/totl)*100
            por3 = (p3/totl)*100

            print("La inversión total fue de ",totl,"$")
            print("El porcentaje de inversión de la persona 1 es de ",por1,"%")
            print("El porcentaje de inversión de la persona 2 es de ",por2,"%")
            print("El porcentaje de inversión de la persona 3 es de ",por3,"%")
        else:
            print("Ingresó un valor erroneo, por favor intentelo de nuevo")
    else:
        print("Ingresó un valor erroneo, por favor intentelo de nuevo")
else:
    print("Ingresó un valor erroneo, por favor intentelo de nuevo")

```
```
exm = float(input("Ingrese el puntaje obtenido en el examen de matemáticas: "))
if (exm >= 0):
    tm1 = float(input("Ingrese el puntaje obtenido en la tarea 1 de matemáticas: "))
    if (tm1 >= 0):
        tm2 = float(input("Ingrese el puntaje obtenido en la tarea 2 de matemáticas: "))
        if (tm2 >= 0):
            tm3 = float(input("Ingrese el puntaje obtenido en la tarea 3 de matemáticas: "))
            if (tm3 >= 0):
                exf = float(input("Ingrese el puntaje obtenido en el examen de física: "))
                if (exf >= 0):
                    tf1 = float(input("Ingrese el puntaje obtenido en la tarea 1 de física: "))
                    if (tf1 >= 0):
                        tf2 = float(input("Ingrese el puntaje obtenido en la tarea 2 de física: "))
                        if (tf2 >= 0):
                            exq = float(input("Ingrese el puntaje obtenido en el examen de Química: "))
                            if (exq >= 0):
                                tq1 = float(input("Ingrese el puntaje obtenido en la tarea 1 de Química: "))
                                if (tq1 >= 0):
                                    tq2 = float(input("Ingrese el puntaje obtenido en la tarea 2 de Química: "))
                                    if ():
                                        tq3 = float(input("Ingrese el puntaje obtenido en la tarea 3 de Química: "))
                                        if ():
                                            protm = (tm1+tm2+tm3)/3
                                            prom = (exm*0.9)+(protm*0.1)
                                            protf = (tf1+tf2)/2
                                            prof = (exf*0.8)+(protf*0.2)
                                            protq = (tq1+tq2+tq3)/3
                                            proq = (exq*0.85)+(protq*0.15)
                                            pro = (prom+prof+proq)/3

                                            print("El promedio de matemáticas es de ",prom)
                                            print("El promedio de física es de ",prof)
                                            print("El promedio de química es de ",proq)
                                            print("El promedio total de las 3 materias es de ",pro)
                                        else:
                                            print("Ingresó un valor erroneo, por favor intentelo de nuevo")
                                    else:
                                        print("Ingresó un valor erroneo, por favor intentelo de nuevo")
                                else:
                                    print("Ingresó un valor erroneo, por favor intentelo de nuevo")
                            else:
                                print("Ingresó un valor erroneo, por favor intentelo de nuevo")
                        else:
                            print("Ingresó un valor erroneo, por favor intentelo de nuevo")
                    else:
                        print("Ingresó un valor erroneo, por favor intentelo de nuevo")
                else:
                    print("Ingresó un valor erroneo, por favor intentelo de nuevo")
            else:
                print("Ingresó un valor erroneo, por favor intentelo de nuevo")
        else:
            print("Ingresó un valor erroneo, por favor intentelo de nuevo")
    else:
        print("Ingresó un valor erroneo, por favor intentelo de nuevo")
else:
    print("Ingresó un valor erroneo, por favor intentelo de nuevo")
```

```
num = float(input("Digite el número que desee: "))

if(num<0):
    print("El número digitado es negativo")
else:
    print("El número digitado es positivo")

```

```
num = float(input("Digite el número que desee: "))

if(num>200):
    print("El número digitado es mayor que 200")
else:
    print("El número digitado es menor que 200")

```
```
num = float(input("Digite el número que desee: "))

if(50<num<100):
    print("El número digitado está en el rango de 50 y 100")
else:
    print("El número digitado no está en el rango de 50 y 100")
```









 
