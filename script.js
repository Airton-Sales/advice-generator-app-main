const h1 = document.getElementById("h1Id");
const p = document.getElementById("pId");
const button = document.getElementById("buttonId");

const obterDado = () => {
  const url = "https://api.adviceslip.com/advice";
  fetch(url)
    .then((res) => res.json())
    .then((dados) => {
      console.log(dados);
      h1.innerText = `ADVICE #${dados.slip.id}`;
      p.innerText = `"${dados.slip.advice}"`;
    });
};

addEventListener("click", obterDado)