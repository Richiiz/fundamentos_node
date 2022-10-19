console.log('hola mundo');

let i = 0;
setInterval(function(){
    console.log(i);
    i++

    // provocando un error
    // if(i === 5){
    //     var a = 3+z;
    // }
}, 1000);

// ejemplo de asincronismo, mientras se hace el loop, se imprime esta linea
console.log('segunda instruccion');



// es muy muuuy pero asi muuuuuuy importante que se verifique el codigo y que procueros que no falle, ya que al detectar un error
// se parara todo el proceso de forma inmediata