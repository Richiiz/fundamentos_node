function hola(nombre, Micallback) {
    setTimeout(function()  {
        console.log('hola ' + nombre);
        Micallback(nombre);
    }, 1000);
}

function adios(nombre, otroCallback){
    setTimeout(function(){
        console.log('adios', nombre);
        otroCallback();
    }, 1000);
}
 
console.log('iniciando proceso... pi pu pi')
hola('carlos', function (nombre){
    adios(nombre, function(){
        console.log('terminando proceso... bi bu bo')
    });
});