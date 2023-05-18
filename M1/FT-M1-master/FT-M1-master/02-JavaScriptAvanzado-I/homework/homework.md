# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1;
var a = 5;
var b = 7;
var c = function (a, b, c) { //8,9,10
   var x = 10;
   console.log(x);      //x= 10
   console.log(a);      //a= 8
   var f = function (a, b, c) { 
      //8,9,10
      //es como si declarase var a =8,var b=9,var c=10
      b = a;            //b=8
      console.log(b);   //b=8
      b = c;            //b=10
      var x = 5;        //x=5
   };
   f(a, b, c);          
   console.log(b); //10
   console.log(x); //5
};

c(8, 9, 10);
console.log(b); //7
console.log(x); //1
```

```javascript
console.log(bar); // undefined
console.log(baz); // undefined
foo();            // Hola!
function foo() {
   console.log('Hola!');
}
var bar = 1;      //bar=1
baz = 2;          //baz=2
```

```javascript
var instructor = 'Tony';
if (true) {
   var instructor = 'Franco';
   //si se usa let, es block scopped, solo alcance de bloque, var tiene alcance global
}
console.log(instructor); //Franco
```

```javascript
var instructor = 'Tony';
console.log(instructor); // Tony
(function () {
   if (true) {
      var instructor = 'Franco'; 
      console.log(instructor);   //instructor = Franco
   }
})(); // "()" es inmediatly invoque, ejecuta inmediatamente la funcion.
console.log(instructor); // //instructor = Tony
```

```javascript
var instructor = 'Tony'; // Tony
let pm = 'Franco'; 
if (true) {
   var instructor = 'The Flash'; // 
   let pm = 'Reverse Flash';
   console.log(instructor);   // instructor = The Flash
   console.log(pm);           // pm = Reverse Flash
}
console.log(instructor);      // instructor = The Flash
console.log(pm);              // pm = Reverse Flash
```

### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3"        //2
"2" * "3"      //6
4 + 5 + "px"   //9px
"$" + 4 + 5    //$45
"4" - 2        //2
"4px" - 2      //NaN
7 / 0          //Inf
{}[0]          //Objeto vacio
parseInt("09") //9
5 && 2  // si ambos son verdaderos devuelve el segundo operando: 2, si uno es falso devuelve 0
2 && 5  // 5
5 || 0  // 5, si ambos son true, me quedo con el primero
0 || 5  // 5
[3]+[3]-[10] //33-10 =23
3>2>1 // True>1 ->>>>>> False
[] == ![] // ?
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).

### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a);      //undefined
   console.log(foo());  //2

   var a = 1;
   function foo() {
      return 2;
   }
}

test(); //2
```

Y el de este código? :

```javascript
var snack = 'Meow Mix'; 

function getFood(food) {
   if (food) { //false, no ejecuta
      var snack = 'Friskies';
      return snack;
   }
   return snack; //'Meow Mix'
}

getFood(false);
```

### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function () {
         return this.fullname; // Aurelio de Rosa
      },
   },
};

console.log(obj.prop.getFullname()); //Aurelio de Rosa

var test = obj.prop.getFullname; //test = Aurelio de Rosa

console.log(test()); //undef
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);                  //1
   setTimeout(function () {
      console.log(2);               //4
   }, 1000);
   setTimeout(function () {
      console.log(3);               //3 (después del timeOut)
   }, 0);
   console.log(4);                  //2 (después del timeOut)
}

printing(); //1, 4, 3 , 2
```

</br >

---

## **✅ FEEDBACK**

### Usa este [**formulario**](https://docs.google.com/forms/d/e/1FAIpQLSe1MybH_Y-xcp1RP0jKPLndLdJYg8cwyHkSb9MwSrEjoxyzWg/viewform) para reportar tus observaciones de mejora o errores. Tu feedback es muy importante para seguir mejorando el modelo educativo.
