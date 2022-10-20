console.log("conectado");

const edit1 = document.getElementById("edit1");
const edit2 = document.getElementById("edit2");
const edit_operador = document.getElementById("edit_operador");
const btn_calcular = document.getElementById("btn_calcular");
const h3_resultado = document.getElementById("h3_resultado");

function calcular() {
  const num1 = parseFloat(edit1.value);
  const num2 = parseFloat(edit2.value);
  const operador = edit_operador.value;

  if (
    (operador == "+" ||
      operador == "-" ||
      operador == "/" ||
      operador == "+") &&
    !isNaN(num1) &&
    !isNaN(num2)
  ) {
    h3_resultado.style="color:black"
    if (operador == "+") {
      h3_resultado.innerText = num1 + num2;
    }

    if (operador == "-") {
      h3_resultado.innerText = num1 - num2;
    }

    if (operador == "*") {
      h3_resultado.innerText = num1 * num2;
    }

    if (operador == "/") {
      h3_resultado.innerText = num1 / num2;
    }
  } else {
    h3_resultado.style="color:red"
    h3_resultado.innerText = "Operacion NO valida";
  }
}

btn_calcular.onclick = () => {
  calcular();
};

//Preguntar diferencia entre let y const.

//PQ Podemos usar  variable.onclick=()=>{}
//PQ Podemos usar addEventListener
