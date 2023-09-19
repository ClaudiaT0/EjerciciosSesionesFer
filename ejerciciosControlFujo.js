/** Ejercicio 1
 * 
 * Elabora un programa que determine si una persona tiene edad
 * suficiente para votar
 * 
 * Debe recibir como parametro la edad
 * 
 * Consideraciones: utilizar la estructura if-else
 */
function mayorEdad(edad){
if(edad >= 18 ){
//Bloque de código que se va a ejecutar si la sentencia se cumple
    console.log("Si es mayor de edad")
} else {
    console.log("No es mayor de edad")
}
}

/** Ejercicio 2
 * 
 * Desarrolla un programa que permita obtener el promedio de un/a alumno/a
 * recibiendo como parametro 4 calificaciones
 * 
 * Si el promedio es aprobatorio (mayor o igual a 7) imprimir aprobado
 * en el caso de que no sea un promedio aprobatorio imprimir reporobado
 * 
 * Consideraciones: utilizar la estructura if-else
 * 
 */
function promedioAlumno (cal1, cal2, cal3, cal4){
    promedio= (cal1+cal2+cal3+cal4)/4
    if(promedio >= 7 ){
        //Bloque de código que se va a ejecutar si la sentencia se cumple
            console.log("aprobado")
        } else {
            console.log("reprobado")
        }
}
/** Ejercicio 3
 * 
 * Desarrolla un programa que evalue si un numero es primo
 * 
 * Debe recibir como parametro un numero aleatorio
 * 
 * Consideraciones: utilizar la estructura if-else
 */

function evaluaPrimo(num){
    for(let i = 2; i <num; i++)
    if(num % 2 === 0 ){
            console.log("Es primo")
        } else {
            console.log("No es primo")
        }
}

/** Ejercicio 4
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 7 y 8
 * 
 * Debe recibir como parametro un numero, cual sea
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * Colocar calificaciones de manera que vayan del 0 al 10
 * 
 * Consideracion - Utilizar la estructura if-else
 * Casos de prueba: 56, 7, 8, 0, 224, 73
 */
function esDivisibleAnd(num){
    if(num % 7===0 && num % 8===0){
        console.log("Verdadero")
    }else{
        console.log("Falso")
    }
}
/** Ejercicio 5
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 4 o 9
 * 
 * Debe recibir como parametro un numero aleatorio
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * Consideracion - Utilizar la estructura if-else
 */
function esDivisibleOr(num){
    if(num % 4===0 || num % 9===0){
        console.log("Verdadero")
    }else{
        console.log("Falso")
    }
}
/** Ejercicio 6
 * 
 * Crear un programa que funcione como una calculadora simple
 * que realice las operaciones aritmeticas basicas
 * 
 *  -suma
 *  -resta
 *  -multiplicacion
 *  -division
 * 
 * Debe recibir como parametros la operacion a realizar y dos numeros
 * Dependiendo de la opcion que se indique, realizar la operacion correspondiente
 * 
 * 1. suma
 * 2. resta
 * 3. multiplicacion
 * 4. division
 * 
 * Consideraciones: utilizar la estructura switch
 */

function calculadora (opcion, num1, num2){
switch(opcion){

  case 1:
      rest= num1+num2
      console.log("La suma es: "+ rest)
      break;
  case 2: 
      rest= num1-num2
      console.log("La resta es: "+ rest)
  break;
  case 3: 
      rest= num1*num2
      console.log("La multiplicacion es: "+ rest)
  break;
  case 4: 
      rest= num1/num2
      console.log("La division es: "+ rest)
  break;
  default:
      console.log("Opcion no válida")
      break;
   }
}
/** Ejercicio 7
 * 
 * Realizar un programa que reciba como parametro una categoria de peliculas
 * 
 * -accion
 * -drama
 * -comedia
 * -romance
 * -suspenso
 * -terror
 * 
 * Segun sea la categoria que se reciba, imprimir una recomendacion de pelicula
 * de acuerdo al parametro recibido
 * 
 * Consideraciones: utilizar la estructura switch
 */
function recomendacionPelis(pelicula){
    pelicula =pelicula.toUpperCase();
    pelicula =pelicula.toLowerCase();
switch(pelicula){

    case "accion": 
        console.log("Usted puede ver: Rambo")
        break;
    case "drama": 
        console.log("Usted puede ver: Black Swan")
        break;
    case "comedia": 
        console.log("Usted puede ver: Bahía colorada")
        break;
    case "romance": 
        console.log("Usted puede ver: Orgullo y prejuicio")
        break;
    case "suspenso": 
        console.log("Usted puede ver: La noche más oscura")
        break;
    case "terror": 
        console.log("Usted puede ver: El exorcista")
        break;
    default:
        console.log("Opción no válida")
        break;
     }
    }
    /** Ejercicio 8
 * 
 * Crear una interfaz de un cajero ATM
 * 
 * Debe recibirse como parametro alguna de las siguientes opciones
 * 
 * 1. Retirar dinero
 * 2. Transferencia
 * 3. Deposito
 * 4. Pago de servicios
 * 
 * Segun sea la opcion indicada, imprimir en pantalla la accion a realizar
 */
function cajeroAutomatico (opcion){
    if (opcion == 1){
        console.log("Usted eligio opción 1.retirar dinero")
    } else if (opcion == 2){
        console.log("Usted eligio opción 2.Transferencia")
    } else if (opcion ==3){
        console.log("Usted eligio opción 3.Depósito")
    } else if (opcion ==4){
        console.log("Usted eligio opción 4.Pago de servicios")
    } else{
        console.log("Opción no válida")
    }
    
}

/** Ejercicio 9
 * 
 * Escribir en codigo un programa conversor de divisas
 * 
 * Debe recibir como parametro una cantidad en pesos mexicanos y
 * Segun sea la opcion que se indique, realizar la conversion correspondiente
 * 
 * 1. A dolares estadounidenses
 * 2. A euros 
 * 3. A yenes japoneses
 * 4. A libra esterlina
 * 5. A franco suizo
 * 
 * Consideracion: estructura switch
 * 
 */
function conversorDivisa(divisa){
    divisa =divisa.toUpperCase();
    divisa =divisa.toLowerCase();
switch(divisa){

    case "dolar":

        console.log("Usted puede ver: Rambo")
        break;
    case "euro": 
        console.log("Usted puede ver: Black Swan")
        break;
    case "yen": 
        console.log("Usted puede ver: Bahía colorada")
        break;
    case "libra": 
        console.log("Usted puede ver: Orgullo y prejuicio")
        break;
    case "franco": 
        console.log("Usted puede ver: La noche más oscura")
        break;
    default:
        console.log("Opción no válida")
        break;
     }
}
/** Ejercicio 10
 * 
 * Realizar un programa que calcule un descuento del 10% a un producto si se ingresa el codigo
 * de descuento correcto
 * 
 * Debe recibir como parametros el precio del producto
 * y el codigo de descuento
 * 
 * Sugerencia de codigo de descuento DESCUENTO10
 * 
 * Consideracion: utilizar la estructura if-else
 * 
 */
/*function valorDescuento (precio, codigo){
        codigo=codigo.toUpperCase();
        codigo=codigo.toUpperCase();
        if (codigo === "descuento10")
}*/