// funcion tradicional para calcular
// la distancia entre 2 puntos

function calcularDistancia(x1,y1,x2,y2){

    //restax tradicional
 
    //restarx con fecha
    //let restax=(x2,x1)=>(x2-x1) 
    //console.log (restax)
    //restay tradicional
 
    //restay con fecha
    //let restay=(y2,y1)=>(y2-y1) 
    //raizcuadrada
 
    return (Math.sqrt(Math.pow ((x1-x2),2)+Math.pow ((y1-y2),2)))
}

//llamado de funcion 

let distancia=calcularDistancia(0,0,-10,-10).tofixed(2);
console.log(`La distancia calculada es ${distancia}`)