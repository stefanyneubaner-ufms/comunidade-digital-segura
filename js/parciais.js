/**
 * parciais.js
 * Carrega o cabeçalho e o rodapé a partir de fragmentos HTML
 * compartilhados (partials/cabecalho.html e partials/rodape.html),
 * evitando duplicar a mesma marcação em cada página, mesmo sem
 * usar um bundler. Funciona via fetch local, então o site deve
 * ser servido por http(s) — não abrindo o arquivo direto como
 * file:// (instruções no README).
 */

async function carregarParcial(seletorDestino, caminhoArquivo) {
  const destino = document.querySelector(seletorDestino);
  if (!destino) return;
  try {
    const resposta = await fetch(caminhoArquivo);
    const html = await resposta.text();
    destino.outerHTML = html;
  } catch (erro) {
    console.error(`Não foi possível carregar ${caminhoArquivo}`, erro);
  }
}

async function iniciarParciais() {
  await Promise.all([
    carregarParcial("#parcial-cabecalho", "partials/cabecalho.html"),
    carregarParcial("#parcial-rodape", "partials/rodape.html"),
  ]);
  document.dispatchEvent(new CustomEvent("parciais-prontos"));
}

iniciarParciais();
