# 🛡️ Comunidade Digital Segura

Aplicação web educativa para ajudar **idosos** e **pequenos comerciantes** a reconhecer e evitar golpes digitais — sem precisar instalar nada e sem exigir conhecimento técnico prévio.

Projeto de Extensão **UFMS Digital** (95DX7.200525) — Curso de Tecnologia da Informação.

> 🔗 **Acesse a versão publicada:** `https://stefanyneubaner-ufms.github.io/comunidade-digital-segura/'

---

## Sobre o projeto

A digitalização acelerada de serviços essenciais expôs idosos e pequenos comerciantes a uma onda de golpes (fraudes via PIX, WhatsApp, ligações falsas de banco) para os quais muitos não tiveram tempo de se preparar. O **Comunidade Digital Segura** centraliza, em um único lugar leve e acessível:

- 📘 **Guias práticos** — passo a passo sobre senhas, Wi-Fi, descarte seguro de eletrônicos e identificação de cobranças falsas.
- ⚠️ **Alertas** — avisos atualizados sobre golpes em circulação, classificados por nível de urgência.
- ❓ **Quiz interativo** — perguntas com feedback imediato sobre situações reais de golpe.

## Por que estas escolhas técnicas

| Decisão | Motivo |
|---|---|
| HTML5 semântico + CSS3 puro (Flexbox/Grid) | Compatibilidade universal, sem dependências pesadas — essencial para conexões 3G/4G instáveis. |
| JavaScript com **Web Components** nativos | Organização do código em componentes reutilizáveis (`<cartao-alerta>`, `<cartao-guia>`, `<quiz-interativo>`) sem exigir um framework externo ou etapa de build. |
| Sem necessidade de instalação de pacotes | O site roda apenas com um servidor HTTP estático — qualquer pessoa pode clonar e abrir em minutos. |
| Mobile-First | A maior parte do público-alvo acessa por smartphone. |
| Alto contraste e WCAG 2.1 | Atende usuários com baixa literacia digital e limitações visuais. |
| Controle de tamanho de fonte (A− / A+) | Recurso real de acessibilidade, persistido em `localStorage`. |

## Estrutura do projeto

```
comunidade-digital-segura/
├── index.html              # Página inicial (hero + destaques)
├── guias.html               # Lista de todos os guias
├── guia.html                 # Detalhe de um guia (?id=g1)
├── alertas.html              # Lista de alertas com filtros
├── quiz.html                 # Quiz interativo
├── sobre.html                # Sobre o projeto e ficha técnica
├── 404.html                  # Página de erro
├── css/
│   ├── tokens.css            # Variáveis de cor, tipografia, espaçamento
│   ├── cabecalho.css         # Cabeçalho e navegação
│   ├── hero-alertas.css      # Hero e cartões de alerta
│   ├── guias-quiz-rodape.css # Cartões de guia, quiz e rodapé
│   ├── paginas-internas.css  # Páginas internas (sobre, guia, 404)
│   └── principal.css         # Arquivo que importa todos os módulos acima
├── js/
│   ├── app.js                 # Controle de fonte e navegação ativa
│   ├── parciais.js            # Carregamento de cabeçalho/rodapé compartilhados
│   ├── components/
│   │   ├── cartao-alerta.js   # Web Component <cartao-alerta>
│   │   ├── cartao-guia.js     # Web Component <cartao-guia>
│   │   └── quiz-interativo.js # Web Component <quiz-interativo>
│   └── data/
│       ├── alertas.js         # Dados de exemplo da entidade Alerta
│       ├── guias.js           # Dados de exemplo da entidade Guia
│       └── quiz.js            # Dados de exemplo da entidade Quiz
└── partials/
    ├── cabecalho.html
    └── rodape.html
```

Esta organização por componentes reflete o modelo de entidades (Alerta, Guia, Quiz) definido na etapa de levantamento de requisitos do projeto.


## Controle de versão

O desenvolvimento seguiu a estratégia de *feature branches* por funcionalidade, integradas à branch `main` por meio de Pull Requests:

- `feat/layout-acessivel` — estrutura HTML semântica e tokens de design.
- `feat/componentes-alerta-guia` — Web Components de cartão de alerta e guia.
- `feat/quiz-interativo` — componente de quiz com feedback imediato.

## Próximos passos

- Integrar os dados de exemplo (`js/data/*.js`) a um banco de dados relacional real, conforme o DER planejado na etapa de levantamento de requisitos.
- Testes de usabilidade com representantes do público-alvo (idosos e pequenos comerciantes).
- Painel administrativo simples para cadastro de novos alertas.


## Autoria

Stefany Caroline Neubaner Teixeira — Tecnologia da Informação — Projeto de Extensão UFMS Digital (95DX7.200525).
