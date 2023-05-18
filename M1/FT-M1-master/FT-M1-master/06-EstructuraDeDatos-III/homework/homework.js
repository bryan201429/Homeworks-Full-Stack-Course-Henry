'use strict';

const { arrayReplaceAt } = require("markdown-it/lib/common/utils");

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first(DFS)
   en cualquiera de sus variantes, según se indique por parámetro
    ("post-order", "pre-order", o "in-order").
   Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png 
  dentro del directorio homework.
*/
function BinarySearchTree(value) {
   this.value=value;
   this.left=null;
   this.right=null;
   this.count=1;
}

BinarySearchTree.prototype.size = function(){
   let count=1;                                 //Inicialmente siempre hay 1 que es el mismo nodo

  //if(this.left===null){if (this.right===null) return 1;}    // Si no hay valor ni a la izq ni derecha, solo hay un nodo
  if(this.left){             //Si hay un valor a la izq
     count+=this.left.size();
  }
  if(this.right){
     count+=this.right.size();
  }
//console.log(count);
return count;
}

BinarySearchTree.prototype.insert = function(dato){
let newBST=new BinarySearchTree(dato);


  if(dato<this.value){             // Si es menor se va a la IZQ   
     if(this.left){         //Si HAY un nodo a la izq          
        this.left.insert(dato);   //Llamada recursiva para que el nod de la izq se encargue de insertar en el sig nivel
     }
     else{                         //NO HAY NADA A LA IZQ      
        this.left = newBST;        //inserta el nuevo nodo
     }
  }

else if(dato>=this.value){                // Si es mayor se va a la DER         
        if(this.right){                  //Si es que hay un valor a la derecha
           this.right.insert(dato);     //al nodo de la derecha se encarga de hacer una inserción
        }
        else{                            //Si no hay un valor a la derecha, inserta directamente value
           this.right=newBST;
        }

}
}


BinarySearchTree.prototype.contains = function(dato) {
   if(this.value===dato){      return true;   }
   
   if(dato<this.value){          //Va a rama izquierda
      if(this.left){
         return this.left.contains(dato);
      }
      
   }
   else if (dato>this.value){    //Va a rama derecha
      if(this.right){
         return this.right.contains(dato);
      }
   }
   return false;
}

BinarySearchTree.prototype.depthFirstForEach = function(callback,order="in-order") {

   if(tipo==='post-order'){
      if(this.left) {this.left.depthFirstForEach(callback,tipo)};
      if(this.right) {this.right.depthFirstForEach(callback,tipo)};
      callback(this.value);
   }

   else if(tipo==='pre-order'){
      callback(this.value);
      if(this.left) { this.left.depthFirstForEach(callback,tipo)};
      if(this.right) {this.right.depthFirstForEach(callback,tipo)};
   }

   else if(tipo==='in-order'){
      if(this.left) { this.left.depthFirstForEach(callback,tipo)};
      callback(this.value);
      if(this.right) {this.right.depthFirstForEach(callback,tipo)};
   }
   
   // if (order === "pre-order") callback(this.value);

   // if (this.left) this.left.depthFirstForEach(callback, order);

   // if (order === "in-order") callback(this.value);
   
   // if (this.right) this.right.depthFirstForEach(callback, order);

   // if (order === "post-order") callback(this.value);

}

BinarySearchTree.prototype.breadthFirstForEach = function(callback) {
   let queue = [this];           //Inicializado en la raíz o primer nodo (this)
   
   while (queue.length > 0) {    //Se ralizara el bucle hasta que se procesen todos los nodos, cola vacía
      let node = queue.shift();  //Extrae el primer elemento del array para procesarlo desde la variable "node"
      
      callback(node.value); //Realiza una función callback a cada valor del nodo

      if (node.left) {
         queue.push(node.left);
      }
      
      if (node.right) {
         queue.push(node.right);
      }
   }
   //return queue;
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
