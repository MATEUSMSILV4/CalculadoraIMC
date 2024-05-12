function calcularIMC() {
    var peso = document.getElementById('peso').value;
    var altura = document.getElementById('altura').value;

    if (peso && altura) {
      var imc = peso / (altura * altura);
      var resultado = '';

      if (imc < 18.5) {
        resultado = 'Abaixo do peso';
      } else if (imc < 24.9) {
        resultado = 'Peso normal';
      } else if (imc < 29.9) {
        resultado = 'Sobrepeso';
      } else if (imc < 34.9) {
        resultado = 'Obesidade grau 1';
      } else if (imc < 39.9) {
        resultado = 'Obesidade grau 2';
      } else {
        resultado = 'Obesidade grau 3';
      }

      document.getElementById('resultado').innerHTML = 'Seu IMC é: ' + imc.toFixed(2) + '<br>Classificação: ' + resultado;
    } else {
      alert('Por favor, preencha o peso e a altura.');
    }
  }