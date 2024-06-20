function pegarValor() {
    const valor = document.getElementById('valVol').value;
    const volume1 = document.getElementById('v1').value;
    const volume2 = document.getElementById('v2').value;
    converter(valor, volume1, volume2);
}

function converter(val, vol1, vol2) {
    const converteRes = document.getElementById('res');
    switch (vol1) {
        case "litros":
            switch (vol2) {
                case "litros":
                    converteRes.value = val;
                    break;
                case "mililitros":
                    converteRes.value = (val*1000).toFixed(2);
                    break;
                case "galoes":
                    converteRes.value = (val * 0.26417).toFixed(5);
                    break;
                default:
                    alert(`De alguma forma você colocou uma opção inválida. (Converter para ${vol2} não existe)`);
                    break;
            }
            break;
        case "mililitros":
            switch (vol2) {
                case "litros":
                    converteRes.value = (val/1000).toFixed(2);
                    break;
                case "mililitros":
                    converteRes.value = val;
                    break;
                case "galoes":
                    converteRes.value = (val*0.000264172052).toFixed(5);
                    break;
                default:
                    alert(`De alguma forma você colocou uma opção inválida. (Converter para ${vol2} não existe)`);
                    break;
            }
            break;
        case "galoes":
            switch (vol2) {
                case "litros":
                    converteRes.value = (val / 0.26417).toFixed(5);
                    break;
                case "mililitros":
                    converteRes.value = (val / 0.000264172052).toFixed(5);
                    break;
                case "galoes":
                    converteRes.value = val;
                    break;
                default:
                    alert(`De alguma forma você colocou uma opção inválida. (Converter para ${vol2} não existe)`);
                    break;
            }
            break;
        default:
            alert(`De alguma forma você colocou uma opção inválida. (Converter de ${vol1} não existe)`);
            break;
    }
}