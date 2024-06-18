function pegarValor() {
    const valor = document.getElementById('valTemp').value;
    const temp1 = document.getElementById('t1').value;
    const temp2 = document.getElementById('t2').value;
    converter(valor, temp1, temp2);
}

function converter(val, tem1, tem2) {
    const converteRes = document.getElementById('res');
    switch (tem1) {
        case "celsius":
            switch (tem2) {
                case "celsius":
                    converteRes.value = val;
                    break;
                case "fahrenheit":
                    converteRes.value = (val * 1.8 + 32).toFixed(2);
                    break;
                case "kelvin":
                    converteRes.value = (val*1 + 273.15);
                    break;
                default:
                    alert('De alguma forma você colocou uma opção inválida.');
                    break;
            }
            break;
        case "fahrenheit":
            switch (tem2) {
                case "celsius":
                    converteRes.value = ((val - 32) / 1.8).toFixed(2);
                    break;
                case "fahrenheit":
                    converteRes.value = val;
                    break;
                case "kelvin":
                    converteRes.value = ((val*1 + 459.67) * 5 / 9).toFixed(2);
                    break;
                default:
                    alert('De alguma forma você colocou uma opção inválida.');
                    break;
            }
            break;
        case "kelvin":
            switch (tem2) {
                case "celsius":
                    converteRes.value = (val - 273.15).toFixed(2);
                    break;
                case "fahrenheit":
                    converteRes.value = (val * (1.8) - 459.67).toFixed(2);
                    break;
                case "kelvin":
                    converteRes.value = val;
                    break;
                default:
                    alert('De alguma forma você colocou uma opção inválida.');
                    break;
            }
            break;
        default:
            alert('De alguma forma você colocou uma opção inválida.')
            break;
    }
}