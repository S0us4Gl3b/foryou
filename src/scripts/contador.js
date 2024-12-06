let dataAtual = new Date()
const dataInicioNamoro = new Date('2024-11-05T00:00:00')

function atualizarValores (anos, meses, dias, horas, minutos, segundos) {

    document.getElementById('anos').innerHTML = `${anos < 10 ? '0' : ''}${anos}<span>ano${anos !== 1 ? 's' : ''}</span>`;
    document.getElementById('meses').innerHTML = `${meses < 10 ? '0': ''}${meses}<span>mes${meses !== 1 ? 'es' : ''}</span>`;
    document.getElementById('dias').innerHTML = `${dias < 10 ? '0': ''}${dias}<span>dia${dias !== 1 ? 's' : ''}</span>`;
    document.getElementById('horas').innerHTML = `${horas < 10 ? '0': ''}${horas}<span>hora${horas !== 1 ? 's' : ''}</span>`;
    document.getElementById('minutos').innerHTML = `${minutos < 10 ? '0': ''}${minutos}<span>minuto${minutos !== 1 ? 's' : ''}</span>`;
    document.getElementById('segundos').innerHTML = `${segundos < 10 ? '0': ''}${segundos}<span>segundo${segundos !== 1 ? 's' : ''}</span>`;

}

function calcula_data(dataAtual, dataInicioNamoro) {

    const diferenca = dataAtual - dataInicioNamoro

    const anos = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365))
    const meses = Math.floor((diferenca % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30))
    const dias = Math.floor((diferenca % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24))
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000* 60))
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000)

    atualizarValores(anos, meses, dias, horas, minutos, segundos)
}

setInterval (() => {
    dataAtual = new Date() //Atualiza a data atual a cada ciclo
    calcula_data(dataAtual, dataInicioNamoro)
}, 1000)