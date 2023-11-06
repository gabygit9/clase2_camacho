//El 3º parámetro recibido es un callback, que es una función que se pasa como 
//argumento a la función suma.
//Este tipo de funciones son obligatorias de desarrollar cuando se desea 
//realizar una operación asíncrona (ej. solicitud HTTP). En lugar de bloquear
//la ejecución del programa mientras se espera que se complete la operación, 
//se puede proporcionar un callback que se ejecuta una vez que la operación haya finalizado.

function miCallback(resultado){
    console.log(`El resultado es: ${resultado}`);
}
function suma (a,b,callback){
    let c = a +b;
    callback();
}

suma(5,3,miCallback);

