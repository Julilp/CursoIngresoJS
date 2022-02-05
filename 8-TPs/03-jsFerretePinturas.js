/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
	var temperatura;
	var Fahrenheit
	var Centigrados
	var mensaje
function FahrenheitCentigrados () 
{
	Fahrenheit=parseInt(document.getElementById('txtIdTemperatura').value);
	centigrados=((Fahrenheit-32)*5)/9;
	mensaje=Fahrenheit +" grados Fahrenheit son iguales a ";
	mensaje=mensaje+centigrados+ " Grados centigrados";
	alert(mensaje);
}

function CentigradosFahrenheit () 
{
	centigrados=parseInt(document.getElementById('txtIdTemperatura').value);
	Fahrenheit=centigrados*1.8+32;
	mensaje=centigrados +" grados centigrados son iguales a ";
	mensaje=mensaje+Fahrenheit+ " Grados Fahrenheit";
	alert(mensaje);
}
//txtIdTemperatura