
/*Al ingresar una edad debemos informar si la persona es mayor 
de edad (mas de 18 años) o adolescente (entre 13 y 17 años) o
 niño (menor a 13 años).*/
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
	  	if (edadIngresada >17)
	  	 {
	  	 	alert("usted es mayor de edad");
	  	 }
	  	  else 
	  	  {
			alert("usted es un niño");
	  	  }
	  }
}