let nombre = process.env.NOMBRE || 'jaimito'
let web = process.env.WEB || 'no tengo web'

console.log('hola ' + nombre);
console.log('mi web es: ' + web);


//se aprende a instalar nodemon y pm2
//nodemon sirve para que los cambios que se hagan en un archivo se auto guarden solos y se ejecute automaticamente el archivo, muy util para no repetir acciones mecanicas
//pm2 es util en el area de produccion pues muestra datos y que es lo que se esta ejecutando dentro de nuestro archivo. Ademas de poseer varias funciones de vigilancia y de registros.