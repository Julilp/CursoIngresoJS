function mostrar()
{
  let tipoDeBolsa;
  let respuesta = "si";
  let precioDeBolsa;
  let descuento;

  let precioConDescuento=0;
  let precioBruto=0;

  let masBolsas;
  let bolsaMasCara;
  let mensaje;
  let cantidadDeBolsas;
  let acumuladorDeBolsas=0;
  let acumuladorArena=0;
  let acumuladorCal=0;
  let acumuladorCemento=0;
  let acumuladorDeprecios=0;
  let bolsaMasComprada;

  let precioBolsaCara;
  let tipoDeBolsaCara;

  banderaDeBolsa = true;

  while(respuesta == "si")
  {
    //VALIDACIONES//
    tipoDeBolsa=prompt("Indique el tipo de bolsa (ARENA , CAL O CEMENTO)").toLowerCase();
    while(tipoDeBolsa != "arena" && tipoDeBolsa != "cal" && tipoDeBolsa != "cemento")
    {
      tipoDeBolsa=prompt("Tipo de bolsa invalido, ingrese otra vez el tipo").toLowerCase();
    }

    cantidadDeBolsas=parseInt(prompt("Indique la cantidad de bolsas que va a comprar"));
    while(cantidadDeBolsas < 0)
    {
      cantidadDeBolsas=parseInt(prompt("ERROR, la cantidad no es un numero valido esta debe ser mayor a 0"));    
    }

    precioDeBolsa=parseInt(prompt("Indique el precio de bolsas que va a comprar"));
    while(precioDeBolsa < 0)
    {
      precioDeBolsa=parseInt(prompt("ERROR, el precio no es un numero valido este debe ser mayor a 0"));    
    }
    //VALIDACIONES//

    //CONTADORES DE CANTIDAD DE BOLSAS POR TIPO//
    if (tipoDeBolsa == "arena")
    {
      acumuladorArena = acumuladorArena + cantidadDeBolsas;
    }
    else
    {
      if (tipoDeBolsa == "cemento")
       {       
        acumuladorCemento = acumuladorCemento = cantidadDeBolsas;
       }
       else
       {
        acumuladorCal = acumuladorCal + cantidadDeBolsas;
       }
    }
    //CONTADORES DE CANTIDAD DE BOLSAS POR TIPO//
    acumuladorDeBolsas = acumuladorDeBolsas + cantidadDeBolsas;
    acumuladorDeprecios = acumuladorDeprecios + precioDeBolsa;

    if(banderaDeBolsa == true)
    {
      banderaDeBolsa = false;
      precioBolsaCara = precioDeBolsa;
      tipoDeBolsaCara = tipoDeBolsa;
    }
    else
    {
    if (precioDeBolsa > precioBolsaCara)
     {
      precioBolsaCara = precioDeBolsa;
      tipoDeBolsaCara = tipoDeBolsa;
     }     
    }

    respuesta=prompt("Queres seguir cargando datos?")
  }

//FIN DEL WHILW//



  //descuentos//
  if (acumuladorDeBolsas > 30)
  {
    descuento = 25;
  }
  else
  {
    if(acumuladorDeBolsas > 10)
    {
      descuento = 15;
    }
    else
    {
      descuento = 0;
    }
  }
  //descuentos//

  precioBruto = acumuladorDeBolsas * acumuladorDeprecios;
  precioConDescuento = precioBruto * descuento / 100;  

  if(acumuladorCal > acumuladorArena && acumuladorCal > acumuladorCemento)
  {
    bolsaMasComprada = "Cal"
  }
  else
  {
    if(acumuladorArena > acumuladorCal && acumuladorArena > acumuladorCemento)
    {
      bolsaMasComprada = "Arena"
    }
    else
    {
      if(acumuladorCemento > acumuladorCal && acumuladorCemento > acumuladorArena)
      {
        bolsaMasComprada = "Cemento"        
      }
      else
      {
        bolsaMasComprada = "(ERROR, es posible que 2 o mas tipo de bolsas tengan la misma cantidad comprada)";
      }
    }
  }

  mensaje = "El importe en bruto de la compra es "+precioBruto; 
  if (descuento !=0)
   {
    mensaje = mensaje +" y el importe con descuento es de "+precioConDescuento;
   }
  mensaje = mensaje +" el tipo de bolsa que mas ah comprado es la de "+bolsaMasComprada;
  mensaje = mensaje +" y el tipo mas caro de bolsa es la de "+tipoDeBolsaCara;

  alert(mensaje);
}
