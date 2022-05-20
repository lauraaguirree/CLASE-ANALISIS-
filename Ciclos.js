//Las estructuras cíclicas se utilizan cuando el programador necesita que una instrucción o bloque de código se ejecute determinada cantidad de veces mientras se cumpla la condición que se le indique al ciclo, esto quiere decir que la condición debe dar como resultado verdadero. Es decir, si el programador requiere que el programa llene un arreglo de 4 posiciones, una a la vez; la principal acción o instrucción sería, llenar una casilla/posición, y esa instrucción se repetiría para cada posición del arreglo, o sea, cuatro veces.

var CantSaludos = 0; //variable que cuenta la cantidad de saludos 
 
while(CantSaludos < 5){ //se repite mientras la cantidad de saludos sea <5
    console.log("Hola "); //es la instruccion que se repite mientras el ciclo funciona 
    CantSaludos += 1; //conteo de saludos su suma 1 con cada vuelta del ciclo 
}

//pregunta 1 
//cambiar el 5 

//pregunta 2 
//3 veces 

/*
var respuesta ="si";
 
while(respuesta=="si"){
    console.log("Dijo sí");
    respuesta=prompt("ingrese un valor");
}

*/

var valor = true;
var respuesta2;
 
while(valor){
    console.log("valor es " + valor);
    respuesta2=prompt("ingrese un valor 1 verdadero 0 falso");
    if(respuesta2 == 0){
        valor = false;
    }      
}


//punto 1 
console.log ("punto 1") ;

var ciclo1=0 ;

while(ciclo1<5) {
    console.log(2) ;
    ciclo1 +=1
    }


//punto 2
console.log ("punto 2") ;

var ciclo2=0 ;
while(ciclo2<8) {
    console.log("ha hecho" + ciclo2) ;
    ciclo2 +=1
    }


 //punto 3
 console.log ("punto 3") ;

    var ciclo3=0;
while(ciclo3<20) {
    console.log(5)
    ciclo3+=2
    }

    
//punto 4 
console.log ("punto 4") ;

var ciclo4=prompt("ingrese ok para parar") ;
while (ciclo4 != "ok") {
console.log("dijo" + ciclo4) 
ciclo4= prompt("ingrese ok para parar") ;
}


//punto 5
console.log ("punto 5") ;

var ciclo5=prompt("ingrese un negativo para detenerse") ;
while (ciclo5 >=0) {
    console.log ("dijo" + ciclo5) 
    ciclo5=prompt("ingrese un negativo para detenerse") ;
    }


//punto 6 
console.log ("punto 6") ;

var suma=0 ;
var num1 ;
var num2 ;
while (suma <=20) {
    num1= parseInt(prompt("ingrese un valor"))
    num2= parseInt(prompt("ingrese otro valor"))
    suma =num1+num2 ;
    
}







