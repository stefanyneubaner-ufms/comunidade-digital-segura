/**
 * Dados de exemplo da entidade Alerta.
 * Em produção, estes registros viriam do banco de dados relacional
 * modelado a partir do DER definido no planejamento do projeto
 * (ver relatório do Módulo 1). Aqui ficam como dados estáticos
 * para a primeira versão navegável da aplicação.
 *
 * nivel: "seguro" | "alerta" | "perigo"
 */
export const alertas = [
  {
    id: "a1",
    nivel: "perigo",
    titulo: "Golpe do PIX falso de devolução",
    texto:
      "Criminosos enviam mensagem dizendo que um PIX foi feito \u201Cpor engano\u201D " +
      "e pedem a devolução por outro link. Não existe devolução automática de PIX " +
      "por link. Nunca clique nesses links e confirme qualquer cobrança diretamente " +
      "no aplicativo do seu banco.",
    data: "15 de junho de 2026",
  },
  {
    id: "a2",
    nivel: "perigo",
    titulo: "Falso funcionário do banco por telefone",
    texto:
      "Uma pessoa liga se identificando como \u201Csegurança do banco\u201D e pede a senha " +
      "ou o código que chegou por SMS. Nenhum banco pede sua senha por telefone. " +
      "Desligue e ligue de volta usando o número oficial impresso no cartão.",
    data: "10 de junho de 2026",
  },
  {
    id: "a3",
    nivel: "alerta",
    titulo: "Mensagens de \u201Cparente em apuros\u201D no WhatsApp",
    texto:
      "Um número desconhecido se apresenta como filho ou neto, diz que trocou de " +
      "celular e pede dinheiro com urgência. Antes de enviar qualquer valor, ligue " +
      "para a pessoa pelo número que você já tinha salvo.",
    data: "2 de junho de 2026",
  },
  {
    id: "a4",
    nivel: "seguro",
    titulo: "Recurso novo: confirmação em duas etapas",
    texto:
      "A maioria dos aplicativos de banco já oferece a confirmação em duas etapas. " +
      "Ativar esse recurso é gratuito e dificulta muito a ação de criminosos, mesmo " +
      "que eles descubram sua senha.",
    data: "28 de maio de 2026",
  },
];

export function nivelParaRotulo(nivel) {
  switch (nivel) {
    case "perigo":
      return "Golpe confirmado";
    case "alerta":
      return "Fique atento";
    case "seguro":
      return "Boa prática";
    default:
      return "Aviso";
  }
}

export function nivelParaIcone(nivel) {
  switch (nivel) {
    case "perigo":
      return "⛔";
    case "alerta":
      return "⚠️";
    case "seguro":
      return "✅";
    default:
      return "ℹ️";
  }
}
