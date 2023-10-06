function enviar() {
    let a = document.getElementById('a')
    let b = document.getElementById('b')
    let c = document.getElementById('c')

    const formula = document.getElementById('formula').innerHTML = "<h4>" + "A equação será: " + a.value + "x² + " + b.value + "x + " + c.value + " = 0" + "</h4>";


}

function resposta() {

    let a = document.getElementById('a')
    let b = document.getElementById('b')
    let c = document.getElementById('c')
    let resposta = document.getElementById('resposta')
    let a1 = Number(a.value)
    let b1 = Number(b.value)
    let c1 = Number(c.value)
    resposta.style.display = 'block'
    let delta = (b1 ** 2) - (4 * a1 * c1)
    if (delta < 0) {
        const delta = document.getElementById('resposta').innerHTML = "<h4>" + `O delta é ${delta}, que é negativo portanto, não tem raiz!` + "</h4>" 
    } else {
        let x1 = (-b1 + Math.sqrt(delta)) / (2 * a1)
        let x2 = (-b1 - Math.sqrt(delta)) / (2 * a1)
        const resposta = document.getElementById('resposta').innerHTML = "<h4>" + `O valor de x1 é: ${x1.toFixed(2).replace(".", ",")}, e o valor de x2 é: ${x2.toFixed(2).replace(".", ",")}.` + "</h4>"
    }

}



function limpar() {
    let a = document.getElementById('a')
    let b = document.getElementById('b')
    let c = document.getElementById('c')
    let resposta = document.getElementById('resposta')

    document.getElementById("resposta").style.display = "none"
    document.getElementById('formula').style.display = "none"
    a.value = ''
    b.value = ''
    c.value = ''
}