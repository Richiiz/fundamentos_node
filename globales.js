// //node contiene unos modulos que permiten, en el codigo, dar ciertas funcionalidades, para node funcione correctamente
// debe tener sus modulos globales, para poder usar la mayoria de funcionalidades basicas y complejas que se conocen de Node
// ya se asetTimeout, setInterval, etc
// console.log(global);


// console.log(setInterval);


// let i = 0;
// let intervalo = setInterval(function() {
//     console.log('hola');
//     if (i === 3){
//         clearInterval(intervalo);
//     }
//     i++;
// }, 1000); 

// setImmediate(function(){
//     console.log('hola')
// });

//da info de lo que podemos hacer
// console.log(process);

//indica donde esta el directorio
// console.log(__dirname);

//para saber como se llama el fichero(archivo) en el que estamos
// console.log(__filename);


//si es posible, no usar variables globales, para eso se crean modulos u otras formas ya que crea varios problemas
global.miVariable = 'elValor';
console.log(miVariable);



//documentacion para mas modulos: https://nodejs.org/docs/latest-v16.x/api/index.html