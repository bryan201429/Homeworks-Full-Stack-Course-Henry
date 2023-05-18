// function sumar(a,b){
//     console.log(a);
//     console.log(b);
//     return a+b;
// }

// const imprimir= function(){
//     return sumar(1,2);
// }

// console.log(imprimir);
// console.log(imprimir());
// console.log(imprimir(2,3))


////////////////////////////////////
// let a=5
// let b={nombre:"Gama"}

// a = b;   //Apunta a una referencia

// console.log(b);
// console.log(a);

// b.nombre="Sol";

// console.log(b);
// console.log(a);



// let a=5
// let b=1566

// a = b;   //Apunta a una referencia

// console.log(b);
// console.log(a);

// b="Sol";

// console.log(b);
// console.log(a);

// let c=5
// let d=c
// console.log(c);
// console.log(d);

// c=4
// console.log(c);
// console.log(d);

// var instructor = 'Tony';
// if (true) {
//    var instructor = 'Franco';
// }
// console.log(instructor); //Tony


// foo();            // Hola!
// function foo() {
//    console.log('Hola!');
// }


// var instructor = 'Tony';
// console.log(instructor); // Tony
// (function () {
//    if (true) {
//       var instructor = 'Franco'; 
//       console.log(instructor);   //instructor =Franco
//    }
// })();
// console.log(instructor); // //instructor =Tony

// function printing() {
//     console.log(1);                  //1
//     setTimeout(function () {
//        console.log(2);               //3
//     }, 1000);
//     setTimeout(function () {
//        console.log(3);               //2 (después del timeOut)
//     }, 0);
//     console.log(4);                  //4
//  }
 
//  printing();

x = 1;
var a = 5;
var b = 10;
var c = function (a, b, c) {
   var x = 10;
   console.log(x); //x= 10
   console.log(a);  //a= 8
   var f = function (a, b, c) {
      b = a;            //b=8
      console.log(b);   //b=8
      b = c;            //b=10
      var x = 5;        //x=5
   };
   f(a, b, c);          
   console.log(b); 
};

