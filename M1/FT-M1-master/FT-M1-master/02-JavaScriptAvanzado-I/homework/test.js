function saludar(saludo){
   console.log(saludo);
   return function(nombre){
      console.log(`${saludo} ${nombre}`);
   }
}

Hola=saludar('Hola');
Hola('nayrb');