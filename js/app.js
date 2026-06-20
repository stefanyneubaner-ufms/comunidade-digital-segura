/**
 * app.js
 * Controlador geral da aplicação: recurso de aumento de fonte
 * (acessibilidade real, não decorativa) e marcação do item de
 * navegação ativo.
 */

const CHAVE_ARMAZENAMENTO = "cds-tamanho-fonte";
const NIVEIS = ["normal", "grande", "maior"];

function aplicarTamanhoFonte(nivel) {
  if (nivel === "normal") {
    document.documentElement.removeAttribute("data-tamanho-fonte");
  } else {
    document.documentElement.setAttribute("data-tamanho-fonte", nivel);
  }
  try {
    localStorage.setItem(CHAVE_ARMAZENAMENTO, nivel);
  } catch (erro) {
    // armazenamento local pode estar bloqueado; a navegação
    // continua funcionando normalmente sem persistir a preferência.
  }
}

function iniciarControleDeFonte() {
  const botaoAumentar = document.querySelector("[data-acao='aumentar-fonte']");
  const botaoDiminuir = document.querySelector("[data-acao='diminuir-fonte']");
  if (!botaoAumentar || !botaoDiminuir) return;

  let nivelAtual = "normal";
  try {
    nivelAtual = localStorage.getItem(CHAVE_ARMAZENAMENTO) || "normal";
  } catch (erro) {
    nivelAtual = "normal";
  }
  aplicarTamanhoFonte(nivelAtual);

  botaoAumentar.addEventListener("click", () => {
    const indice = NIVEIS.indexOf(nivelAtual);
    nivelAtual = NIVEIS[Math.min(indice + 1, NIVEIS.length - 1)];
    aplicarTamanhoFonte(nivelAtual);
  });

  botaoDiminuir.addEventListener("click", () => {
    const indice = NIVEIS.indexOf(nivelAtual);
    nivelAtual = NIVEIS[Math.max(indice - 1, 0)];
    aplicarTamanhoFonte(nivelAtual);
  });
}

function marcarPaginaAtual() {
  const caminho = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-principal__link").forEach((link) => {
    const destino = link.getAttribute("href");
    if (destino === caminho) {
      link.setAttribute("aria-current", "page");
    }
  });
}

document.addEventListener("parciais-prontos", () => {
  iniciarControleDeFonte();
  marcarPaginaAtual();
});

// Fallback: caso a página não use parciais (ex.: sem JS de fetch),
// tenta inicializar normalmente após o carregamento do DOM.
document.addEventListener("DOMContentLoaded", () => {
  if (!document.querySelector("#parcial-cabecalho")) {
    iniciarControleDeFonte();
    marcarPaginaAtual();
  }
});
