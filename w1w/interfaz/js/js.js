// Obtener el elemento span por su id
var spanElement = document.getElementById("connectedAddress");

// Verificar si el elemento existe para evitar errores
if (spanElement) {
    // Modificar el contenido del span
    spanElement.textContent = "🤑 Win a share of 8000 USDT - Buy tokens today! Don't miss out! 🔥";
}


// Función para preparar el enlace cuando se selecciona un botón
function prepareLink(buttonId) {
    var link = '';

    switch (buttonId) {
        case '25Button':
            link = 'https://cwallet.com/t/XHY2AP3B';
            break;
        case '100Button':
            link = 'https://cwallet.com/t/C5KD6EQP';
            break;
        case '500Button':
            link = 'https://cwallet.com/t/ZEUMMYBR';
            break;
        case '1000Button':
            link = 'https://cwallet.com/t/LZTCHLN4';
            break;
        case '2500Button':
            link = 'https://cwallet.com/t/LO5K2CUS';
            break;
        case '5000Button':
            link = 'https://cwallet.com/t/SV2E5BYR';
            break;
        default:
            break;
    }

    // Asignar el enlace preparado al botón de "BUY NOW"
    var buyNowButton = document.getElementById('connectwalletBtn');
    buyNowButton.setAttribute('data-link', link);
}

// Event listener para el botón "BUY NOW"
document.getElementById('connectwalletBtn').addEventListener('click', function() {
    var link = this.getAttribute('data-link');
    if (link) {
        window.location.href = link; // Abrir el enlace en la misma ventana
    }
});

// Función para seleccionar la cantidad y preparar el enlace
function selectTab(button) {
    var tokenInput = document.getElementById('tokenInput');
    var buttonId = button.id;

    switch (buttonId) {
        case '25Button':
            tokenInput.value = formatNumber(10000000); // $20 equivalent
            break;
        case '100Button':
            tokenInput.value = formatNumber(50000000); // $100 equivalent
            break;
        case '500Button':
            tokenInput.value = formatNumber(250000000); // $500 equivalent
            break;
        case '1000Button':
            tokenInput.value = formatNumber(500000000); // $1000 equivalent
            break;
        case '2500Button':
            tokenInput.value = formatNumber(1250000000); // $2500 equivalent
            break;
        case '5000Button':
            tokenInput.value = formatNumber(2500000000); // $5000 equivalent
            break;
        default:
            break;
    }

    // Llamar a prepareLink con el buttonId seleccionado
    prepareLink(buttonId);
}

function formatNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

                


