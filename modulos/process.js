//no se tiene que importar process ya que viene dentro de los modulos globales
// const process = requiere ('process');
// El objecto process es una instancia de EventEmitter; podemos suscribirnos a el para escuchar eventos de node.



process.on('beforeExit', () => {
    console.log('el proceso va a terminar')
});

process.on('exit', () => {
    console.log('el proceso acabo')
    setTimeout(() => {
        console.log('esto no se vera nunca')
    }, 0);
});


process.on('uncaughtException' , (err, origen) =>{
    console.log('vaya se nos ha olvidado capturar un error amiguito');
    setTimeout(() => {
        console.log('esto viene desde las excepciones')
    }, 0);
})


functionque();
console.log('si el error no se recoge, no sale');