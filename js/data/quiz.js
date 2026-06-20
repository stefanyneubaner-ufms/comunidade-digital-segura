/**
 * Dados de exemplo da entidade Quiz.
 * Cada pergunta tem feedback imediato, conforme o requisito
 * funcional "o sistema deve exibir quizzes com feedback imediato".
 */
export const quiz = {
  id: "q1",
  titulo: "Quiz: Você reconhece um golpe digital?",
  perguntas: [
    {
      id: "p1",
      pergunta:
        "Você recebe uma mensagem dizendo que fez um PIX errado e que precisa devolver o dinheiro clicando em um link. O que fazer?",
      opcoes: [
        "Clicar no link e devolver o dinheiro rapidamente, antes que vire problema.",
        "Não clicar em nada e verificar diretamente no aplicativo do banco se há algum PIX recebido.",
        "Responder a mensagem pedindo mais detalhes sobre quem enviou o PIX.",
      ],
      correta: 1,
      explicacao:
        "Não existe devolução de PIX por link enviado por mensagem. Sempre confira direto no aplicativo do seu banco.",
    },
    {
      id: "p2",
      pergunta:
        "Uma pessoa liga se identificando como funcionário do banco e pede sua senha para \u201Cresolver um problema\u201D na conta. O que fazer?",
      opcoes: [
        "Informar a senha, já que a pessoa disse que trabalha no banco.",
        "Desligar a ligação e procurar o número oficial do banco para confirmar a situação.",
        "Pedir para a pessoa ligar mais tarde, mas informar a senha por mensagem.",
      ],
      correta: 1,
      explicacao:
        "Nenhum banco pede sua senha por telefone. Desligue e ligue de volta usando o número oficial do cartão.",
    },
    {
      id: "p3",
      pergunta:
        "Você recebe uma mensagem de um número desconhecido dizendo ser seu neto, que trocou de celular e precisa de dinheiro com urgência. O que fazer?",
      opcoes: [
        "Enviar o dinheiro imediatamente, pois é uma emergência familiar.",
        "Ligar para o neto no número que você já tinha salvo antes de fazer qualquer pagamento.",
        "Pedir para a pessoa enviar uma foto como prova e, se a foto parecer real, enviar o dinheiro.",
      ],
      correta: 1,
      explicacao:
        "Sempre confirme por uma ligação no número que você já conhecia antes de enviar qualquer valor.",
    },
    {
      id: "p4",
      pergunta:
        "Qual destas é uma boa prática para proteger suas contas online?",
      opcoes: [
        "Usar a mesma senha simples em todos os aplicativos para não esquecer.",
        "Ativar a confirmação em duas etapas nos aplicativos que oferecem esse recurso.",
        "Anotar todas as senhas em um papel colado perto do computador.",
      ],
      correta: 1,
      explicacao:
        "A confirmação em duas etapas dificulta muito a ação de criminosos, mesmo que eles descubram sua senha.",
    },
  ],
};
