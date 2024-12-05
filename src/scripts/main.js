AOS.init();

const dataDoEvento = new Date("Dec 12, 2024 19:00:00")
const timeStampDoEvento = dataDoEvento.getTime()

const contaOTempo = setInterval(function() {
    const agora = new Date()
    const timeStampAgora = agora.getTime()

    const timeStampAteOEvento = timeStampDoEvento - timeStampAgora

    const dias = Math.floor(timeStampAteOEvento / (1000 * 60 * 60 * 24))
    const horas = Math.floor((timeStampAteOEvento % (1000 * 60 * 60 * 24))/(1000 * 60 *60))
    const minutos = Math.floor((timeStampAteOEvento % (1000 * 60 * 60)) / (1000 * 60))
    const segundos = Math.floor((timeStampAteOEvento % (1000 * 60)/1000))

    document.getElementById('contador').innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`

    if (timeStampAteOEvento < 0) {
        clearInterval(contaOTempo)
        document.getElementById('contador').innerHTML = '12/12/2024 às 19 horas'
    }
},1000)