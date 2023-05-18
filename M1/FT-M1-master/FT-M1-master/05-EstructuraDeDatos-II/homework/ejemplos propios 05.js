const { has } = require("markdown-it/lib/common/utils");

function LinkedList(){
    this.head=null;
}

function Node(value){
    this.value=value;
    this.next=null;
}

LinkedList.prototype.add = function(value){
    var newNode = new Node(value);           // Crea un nodo, Value ingresa al nuevo nodo

    var current = this.head;                  //Inicialmente apunta al primer nodo, currente recorrera el array

    if(current==null) {                   //si no hay nodos(head=null), head apuntara al nuevo nodo creado
        this.head=newNode
        return value;
    }     
    while(current.next !== null){         //si hay un siguiente valor, current apuntara al siguient nodo
        current=current.next;
    }
    current.next=newNode;
    return value;
    
}

LinkedList.prototype.remove=function(){
    let current=this.head;
  
    if(current===null){return null};    //no hay elementos
    if(current.next===null){            //en caso solo haya un nodo;
        current.head=null;              //elimina el puntero al ultimo nodo;
        return current.value;
    }
    while(current.next.next!==null){            // mientras que siga habiendo otro nodo sigue recorriendo el linkedlist
      current=current.next; 
    }
    let aux=current.next;
    current.next=null;
    return aux;
  
  }

  LinkedList.prototype.search=function(arg){        //arg puede ser un valor o un callback
    let current=this.head;                          // si no hay nodos
    //if(!current){return null;}
    while(current.next!==null){
      if(typeof(arg)==='function'){
        if( arg(current.value)) return current.value;   // Si el value es true al pasar por el callback, devuelve el valor
      }
      else if(current.value===arg){ return current.value;}
      current=current.next;
    }
    return null;
  }

console.log();
var miLista= new LinkedList();
miLista.add(1);
miLista.add(2);
miLista.add(3);
miLista.add(4);
console.log( miLista);
miLista.add(8);
console.log( miLista);
console.log(miLista.remove());
console.log('Se elimno un elemento:',miLista);

miLista.add(5);
console.log( miLista);
miLista.add(7);
miLista.add(9);
console.log( miLista);
console.log(miLista.search(2));



function HashTable() {
  this.buckets=[];
  this.bucketsnum=35;
   
}

HashTable.prototype.hash=function(value){   //se calculará el numero de hash ingresando un string, 
  let Hash=0
  for(let x=0;x<value.length;x++){          //  recorre el string "value" caracter por caracter  
    Hash=Hash+value.charCodeAt(x);          //  hash será el sumatoria de el código numérico de cada caractér
  }
  Hash=Hash%this.bucketsnum;
  console.log('el hash es',Hash);
  return Hash;                //  cálculo del modulo entre el valor y la cantidad de buckets
}

let milista= new HashTable();
milista.hash('ga');
