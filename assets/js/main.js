//--------------------Validacion de boton Become a Driver---------------------------------

document.getElementById("btn-driver").addEventListener("click",function(){
	var inputNumber = document.getElementById("input-number");
	event.preventDefault(); //previene que la página salte al inicio
	
	if(validarFono(inputNumber)){
		alert("Gracias por dar el primer paso para ser un socio conductor");
	}
});

function validarFono(inputNumber){
	var fono = /^[0-9]{9,11}$/;
	if(inputNumber.value.match(fono)){
		inputNumber.value = "";
		return true;
	}else{
		inputNumber.value = "";
		alert("Debe ingresar un número de teléfono válido con más de 9 dígitos");  
		inputNumber.focus();  
		return false; 
	}
}

//-------------------Seccion del tablero de juego-----------------------------------

//Extraigo los input coordenada
var x_coor = document.getElementById("x-coor");
var y_coor = document.getElementById("y-coor");

//---Desaparezco la caja con la petición de coordenadas y valido-------------------

document.getElementById("btn-start").addEventListener("click",function(){
	var x_coor = document.getElementById("x-coor");
	var y_coor = document.getElementById("y-coor");
	event.preventDefault(); //previene que la página salte al inicio
	
	if(validarX(x_coor)){
		if(validarY(y_coor)){
			document.getElementById("caja-coor").classList.toggle("display-none");
			document.getElementById("caja-juego").classList.toggle("display-yes");
		}
	}
});

function validarX(x_coor){
	var numero = /^[0-9]$/;
	if(x_coor.value.match(numero) || x_coor.value <= 10){
		return true;
	}else{
		x_coor.value = "";
		alert("Debe ingresar un número entre 1 y 10 para la coordenada X");  
		x_coor.focus();  
		return false; 
	}
}

function validarY(y_coor){
	var numero = /^[0-9]$/;
	if(y_coor.value.match(numero) && y_coor.value <= 6){
		return true;
	}else{
		y_coor.value = "";
		alert("Debe ingresar un número entre 1 y 6 para la coordenada Y");  
		y_coor.focus();  
		return false; 
	}
}

//-----Seccion de creacion de tablero------------------

//Defino el tablero
var tablero = [];
for (i=0 ; i<6 ; i++){
	tablero.push([0,0,0,0,0,0,0,0,0,0]);
}

var cajaJuego= document.getElementById("caja-juego");

//Variables temporales
var fila, cajita;

//Recorro el arreglo para dibujar el tablero
for(var i = 0; i<tablero.length; i++){
  fila = document.createElement("div");
  
  for(var j = 0; j<tablero[i].length; j++){
    cajita = document.createElement("div");
    cajita.innerHTML = tablero[i][j];
    cajita.classList.add("cajita")
    fila.appendChild(cajita);
  }
  cajaJuego.appendChild(fila);
}



//Ingreso el auto en la posicion 3,5 
tablero[3][5] = "A";