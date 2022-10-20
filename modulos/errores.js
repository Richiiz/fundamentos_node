function otraFuncion(){
    serompe();
}


function serompe(){
    return 3+Z;
}


function seRompeAsincrona(cb){
    setTimeout(function () {
        try{
        return 3 + z;
        }catch (err){
            console.error('error en la funcion asincrona')
            cb(err)
        }
    })
}

try{
    //otraFuncion();
    // otraFuncion();
    seRompeAsincrona(function(err){
         console.log(err.message)
    });
}catch(err){
    console.error('vaya, algo murio D:')
    // console.error(err)
    console.error(err.message)
    console.log('pero tranqui, lo hemos capturado y trabajaremos en eso :D')
}


console.log('esto de aqui esta al final')