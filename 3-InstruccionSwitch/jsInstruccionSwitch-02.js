/*
al seleccionar un mes informar.
si estamos en Invierno: "Abrigate que hace frio."
si aún no llego el Invierno: "Falta para el invierno."
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno.
julian lopez switch 02
*/
function mostrar()
{
	//tomo el mes
	let mesDelAño
	let mensaje;

	mesDelAño=document.getElementById('txtIdMes').value;

	switch(mesDelAño)
	{
		case "Diciembre":
		case "Enero":
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
			mensaje = "Falta para el invierno."
		break;

		case "Julio":
		case "Agosto":
			mensaje = "Abrigate que hace frio.";
		break;

		case "Septiembre":
		case "Octubre":
		case "Noviembre":
			mensaje = "Ya pasamos el frio, ahora calor!!!";
		break;
	}

	alert(mensaje);
}//FIN DE LA FUNCIÓN