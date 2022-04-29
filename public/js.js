const url = new URLSearchParams(window.location.search);
const acertos = url.get("acertos");
const erros = url.get("erros");

function resultado() {
  if (acertos == 0) {
    alert(
      `Você acertou um total de ${acertos} amostras e errou ${erros} amostras, não foi dessa vez :(`
    );
  } else if (acertos <= 2) {
    alert(
      `Você acertou um total de ${acertos} amostras e errou ${erros} amostras, continue tentando!`
    );
  } else if (acertos >= 5 && erros == 0) {
    alert(
      `Você acertou um total de ${acertos} amostras e errou ${erros} amostras, você foi perfeito(a)!`
    );
  } else if (acertos >= 5) {
    alert(
      `Você acertou um total de ${acertos} amostras e errou ${erros} amostras, você foi incrível!`
    );
  } else if (acertos >= 2) {
    alert(
      `Você acertou um total de ${acertos} amostras e errou ${erros} amostras, você foi bem!`
    );
  } else {
    alert(
      `Você acertou um total de ${acertos} amostras e errou ${erros} amostras, tem coisa errada ai brother '-'`
    );
  }
}
/*
const btnT = document.querySelector("#btnTEMA");
const pT = document.querySelector(".p");
const bodyT = document.querySelector("#body");
const mainT = document.querySelector("#main");

function claro(event) {
  if (event.type === "toutchstat") event.preventDefault();

  mainT.classList.toggle("active");
  btnT.classList.toggle("active");
  pT.classList.toggle("active");
  bodyT.classList.toggle("active");
}


btnT.addEventListener("click", claro);
btnT.addEventListener("toutchstart", claro);
*/