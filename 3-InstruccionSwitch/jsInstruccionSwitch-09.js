/*
una agencia de viajes debe sacar las tarifas de los viajes , se cobra $
15.000 por cada estadia como base, se pide el ingreso de una estacion
 del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba
 tiene un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba
 tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas
 tiene un aumento del 10% Mar del plata tiene un aumento del 10% 
 y Cordoba tiene el precio sin descuento
Curso de ingreso UTN FRA
julian lopez switch 09
*/

function mostrar()
{
	let destinoIngresado;
	let estacionIngresada
	let mensaje;
	let bonificacion;
	let precioViaje;

	precioViaje = 15000;
	destinoIngresado = document.getElementById('txtIdDestino').value;
	estacionIngresada = document.getElementById('txtIdEstacion').value;

	switch(destinoIngresado)
	{
		case "Bariloche":
			switch(estacionIngresada)
			{
				case "Verano":
					bonificacion = -20;
				break;

				case "Invierno":
					bonificacion = 20;
				break;

				case "Otoño":
				case "Primavera":
					bonificacion = 10;
				break;
			}
		break;

		case "Catarata":
			switch(estacionIngresada)
			{
				case "Verano":
				case "Otoño":
				case "Primavera":
					bonificacion = 10;
				break;

				case "Invierno":
					bonificacion = -10;
				break;
			}
		break;

		case "Cordoba":
			switch(estacionIngresada)
			{
				case "Verano":
					bonificacion = 10;
				break;

				case "Invierno":
					bonificacion = -10;
				break;

				case "Otoño":
				case "Primavera":
					bonificacion = 0;
				break;
			}
		break;

		case "Mar del plata":
			switch(estacionIngresada)
			{
				case "Verano":
					bonificacion = 20;
				break;

				case "Invierno":
					bonificacion = -20;
				break;

				case "Otoño":
				case "Primavera":
					bonificacion = 10;
				break;
			}
		break;		
	}

	precioViaje= precioViaje + (bonificacion/100*precioViaje);
	alert("el precio del viaje es "+precioViaje);
}