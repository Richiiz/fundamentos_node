const os = require('os');
//muestra la arquitectura de del sistema donde se corre el codigo
// console.log(os.arch());

// muestra el sistema en que se esta corriendo el codigo
// console.log(os.platform());

// muestra la cantidad de cores que en el que se pueden hacer procesos
// console.log(os.cpus().length);

//muestra todos los errores del sistema, ya que a veces los errores dependen del sistema operativo
// console.log(os.constants);

//muestra la cantidad de memoria libre
// const SIZE = 1024;
// function kb(bytes){ return bytes / SIZE}
// function mb(bytes){ return kb (bytes) / SIZE}
// function gb(bytes){ return mb (bytes) / SIZE}

// console.log(os.freemem());
// console.log(kb(os.freemem()));
// console.log(mb(os.freemem()));
// console.log(gb(os.freemem()));

// console.log(gb(os.totalmem()));  

// indica el directorio raiz de la computadora
// console.log(os.homedir())

// console.log(os.tmpdir())


// console.log(os.hostname())

console.log(os.networkInterfaces())