

function quickSort(array) {
    
    if(array.length<=1){return array;}       //Si es de long 1, regresa el elemento
        

    let pivot=Math.floor(array.length/2)-1;      //posicion pivote
    let pivotvalue=array[pivot];
    let arrIzq=[];
    let arrDer=[];
    let arrOrd=[];


    for(let i=0;i<array.length;i++){
        if(i!==pivot){
            if(array[i]<array[pivot]){ arrIzq.push(array[i]); }     //Menor que item pivot, se va a Izq
            else{arrDer.push(array[i]);}                          //Mayor que item pivot, se va a Der
        }   
    }

    // console.log('Pivot: ',array[pivot]);
    // console.log('Izq: ',arrIzq);
    // console.log('Der:', arrDer);
    // console.log('/////Division hecha///////')
    

    arrOrd=quickSort(arrIzq).concat(pivotvalue).concat(quickSort(arrDer));
    console.log('Ordenado: ', arrOrd);
    console.log('//////////////////////')
    return arrOrd;

  }
  
  let arrdes=[5,3,2,4,3,6,7,0,11,15];

  console.log(quickSort(arrdes));

 
  
///////////////// MERGE SORT //////////////////////////////
console.log('/////////////MERGE SORT/////////////');

function mergeSort(array) {

    if(array.length===1){return array}
    dividir(array);  
  }

  function dividir(array){
    let valormedio=Math.floor(array.length/2);
    let izq=array.slice(0,valormedio);                //Desde el primer elemento hasta el valormedio
    let der=array.slice(valormedio,array.length);                   //Desde valor medio hasta el final
    console.log(izq);
    console.log(der);
  }

  function merge(izq,der){
    mergearr=[];
    let i=0;
    let j=0
        while(i<izq.length && j<der.length){
                if(izq[i]<der[j]){mergearr.push(izq[i]);i++;console.log('i: ',i);}            //cuando sea menor el de izq lo inserto
                else{mergearr.push(der[j]);j++;console.log('j: ',j);}
        }
        
        while(i<izq.length){
            mergearr.push(izq[i]);i++;console.log('i: ',i);
        }

        while(j<der.length){
            mergearr.push(der[j]);j++;console.log('j: ',j);
        }
        //while
    

    console.log(mergearr);
    return mergearr;
  }

  let ejem=[0,2,5,6,7,8,9];
  //dividir(ejem);

  let ejizq=[0,1,1,2,3,6];
  let ejder=[3,7];
  
  merge(ejizq,ejder);

