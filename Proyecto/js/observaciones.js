var inicio = document.getElementById("hora-inicio");
var fin = document.getElementById("hora-fin");
var fecha = document.getElementById("fecha");
var observacion = document.getElementById("obser");
var recomendacion= document.getElementById("recom");

const accion2 = document.getElementById("boton");
accion2.addEventListener("click", (e)=>{
    e.preventDefault();

    if(inicio.value == "" ||fecha.value == ""  || fin.value == ""  ){
        alert("establezaca los tiempos en los que se realizo la actividad");
    }else if(recomendacion.value == "" && observacion.value == ""){
        alert("realizar al menos una recomendacion u observacion");
    }else
    
    {
        
        location.href="observaciones.html";
    }
    
});