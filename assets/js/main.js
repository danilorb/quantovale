(function(window, document){
	'use strict';

	// Overlay
	var overlay = document.querySelector('.overlay'),
		resultado = document.getElementById('resultado'), // Modal de resultado
		calculoFinal = resultado.querySelector('.calculoFinal'); // Calculo final(resultado)

	// Pega valores
	var myForm = document.forms.quantoVale,
		nome = myForm.nome,
		salario = myForm.salario,
		dias = myForm.dias,
		horas = myForm.horas;

	// Calculo
	function calculaTotal() {
		return (parseFloat(salario.value) / dias.value) / horas.value;
	}

	// Permite apenas numeros
	function removeTexto(el) {
		el.addEventListener('keyup', function(){
			this.value = this.value.replace(/\D/g,"");
		});
	}
	// Campos numericos
	removeTexto(salario);
	removeTexto(dias);
	removeTexto(horas);

	// Funcao para montar resultado final
	function showCalculo() {
		// Exibe nome no modal de resultado
		resultado.querySelector('.nome').innerHTML = nome.value;

		// Exibe Total
		var total = calculaTotal();
		calculoFinal.innerHTML = "R$ " + total.toFixed(2).replace('.',',');

		// Mostra Resultado
		overlay.style.display = 'block';
		resultado.style.display = 'block';
	}

	myForm.onsubmit = function() {
		// Monta Resultado
		showCalculo();

		// Debug
		console.log(parseFloat(salario.value));
		console.log(dias.value);
		console.log(horas.value);

		return false;
	};

	// Fecha modal
	overlay.onclick = function() {
		this.style.display = 'none';
		resultado.style.display = 'none';
	};

})(window, document, undefined);
