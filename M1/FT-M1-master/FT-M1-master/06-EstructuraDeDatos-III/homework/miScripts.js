//Arbol autobalanceado
//min heap, llena todoos los espacios hasta que se llene el nivel y va comparando su valor y lo intercambia entre nodos


function BinarySearchTree(value) {
    this.value=value;
    this.left=0;
    this.right=0;
    
 }
 
 BinarySearchTree.prototype.size = function(){
        let count=1;
 
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
             this.left.insert(dato);   //Llamada recursiva para que el nod de la izq se encargue de insertar
          }
          else{                         //NO HAY NADA A LA IZQ      
             this.left = newBST;
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

 BinarySearchTree.prototype.breadthFirstForEach = function(printNodeValue) {
    let queue = [this];           //Inicializado en la raíz o primer nodo (this)
    
    while (queue.length > 0) {    //Se ralizara el bucle hasta que se procesen todos los nodos, cola vacía
       let node = queue.shift();  //Extrae el primer elemento del array para procesarlo desde la variable "node"
       
       printNodeValue(node.value); //Realiza una función callback a cada valor del nodo
 
       if (node.left) {            //si hay un hijo en la izq
          queue.push(node.left);   //Manda el valor a la cola para procesaro en el sig bucle
       }
       
       if (node.right) {            //si hay un hijo a la der
          queue.push(node.right);   //Manda el valor a la cola para procesaro en el sig bucle
       }
       console.log(queue);
       console.log('///////////////////');
    }
    return queue;
 }
 

 var arbol = new BinarySearchTree(3);
 arbol.insert(2);
 arbol.insert(5);
 arbol.insert(6);
 arbol.insert(8);
 arbol.insert(1);
 console.log(arbol);
 console.log(arbol.size());
 console.log('//////////////////');
 arbol.breadthFirstForEach(console.log);


console.log(180%1);