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

async function crearGrafica() {
  try {
    // Utiliza los datos de la moneda seleccionada
    const currencyData = selectedCurrencyData;

    // Obtener las fechas y valores de las tasas para la moneda seleccionada
    const labels = Object.keys(currencyData.fecha).slice(0, 10).reverse(); // Obtener las últimas 10 fechas
    const data = labels.map((label) => currencyData.fecha[label]);

    const datasets = [
      {
        label: `${tipoDeMoneda.value.toUpperCase()} a CLP`,
        borderColor: "rgb(255, 99, 132)",
        data: data,
      },
    ];

    return { labels, datasets };
  } catch (error) {
    alert("Error al obtener los datos de la API: " + error.message);
  }
}
