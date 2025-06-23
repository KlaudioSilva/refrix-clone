const topo = document.querySelector('#topo');
const navegacao = document.querySelector('#navegacao');
const secoesBrancas = document.querySelectorAll('.branca');

// Função para verificar se #navegacao está sobre uma section branca
function verificarSombra() {
  const navBottom = navegacao.getBoundingClientRect().bottom;

  let sobreBranco = false;

  secoesBrancas.forEach(section => {
    const secTop = section.getBoundingClientRect().top;
    const secBottom = section.getBoundingClientRect().bottom;

    // Se o bottom da navbar está dentro da section branca
    if (navBottom > secTop && navBottom < secBottom) {
      sobreBranco = true;
    }
  });

  if (sobreBranco) {
    navegacao.classList.add('sombra');
  } else {
    navegacao.classList.remove('sombra');
  }
}

// Ao rolar, esconde o topo e verifica sombra
window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    topo.classList.add('escondido');
  } else {
    topo.classList.remove('escondido');
  }

  verificarSombra();
});

// Também verifica na primeira carga
window.addEventListener('load', verificarSombra);

// Animação de slider (mantida como estava)
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

setInterval(nextSlide, 5000);
showSlide(currentSlide);

//campo de seleção de interesses no formulario de contato
const areaSelect = document.getElementById('dpto-area');
const assuntoSelect = document.getElementById('dpto-area-assunto');
const todosOptgroups = assuntoSelect.querySelectorAll('optgroup');

areaSelect.addEventListener('change', function () {
const areaSelecionada = this.value;

// Reinicia o select de assuntos
assuntoSelect.disabled = false;
assuntoSelect.value = "";

// Oculta todos os grupos
todosOptgroups.forEach(group => {
    group.style.display = "none";
});

// Exibe apenas o grupo correspondente à área
const grupoSelecionado = document.getElementById('opt-' + areaSelecionada);
    if (grupoSelecionado) {
      grupoSelecionado.style.display = "block";
    }
});

// Ao carregar a página, escondemos todos os grupos de início
window.addEventListener('DOMContentLoaded', () => {
    todosOptgroups.forEach(group => group.style.display = "none");
    assuntoSelect.disabled = true;
});