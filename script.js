//variáreis
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

//Eventos
btnTry.addEventListener("click", handleTryClick)
btnReset.addEventListener("click", handleResetClick)
document.addEventListener("keydown", function(e) {
    if(e.key == 'Enter' && screen1.classList.contains('hide'))
    handleResetClick()
})

//funções
function handleTryClick(event) {
    event.preventDefault() /* não faça o padrão, e o que é o padrão? 
    neste caso o padrão é recarregar/atualizar a pagina pois o botão
    está dentro de um formulário. e eu não quero que esse padrão
    aconteça, portanto event.preventDefault */

    const inputNumber = document.querySelector("#inputNumber")

    if(Number(inputNumber.value) == randomNumber) {
        toggleScreen()
        screen2.querySelector("h2").innerText = `Você acertou em ${xAttempts} tentativas!`
    }

    inputNumber.value = ""
    xAttempts++
}

function handleResetClick() {
    toggleScreen()
    xAttempts = 1
    randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
    screen2.classList.toggle("hide")
    screen1.classList.toggle("hide")
}