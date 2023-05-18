
function factorear(num) {
    // Factorear el número recibido como parámetro y devolver en un array
    // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
    // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
    // Tu código:
    let i=2;
    let arrfact=[1];
    while(num!==1){
      if(num/i!==num && num%i===0){      //si cambia el valor de aux && no hay residuo entre el factor
        arrfact.push(i);                            //guarda el factor
        num=num/i;
      }                                   
      else {i++;}                        //HAY un RESIDUO, por ello no lo cuenta como factordebe incrementar el i(factor)
    }
    return arrfact;
  }

  console.log(factorear(20));

  function bubbleSort(array) {
    // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
    // el array recibido como parámetro
    // Devolver el array ordenado resultante
    // Tu código:
    let swap=false;

    while(swap===false){
        swap=true;

        for(let i=0;i<(array.length-1);i++){            //Recorre todo el array
            if(array[i]>array[i+1]){                    //Valor[] desordenado
                let aux=array[i+1];
                array[i+1]=array[i];
                array[i]=aux;
                swap=false;
            }
        }
    }
    return array;
}


  arrDes=[1,5,3,8,9,10,7,6,0];
  console.log(bubbleSort(arrDes));

  console.log('////////////////Selection Sort//////////////');

  function selectionSort(array) {
    // Implementar el método conocido como selectionSort para ordenar de menor a mayor
    // el array recibido como parámetro utilizando dos arreglos
    // Devolver el array ordenado resultante
    // Tu código: 
  
    // let temp=0;
    // for(let i=0;i<array.length;i++){
    //   for(let j=i+1;j<array.length;j++){
    //     if(array[j]<array[i]){
    //       temp=array[i];
    //       array[i]=array[j];
    //       array[j]=temp;
    //     }
    //   }
    // }
    // console.log(array);
    // return array;

    
  let temp=0;
  let posmin=0;

  for(let i=0;i<array.length;i++){     
    posmin=i;   
    for(let j=i+1;j<array.length;j++){    //Recorre todos los valores arriba de [i]
      if(array[j]<array[posmin]){
        posmin=j;
        min=array[posmin];
      }
    }
      if(posmin!==i){
        temp=array[i];
        array[i]=array[posmin];
        array[posmin]=temp;
      }
  }
  console.log(array);
  return array;
  
  }
  
  selectionSort(arrDes);
  console.log('////////////////Insertion Sort//////////////');

  
  function insertionSort(array) {

    let temp=0;
    for(let i=1;i<array.length;i++){
      if(array[i]<array[i-1]){      //si item actual es menor que item anterior inicia el bucle
        for(let j=i;j>0;j--){     //Bucle de intercambio inverso
          if(array[j]<array[j-1]){ //Si es menor que valor anterior,realiza intercambio, sino va a un item antes
              temp=array[j-1];
              array[j-1]=array[j];
              array[j]=temp;
          }
        }
      }
    }
    return array;
  }
  
 console.log( insertionSort(arrDes));