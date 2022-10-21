//el modulo bcrypt sirve para poder encriptar contraseñas y admeas aqui se compara una contraseña establecida, y se indica si esa contraseña genero ese cifrado
// devolviendo un true en casi que si y false en caso contrario

const bcrypt = require('bcrypt');

const password = '1234Segura!';

bcrypt.hash(password, 5, function(err, hash){
    console.log(hash);


    bcrypt.compare('password', hash, function(err, res){
        console.log(err)
        console.log(res)
    })
});