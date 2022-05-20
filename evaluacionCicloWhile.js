// Mariana Holguin y Laura Aguirre


console.log("punto 1")
var ciclo1=5 ;
var max=prompt("ingrese el numero hasta donde quiere conocer los multiplos del 5") ; 
var contador=0 
while(contador <=max)  {

    if (contador%5==0) {
       console.log ("el", contador ,"si es multiplo del 5");
}else {
    console.log ("el",contador,"no es multiplo del 5");

}
contador++;

}


console.log("punto 2") 
var ciclo2=0 
var precioA ;
var articulos=parseInt(prompt ("ingrese la cantidad de articulos")) 
var total=0

while(ciclo2<articulos) {
    var precioA=parseInt(prompt("ingrese el precio de cada articulo")) ;
    total += precioA
    ciclo2 += 1 ;
    }
 
    console.log ("el total a pagar es" + total) 


console.log("punto 3")    
var total=0
var ciclo3="si"
while(ciclo3!= "no") {
    var precioA=parseInt(prompt("ingrese el precio de cada articulo")) ;
    total += precioA
    ciclo3=(prompt("ingrese no para parar")) 
}
console.log ("el total a pagar es" + total) 


console.log("punto 4")
var valortotal= 0; 
var ciclo4= 0 ;

    var respuesta= prompt("si desea ingresar un articulo ponga si y si no desea ponga no") 
    while (respuesta=="si") {
        var precio=parseInt(prompt("por favor ingrese el valor del articulo")) ;
    valortotal += precio
    respuesta=prompt("si desea ingresar un articulo ponga si y si no desea ponga no")
}

console.log ("el valor total es "+ valortotal) 
if (ciclo4>=25) {
    var descuento = valortotal * 0.8
    console.log("con el descuento el precio total es" + descuento)
   } else if (ciclo4>=15) {
       var descuento = valortotal * 0.85
       console.log("con el descuento el precio total es" + descuento)
   } else if (ciclo4>=8) {
      var descuento = valortotal * 0.90
      console.log ("con el descuento el precio total es" + descuento)
   } else {
         console.log ("su compra no tiene descuento") 
   }
      


console.log("punto 5")   
var perdioAsig= 0
var cantidadN=parseInt(prompt("ingrese la cantidad de notas que hay en el curso")) ;
var nota
var ciclo5=1
var ganoAsig=0 

while(ciclo5<=cantidadN) {

    var nota=parseFloat(prompt("ingrese la nota final del estudiante" + ciclo5)) ;

    ciclo5 +=1


    if (nota>=3.5){
        console.log("el estudiante gano la asignatura") 
        ganoAsig +=1
}else {   
 console.log("el estudiante perdio la asignatura")
 perdioAsig +=1
}
}

if (ganoAsig<=perdioAsig) {
    console.log("dede abrirse el curso de verano") 
}else {
    console.log("la cantidad de estudiantes no es suficiente para el curso de verano")
    }