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
		alert("Debe ingresar un número de teléfono válido");  
		inputNumber.focus();  
		return false; 
	}
}