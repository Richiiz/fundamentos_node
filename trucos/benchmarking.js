// para saber cuanto tarda en ejecutarse nuestro codigo o una parte de este usamos console.time y console.timeEnd
// Benchmark = prueba de rendimiento o comparativa en inglés

console.time('todo');

let suma = 0;

console.time('bucle');
for (let i = 0; i<1000000000; i++){
    suma += 1;
}
console.timeEnd('bucle');


let suma2 = 0;

console.time('bucle2');
for (let j = 0; j<100000000; j++){
    suma2 += 1;
}
console.timeEnd('bucle2');

console.time('asincrono');
console.log('comienza el proceso asincrono')
asincrono()
.then(()=>{
    console.timeEnd('asincrono');
})

console.timeEnd('todo')

function asincrono(){
    return new Promise((resolve)=>{
        setTimeout(function(){
            console.log('termina el proceso asincrono')
            resolve();
        })
    })
}