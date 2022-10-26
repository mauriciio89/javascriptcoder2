var parcial, final, promedio;
parcial = parseFloat(prompt("Parcial"));
final = parseFloat(prompt("Final"));
promedio = (parcial+final)/2;

if(promedio >= 10.5){
    alert("El promedio es "+promedio+" APROBADO")
}
    else{
        alert("El promedio es "+promedio+" DESAPROBADO")
}