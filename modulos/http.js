const http = require('http');

http.createServer(router).listen(3000);
function router (req, res){
    console.log('nueva peticion!');
    console.log(req.url);

    switch (req.url){
        case '/hola':
            res.write('hola, que tal');
            res.end();
            break;
        default:
            res.write('error 404: no se lo que quieres')
            res.end();
    }
}    
//     res.writeHead(201,{'Content-Type': 'text/plain'});


//     //para responder a una peticion nueva que se hace cuando alguien entra al servidor abierto
//     res.write('hola, ya se usar http de nodeJS');


//     res.end();
// }

// console.log("escuchando http en el puerto 3000");
//dkgnjdf