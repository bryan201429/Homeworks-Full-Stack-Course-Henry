'use strict';

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo 
    y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback.
   En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/
function LinkedList() {
  this.head=null;           //Apuntará al primer elemento
}

function Node(value) {
  this.value = value;
  this.next = null;
}

LinkedList.prototype.add=function(value){
  let newNode=new Node(value);
  let current=this.head;        //Currente sera una variable auxiliar que recorrera la lista

  if(current===null){           //como current apunta a head, si no tienne nodos(null)
    this.head=newNode;          //asignará el primer nodo a this.head
    return value;               // retorna para terminar el método
  }
                                //si current encuentra un nodo, abra next y pasará a buscar
  while(current.next!==null){   //current buscará el ultimo elemento
    current=current.next;       //current pasará a ser el siguiente nodo
                           
  }                             //el while terminará cuando encuentre el ultimo nodo con valor null
  current.next=newNode;
  return value;
}
 
LinkedList.prototype.remove=function(){
  let current=this.head;
  
  if(current===null){return null};    //no hay elementos
  if(current.next===null){            //solo hay un nodo, por eso no hay next(null)
    this.head=null;                   //elimina el puntero al siguiente nodo, poniendolo null
    return current.value;
  }

  while(current.next.next!==null){            // mientras que siga habiendo otro nodo sigue recorriendo el linkedlist
    current=current.next; 
  }
  let aux=current.next.value;
  current.next=null;
  return aux;

}
LinkedList.prototype.search=function(arg){        //arg puede ser un valor o un callback
  let current=this.head;                          // si no hay nodos
  if(!current){return null;}
  while(current!==null){
    if(typeof(arg)==='function'){
      if( arg(current.value)) return current.value;   // Si el value es true al pasar por el callback, devuelve el valor
    }
    if(current.value===arg){ return current.value;}
    current=current.next;                             //No encuentra lo pedido, salta al siguiente nodo
  } 
  return null;
}

/* EJERCICIO 2
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; 
  es decir, posiciones posibles para almacenar la información), 
  donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). 
(Luego de haber pasado todos los tests, a modo de ejercicio adicional, 
  pueden modificar un poco la clase para que reciba la cantidad de buckets 
  por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. 
  Recibe un input alfabético, suma el código numérico de cada caracter del input 
  (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total 
  por la cantidad de buckets; de esta manera determina la posición de la tabla en la que 
  se almacenará el dato.

  - set: recibe el conjunto clave valor (como dos parámetros distintos), 
  hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde 
  en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo 
  almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. 
Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora';
 luego, invocando set('instructora', 'Ani'), 
 se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/
function HashTable() {
  this.buckets=[];
  this.numBuckets=35;
}

HashTable.prototype.hash=function(key){   //se calculará el numero de hash ingresando un string, 
  let Hash=0;     
  for(let x=0;x<key.length;x++){          //  recorre el string "value" caracter por caracter  
    Hash=Hash+key.charCodeAt(x);          //  hash será el sumatoria de el código numérico de cada caractér
  }
  Hash=Hash%this.numBuckets;
  return Hash;                //  cálculo del modulo entre el valor y la cantidad de buckets
}

HashTable.prototype.set=function(key,value){
  if (typeof key !== "string") throw new TypeError('No es un string la key');
  const hashindex=this.hash(key)
  if(!this.buckets[hashindex]){
    this.buckets[hashindex]={};
  }
  this.buckets[hashindex][key]=value;
  

}
HashTable.prototype.get=function(key){
  if (typeof key !== "string") throw new TypeError('No es un string la key');
  const indexhash=this.hash(key);

  return this.buckets[indexhash][key];
}
HashTable.prototype.hasKey=function(key){
  if (typeof key !== "string") throw new TypeError('No es un string la key');
  const indexhash=this.hash(key)
  if(!this.buckets[indexhash][key]) return false;
  //Tambien se puede poner return this.buckets[index].hasOwnproperty(key);
  else return true;
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Node,
   LinkedList,
   HashTable,
};
