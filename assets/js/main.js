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


	//Defino el tablero
	var tablero = [];
	for (i=0 ; i<6 ; i++){
		tablero.push(["","","","","","","","","",""]);
	}

	/*Extraigo los input coordenada, ya que la posicion esta dada por el indice de nuestra matriz
	las posiciones ingresadas por el usuario deben ser restadas -1 para que reflejen el index
	correspondiente. A la vez, se deben cambiar la "X" por la "Y"*/

	var y_coor = document.getElementById("x-coor").value-1; //en realidad es la posisicion de "Y"
	var x_coor = document.getElementById("y-coor").value-1; //y esta la posicion de "X"

	//Ingreso el auto en la posicion (x,y) si pongo esto al final no aparece!
	
	var autoCuadrado = "<img src='assets/img/car.png' width='82px' height='82px'>";
	tablero[x_coor][y_coor] = autoCuadrado;

	var cajaJuego= document.getElementById("caja-juego");
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

	//Creamos la clase Auto con sus atributos X y Y------------------------

	function Auto(xPos, yPos){
		this.xPos = xPos;
		this.yPos = yPos;
		this.fotoCarrito = autoCuadrado;
		this.avanzar = function(){
			//return this.[yPos-1]; //En mi arreglo si quiero ir arriba debo restar
			tablero[this.xPos][this.yPos-1];
		};
		this.ir_derecha = function(){
			//return this.[xPos+1]; //En mi arreglo si quiero ir derecha debo sumar
			tablero[this.xPos+1][this.yPos];
		};
		this.retrocerder = function(){
			//return this.[yPos+1]; //En mi arreglo si quiero ir abajo debo aumentar
			tablero[this.xPos][this.yPos+1];
		};
		this.ir_izquierda = function(){
			//return this.[xPos-1]; //En mi arreglo si quiero ir izq debo restar
			tablero[this.xPos-1][this.yPos];
		};
	}

	var carrito = new Auto(x_coor, y_coor);
	

//Para poder mover el carrito con el teclado---------------------------

/*en esta seccion se deberia poder usar los botones para mover el carrito, sin embargo hay algo que no me 
permite o conectalos bien o hay algun error que no puedo ver, pero mi logica de trabajo es crear la 
clase donde los metodos me indican la direccion, donde se agrega o descuenta 1 de las posiciones "x" y "y"*/

	var teclas = {
	  UP: 38,
	  DOWN: 40,
	  LEFT: 37,
	  RIGHT: 39
	};

	document.addEventListener("keydown", moverAuto);

	function moverAuto(){
		if(teclas.UP){
			carrito.avanzar();
		}
		if(teclas.DOWN){
			carrito.retrocerder();
		}
		if(teclas.LEFT){
			carrito.ir_izquierda();
		}
		if(teclas.RIGHT){
			carrito.ir_derecha();
		}


	  /*switch(evento.keyCode){
	    case teclas.UP:
	      carrito.avanzar();
	    break;
	    case teclas.DOWN:
	      carrito.retrocerder();
	    break;
	    case teclas.LEFT:
	      carrito.ir_izquierda();
	    break;
	    case teclas.RIGHT:
	      carrito.ir_derecha();
	    break;
	  }*/
	}


});

//Validaciones de las coordenas de 10x6-------------------------------------

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
