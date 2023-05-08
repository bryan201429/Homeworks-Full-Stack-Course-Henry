"use strict";

function BinarioADecimal(num) {
  // 011001 = 25
  // <------- leyendo de der a izq
  //    1 * 2 ** 0  = 1
  //    0 * 2 ** 1  = 0
  //    0 * 2 ** 2  = 0
  //    1 * 2 ** 3  =  8
  //    1 * 2 ** 4  =  16
  //    0 * 2 ** 5  =   0
  var nums= String(num).split('').map(Number);
  
  var suma=0;
  var i=nums.length-1;
  for(let x=0;x<nums.length;x++){
    if(nums[x]==1){
      suma=suma+Math.pow(2,i);
      i--;
    }
  }
  return suma;
}

function DecimalABinario(num) {
  // 91 = 1011011
  // 91 / 2 = 45  (.5) ===> 1
  // 45 / 2 = 22   (.5) ===> 1
  // 22 / 2 = 11  (0) ===> 0
  // 91 / 2 = 45 residuo 1
  // 45 / 2 = 22 residuo 1
  // 22 / 2 = 11 residuo 0
  // 11/ 2 = 5 residuo 1
  // 5 / 2 = 2 residuo 1
  // 2 / 2 = 1 residuo 0
  // 1 / 2 = 0 residuo 1
  
  var res=0;
  let bin=[];
  while(num>0){
    res=num%2;
    bin.push(res);
    num=Math.floor(num/2);
  }
  return bin.reverse().join('');

}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
