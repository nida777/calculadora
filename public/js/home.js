const resultado = document.querySelector('.result')
// const confirmar = document.querySelectorAll('.igual')

this.mode = false

function clean() {
    resultado.innerHTML = null
}

function insert(valor) {
    let valid = resultado.innerHTML
    if (valid.length === 0 && valor === '*'
        || valid.length === 0 && valor === "/"
        || valid.length === 0 && valor === "+"
        || valid.length === 0 && valor === "-"
        || valid.length === 0 && valor === "."
    ) return clean()

    if (!this.mode) {
        resultado.innerHTML += valor
    } else {
        resultado.innerHTML = null
        resultado.innerHTML += valor
        this.mode = false
    }
}

function backspace() {
    if (resultado.textContent) {
        let result = document.getElementById('resultado').innerHTML
        resultado.innerHTML = result.substring(0, result.length - 1)
    }
}

function confirma() {
    if (resultado.textContent != "Error" && resultado.textContent != "") {
        document.getElementById("resultado").innerHTML = eval(resultado.innerHTML)
        this.mode = true
    } else {
        return null
    }
}