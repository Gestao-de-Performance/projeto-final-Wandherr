const botoes = document.querySelectorAll('[data-abre-modal]');
for (let botaoEl of botoes){
  botaoEl.addEventListener('click', abreModal);
}

function abreModal(e) {
  const botaoClicadoEl = e.currentTarget;
  const seletorDoModal = botaoClicadoEl.dataset.abreModal;
  const modalEl = document.querySelector(seletorDoModal);
  modalEl.classList.add('visivel');
}

const botoesDeFechar = document.querySelectorAll('.fechar-modal');
botoesDeFechar.forEach(fechaEl => fechaEl.addEventListener('click', fechaModal));

function fechaModal(e) {
  const fecharModalEl = e.currentTarget;
  const modalEl = fecharModalEl.closest('.modal');
  modalEl.classList.remove('visivel');
}

const mascaraE1 = document.querySelector('#mascara');
mascaraE1.addEventListener('click', fechaModalAberto);

function fechaModalAberto() {
  document.querySelector('.modal.visivel').classList.remove('visivel');
}


let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{
  menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
  menu.classList.remove('abrir-menu')
})
overlay.addEventListener('click', ()=>{
  menu.classList.remove('abrir-menu')
})