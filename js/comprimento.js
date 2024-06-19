function pegarValor() {
    const valor = document.getElementById('c1').value;
    const comp1 = document.getElementById('cs1').value;
    const comp2 = document.getElementById('cs2').value;
    converter(valor, comp1, comp2);
}

function converter(val, co1, co2) {
    const res = document.getElementById('c2');

    switch (co1) {
        case "metros":
            switch (co2) {
                case "metros":
                    res.value = val;
                    break;
                case "centimetros":
                    res.value = val*100;
                    break;
                case "milimetros":
                    res.value = val * 1000;
                    break;
                case "polegadas":
                    res.value = (val * 39.37).toFixed(2);
                    break;
                default:
                    alert("Opa, algo deu errado, tente novamente.");
                    break;
            }
            break;
        case "centimetros":
            switch (co2) {
                case "metros":
                    res.value = (val*1)/100;
                    break;
                case "centimetros":
                    res.value = val;
                    break;
                case "milimetros":
                    res.value = val * 10;
                    break;
                case "polegadas":
                    res.value = ((val*1)/2.54).toFixed(2);
                    break;
                default:
                    alert("Opa, algo deu errado, tente novamente.");
                    break;

            }
            break;
        case "milimetros":
            switch (co2) {
                case "metros":
                    res.value = (val * 1) / 1000;
                    break;
                case "centimetros":
                    res.value = (val * 1) / 10;
                    break;
                case "milimetros":
                    res.value = val;
                    break;
                case "polegadas":
                    res.value = ((val * 1) / 25.4).toFixed(2);
                    break;
                default:
                    alert("Opa, algo deu errado, tente novamente.");
                    break;
            }
            break;
        case "polegadas":
            switch (co2) {
                case "metros":
                    res.value = ((val * 1) / 39.37).toFixed(2);
                    break;
                case "centimetros":
                    res.value = (val * 2.54).toFixed(2);
                    break;
                case "milimetros":
                    res.value = (val * 25.4).toFixed(2);
                    break;
                case "polegadas":
                    res.value = val;
                    break;
                default:
                    alert("Opa, algo deu errado, tente novamente.");
                    break;
            }
            break;
            default:
                alert("Opa, algo deu errado, tente novamente.");
                break;

    }
}