//julian lopez if 03
/*Al ingresar una edad debemos informar si la persona es mayor
 de edad, sino informar que es un menor de edad.*/


function mostrar()
{
	let edadIngresada;
	edadIngresada=parseInt(document.getElementById('txtIdEdad').value);
	
		if (edadIngresada > 17)
	 	{
	 	alert("Usted es mayor de edad");	
		} 
	
		if (edadIngresada < 18)
		 {
		 alert("Usted es menor de edad");	
		} 


}
//FIN DE LA FUNCIÓN