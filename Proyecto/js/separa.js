var Elaboratorio = document.getElementById("Elab");
var fecha = document.getElementById("fecha");
var materia = document.getElementById("materia");
var horarios = document.getElementById("horario");
var laboratorio = document.getElementById("lab");
var maquinas = document.getElementById("maquina");
var docente = document.getElementById("DT");


const accion2 = document.getElementById("btn2");
accion2.addEventListener("click", (e)=>{
    e.preventDefault();

    if(Elaboratorio.value == "" ||fecha.value == "" || materia.value == "" || horarios.value == "" 
    || laboratorio.value == "" || maquinas.value == "" || docente.value == ""){
        alert("rellene todos los campos");
    }else{
        location.href="#";
    }
    
});