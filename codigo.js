const matematica=document.getElementById('notaMatematica');
const lengua=document.getElementById('notaLengua');
const efsi=document.getElementById('notaEfsi');
const notas =[matematica,lengua,efsi];
const resultado=document.getElementById("resultado")
let mayoresNotasMateria=document.getElementById("mayoresNotasMateria")

/*validar = (nota)=>{
    if(nota.value>10||nota.value<0) {
        nota.style.color="green";
    }else{
        nota.style.color="red"
    }
}

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

let output= "La materia con mayor nota es: ";

document.getElementById("botonMayorNota").onclick = () => {
    if(matematica.value>=lengua.value && matematica.value>=efsi.value){
       output += "Mate"
       innerText=output
    }
}


/*
let mayorNota=0;
for (let i = 0; i < notas.length; i++) {
    if(notas[i]>=mayorNota) materias.innerHTML=
}
*/