const matematica=document.getElementById('notaMatematica');
const lengua=document.getElementById('notaLengua');
const efsi=document.getElementById('notaEfsi');
const notas =[matematica,lengua,efsi];
const resultado=document.getElementById('resultado');
let mayoresNotasMateria=document.getElementById("mayoresNotasMateria");

let posible;
matematica.onkeyup=()=>{
    if(matematica.value>10||matematica.value<0){
        matematica.style.color="red";
        posible = false;
    }else{
        matematica.style.color="green" ;
        posible =true;
    } 
}

lengua.onkeyup=()=>{
    if(lengua.value>10||lengua.value<0){
        lengua.style.color="red";
        posible = false;
    }else{
        lengua.style.color="green" ;
        posible =true;
    } 
}

efsi.onkeyup=()=>{
    if(efsi.value>10||efsi.value<0){
        efsi.style.color="red";
        posible = false;
    }else{
        efsi.style.color="green" ;
        posible =true;
    } 
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
        if(promedio>=6) resultado.style.color="green"
        else resultado.style.color="red"
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
