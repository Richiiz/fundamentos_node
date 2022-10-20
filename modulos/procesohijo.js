
//spawn lo que hace es invocar un nuevo proceso de js
const { exec, spawn } = require('child_process')


// const { exec } = require('child_process')

//esto nos permite ejecutar un comando de terminal
//err nos manda el error normal
//stdout nos muestra la salida principal estandar
//sterr nos enseña algun tipo de error que haya ocurrido

//este comando lo que hace es ejecutar un proceso dentro de otro proceso por debajo del hilo
// exec('node modulos/consola.js', (err, stdout, sterr) => {
//     if (err){
//         console.error(err);
//         return false;
//     }
//     console.log(stdout)
// })


let proceso = spawn('ls', ['-la']);

console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on('data', function(dato){
    console.log('esta muerto?')
    console.log(process.killed);
    console.log(dato.toString())
});

proceso.on('exit', function(){
    console.log('el proceso termino');
    console.log(proceso.killed);
})