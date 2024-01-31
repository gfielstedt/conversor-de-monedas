/*variables*/
const apiURL = "https://mindicador.cl/api/";

const montoInput = document.querySelector("#montoInput");
const btnConvertir = document.querySelector("#btnConvertir");
const montoConvertido = document.querySelector("#montoConvertido");
const tipoDeMoneda = document.querySelector("#monedasParaConvertir");

let data = {};
let selectedCurrencyData = {}; // Almacenar los datos de la moneda seleccionada
let myChart = null; // Inicializamos myChart a null

/*funciones*/

/*pegar a la api y transformar a formato js*/

async function getIndicador() {
  try {
    const res = await fetch(apiURL);
    console.log(apiURL);
    data = await res.json();
    btnConvertir.disabled = false;
  } catch (error) {
    alert("Error al conseguir los datos de conversión: " + error.message);
  }
}
