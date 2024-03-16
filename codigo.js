const matematica=document.getElementById('notaMatematica');
const lengua=document.getElementById('notaLengua');
const efsi=document.getElementById('notaEfsi');
const notas =[matematica,lengua,efsi];
const resultado=document.getElementById("resultado")
let mayoresNotasMateria=document.getElementById("mayoresNotasMateria")

let validacion1 =  validar1 = (nota)=>{
    if(nota.value>10||nota.value<0) {
        alert('Los numeros son incorrectos');
        validacion1 = false;
    }else validacion1= true
    return validacion1;
}
let validacion2 =  validar2 = (nota)=>{
    if(nota.value>10||nota.value<0) {
        alert('Los numeros son incorrectos');
        validacion2 = false;
    }else validacion2= true
    return validacion2;
}
let validacion3 =  validar3 = (nota)=>{
    if(nota.value>10||nota.value<0) {
        alert('Los numeros son incorrectos');
        validacion3 = false;
    }else validacion3= true
    return validacion3;
}
/*
matematica.addEventListener("keyup"),

function mateinfo()
{
    matematica = matematica.value
    if(matematica > 10)
    {

    }
}*/


document.getElementById("botonPromedio").onclick = () => {
let promedio;
validar1(matematica);
validar2(lengua);
validar3(efsi);

if(validacion1===true && validacion2===true && validacion3===true){
    if(matematica.value.length==0||lengua.value.length==0||efsi.value.length==0){
        alert('Los campos deben estar completos');
    } else
    
    {
        promedio=(parseInt(matematica.value)+parseInt(lengua.value)+parseInt(efsi.value))/3
        resultado.innerText= "Promedio: "+ promedio;
        if(promedio>=6) resultado.style.color="green"
        else resultado.style.color="red"
    }

}

}


document.getElementById("botonMayorNota").onclick = () => {
    let Materias= "La materia con mayor nota es: ";
    validar1(matematica);
    validar2(lengua);
    validar3(efsi);
    if(validacion1===true && validacion2===true && validacion3===true){

    if(matematica.value>=lengua.value && matematica.value>=efsi.value)
    {
       Materias += "Matematica"
       if(lengua.value>=matematica.value && lengua.value>=efsi.value)
       {
        Materias +=", lengua"
        if(matematica.value===efsi.value)
        {
            Materias += ", efsi"
        }
       }else if(matematica.value===efsi.value){
        Materias += ", efsi"
       }
    }   else if(lengua.value>=efsi.value)
    {
        Materias +="Lengua"
        if(lengua.value===efsi.value)
        {
            Materias += ", efsi"
        }
    }else Materias += "Efsi"
    mayoresNotasMateria.innerText=Materias;
    mayoresNotasMateria.style.color="blue";
}
}
