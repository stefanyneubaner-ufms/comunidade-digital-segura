/**
 * <cartao-guia icone="🔒" titulo="..." resumo="..." href="...">
 *
 * Cartão de entrada para um guia prático. Aponta para a página
 * de detalhe do guia (guia.html?id=...).
 */
class CartaoGuia extends HTMLElement {
  connectedCallback() {
    const icone = this.getAttribute("icone") || "📘";
    const titulo = this.getAttribute("titulo") || "";
    const resumo = this.getAttribute("resumo") || "";
    const href = this.getAttribute("href") || "#";

    this.outerHTML = `
      <a class="cartao-guia" href="${href}">
        <span class="cartao-guia__icone" aria-hidden="true">${icone}</span>
        <h3 class="cartao-guia__titulo">${titulo}</h3>
        <p class="cartao-guia__resumo">${resumo}</p>
        <span class="cartao-guia__cta">Ler o guia completo →</span>
      </a>
    `;
  }
}

customElements.define("cartao-guia", CartaoGuia);
