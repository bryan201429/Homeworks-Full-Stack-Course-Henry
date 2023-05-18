'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length<=1){return array;} 

  let Izq=[];
  let Der=[];
  let newArr=[];
  let pivot=Math.floor(array.length/2)-1;
  let pivotvalue=array[pivot];
  
  for(let i=0;i<array.length;i++){
    if(i!==pivot){
      if(array[i]<pivotvalue){ Izq.push(array[i]);}
      else{Der.push(array[i])};
    }
  }

  newArr=quickSort(Izq).concat(pivotvalue).concat(quickSort(Der));
return newArr; 
  

}
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

function mergeSort(array) {

  if(array.length<=1){return array;}                // Cuando solo haya un valor retornar el array de entrada

  let valormedio=Math.floor(array.length/2);
  let izq=array.slice(0,valormedio);                //Desde el primer elemento hasta el valormedio
  let der=array.slice(valormedio,array.length);                   //Desde valor medio hasta el final

  let izqOrd=mergeSort(izq);
  let derOrd=mergeSort(der);

  return merge(izqOrd,derOrd);

}

function merge(izq,der){
  let mergearr=[];
  let i=0;
  let j=0
      while(i<izq.length && j<der.length){
              if(izq[i]<der[j]){mergearr.push(izq[i]);i++;}            //cuando sea menor el de izq lo inserto
              else{mergearr.push(der[j]);j++;}
      }
      
      while(i<izq.length){  mergearr.push(izq[i]);i++;}

      while(j<der.length){  mergearr.push(der[j]);j++;}
  

  console.log(mergearr);
  return mergearr;

}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
