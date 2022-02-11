//julian lopez if 04
/*Al ingresar una edad debemos informar si la persona
 es adolescente, edad entre 13 y 17 años (inclusive*/
function mostrar()
{
	let edadIngresada;
	edadIngresada=parseInt(document.getElementById('txtIdEdad').value);
	
	if (edadIngresada > 12 && edadIngresada < 18) 
	{
			alert("usted es adolecente");
	}
		 else 
		 {
		 	alert("usted no es adolecente");
	 	 }

}
//FIN DE LA FUNCIÓN