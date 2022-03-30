//los arrelos son estructuras que almacenan informacion de cualquier tipo de datos,es decir,string, int, double, array, objetos,entre otros. los arreglos tienen operaciones tales como: consultar,modificar,insertar y eliminar
//los arreglos se  declaran con []


//creacion de arreglos
var arreglo=["juan",14] ;
console.log(arreglo) ;
//arreglo de arreglos
var notasEstudiantes=[["sofia",4.8],["isa",4.6]]
console.log(notasEstudiantes) ;
//consultar contenido del arreglo
console.log(notasEstudiantes[0]) ;
console.log(notasEstudiantes[0][0]) ;
console.log(notasEstudiantes[1][1]) ;
//modificar elementos
console.log(arreglo[0] + " tiene " + arreglo[1]) ;
arreglo[1] = 15 ;
console.log(arreglo[0] + " tiene " + arreglo[1] + "años") ;

notasEstudiantes [2] = 5.0
console.log(notasEstudiantes [1] + "obtuvo" + notasEstudiantes [2] + "notaFinal") ; 



//agregar elementos al arreglo
console.log("sin agregar" + arreglo) ;
arreglo.push ("10a") ;
console.log("agregado" + arreglo) ;

//agregar elementos al arreglo desde el inicio
console.log("sin agregar" + arreglo) ;
arreglo.unshift ("perez") ;
console.log("agregado" + arreglo) ;

//eliminar elementos al arreglo
console.log("sin eliminar" + arreglo) ;
arreglo.pop() ; 
console.log("eliminado" + arreglo) ;
arreglo.shift(); //elimina el primer elemento
console.log("elimina.shift" + arreglo) ;



//ejercicio
/*
1 crear el arreglo con los valores
   - analisis
   - tecnologia
   - desarrollo

2 cambiar desarrollo por BBDD
3 convertir el vector en:
   -introduccion 
   -analisis
   -tecnologia
   */ 


   var arreglo=["analisis","tecnologia","desarrollo"] ;
   console.log (arreglo) ;
   arreglo[2] = "BBDD" ;
   console.log(arreglo) ;
   arreglo.pop () ; 
   console.log ("eliminado " + arreglo) ; 
   arreglo.unshift ("introduccion") ;
   console.log("agregado " + arreglo) ;




   