console.log("hola mundo");
// comentarios en linea 
/*comentario
de 
varias
lineas
*/


//variables 
var primerVariable ;
let edadUsuario ;
//declarar variables
var nombreVariable ; 
//crear variable sin asignar valor 
/* 
inicializar variables : 
asignar un valor al momento de crear la variable 
*/
var gradoEstudiante="10A" ;
/*
asignar un valor : 
igualar una variable existente a un nuevo valor 
*/ 
edadUsuario=16 ;
console.log(edadUsuario) ;
//asignar valor desde otra variable 
var edad=17 ;
edadUsuario=edad ;
console.log(edadUsuario) ;
/*
Asignar valor desde el teclado: 
existen dos maneras de hacerlo, la primera es por ventana emergente y la segunda es por medio de un formulario en html
*/ 
var valor=prompt("ingrese un valor:") ;
console.log("la variable vale " + valor) ;
/* 
constantes: son valores que no pueden ser cambiados durante la ejecucion del codigo. las constantes siempre deben ser 
*/
const PI=3.1416 ;
//imprimir por consola
//simple
console.log("") ;
console.log(valor) ;
//concatenado
console.log("" + valor) ;
//operadores 
//sumar 
var suma ; 
suma=5 + 4 ;
console.log (suma) ; 
var a = 12; 
suma = a + 8 ;
console.log (suma) ; 
var b = 20;
suma = a + b 
console.log (suma) ;
//resta 
var resultado ;
resultado = a - b ;
console.log(resultado) ;
resultado = b - a ;
console.log(resultado) ;
//multiplicacion 
var producto ;
producto = a * b ;
console.log(producto) ;
//division 
var division ;
division = a/b ;
console.log(division) ;
division = b/a ;
console.log(division) ;
//orden de operaciones 
var result
result = a * b ;
console.log(result) ;
result = a * b - 10 ;
console.log(result) ;
result = a *(b - 10) ;
console.log(result) ;
//exponente/potencia
var exp = 3**2 ;
console.log(exp) ;
exp = 3**3 ;
console.log(exp) ;
//cadenas o string
var cadenita1 ="3" ;
var cadenita2 ="5" ;
var sumacadenenas =cadenita1 + cadenita2 ;
console.log(sumacadenenas) ;
var nombresito ="Laura" ;
var apedillito ="aguirre" ;
var nomCompleto = nombresito + " " + apedillito ;
console.log(nomCompleto) ;
var longitud =nombresito.length ;
console.log(longitud) ;
console.log(nomCompleto.length) ;
//encontrar caracteres dada la posicion en el vector 
var primeraLetra ;
primeraLetra =nombresito[0] ;
console.log(primeraLetra) ;
console.log(nombresito[1]) ;
//encontrar la ultima posicion de una cadena o vector 
nombresito[nombresito.length-1] ;
console.log(nombresito[nombresito.length-1])  ;
//se debe buscar la longitud de la cadena y restarle 1 para encontrar la ultima letra 
//valores inmuntables
//las posiciones de una cadena se pueden consultar pero no se pueden reasignar su valor 
nombresito[0]= "p" ;
console.log(nombresito) ;
nombresito= "mariana" ;
console.log(nombresito) ;








