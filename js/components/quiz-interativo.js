import { quiz } from "../data/quiz.js";

/**
 * <quiz-interativo></quiz-interativo>
 *
 * Componente autocontido que gerencia o estado de progresso do
 * quiz (pergunta atual, pontuação) e dá feedback imediato a cada
 * resposta, conforme o requisito funcional definido no
 * planejamento: "o sistema deve exibir quizzes com feedback
 * imediato".
 */
class QuizInterativo extends HTMLElement {
  constructor() {
    super();
    this.indiceAtual = 0;
    this.pontuacao = 0;
    this.respondida = false;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const total = quiz.perguntas.length;

    if (this.indiceAtual >= total) {
      this.renderResultado();
      return;
    }

    const pergunta = quiz.perguntas[this.indiceAtual];

    this.innerHTML = `
      <div class="quiz" role="group" aria-label="${quiz.titulo}">
        <p class="quiz__progresso">Pergunta ${this.indiceAtual + 1} de ${total}</p>
        <h3 class="quiz__pergunta">${pergunta.pergunta}</h3>
        <ul class="quiz__opcoes" id="lista-opcoes"></ul>
        <div class="quiz__feedback-area" aria-live="polite"></div>
        <div class="quiz__rodape">
          <span class="somente-leitor-de-tela">Pontuação atual: ${this.pontuacao}</span>
          <button type="button" class="botao botao--primario" id="botao-avancar" hidden>
            ${this.indiceAtual + 1 < total ? "Próxima pergunta →" : "Ver meu resultado →"}
          </button>
        </div>
      </div>
    `;

    const lista = this.querySelector("#lista-opcoes");
    pergunta.opcoes.forEach((opcao, indice) => {
      const item = document.createElement("li");
      const botao = document.createElement("button");
      botao.type = "button";
      botao.className = "quiz__opcao";
      botao.setAttribute("aria-pressed", "false");
      botao.textContent = opcao;
      botao.addEventListener("click", () => this.responder(indice));
      item.appendChild(botao);
      lista.appendChild(item);
    });

    this.respondida = false;
  }

  responder(indiceEscolhido) {
    if (this.respondida) return;
    this.respondida = true;

    const pergunta = quiz.perguntas[this.indiceAtual];
    const acertou = indiceEscolhido === pergunta.correta;
    if (acertou) this.pontuacao += 1;

    const botoes = this.querySelectorAll(".quiz__opcao");
    botoes.forEach((botao, indice) => {
      botao.disabled = true;
      if (indice === pergunta.correta) {
        botao.classList.add("quiz__opcao--correta");
      }
      if (indice === indiceEscolhido && indice !== pergunta.correta) {
        botao.classList.add("quiz__opcao--incorreta");
      }
      botao.setAttribute("aria-pressed", indice === indiceEscolhido ? "true" : "false");
    });

    const areaFeedback = this.querySelector(".quiz__feedback-area");
    areaFeedback.innerHTML = `
      <div class="quiz__feedback ${acertou ? "quiz__feedback--certo" : "quiz__feedback--errado"}">
        ${acertou ? "✅ Isso mesmo! " : "❌ Não foi essa. "} ${pergunta.explicacao}
      </div>
    `;

    const botaoAvancar = this.querySelector("#botao-avancar");
    botaoAvancar.hidden = false;
    botaoAvancar.addEventListener("click", () => {
      this.indiceAtual += 1;
      this.render();
      this.focus();
    }, { once: true });

    botaoAvancar.focus();
  }

  renderResultado() {
    const total = quiz.perguntas.length;
    this.innerHTML = `
      <div class="quiz quiz__resultado" role="status">
        <p class="quiz__progresso">Quiz concluído</p>
        <p class="quiz__resultado-numero">${this.pontuacao}/${total}</p>
        <p>Você acertou ${this.pontuacao} de ${total} perguntas sobre segurança digital.</p>
        <div class="quiz__rodape" style="justify-content:center; margin-top: 1rem;">
          <button type="button" class="botao botao--primario" id="botao-refazer">
            Refazer o quiz
          </button>
        </div>
      </div>
    `;
    this.querySelector("#botao-refazer").addEventListener("click", () => {
      this.indiceAtual = 0;
      this.pontuacao = 0;
      this.render();
    });
  }
}

customElements.define("quiz-interativo", QuizInterativo);
