
let usuarios=[

{ nombre:"juan",edad:32, esPaisa:true},
{ nombre:"maria",edad:15, esPaisa:true},
{ nombre:"james",edad:30, esPaisa:false},
{ nombre:"diomadez",edad:60, esPaisa:false},
{ nombre:"jbalbin",edad:8, esPaisa:true},
{ nombre:"lina",edad:16, esPaisa:true},
{ nombre:"jose",edad:38, esPaisa:false},
{ nombre:"lucho",edad:22, esPaisa:false},
{ nombre:"falcao",edad:30, esPaisa:false},
{ nombre:"mariana",edad:35, esPaisa:true}

]

//filtrar el arreglo para obtener solo los usuarios mayores de edad
// crear una funcion anonima
//el filter me ayuda a filtrar segun lo que necesite 
/*
let filtrado=usuarios.filter(function(usuario){

//con el retorno traigo la condicion que necesito
    return(usuario.edad>=18)

}) 
console.log(filtrado) */


let filtrado=usuarios.filter(function(usuario){

//con el retorno traigo la condicion que necesito
    return(usuario.esPaisa==true && usuario.edad>=18)

}) 
console.log(filtrado) 
