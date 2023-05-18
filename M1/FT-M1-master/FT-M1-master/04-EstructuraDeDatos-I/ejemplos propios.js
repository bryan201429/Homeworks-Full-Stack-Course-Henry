////////////////    RECURSIVIDAD ///////////////////////////
function recursiva(numero){
    let number=numero+1;
    console.log(number);
    if (number>10){
        console.log(`El numero inmcrementado es: ${number}`);
        return number;
    }
    recursiva(number);
}

recursiva(4);

///////////////

function regresiva(numero){
console.log(`Número es: ${numero}`);
numero--;
if(numero==0){
    console.log(`Número es: ${numero}`);
    return numero;
}
regresiva(numero);
}

regresiva(4);

/////////////////////

const comunidad=['a','b','c','d'];


function imprimerecursiva(comunidad){

    if(comunidad.length){                     //Cuando es diferente de 0 ejecuta, cuando sea 0 acaba la función
        let miembro = comunidad.shift();      // .shift() extrae el primer valor del array, pero modifica al original
        console.log(miembro);
        imprimerecursiva(comunidad);          //Regreasa al inicio de la función
    }
    
};

imprimerecursiva(comunidad);

arr=[1,2,3]

function sumaArray(arr){
    if(arr.length===0){
        return 0;
    }
    else{
        const nuevonumero=arr[0];
        const nuevoarray=arr.slice(1);    //elimina el primer numero y almacena el resto del array
        return nuevonumero+sumaArray(nuevoarray);
    }
}

console.log(sumaArray(arr));

////////// ESTRUCTURAS DE DATOS ///////////////

let arreglo=['a','b','c','d','e'];            //debe ser let, no const para modificarlo


console.log(arreglo)
let eliminado= arreglo.pop()        // pop modifica el array original
console.log(eliminado);
console.log(arreglo);
arreglo.push(eliminado);            // agregamos un nuevo elemento modificando array orig.
console.log(arreglo);

let vanpaseo=arreglo.slice(0,3)     // no modifica el array original, solo extrae un rango de valores
console.log(vanpaseo);              // 
console.log(arreglo);


function encontrar(){
    if(arreglo.includes("c")){                  //Retorna True o False si contiene un valor
        console.log("esta presente");
    }
    else{
        console.log("no esta presente");
    }
}
encontrar();


arreglo.push('2');
console.log(arreglo);
//let traidor = arreglo.find((element)=>)


/////// SETS //////              SIMILAR A ARREGLO, PERO NO SE PERMITEN REPETIDOS ELEMENTOS

const michiPizzeria = new Set([
    "Hongos",
    "Hawaiana",
    "Especial",
]);

console.log(michiPizzeria);
console.log(michiPizzeria.size);

// function agregarPizzas(){
//     nuevaspizzas.foreach((pizza)=>{
//         michiPizzeria.add(pizza);
//     });
// }
// agregarPizzas();


/////  STACK ////////      No es una estructura de datos nativa de javascript
                        // Es conceptual, para acceder, se retiran los ultimos elementos primero

let pila =[];

pila.push(1);
pila.push(2);
pila.push(3);
pila.push(4);
pila.push(5);

console.log(pila);

let ultimoValor= pila.pop();
console.log(ultimoValor);

let primerValor= pila.shift();      // En un Stack no deberia accederse al primer elemento, solo ultimo




function Stack(){                   // Creacion mediante funcion constructora
    this.arr=[];
}

Stack.prototype.add= function(value){
    this.arr.push(value);
};

Stack.prototype.delete=function(){         
    return this.arr.pop();
};


const pilaB=new Stack();
const pilaCopia= new Stack();

pilaB.add(1);
pilaB.add(2);
pilaB.add(3);
pilaB.add(4);
pilaB.add(5);

console.log(pilaB);
console.log(pilaB.delete());



// function nFactorial(n) {

//     if (newn>0){ 
//         let newn=n-1
//         let fact=n*nFactorial(newn)
//        }
//     else{
//         console.log(fact);
//         return fact;
//     }
//        let newn=n-1
//        let fact=n*nFactorial(newn)
//     console.log(newn);
//     return fact;
//   }

//   nFactorial(5);

var set =new Set();


//QUEUE         //  CUMPLEN EL PRINCIPIO DE FIFO
function Queue() {
    this.arr=[];
  };
  
  Queue.prototype.enqueue=function(n){
    this.arr.push(n);
  };
  Queue.prototype.dequeue=function(){
    if (this.arr.length===0){
      return undefined;
    }
    this.arr.shift();
  };
  Queue.prototype.size=function(){
    return this.arr.length;
  }
  

  var x= new Queue();

  console.log('////////////////');
  x.enqueue(4);
  x.enqueue(3);
  x.enqueue(6);
  console.log(x.size());
  x.dequeue();
  console.log(x.size());
  console.log(x.arr);