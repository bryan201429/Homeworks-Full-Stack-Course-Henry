// function saludar(saludo){
//     console.log(saludo);
//     return function(nombre){
//        console.log(`${saludo} ${nombre}`);
//     }
//  }

//  Hola=saludar('Hola');
//  Hola('nayrb');
//  /////////////////////////////////////
 var incrementador = function(){
    var array =[]
    for(let i=0;i<4;i++){
        array.push(()=>console.log(i));
    }
    return array;
    }
var arr = incrementador();
arr[0]();
arr[1]();
arr[2]();

// /////////////////////////////////////

// const griffindor={
//     casa:"Griffindor",
//     ubicacion:"Torre del castle",
//     alumnos=[],
//     sombrero(nombre,apellido){
//         console.log(`Hola ${nombre} ${apellido}`);
//         alumnos.push(nombre,apellido);
//     }
// };
// griffindor.sombrero('Harry','Potter');


// //CALL ya puede usar arrays como enttradas con el spread operator: ...

// //METODO BIND: Crea una nueva funcion apuntando a

// //const seleccionadorSlythein = seleccionador.bind(slytherin);


//////////// CLOSURES /////////////////
//* Función que retorna una función

function almacen(){
    let caja=[];            //variable de scope local 
    return function(item){
        caja.push(item);
        return caja;
    };
}

var miAlmacen=almacen();  // miAlmacen contendra la funcion interna de almacen
miAlmacen("libros");
miAlmacen("discos");
console.log(miAlmacen("cuadros")); //No se puede acceder a la variable caja declarada en la función padre, solo se puede modificar a través de la función padre.

var miTienda=almacen();      // Tiene otra version de "caja" contenida, almacenará diferentes valores
miTienda('papas');
miTienda('gaseosa');
console.log(miTienda('galletas'));  


function casa(){
    let cuartos=[];
    return function(item){
        if (item == null) return cuartos;
        cuartos.push(item);
        return cuartos;
    }
}


var miCasa=casa();
miCasa('dormitorio');
miCasa('sala');
console.log(miCasa('Baño'));
console.log(miCasa());
miCasa('Patios');
console.log(miCasa());

function depa(cuarto){
    return function(item){
        if (item == null) return cuarto;
        cuarto.push(item);
        return cuarto;
    }
}

var miDepa=depa(sala=[]);
miDepa('mueble');
miDepa('tv');
console.log(miDepa());
miDepa('silla');


function tienda(){
    let productos=[];
    var count=0;
    return function(items){
        if(items==null){return [`La cantidad de productos es: ${count}`,productos];}
        productos.push(items);
        count++;
        return [`La cantidad de productos es: ${count}`,productos];
    }
}

miTiendapirata=tienda();
miTiendapirata('juegos bamba');
miTiendapirata('mandos');
console.log(miTiendapirata());
console.log(miTiendapirata('chipeos'));

//////////// BIND ////////////////////
// Crea una función copia de la originial, pero apuntando a un objeto particular


var persona={
    nombre:'Perico',
    apellido:'de los palotes',
};

function saludar(saludo){
    console.log("Hello there: ", this.nombre );
}
function despedir(){
    console.log("Bye Bye:", this.nombre);
}

function saludarEspecial(saludoPersonalizado){
    console.log(saludoPersonalizado," Hello there: ", this.nombre );
}

saludar();
var saludamos =saludar.bind(persona);       // en la variable, contiene una copia de saludar apuntando a persona
saludamos();                                // Se llama con () dado que representa una funcion

var despedida=despedir.bind(persona);
despedida();

                                                //SI LA FUNCION APUNTADA NO USA THIS, IGUAL DEBEMOS DECLARARLO EN .bind(null,argumentos...)

var saludoespecial=saludarEspecial.bind(persona,"Ahi va un especial!"); //(objeto apuntado,argumentos adicionales,"")
saludoespecial();                     // Se está fijando un parámetro

var saludoespecial=saludarEspecial.bind(persona);
saludoespecial("Ahi va un especial"); //Ingresa como argumento de la función


// CALL // .call ejecuta la funcion apuntando a un objeto deseado, pero no lo guarda en una variable nueva

saludar.call(persona); //Ejecuta una sola vez y se acabó
saludarEspecial.call(persona,'Otro!');

//APPLY
arrpersonalizado=["Este es un array"];
saludarEspecial.apply(persona,["Es diferente esta sintaxis va como array"]);
saludarEspecial.apply(persona,arrpersonalizado);