const menuDiv = document.getElementById('caixa-mobile')
const btnAnimar = document.getElementById('botao-menu')

menuDiv.addEventListener('click', animarMenu)

function animarMenu(){
    menuDiv.classList.toggle('abrir')
    btnAnimar.classList.toggle('ativar')
}