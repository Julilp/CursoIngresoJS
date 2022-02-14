/*
Al ingresar una hora, informar:
si está entre las 7 y las 11 : "Es de mañana.".
julian lopez switch 05
*/
function mostrar()
{
	let mesDelAño;
	let mensaje;

	mesDelAño=parseInt(document.getElementById('txtIdHora').value);

	switch(mesDelAño)
	{
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			mensaje = "Es de mañana";
		break;
	}
alert(mensaje);
}//FIN DE LA FUNCIÓN