const matematica=document.getElementById('notaMatematica');
const lengua=document.getElementById('notaLengua');
const efsi=document.getElementById('notaEfsi');
const resultado=document.getElementById('resultado');
let mayoresNotasMateria=document.getElementById("mayoresNotasMateria");
const imagen=document.getElementById('imagen');

let posible;

function validarNota(inputNota){
    if(inputNota.value>10||inputNota.value<0||isNaN(inputNota.value)){
        inputNota.style.color="red";
        inputNota.style.borderColor="red";
        posible=false;
    }else{
        inputNota.style.color="green";
        inputNota.style.borderColor="green";
        posible=true;
    }
}

matematica.onkeyup=()=>{
    validarNota(matematica)
}
lengua.onkeyup=()=>{
    validarNota(lengua)
}
efsi.onkeyup=()=>{
    validarNota(efsi)
}


document.getElementById("botonPromedio").onclick = () => {
let promedio;
if(posible===true){
    if(matematica.value.length==0||lengua.value.length==0||efsi.value.length==0){
        alert('Los campos deben estar completos');
    } else
    
    {
        promedio=(parseInt(matematica.value)+parseInt(lengua.value)+parseInt(efsi.value))/3
        resultado.innerText= "Promedio: "+ promedio;
        if(promedio>=6){
            resultado.style.color="green"
            imagen.setAttribute("src", "https://i.makeagif.com/media/11-22-2023/MXrmMm.gif")
        } 
        else{
            resultado.style.color="red"
            imagen.setAttribute("src","https://media.tenor.com/8aqKJ3LTvWEAAAAM/messi-crying.gif")
        } 

    }

}

}


document.getElementById("botonMayorNota").onclick = () => {
    let Materias= "La materia con mayor nota es: ";
    if(posible===true){
    if(matematica.value.length==0||lengua.value.length==0||efsi.value.length==0){
            alert('Los campos deben estar completos');
        } else{
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
        }
    
    mayoresNotasMateria.innerText=Materias;
    mayoresNotasMateria.style.color="blue";
}
}
