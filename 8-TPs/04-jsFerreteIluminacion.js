/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
 Julian lopez tp 4
 */
function CalcularPrecio () 
{
    let cantidadDeLamparas;
    let marcaDeLampara;
    let precioDeLamparas;
    let porcentajeDeDescuento;
    let precioFinal;
    let impuesto;
    let porcentajeBruto;

    porcentajeBruto=10;
    cantidadDeLamparas=parseInt(document.getElementById('txtIdCantidad').value);
    marcaDeLampara=document.getElementById('Marca').value;
    precioDeLamparas = 35;

    if (cantidadDeLamparas > 5)
     {
        porcentajeDeDescuento = 50;
     } 
     else
      {
        if (cantidadDeLamparas == 5)
         {
            switch(marcaDeLampara)
            {
                case "ArgentinaLuz":
                    porcentajeDeDescuento = 40;
                break;

                default:
                    porcentajeDeDescuento = 30;
                break;
            }
         } 
         else
          {
            if (cantidadDeLamparas == 4)
             {
                switch(marcaDeLampara)
                {
                    case "ArgentinaLuz":
                    case "FelipeLuz":
                        porcentajeDeDescuento = 25;
                    break;

                    default:
                        porcentajeDeDescuento = 20;
                    break;
                }
             } 
            else
             {
                if (cantidadDeLamparas == 3)
                 {
                    switch(marcaDeLampara)
                    {
                        case "ArgentinaLuz":
                            porcentajeDeDescuento = 15;
                        break;

                        case "FelipeLuz":
                            porcentajeDeDescuento = 10;
                        break;

                        default:
                            porcentajeDeDescuento = 5;
                        break;
                    }
                 }               
             }
          }
      }

    porcentajeDeDescuento = precioDeLamparas * porcentajeDeDescuento / 100;
    precioFinal=cantidadDeLamparas * (precioDeLamparas - porcentajeDeDescuento);  

    if (precioFinal >120) //Ejercicio E
     {
        impuesto = precioFinal * porcentajeBruto / 100;
        precioFinal = precioFinal + impuesto;
        alert("IIBB Usted pago "  + impuesto + " de impuestos")
     }
    document.getElementById('txtIdprecioDescuento').value=precioFinal;
}










  /*                SWITCH SWITCH
    let cantidadDeLamparas;
    let marcaDeLampara;
    let precioDeLamparas;
    let porcentajeDeDescuento;
    let precioFinal;
    let impuesto;
    let porcentajeBruto;

    porcentajeBruto=10;
    cantidadDeLamparas=parseInt(document.getElementById('txtIdCantidad').value);
    marcaDeLampara=document.getElementById('Marca').value;
    precioDeLamparas = 35;

    switch(marcaDeLampara)
    {
        case "ArgentinaLuz":
            switch(cantidadDeLamparas)
            {
                case 1:
                case 2:
                    porcentajeDeDescuento = 0;
                break;

                case 3:
                    porcentajeDeDescuento = 15;
                break;

                case 4:
                    porcentajeDeDescuento = 25;
                break;

                case 5:
                    porcentajeDeDescuento = 40;
                break;

                defaul:
                    porcentajeDeDescuento = 50;
                break;
            }
        break;

        case "FelipeLamparas":
              switch(cantidadDeLamparas)
            {
                case 1:
                case 2:
                    porcentajeDeDescuento = 0;
                break;

                case 3:
                    porcentajeDeDescuento = 10;
                break;

                case 4:
                    porcentajeDeDescuento = 25;
                break;

                case 5:
                    porcentajeDeDescuento = 30;
                break;

                defaul:
                    porcentajeDeDescuento = 50;
                break;
            }
        break;

        default:
            switch(cantidadDeLamparas)
            {
                case 1:
                case 2:
                    porcentajeDeDescuento = 0;
                break;

                case 3:
                    porcentajeDeDescuento = 5;
                break;

                case 4:
                    porcentajeDeDescuento = 20;
                break;

                case 5:
                    porcentajeDeDescuento = 30;
                break;
                
                 defaul:
                    porcentajeDeDescuento = 50;
                break;
            }
        break;
    }

    porcentajeDeDescuento = precioDeLamparas * porcentajeDeDescuento / 100;
    precioFinal=cantidadDeLamparas * (precioDeLamparas - porcentajeDeDescuento);  

    if (precioFinal >120) //Ejercicio E
     {
        impuesto = precioFinal * porcentajeBruto / 100;
        precioFinal = precioFinal + impuesto;
        alert("IIBB Usted pago "  + impuesto + " de impuestos")
     }
    document.getElementById('txtIdprecioDescuento').value=precioFinal; */


  /*            SWITCH IF
   let cantidadDeLamparas;
   let marcaDeLampara;
   let precioDeLamparas;
   let porcentajeDeDescuento;
   let precioFinal;
   let impuesto;
   let porcentajeBruto;

    porcentajeBruto=10;
    cantidadDeLamparas=parseInt(document.getElementById('txtIdCantidad').value);
    marcaDeLampara=document.getElementById('Marca').value;
    precioDeLamparas = 35;

    switch(cantidadDeLamparas)
    {      
        case 1:
        case 2:
            porcentajeDeDescuento = 0;
        break;

        case 3:// Ejercicio D
            if (marcaDeLampara == "ArgentinaLuz")
             {
                porcentajeDeDescuento = 15;
             }
             else
             {
                if (marcaDeLampara == "FelipeLamparas")
                 {
                    porcentajeDeDescuento = 10;
                 }
                 else
                 {
                    porcentajeDeDescuento = 5;
                 }
             }
        break;

        case 4:
            if(marcaDeLampara == "ArgentinaLuz" || marcaDeLampara == "FelipeLamparas")
            {
                porcentajeDeDescuento = 25;
            }
            else
            {
                porcentajeDeDescuento = 20;
            }
        break;

        case 5: //Ejercicio B
            if (marcaDeLampara == "ArgentinaLuz")
             {
                porcentajeDeDescuento = 40;
             }
             else
             {
                porcentajeDeDescuento = 30;
             }

        break;

        default: //Ejercicio A
            porcentajeDeDescuento = 50;
        break;
    }

    porcentajeDeDescuento = precioDeLamparas * porcentajeDeDescuento / 100;
    precioFinal=cantidadDeLamparas * (precioDeLamparas - porcentajeDeDescuento);  
    document.getElementById('txtIdprecioDescuento').value=precioFinal; 

    if (precioFinal >120) //Ejercicio E
     {
        impuesto = precioFinal * porcentajeBruto / 100;
        precioFinal = precioFinal + impuesto;
        alert("IIBB Usted pago "  + impuesto + " de impuestos")
     }*/ 


                        //SOLO IF//
    /*let marcaDeLampara;
    let precioDeLamparas;
    let cantidadDeLamparas;
    let precioFinal;
    let porcentajeDeDescuento;
    let impuesto;
    let porcentajeBruto


    porcentajeBruto = 10;
    cantidadDeLamparas=parseInt(document.getElementById('txtIdCantidad').value);
    marcaDeLampara=document.getElementById('Marca').value;
    precioDeLamparas = 35;
    
    //-- inicio del problema A--//
    if (cantidadDeLamparas > 5)
     {
        porcentajeDeDescuento = 50;
    //-- Fin del problema A--//

    //-- inicio del problema B--//
     }
     else 
     {
        if (cantidadDeLamparas == 5)
         {
            if (marcaDeLampara == "ArgentinaLuz")
             {  
                porcentajeDeDescuento = 40;
             }
             else
             {
                porcentajeDeDescuento = 30;
             }
    //-- Fin del problema B--//
          }
        else
        {
    //-- inicio del problema C--//
            if (cantidadDeLamparas == 4)
            {
                if (marcaDeLampara == "ArgentinaLuz" || marcaDeLampara == "FelipeLamparas")
                 {
                    porcentajeDeDescuento = 25;
                 } 
                 else
                  {
                    porcentajeDeDescuento = 20;
                  }
    //-- Fin del problema C--//
            }
    //-- inicio del problema D--//
            else
            {
                if (cantidadDeLamparas == 3) 
                {
                   if (marcaDeLampara == "ArgentinaLuz")
                    {
                        porcentajeDeDescuento = 15;
                    } 
                    else
                    {
                        if (marcaDeLampara == "FelipeLamparas")
                         {
                            porcentajeDeDescuento = 10;
                         } 
                         else 
                         {
                            porcentajeDeDescuento = 5;
                         }
                    }
    //-- Fin del problema D--//
                }                   
            }

        }
     }

    porcentajeDeDescuento = precioDeLamparas * porcentajeDeDescuento / 100;
    precioFinal=cantidadDeLamparas * (precioDeLamparas - porcentajeDeDescuento);  
        //-- inicio del problema E--//
     if (precioFinal >120)
     {
        impuesto = precioFinal * porcentajeBruto / 100;
        precioFinal = precioFinal + impuesto;
        alert("IIBB Usted pago "  + impuesto + " de impuestos")
     } 
            //-- Final del problema E--//*/
    /*document.getElementById('txtIdprecioDescuento').value=precioFinal; 
    */  