/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
 
var contadorIntentos;
var numeroSecreto;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	 
    //alert(numeroSecreto );
    
  
  numeroSecreto=Math.floor(Math.random() * (100+1));
  alert(numeroSecreto);
}

function verificar()
{
  var num;
  contadorIntentos=1;
  
  num=parseInt(document.getElementById("numero").value);

if(numeroSecreto!=num){
    document.getElementById("intentos").value=contadorIntentos;
    num=parseInt(document.getElementById("numero").value);
    contadorIntentos+1;
    }else{
        alert("Usted es un ganador!!! y en solo "+contadorIntentos+" intentos.")
  }
  





  /*if(num==numeroSecreto){
    alert("Usted es un ganador!!! y en solo "+contadorIntentos+" intentos.")
  }else{
    contadorIntentos+1;
    document.getElementById("intentos").value=contadorIntentos;
  }*/
	
}