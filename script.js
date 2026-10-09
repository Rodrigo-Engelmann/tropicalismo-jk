const header = document.querySelector(".header");
const headerContent = document.getElementById("headerContent");
const headerBackground = document.getElementById("headerBackground");

window.addEventListener("scroll", () => {
  // sistema que remove suavemente o texto e conteúdo do header após scroll
  const headerContentOpacity = `${((window.scrollY/vhToPx(0.35)) - 100) *-1}%`;
  headerContent.style.opacity = headerContentOpacity;

  // o sistema vai alterar o height do background com base no croll
  // ponto inicial: 100vh
  // ponto final: 14vh
  const bgndHeight = `${vhToPx(Math.max(vhToPx(1), ((window.scrollY/vhToPx(1)) - 100)*-1))}px`;
  headerBackground.style.height = bgndHeight;

  if (window.scrollY > 30)
    header.classList.add("scrolled");
  else
    header.classList.remove("scrolled");
});

function vhToPx(vh) {
  return (vh / 100) * window.innerHeight;
}