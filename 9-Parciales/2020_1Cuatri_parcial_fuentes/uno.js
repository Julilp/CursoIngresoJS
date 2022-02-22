
function mostrar()
{
	let productoIngresado;
	let contador=0;
	let precioProducto;
	let cantidadProducto;
	let marcaProducto
	let fabricanteProducto
	let mensaje;
	let banderaAlcohol="primeralcohol";
	let cantidadAlcoholBarato;
	let fabricanteAlcohol;
	let precioAlcoholBarato;
	let marcaBarata;

	let promedioMasUnidades=0;

	let precioAlcohol=0;
	let precioJabon=0;
	let precioBarbijo=0;

	let contadorJabon=0;
	let contadorAlcohol=0;
	let contadorBarbijo=0;

	let masUnidades;

	let sumaJabon=0;

	let sumaAlcohol=0;

	let sumaBarbijo=0;

	while(contador < 2)
	{
		productoIngresado=prompt("ingrese el producto (barbijo, jabon o alcohol)")
		while(productoIngresado != "barbijo" && productoIngresado != "alcohol" && productoIngresado != "jabon" )
		{
		productoIngresado=prompt("ERROR, ingrese el producto (barbijo, jabon o alcohol)")
		}

		precioProducto=parseInt(prompt("ingrese el precio del producto"))
		while(precioProducto < 100 || precioProducto > 300)
		{
		precioProducto=parseInt(prompt("ERROR,ingrese el precio del producto entre 100 y 300"))
		}

		cantidadProducto=parseInt(prompt("ingrese la cantidad del producto"))
		while(precioProducto < 0 || precioProducto > 1000)
		{
		cantidadProducto=parseInt(prompt("ERROR,ingrese una cantidad entre 0 y 1000 unidades"))
		}

		marcaProducto = prompt("¿de que marca es el producto?")
		fabricanteProducto = prompt("¿quien es el fabricante?")


		if(productoIngresado =="alcohol")
		{
			if(banderaAlcohol=="primeralcohol")
			{
				banderaAlcohol="listo";
				cantidadAlcoholBarato = cantidadProducto;
				fabricanteAlcohol = fabricanteProducto;
				precioAlcoholBarato = precioProducto;
				marcaBarata = marcaProducto;
			}
			else
			{
				if(precioProducto < precioAlcoholBarato)
				{
					cantidadAlcoholBarato = cantidadProducto;
					fabricanteAlcohol = fabricanteProducto;
					precioAlcoholBarato = precioProducto;
					marcaBarata = marcaProducto;
				}
			}

			sumaAlcohol = sumaAlcohol + cantidadProducto;
			precioAlcohol =  precioAlcohol + (precioProducto*cantidadProducto);
			contadorAlcohol = contadorAlcohol + 1;				
		}
		else
		{
			if(productoIngresado =="jabon")
			{
				sumaJabon = sumaJabon + cantidadProducto;
				precioJabon =  precioJabon + (precioProducto*cantidadProducto);
				contadorJabon = contadorJabon + 1;
			}
			else
			{
				sumaBarbijo = sumaJabon + cantidadProducto;
				precioBarbijo =  precioBarbijo + (precioProducto*cantidadProducto);
				contadorBarbijo = contadorBarbijo + 1;
			}

		}

		contador = contador + 1;
	}

	
		if (sumaBarbijo > sumaJabon && sumaBarbijo > sumaAlcohol)
		 {
		 	masUnidades = "barbijo";
		 	promedioMasUnidades=(precioBarbijo/contadorBarbijo);
		 }
		 else
		   {
			if (sumaJabon > sumaBarbijo && sumaJabon > sumaAlcohol)
			{
				masUnidades = "jabon";
				promedioMasUnidades=precioJabon/contadorJabon;
			}
			else
			 {
				if (sumaAlcohol > sumaJabon && sumaAlcohol > sumaBarbijo)
				{
					masUnidades = "Alcohol";
					promedioMasUnidades=precioAlcohol/contadorAlcohol;					
				}
				else
				{
					masUnidades = "hay dos productos igualados en cantidad de unidades";
				}
		  	 }
		   }


		   
		   
		   

	mensaje = "El alcohol mas barato es "+marcaBarata+" de la cual se compraron "+cantidadAlcoholBarato+" uniddades ";
	mensaje = mensaje + " y las fabrica "+fabricanteAlcohol+ ". el producto mas comprado es "+masUnidades+" y su precio promedio es de "+promedioMasUnidades+ " y se compraron "+sumaJabon+" unidades de jabon en total";

	document.write(mensaje);

}
