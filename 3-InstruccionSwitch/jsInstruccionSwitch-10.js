/*
una agencia de viajes nos piden informar si
hacemos viajes a lugares según la estación
del año estemos, informar si "Se viaja" o "No se viaja" a ese lugar

en Invierno: Solo Bariloche informa "se 
viaja" los demas destinos "No se viaja"

en Verano: Se viaja a Mar del plata
y Cataratas solamente

en Otoño: Se viaja a todos los destinos.

primavera: solo no se viaja a Bariloche
julian lopez switch 10
*/
function mostrar()
{
	let destinoIngresado;
	let estacionIngresada
	let mensaje;

	destinoIngresado = document.getElementById('txtIdDestino').value;
	estacionIngresada = document.getElementById('txtIdEstacion').value;

	switch(destinoIngresado)
	{
		case "Bariloche":
		 	switch(estacionIngresada)
		 	{
		 		case "Invierno":
		 		case "Otoño":
		 			mensaje = " se viaja";	
		 		break;
		 		case "Verano":
		 		case "Primavera":		 			
		 			mensaje = "no se viaja"		 	
		 		break;
		 	}
		break;

		case "Cordoba":
		 	switch(estacionIngresada)
		 	{
		 		case "Invierno":
		 		case "Verano":
		 			mensaje = "no se viaja"		 				 					 		
		 		break;
		 		case "Otoño":
		 		case "Primavera":		 				 		
		 			mensaje = " se viaja";		 		
		 		break;
		 	}
		break;

		case "Cataratas":
		 	switch(estacionIngresada)
		 	{
		 		case "Invierno":
		 			mensaje = "no se viaja"
		 		break;
		 		case "Verano":
		 		case "Otoño":		 		;
		 		case "Primavera":		 		
		 			mensaje = " se viaja";		 	
		 		break;
		 	}
		break;

		case "Mar del plata":
		 	switch(estacionIngresada)
		 	{
		 		case "Invierno":
		 			mensaje = "no se viaja"
		 		break;
		 		case "Verano":
		 		case "Otoño":
		 		case "Primavera":		 		
		 			mensaje = " se viaja";
		 		break;
		 	}
		break;
	}
	alert(mensaje);
}
//FIN DE LA FUNCIÓN