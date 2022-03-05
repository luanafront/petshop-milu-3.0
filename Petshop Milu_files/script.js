/**
 * fatia1-clicada
fatia2-clicada
fatia3-clicada
 */
const fatia1 = document.getElementById("fatia1")
const fatia2 = document.getElementById("fatia2")
const fatia3 = document.getElementById("fatia3")
const botaoHamburguer = document.getElementById("botao-hamburguer")
const opcoes = document.getElementById("opcoes")
let estaClicado = false 

function Clicar (){
    if(estaClicado === false){
        estaClicado = true
    } else {
        estaClicado = false 
    } 

    if(estaClicado === true){
        fatia1.classList.add("fatia1-clicada")
        fatia2.classList.add("fatia2-clicada")
        fatia3.classList.add("fatia3-clicada")
        opcoes.classList.add("opcoes-clicada")
    } else {
        fatia1.classList.remove("fatia1-clicada")
        fatia2.classList.remove("fatia2-clicada")
        fatia3.classList.remove("fatia3-clicada")
        opcoes.classList.remove("opcoes-clicada")
    }
}

botaoHamburguer.addEventListener("click",Clicar)

