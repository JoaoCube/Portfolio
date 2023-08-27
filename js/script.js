// repetir header e footer
const header = document.querySelector("header");
const footer = document.querySelector("footer");
header.innerHTML = `
<div class="header-conteudo">
<a href="index.html" id="logo" class="cor-2 font2-bold-Pg">Cube</a>

<nav id="nav">
  <button aria-label="Abrir Menu" id="btn-mobile" aria-haspopup="true" aria-controls="menu" aria-expanded="false">
    <span id="hamburger"></span>
  </button>

  <ul id="menu" role="list">
    <li role="listitem"><a href="#sobre">About</a></li>
    <li role="listitem"><a href="#experiencia">Experience</a></li>
    <li role="listitem"><a href="#projetos">Projects</a></li>
    <li role="listitem"><a href="#contato">Contact</a></li>
  </ul>
</nav>
</div>
`;
footer.innerHTML = `
<div class="footer-container">
<div class="lista-contato">
<ul>
  <li><a href="#sobre">About</a></li>
  <li><a href="#experiencia">Experience</a></li>
  <li><a href="#projetos">Projects</a></li>
  <li><a href="#contato">Contact</a></li>
</ul>
</div>
<div class="footer-conteudo">
  <p class="cor-2">CubeElement © Todos os direitos reservados.</p>
</div>
</div> <!-- FIM FOOTER CONTAINER -->
`;

const btnMobile = document.getElementById("btn-mobile");
function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault();
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
  const active = nav.classList.contains("active");
  event.currentTarget.setAttribute("aria-expanded", active);
  if (active) {
    event.currentTarget.setAttribute("aria-label", "Fechar Menu");
  } else {
    event.currentTarget.setAttribute("aria-label", "Abrir Menu");
  }
}
btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);

// ANIMACAO DE ESCREVER NA INTRODUCAO
function typeWriter(elemento) {
  const textoArray = elemento.innerHTML.split("");
  elemento.innerHTML = "";
  textoArray.forEach((letra, i) => {
    setTimeout(() => (elemento.innerHTML += letra), 135 * i);
  });
}
const titulo = document.querySelector("h1");
typeWriter(titulo);
