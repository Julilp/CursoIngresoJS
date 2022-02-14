/*
al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.
julian lopez switch 04
*/
function mostrar()
{
	let mesDelAño;
	let mensaje;

	mesDelAño=document.getElementById('txtIdMes').value;

	switch(mesDelAño)
	{
		case "Febrero":
			mensaje ="Tiene 28 dias";
		break;

		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
		case "Junio":
			mensaje = "Tiene 30 dias"
		break;

		default:
			mensaje = "Tiene 31 dias";
		break;
	}
	
	

	alert(mensaje);

}//FIN DE LA FUNCIÓN