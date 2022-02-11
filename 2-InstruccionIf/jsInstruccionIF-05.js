/*
julian lopez
Al ingresar una edad 
solo debemos informar si la persona 
NO es adolescente.
*/
function mostrar()
{

let edadingresada;

    edadingresada = document.getElementById('txtIdEdad').value;
    edadingresada = parseInt(edadingresada);

    if(edadingresada > 18 || edadingresada < 12)

{
    alert("usted no es un adolecente");
}
 
}
//FIN DE LA FUNCIÓN