//libreria moment nos permite trabajar con fechas

const moment = require('moment');

let ahora = moment();

console.log(ahora.format('YYYY/MM/DD - HH:mm'));