/*
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino
julian lopez switch 08
*/

function mostrar()
{
	let destinoIngresado;
	let mensaje;

	destinoIngresado=document.getElementById('txtIdDestino').value;

	switch(destinoIngresado)
	{
		case "Bariloche":
		case "ushuaia":
			mensaje = "Frio";
		break;

		default:
			mensaje="Calor";
		break;
	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN