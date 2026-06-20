/**
 * Dados de exemplo da entidade Guia.
 * Cada guia tem uma lista de passos curtos, em linguagem direta,
 * pensados para leitura em voz alta ou acompanhamento por um
 * familiar junto ao usuário.
 */
export const guias = [
  {
    id: "g1",
    icone: "🔒",
    titulo: "Como criar uma senha forte e fácil de lembrar",
    resumo:
      "Aprenda a montar uma senha seguro sem precisar decorar letras e números aleatórios.",
    passos: [
      "Escolha uma frase curta que só você entenda, como um lugar e um ano especiais para você.",
      "Junte as palavras sem espaço, por exemplo: PraiaItanhaem1998.",
      "Troque uma letra por um número parecido, como trocar o \u201Ce\u201D por \u201C3\u201D.",
      "Use essa senha só nos aplicativos mais importantes, como o banco e o e-mail.",
      "Nunca compartilhe essa senha com ninguém, mesmo que a pessoa diga que é do banco.",
    ],
  },
  {
    id: "g2",
    icone: "📶",
    titulo: "Como proteger o Wi-Fi da sua casa ou loja",
    resumo:
      "Um Wi-Fi sem proteção permite que estranhos usem sua internet e vejam o que você faz online.",
    passos: [
      "Verifique se sua rede Wi-Fi tem um cadeado ao lado do nome, isso indica que ela é protegida.",
      "Troque a senha que vem de fábrica no aparelho por uma senha própria.",
      "Não compartilhe a senha do Wi-Fi do comércio com clientes em papéis visíveis ao público.",
      "Se possível, peça ajuda a um técnico de confiança para configurar a rede uma vez por ano.",
    ],
  },
  {
    id: "g3",
    icone: "♻️",
    titulo: "Descarte seguro de celulares e computadores antigos",
    resumo:
      "Antes de doar, vender ou jogar fora um aparelho, é preciso apagar os dados pessoais.",
    passos: [
      "Faça backup das fotos e contatos importantes em outro aparelho ou na nuvem.",
      "Retire o chip e o cartão de memória do aparelho antigo.",
      "Use a opção \u201CRestaurar configurações de fábrica\u201D nas configurações do aparelho.",
      "Leve o aparelho a um ponto de coleta de lixo eletrônico, nunca no lixo comum.",
    ],
  },
  {
    id: "g4",
    icone: "💳",
    titulo: "Como reconhecer uma cobrança falsa por PIX ou boleto",
    resumo:
      "Pequenos sinais ajudam a identificar uma cobrança que não é legítima antes de pagar.",
    passos: [
      "Confira se o nome de quem recebe o PIX é realmente da empresa ou pessoa esperada.",
      "Desconfie de boletos enviados por mensagem com urgência ou desconto muito alto.",
      "Em caso de dúvida, entre em contato pelo telefone oficial da empresa antes de pagar.",
      "Nunca pague algo só porque recebeu uma ligação dizendo que é \u201Curgente\u201D.",
    ],
  },
];
