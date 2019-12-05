'use strict'

var imprime = "";
const confirm_p = confirm("Desea ver su edad en la consola?")

if(confirm_p){

var edad_ = prompt("Cual es su edad");
	switch(edad_){
		case 18:
			imprime = "acabas de cumplir mayoria de edad";
		break;
		case edad_ > 18 && edad_ <= 30:
			imprime = "te joderas";
		break;
		case edad_ > 30 && edad_ <= 40:
			imprime = "te estas jodiendo";
		break;
		case edad_ > 40 && edad_ <= 50:
			imprime = "te vas a joder";
		break;
		default:
			imprime = "Edad erronea";
		break;
	}
		console.log(imprime);
}

	else{
	alert("No quisiste ver tu estado de Vida")
	}


