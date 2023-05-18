//
// 6️⃣ ***** EJERCICIO 6 ***** - sortPrimeHouses() 6️⃣
// 
// Implementar un algoritmo de ordenamiento, que además de ordenar un array de menor a mayor,
// retorne false si un número dentro del array no es primo
// EJEMPLOS:
// Dado el siguiente array:
// [25, 3, 6, 8, 5, 12, 9, 18, 11, 7]
// sortPrimeHouses() retorna => false (porque 25 por ejemplo, no es primo)
//
// Dado este otro array:
// [61, 7, 13, 11, 29, 3]
// sortPrimeHouses() retorna => [3, 7, 11, 13, 29, 61]
//⚠️ ATENCION ⚠️
// NO utilizar el método sort() de Array!
// REQUISITOS:
//  🟢 Aplicar un algoritmo de ordenamiento de menor a mayor
//  🟢 Si numuero dentro del array no es primo, retornar false

function sortPrimeHouses(array) {
  // Tu código aquí:
  let aux;
  for(let i = 0; i < array.length; i++){
    let min = i;

    if(!esPrimo(array[i])) return false;

    for(let j = i + 1; j < array.length; j++){
      if(array[min] > array[j]){
        min = j;
      }        
    }

    if(min !== i){
      aux = array[i];
      array[i] = array[min];
      array[min] = aux;
    }
  } 

  return array;
}

function esPrimo(numero){
	if (numero == 0 || numero == 1 || numero == 4) return false;

	for (let x = 2; x < numero / 2; x++) {
		if (numero % x === 0) return false;
	}

	return true;
}

// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = {
  sortPrimeHouses
};