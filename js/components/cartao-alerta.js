import { nivelParaRotulo, nivelParaIcone } from "../data/alertas.js";

/**
 * <cartao-alerta nivel="perigo" titulo="..." texto="..." data="...">
 *
 * Componente que representa visualmente um registro da entidade
 * Alerta. Implementado como Web Component nativo para reaproveitar
 * a mesma estrutura em qualquer página sem duplicar HTML/CSS.
 */
class CartaoAlerta extends HTMLElement {
  connectedCallback() {
    const nivel = this.getAttribute("nivel") || "alerta";
    const titulo = this.getAttribute("titulo") || "";
    const texto = this.getAttribute("texto") || "";
    const data = this.getAttribute("data") || "";

    this.classList.add("cartao-alerta", `cartao-alerta--${nivel}`);
    this.setAttribute("role", "article");

    this.innerHTML = `
      <span class="cartao-alerta__selo cartao-alerta__selo--${nivel}">
        <span aria-hidden="true">${nivelParaIcone(nivel)}</span>
        ${nivelParaRotulo(nivel)}
      </span>
      <h3 class="cartao-alerta__titulo">${titulo}</h3>
      <p class="cartao-alerta__texto">${texto}</p>
      <p class="cartao-alerta__data">Publicado em ${data}</p>
    `;
  }
}

customElements.define("cartao-alerta", CartaoAlerta);
