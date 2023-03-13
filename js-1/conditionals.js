function calcularColor(numero) {
    var color;
    if(numero===1){
        color= " Negro"
    } else if(numero===2){
        color= " Blanco"
    } else if(numero===3){
        color= " Azul"
    } else {
        color= " Verde"
    }
return "El numero es" + color
}
console.log(calcularColor(3))