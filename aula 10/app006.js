var a = window.document.getElementById('area')
a.addEventListener('click', clicar)
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseout', sair)

function clicar() {
  a.innerText = 'Clicou!'
  a.style.backgroundColor = 'blue'
}
function entrar() {
  a.innerText = 'Entrou!'
  a.style.backgroundColor = 'red'
}
function sair() {
  a.innerText = 'Saiu!'
  a.style.backgroundColor = 'green'
}
