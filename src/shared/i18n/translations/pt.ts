import { Translation } from '../types';

export const ptTranslation: Translation = {
  navigation: {
    modules: 'Módulos',
    playground: 'Playground', 
    progress: 'Progresso',
  },

  hero: {
    tagline: 'Aprenda fazendo',
    title: {
      learn: 'Aprenda',
      promptEngineering: 'Prompt Engineering',
      inPractice: 'na prática',
    },
    description: 'Uma plataforma educacional criada para acompanhar e facilitar o aprendizado de Prompt Engineering de forma visual, prática e didática. Desenvolvida com IA e focada em ensinar conceitos fundamentais sem complicação.',
    startLearning: 'Começar o aprendizado',
    stats: {
      modules: 'módulos interativos',
      modulesDesc: 'Do básico ao avançado',
      apiCosts: 'custos de API',
      apiCostsDesc: 'Tudo simulado para aprender',
      free: 'gratuito',
      freeDesc: 'Acesso total sem custos',
    },
    whyExists: {
      title: 'Por que o PromptLab existe?',
      description: 'Criado durante meus estudos de Desenvolvimento com IA, o PromptLab nasceu da necessidade de uma ferramenta educativa que unisse aprendizado em IA com boas práticas de engenharia de software.',
      visualLearning: {
        title: 'Aprendizado Visual',
        description: 'Interface didática que torna conceitos complexos de Prompt Engineering fáceis de entender e aplicar.',
      },
      educationalFocus: {
        title: 'Foco Educacional',
        description: 'Sem APIs reais ou custos - tudo é simulado para manter o foco no que realmente importa: aprender.',
      },
      bestPractices: {
        title: 'Boas Práticas',
        description: 'Desenvolvido com Clean Architecture, React, TypeScript e testes - uma base sólida para escalar.',
      },
      toolGrows: {
        title: 'Uma ferramenta que cresce com você',
        description: 'O PromptLab evolui conforme meu próprio aprendizado cresce. Cada novo conceito que aprendo sobre IA e desenvolvimento se torna uma melhoria na plataforma.',
        tagline: 'Criado por um desenvolvedor, para desenvolvedores',
      },
    },
    whatYouLearn: {
      title: 'O que você vai aprender',
      description: 'módulos cuidadosamente estruturados para levar você do zero ao avançado em Prompt Engineering',
      basic: {
        title: 'Módulos Básicos',
        description: 'Fundamentos de prompts, estruturação básica e primeiros conceitos essenciais.',
        link: 'Ver módulos básicos →',
      },
      intermediate: {
        title: 'Módulos Intermediários', 
        description: 'Técnicas avançadas, contextos complexos e otimização de resultados.',
        link: 'Ver módulos intermediários →',
      },
      advanced: {
        title: 'Módulos Avançados',
        description: 'Casos de uso profissionais, integração com ferramentas e bests practices.',
        link: 'Ver módulos avançados →',
      },
    },
    howItWorks: {
      title: 'Como funciona na prática',
      description: 'Três ferramentas integradas para uma experiência completa de aprendizado',
      studyModules: {
        title: '1. Estude os Módulos',
        description: 'Aprenda conceitos teóricos através de módulos interativos com exemplos práticos e exercícios.',
        button: 'Começar pelos módulos',
      },
      practicePlayground: {
        title: '2. Pratique no Playground',
        description: 'Teste seus prompts em um ambiente seguro com feedback instantâneo e sugestões de melhoria.',
        button: 'Testar no playground',
      },
      trackProgress: {
        title: '3. Acompanhe seu Progresso',
        description: 'Monitore sua evolução com métricas detalhadas e sistema de gamificação motivacional.',
        button: 'Ver meu progresso',
      },
      startJourney: 'Começar minha jornada agora',
      noRegistration: '• Sem necessidade de cadastro • Comece em 30 segundos',
    },
  },

  modules: {
    title: 'Módulos de Aprendizado',
    description: 'Explore nosso currículo completo estruturado em três níveis de dificuldade',
    backToModules: 'Voltar aos módulos',
    complete: 'Marcar como concluído',
    completed: 'Concluído',
    markIncomplete: 'Marcar como incompleto',
    difficulty: {
      beginner: 'Iniciante',
      intermediate: 'Intermediário', 
      advanced: 'Avançado',
    },
    estimatedTime: 'Tempo estimado',
    topics: 'Tópicos',
    moduleNotFound: 'Módulo não encontrado',
    contentInDevelopment: 'Conteúdo em desenvolvimento',
    sections: {
      beginner: {
        title: '🌱 Iniciante',
        description: 'Fundamentos essenciais para começar sua jornada em Prompt Engineering',
      },
      intermediate: {
        title: '🚀 Intermediário',
        description: 'Técnicas avançadas para criar prompts mais efetivos e estruturados',
      },
      advanced: {
        title: '⚡ Avançado',
        description: 'Domine casos de uso complexos e ferramentas profissionais',
      },
    },
  },

  progress: {
    title: 'Seu Progresso',
    description: 'Acompanhe sua jornada de aprendizado',
    completedModules: 'Módulos Concluídos',
    totalProgress: 'Progresso Total',
    continue: 'Continuar',
    start: 'Começar',
    noProgress: 'Nenhum progresso ainda. Comece agora!',
    congratulations: 'Parabéns!',
    completedAll: 'Você completou todos os módulos disponíveis!',
  },

  playground: {
    title: 'Playground de Prompts',
    description: 'Teste e aprimore seus prompts com feedback em tempo real',
    promptPlaceholder: 'Digite seu prompt aqui...\n\nExemplo:\nVocê é um especialista em marketing digital. Crie 3 ideias de posts para Instagram sobre sustentabilidade. Cada post deve ter um título chamativo e 3 hashtags relevantes.',
    analyzePrompt: 'Analisar Prompt',
    analyzing: 'Analisando...',
    analysisResult: 'Resultado da Análise',
    suggestions: 'Sugestões de Melhoria',
    improvePrompt: 'Melhorar Prompt',
    clearPrompt: 'Limpar Prompt',
    examplePrompts: 'Exemplos de Prompts',
  },

  language: {
    title: 'Idioma',
    portuguese: 'Português (Brasil)',
    english: 'English',
    spanish: 'Español',
  },

  moduleContent: {
    chapter1: {
      title: 'Estrutura Básica de Prompt',
      description: 'Aprenda os fundamentos de como estruturar um prompt efetivo para modelos de IA.',
      content: {
        whatIsPrompt: 'O que é um Prompt?',
        whatIsPromptDesc: 'Um prompt é a instrução ou pergunta que você fornece a um modelo de IA para obter uma resposta. A qualidade do prompt afeta diretamente a qualidade da resposta.',
        essentialComponents: 'Componentes Essenciais',
        task: 'Tarefa',
        taskDesc: 'O que você quer que a IA faça',
        taskExample: 'Resuma este artigo...',
        context: 'Contexto',
        contextDesc: 'Informações de fundo relevantes',
        contextExample: 'Como especialista em marketing...',
        format: 'Formato',
        formatDesc: 'Como você quer a resposta',
        formatExample: 'Em 3 bullet points...',
        tone: 'Tom',
        toneDesc: 'O estilo de comunicação desejado',
        toneExample: 'De forma profissional e objetiva...',
        practicalExample: 'Exemplo Prático',
        weakPrompt: 'Prompt Fraco',
        strongPrompt: 'Prompt Forte',
        weakPromptText: 'Explica IA',
        strongPromptText: 'Explique o conceito de Inteligência Artificial para um estudante do ensino médio, usando uma analogia simples e fornecendo 3 exemplos práticos de uso no dia a dia. Seja conciso e use linguagem acessível.',
        weakPromptIssue: 'Muito vago, sem contexto ou formato específico.',
        strongPromptBenefit: 'Claro, específico, com contexto sobre o público e formato desejado.',
        importantTip: '💡 Dica Importante',
        tipDescription: 'Quanto mais específico e estruturado for seu prompt, melhores e mais consistentes serão as respostas. Pense no prompt como uma receita: ingredientes claros levam a resultados previsíveis.',
      },
    },
    chapter2: {
      title: 'Clareza e Direcionamento',
      description: 'Aprenda a construir prompts claros e diretos para obter respostas mais precisas.',
      content: {
        mainTitle: 'Ser Claro e Direto',
        introduction: 'A clareza é fundamental para obter respostas precisas. Modelos de IA interpretam literalmente o que você diz, portanto ambiguidades podem levar a resultados inesperados.',
        clarityPrinciples: 'Princípios de Clareza',
        decompositionTitle: 'Técnica: Decomposição',
        decompositionDesc: 'Quando sua tarefa é complexa, divida-a em passos menores e claros:',
        goldenRuleTitle: 'Regra de Ouro',
        goldenRuleDesc: 'Se você precisa reler seu próprio prompt para entendê-lo, a IA também terá dificuldades. Simplicidade e clareza sempre vencem complexidade desnecessária.',
        principles: {
          directLanguage: {
            title: 'Use linguagem direta',
            bad: 'Talvez você pudesse dar uma olhada neste texto e ver se há algo que possa ser melhorado...',
            good: 'Revise este texto e corrija erros gramaticais e de pontuação.',
          },
          avoidMultipleQuestions: {
            title: 'Evite múltiplas perguntas em uma',
            bad: 'O que é Python e como eu aprendo e quanto tempo leva?',
            good: 'O que é Python? Liste os passos para aprender Python para iniciantes.',
          },
          beSpecificAboutScope: {
            title: 'Seja específico sobre o escopo',
            bad: 'Fale sobre marketing digital',
            good: 'Explique as 5 principais estratégias de marketing digital para pequenas empresas em 2024.',
          },
        },
        decompositionSteps: {
          step1: 'Identifique o tema principal',
          step2: 'Liste os pontos-chave a serem abordados',
          step3: 'Defina o formato de saída esperado',
        },
        avoid: 'Evite:',
        prefer: 'Prefira:',
      },
    },
    chapter3: {
      title: 'Atribuição de Papéis',
      description: 'Descubra como dar funções específicas à IA para respostas mais direcionadas.',
      content: {
        mainTitle: 'Atribuindo Funções',
        introduction: 'Ao atribuir uma função ou papel específico à IA, você molda o estilo, o tom e a profundidade das respostas. Esta técnica é conhecida como Role Prompting.',
        whyItWorksTitle: 'Por que funciona?',
        whyItWorksDesc: 'Modelos de IA são treinados em vastas quantidades de texto que incluem diferentes estilos e contextos profissionais. Ao especificar um papel, você ativa padrões de linguagem e conhecimento associados àquela função.',
        examplesTitle: 'Exemplos de Funções',
        recommendedStructureTitle: 'Estrutura Recomendada',
        practicalComparisonTitle: 'Comparação Prática',
        advancedTipTitle: '💡 Dica Avançada',
        advancedTipDesc: 'Combine múltiplas características para criar personas mais específicas:',
        advancedTipExample: 'Você é uma desenvolvedora full-stack com 10 anos de experiência, especializada em React e Node.js, conhecida por escrever código limpo e bem documentado...',
        withoutRoleTitle: 'Sem Função Definida',
        withoutRoleResult: 'Resposta genérica e superficial',
        withRoleTitle: 'Com Função Definida',
        withRoleResult: 'Análise técnica detalhada e específica',
        roles: {
          businessConsultant: {
            title: 'Consultor de Negócios',
            prompt: 'Como consultor de negócios especializado em startups, analise este plano de negócios...',
          },
          scienceTeacher: {
            title: 'Professor de Ciências',
            prompt: 'Como professor de física do ensino médio, explique o conceito de entropia...',
          },
          wellnessCoach: {
            title: 'Coach de Bem-estar',
            prompt: 'Como coach de bem-estar e mindfulness, sugira técnicas para reduzir ansiedade...',
          },
          uxSpecialist: {
            title: 'Especialista em UX',
            prompt: 'Como especialista em experiência do usuário, avalie este fluxo de navegação...',
          },
        },
        structureTemplate: `Você é um [FUNÇÃO] com [EXPERTISE].

Seu objetivo é [TAREFA].

Considere [CONTEXTO RELEVANTE].

Forneça a resposta em [FORMATO].`,
        comparisonExamples: {
          withoutRole: 'Como posso melhorar meu código?',
          withRole: 'Como engenheiro de software sênior especializado em performance, revise este código e sugira otimizações específicas.',
        },
      },
    },
    chapter4: {
      title: 'Separação de Dados e Instruções',
      description: 'Técnicas para estruturar prompts complexos separando claramente dados e comandos.',
      content: {
        mainTitle: 'Separando Dados de Instruções',
        introduction: 'Quando trabalhamos com prompts complexos que incluem dados variáveis (textos para analisar, código para revisar, etc.), é crucial separar claramente as instruções dos dados.',
        whyItMattersTitle: 'Por que isso importa?',
        whyItMattersDesc: 'Sem separação clara, a IA pode confundir dados com instruções, levando a resultados imprevisíveis. Delimitadores ajudam a criar fronteiras claras.',
        delimitationTechniquesTitle: 'Técnicas de Delimitação',
        practicalExampleTitle: 'Exemplo Prático Completo',
        checklistTitle: '✓ Checklist de Boas Práticas',
        techniques: {
          tripleDelimiters: {
            title: '1. Delimitadores Triplos',
            description: 'Útil para: código, textos longos, conteúdo com formatação especial',
            example: `Analise o seguinte texto e resuma em 3 pontos:

\`\`\`
[TEXTO DO USUÁRIO AQUI]
Este é o conteúdo que precisa ser analisado.
Pode ter múltiplas linhas e até "aspas".
\`\`\`

Forneça o resumo em bullet points.`,
            useFor: 'código, textos longos, conteúdo com formatação especial',
          },
          xmlTags: {
            title: '2. Tags XML',
            description: 'Útil para: múltiplos blocos de dados, estrutura hierárquica',
            example: `Você receberá um documento e uma pergunta.

<document>
[DOCUMENTO COMPLETO]
</document>

<question>
[PERGUNTA DO USUÁRIO]
</question>

Responda a pergunta baseando-se apenas nas informações do documento.`,
            useFor: 'múltiplos blocos de dados, estrutura hierárquica',
          },
          sectionMarkers: {
            title: '3. Marcadores de Seção',
            description: 'Útil para: múltiplas seções, comparações, workflows complexos',
            example: `=== INSTRUÇÃO ===
Compare os dois artigos abaixo e liste as diferenças principais.

=== ARTIGO 1 ===
[Texto do primeiro artigo]

=== ARTIGO 2 ===
[Texto do segundo artigo]

=== FORMATO DE SAÍDA ===
Liste as diferenças em tabela comparativa.`,
            useFor: 'múltiplas seções, comparações, workflows complexos',
          },
        },
        practicalExample: `Você é um especialista em análise de sentimentos.

Analise o sentimento do seguinte review de produto:

<review>
O produto chegou rápido, mas a qualidade não é o que eu esperava.
A embalagem estava danificada e faltavam peças. Não recomendo.
</review>

<instructions>
1. Classifique o sentimento como: Positivo, Neutro ou Negativo
2. Identifique os aspectos mencionados (entrega, qualidade, embalagem)
3. Dê uma nota de 1 a 5 para cada aspecto
</instructions>

Responda em formato JSON.`,
        checklist: [
          'Use delimitadores consistentes em todo o prompt',
          'Escolha delimitadores que não apareçam nos dados',
          'Explique a estrutura antes de apresentar os dados',
          'Mantenha instruções separadas dos dados variáveis',
        ],
      },
    },
    chapter5: {
      title: 'Formatação de Saída',
      description: 'Aprenda a especificar formatos estruturados para obter respostas consistentes e integráveis.',
      content: {
        mainTitle: 'Formatando a Saída',
        introduction: 'Especificar o formato da resposta é essencial para integração com sistemas e para garantir consistência. A IA pode gerar saídas em diversos formatos estruturados.',
        popularFormatsTitle: 'Formatos Populares',
        outputTemplatesTitle: 'Templates de Saída',
        effectiveFormattingTitle: 'Dicas para Formatação Efetiva',
        advancedTechniqueTitle: '💡 Técnica Avançada: Schema JSON',
        formats: {
          json: {
            title: 'JSON',
            description: 'Ideal para integração com APIs e aplicações',
            prompt: `Extraia as informações principais desta biografia e retorne em JSON:

Nome, Profissão, Nacionalidade, Anos de Experiência

Biografia: "Marie Curie foi uma física e química polonesa..."`,
            expectedResponse: `{
  "nome": "Marie Curie",
  "profissao": "Física e Química",
  "nacionalidade": "Polonesa",
  "anos_experiencia": "Não especificado"
}`,
          },
          markdown: {
            title: 'Markdown',
            description: 'Perfeito para documentação e conteúdo web',
            prompt: `Crie um guia rápido sobre Git em formato Markdown com:
- Título principal
- 3 seções (Instalação, Comandos Básicos, Boas Práticas)
- Código em blocos de código
- Links relevantes`,
          },
          xml: {
            title: 'XML',
            description: 'Útil para dados hierárquicos e sistemas legados',
            prompt: `Converta esta lista de produtos para XML:
- iPhone 14, R$4.999, Eletrônicos
- Notebook Dell, R$3.500, Informática

Use as tags: <produtos>, <produto>, <nome>, <preco>, <categoria>`,
          },
        },
        templateExample: {
          description: 'Forneça um template vazio para a IA preencher:',
          example: `Analise o feedback do cliente e preencha o template:

TEMPLATE:
---
Sentimento: [Positivo/Neutro/Negativo]
Categoria: [Produto/Atendimento/Entrega/Outro]
Prioridade: [Alta/Média/Baixa]
Ação Recomendada: [Texto livre]
---

Feedback: "O produto é ótimo, mas demorou 2 semanas para chegar."`,
        },
        tips: [
          {
            title: 'Seja explícito',
            description: 'Especifique exatamente o formato desejado, incluindo estrutura de chaves, nomes de campos, etc.',
          },
          {
            title: 'Dê exemplos',
            description: 'Mostre um exemplo do formato esperado sempre que possível',
          },
          {
            title: 'Defina tipos',
            description: 'Indique se campos devem ser strings, números, arrays, booleanos, etc.',
          },
          {
            title: 'Valide após',
            description: 'Sempre valide a saída da IA antes de usar em produção',
          },
        ],
        advancedTechnique: {
          description: 'Para máxima precisão, forneça um JSON Schema descrevendo a estrutura esperada:',
          example: `Retorne os dados seguindo este schema:
{
  "type": "object",
  "properties": {
    "titulo": {"type": "string"},
    "preco": {"type": "number"},
    "disponivel": {"type": "boolean"}
  },
  "required": ["titulo", "preco"]
}`,
        },
      },
    },
    chapter6: {
      title: 'Chain-of-Thought (Pensamento Passo a Passo)',
      description: 'Técnica avançada para obter raciocínios mais precisos mostrando o processo de pensamento.',
      content: {
        mainTitle: 'Precognição (Pensando Passo a Passo)',
        cotExplanation: 'Técnica que pede à IA para mostrar seu raciocínio antes de dar a resposta final, resultando em respostas mais precisas e confiáveis, especialmente para tarefas complexas.',
        howItWorksTitle: 'Como Funciona',
        withoutCotTitle: '❌ Sem Chain-of-Thought',
        withCotTitle: '✓ Com Chain-of-Thought',
        effectiveTriggersTitle: 'Frases-Gatilho Efetivas',
        advancedExampleTitle: 'Exemplo Avançado',
        whenToUseTitle: 'Quando Usar CoT',
        zeroShotTechniqueTitle: '💡 Técnica Zero-Shot CoT',
        comparison: {
          without: {
            title: '❌ Sem Chain-of-Thought',
            prompt: 'Uma loja tem 23 maçãs. Vendeu 15 pela manhã e comprou mais 8 à tarde. Quantas maçãs tem agora?',
            response: '16 maçãs',
            issue: 'Resposta direta, sem mostrar o raciocínio. Pode estar errada e você não sabe porquê.',
          },
          with: {
            title: '✓ Com Chain-of-Thought',
            prompt: 'Uma loja tem 23 maçãs. Vendeu 15 pela manhã e comprou mais 8 à tarde. Quantas maçãs tem agora? Pense passo a passo.',
            response: `Passo 1: Começou com 23 maçãs
Passo 2: Vendeu 15 → 23 - 15 = 8
Passo 3: Comprou 8 → 8 + 8 = 16
Resposta: 16 maçãs`,
            benefit: 'Raciocínio transparente permite verificar cada etapa.',
          },
        },
        triggers: [
          {
            phrase: 'Pense passo a passo',
            use: 'Problemas matemáticos e lógicos',
          },
          {
            phrase: 'Antes de responder, analise...',
            use: 'Análises complexas e decisões',
          },
          {
            phrase: 'Mostre seu raciocínio',
            use: 'Explicações e tutoriais',
          },
        ],
        advancedExample: `Você precisa decidir se deve implementar uma nova funcionalidade.

Contexto:
- Equipe tem 3 desenvolvedores
- Prazo de 2 semanas
- Feature complexa estimada em 40 horas
- Outras 3 tarefas prioritárias pendentes

Antes de dar sua recomendação, analise:
1. A capacidade real da equipe
2. O impacto das outras tarefas
3. Os riscos envolvidos
4. Alternativas possíveis

Depois, forneça sua recomendação com justificativa.`,
        whenToUse: {
          ideal: [
            'Problemas matemáticos',
            'Raciocínio lógico',
            'Análise de decisões',
            'Debugging de código',
            'Planejamento de projetos',
          ],
          unnecessary: [
            'Perguntas factuais simples',
            'Tradução de textos',
            'Formatação de dados',
            'Tarefas triviais',
            'Respostas criativas livres',
          ],
        },
        zeroShotTechnique: {
          description: 'A frase mágica mais simples e efetiva:',
          magicPhrase: 'Vamos pensar passo a passo.',
          studyResult: 'Estudos mostram que apenas adicionar essa frase pode melhorar a precisão em até 50% em tarefas de raciocínio complexo.',
        },
      },
    },
    chapter7: {
      title: 'Few-Shot Learning (Usando Exemplos)',
      description: 'Aprenda a usar exemplos concretos para ensinar padrões específicos à IA.',
      content: {
        mainTitle: 'Usando Exemplos',
        introduction: 'Few-shot learning é a técnica de fornecer exemplos concretos do comportamento desejado antes de apresentar a tarefa real. A IA aprende o padrão através dos exemplos.',
        whyItWorks: 'Exemplos ensinam à IA o estilo, formato e tipo de raciocínio que você espera, tornando as respostas mais consistentes e alinhadas com suas necessidades.',
        typesTitle: 'Tipos de Few-Shot',
        effectiveStructureTitle: 'Estrutura de Exemplos Efetivos',
        practicalExampleTitle: 'Exemplo Prático Completo',
        advancedTipsTitle: 'Dicas Avançadas',
        whenEssentialTitle: '⚡ Quando Few-Shot é Essencial',
        shotTypes: {
          zeroShot: {
            title: 'Zero-Shot',
            description: 'Sem exemplos, apenas instruções',
            example: `Classifique o sentimento desta frase como positivo, negativo ou neutro:

"O filme foi interessante mas muito longo."

Sentimento:`,
          },
          fewShot: {
            title: 'Few-Shot (1-5 exemplos)',
            description: 'Alguns exemplos para estabelecer o padrão',
            example: `Classifique o sentimento destas frases:

Frase: "Adorei cada momento do filme!"
Sentimento: Positivo

Frase: "Péssima experiência, não recomendo."
Sentimento: Negativo

Frase: "O produto é ok, nada de especial."
Sentimento: Neutro

Agora classifique:
Frase: "O filme foi interessante mas muito longo."
Sentimento:`,
          },
        },
        structure: {
          consistentFormat: {
            title: '1. Formato Consistente',
            description: 'Todos os exemplos devem seguir exatamente o mesmo formato:',
            example: `Input: [dado de entrada]
Output: [resultado esperado]

Input: [outro dado]
Output: [outro resultado]`,
          },
          representativeVariety: {
            title: '2. Variedade Representativa',
            description: 'Exemplos devem cobrir diferentes casos e variações:',
            points: [
              'Casos simples e complexos',
              'Diferentes tipos de input',
              'Edge cases quando relevante',
            ],
          },
          qualityOverQuantity: {
            title: '3. Qualidade sobre Quantidade',
            description: 'Geralmente 2-5 exemplos bem escolhidos são mais efetivos que muitos exemplos redundantes.',
          },
        },
        practicalExample: {
          title: 'Caso: Extração de Informações',
          example: `Extraia nome, email e telefone dos textos:

Exemplo 1:
Texto: "Olá, sou João Silva, meu email é joao@email.com"
Resultado: {"nome": "João Silva", "email": "joao@email.com", "telefone": null}

Exemplo 2:
Texto: "Maria Santos - (11) 98765-4321 - maria.s@company.com"
Resultado: {"nome": "Maria Santos", "email": "maria.s@company.com", "telefone": "(11) 98765-4321"}

Exemplo 3:
Texto: "Entre em contato: pedro@site.com.br ou ligue (21) 3333-4444"
Resultado: {"nome": null, "email": "pedro@site.com.br", "telefone": "(21) 3333-4444"}

Agora extraia:
Texto: "Carlos Oliveira, telefone (85) 99999-8888, email: carlos.o@domain.net"
Resultado:`,
        },
        advancedTips: [
          {
            title: 'Exemplos Progressivos',
            description: 'Comece com casos simples e aumente a complexidade gradualmente',
          },
          {
            title: 'Contra-exemplos',
            description: 'Inclua exemplos do que NÃO fazer para evitar comportamentos indesejados',
          },
          {
            title: 'Explique o Padrão',
            description: 'Adicione uma breve explicação do padrão antes dos exemplos',
          },
          {
            title: 'Teste e Refine',
            description: 'Ajuste seus exemplos com base nas respostas reais da IA',
          },
        ],
        whenEssential: [
          'Tarefas com formato específico ou não-convencional',
          'Quando você precisa de consistência absoluta',
          'Classificações personalizadas ou categorizações específicas do domínio',
          'Quando instruções verbais sozinhas não são suficientes',
        ],
      },
    },
    chapter8: {
      title: 'Evitando Alucinações',
      description: 'Estratégias para minimizar informações incorretas e garantir precisão nas respostas.',
      content: {
        mainTitle: 'Evitando Alucinações',
        hallucinationDefinition: 'Alucinações ocorrem quando a IA gera informações que parecem plausíveis mas são factualmente incorretas ou inventadas. É um dos maiores desafios em aplicações de IA.',
        mitigationStrategiesTitle: 'Estratégias de Mitigação',
        practicalExamplesTitle: 'Exemplos Práticos',
        verificationTechniquesTitle: 'Técnicas de Verificação',
        strategies: [
          {
            title: '1. Grounding com Fontes',
            description: 'Forneça fontes confiáveis e peça para basear respostas apenas nelas',
            example: 'Baseando-se apenas no documento anexo, responda...',
          },
          {
            title: '2. Admissão de Incerteza',
            description: 'Instrua a IA a admitir quando não souber algo',
            example: 'Se você não souber a resposta, diga "Não tenho informações suficientes"',
          },
          {
            title: '3. Verificação Cruzada',
            description: 'Peça múltiplas perspectivas ou verificações',
            example: 'Forneça a resposta e liste as fontes que a sustentam',
          },
        ],
        examples: [
          {
            title: 'Prompt Problemático',
            content: 'Quais são as últimas descobertas sobre cura do câncer?',
          },
          {
            title: 'Prompt Melhorado',
            content: 'Com base apenas nos artigos científicos fornecidos, resuma as descobertas sobre tratamentos de câncer, indicando o nível de evidência de cada uma.',
          },
        ],
        verificationTips: [
          'Sempre forneça fontes quando possível',
          'Use disclaimers apropriados',
          'Peça para a IA citar suas fontes',
          'Evite perguntas sobre eventos muito recentes',
        ],
      },
    },
    chapter9: {
      title: 'Casos de Uso Complexos',
      description: 'Exemplos práticos de prompts profissionais aplicados a cenários reais do mercado.',
      content: {
        mainTitle: 'Criando Prompts Complexos',
        introduction: 'Neste módulo avançado, exploramos casos de uso reais de diferentes setores, aplicando todas as técnicas aprendidas para criar prompts de nível profissional.',
        casesTitle: 'Casos Práticos',
        cases: [
          {
            title: 'Caso 1: Chatbot de Atendimento ao Cliente',
            subtitle: 'E-commerce de eletrônicos',
            requirements: [
              'Tom profissional mas amigável',
              'Acesso a base de conhecimento de produtos',
              'Escalação para humanos quando necessário',
            ],
            example: 'Você é um assistente de atendimento especializado em eletrônicos...',
          },
          {
            title: 'Caso 2: Análise Jurídica',
            subtitle: 'Escritório de advocacia',
            requirements: [
              'Linguagem técnica precisa',
              'Referências a legislação',
              'Análise de precedentes',
            ],
            example: 'Como assistente jurídico especializado, analise o contrato...',
          },
        ],
      },
    },
    chapter10: {
      title: 'Introdução ao LangSmith',
      description: 'Plataforma profissional para desenvolvimento, monitoramento e avaliação de aplicações com LLMs.',
      content: {
        mainTitle: 'Introdução ao LangSmith',
        introduction: 'O LangSmith é uma plataforma profissional de desenvolvimento, monitoramento e avaliação de aplicações com modelos de linguagem (LLM). Essencial para quem trabalha seriamente com IA.',
      },
    },
    chapter11: {
      title: 'Métricas de Avaliação & Pairwise',
      description: 'Principais métricas para avaliar qualidade, confiabilidade e performance de sistemas de IA, incluindo Pairwise Evaluation com simulador interativo.',
      content: {
        mainTitle: 'Métricas de Avaliação & Pairwise Evaluation',
        introduction: 'A avaliação adequada de sistemas de IA é crucial para garantir qualidade, confiabilidade e performance. Neste módulo, exploramos as principais métricas usadas para avaliar modelos de linguagem e a metodologia Pairwise com simulador interativo.',
      },
    },
    chapter12: {
      title: 'Embeddings e Similaridade',
      description: 'Representações numéricas de texto que capturam significado semântico para comparações matemáticas.',
      content: {
        mainTitle: 'Embeddings e Similaridade',
        introduction: 'Embeddings são representações numéricas de texto que capturam significado semântico, permitindo que computadores "entendam" e comparem textos de forma matemática.',
      },
    },
    chapter13: {
      title: 'Ecossistema de Ferramentas de IA',
      description: 'Principais ferramentas para desenvolvimento, monitoramento e otimização de aplicações com LLMs.',
      content: {
        mainTitle: 'Ecossistema de Ferramentas de IA',
        introduction: 'Explore as principais ferramentas que facilitam o desenvolvimento, monitoramento e otimização de aplicações com Large Language Models (LLMs).',
      },
    },
    // Adicionar traduções para elementos comuns dos capítulos
    common: {
      everyEffectivePrompt: 'Todo prompt efetivo contém alguns ou todos destes elementos:',
    },
  },

  // Traduções específicas do playground expandidas
  playgroundContent: {
    title: 'Playground de Prompts',
    subtitle: 'Teste e aprimore seus prompts com análise inteligente',
    inputLabel: 'Seu Prompt',
    charactersCount: 'caracteres',
    analysisTitle: 'Análise do Prompt',
    metricsTitle: 'Métricas Detalhadas',
    suggestionsTitle: 'Sugestões de Melhoria',
    overallScore: 'Pontuação Geral',
    clarity: 'Clareza',
    specificity: 'Especificidade',
    structure: 'Estrutura',
    contextuality: 'Contextualidade',
    persona: 'Persona',
    outputFormat: 'Formato de Saída',
    strengths: 'Pontos Fortes',
    improvements: 'Melhorias Sugeridas',
    improvedVersion: 'Versão Melhorada',
    detectedTechniques: 'Técnicas Detectadas',
    tabs: {
      analysis: 'Análise',
      metrics: 'Métricas',
      suggestions: 'Sugestões',
    },
    buttons: {
      analyze: 'Analisar Prompt',
      clear: 'Limpar',
      copy: 'Copiar',
      useImproved: 'Usar Versão Melhorada',
    },
    noPrompt: 'Digite um prompt para começar a análise',
    analyzing: 'Analizando seu prompt...',
    qualityScore: 'Qualidade Geral do Prompt',
    excellentScore: 'Excelente!',
    goodScore: 'Bom, mas pode melhorar',
    poorScore: 'Precisa de melhorias significativas',
    detectedPersona: 'Persona Detectada',
    metrics: {
      clarity: 'Clareza',
      clarityDesc: 'Quão clara e compreensível é a instrução',
      specificity: 'Especificidade',
      specificityDesc: 'Nível de detalhamento e precisão das instruções',
      structure: 'Estrutura',
      structureDesc: 'Organização e formatação do prompt',
      contextuality: 'Contextualização',
      contextualityDesc: 'Quantidade e qualidade do contexto fornecido',
      persona: 'Persona/Papel',
      personaDesc: 'Definição de papel e tom de voz',
      outputFormat: 'Formato de Saída',
      outputFormatDesc: 'Especificação clara do formato desejado',
    },
    guide: {
      title: '🎯 Guia Essencial de Prompt Engineering',
      personaContext: {
        title: '🎭 Persona & Contexto',
        description: 'Defina um papel específico e contexto claro',
        example: 'Você é um especialista em...',
      },
      clearStructure: {
        title: '📋 Estrutura Clara',
        description: 'Use formatação e organize em seções',
        example: '1. Primeiro... 2. Depois...',
      },
      specificOutput: {
        title: '🎯 Output Específico',
        description: 'Defina formato, estilo e estrutura',
        example: 'Formato: JSON com...',
      },
      practicalExamples: {
        title: '💡 Exemplos Práticos',
        description: 'Few-shot learning com casos reais',
        example: 'Exemplo: Input → Output',
      },
      chainOfThought: {
        title: '🧠 Chain-of-Thought',
        description: 'Promova raciocínio passo a passo',
        example: 'Pense passo a passo...',
      },
      constraints: {
        title: '⚡ Restrições & Limites',
        description: 'Defina o que NÃO fazer',
        example: 'Não use... Evite...',
      },
    },
    examplePrompts: {
      marketingConsultant: {
        category: 'Role Prompting',
        title: 'Consultor de Marketing',
        prompt: 'Você é um consultor sênior de marketing digital com 10 anos de experiência em e-commerce.\n\nSituação: Uma startup de produtos sustentáveis precisa de uma estratégia de conteúdo para Instagram.\n\nCrie 3 ideias de posts que:\n- Eduquem sobre sustentabilidade\n- Mostrem os produtos de forma criativa\n- Engajem a audiência jovem (18-35 anos)\n\nFormato: Para cada post, forneça:\n- Título chamativo\n- Descrição do conteúdo\n- 5 hashtags relevantes\n- Call-to-action específico',
      },
      investmentAnalysis: {
        category: 'Chain-of-Thought',
        title: 'Análise de Investimento',
        prompt: 'Você é um analista financeiro especializado em avaliação de startups.\n\nAnalise a seguinte startup: "EcoLogistics - plataforma que otimiza rotas de entrega para reduzir emissões de carbono".\n\nPense passo a passo:\n1. Primeiro, avalie o mercado e oportunidade\n2. Depois, considere os riscos e desafios\n3. Em seguida, analise o potencial de crescimento\n4. Finalmente, faça uma recomendação\n\nFormato: Estruture sua análise seguindo exatamente essas 4 etapas, com conclusões claras para cada uma.',
      },
      feedbackClassification: {
        category: 'Few-Shot Learning',
        title: 'Classificação de Feedback',
        prompt: 'Você é um especialista em análise de customer success. Classifique feedbacks de clientes em categorias.\n\nExemplos:\nFeedback: "O app é ótimo, mas demora para carregar"\nCategoria: Funcionalidade\nSentimento: Misto\nPrioridade: Média\n\nFeedback: "Cancelando assinatura, muito caro"\nCategoria: Preço\nSentimento: Negativo\nPrioridade: Alta\n\nFeedback: "Equipe de suporte muito atenciosa!"\nCategoria: Atendimento\nSentimento: Positivo\nPrioridade: Baixa\n\nAgora classifique:\nFeedback: "Produto funciona bem, mas faltam tutoriais"\n\nFormato JSON: {"categoria": "", "sentimento": "", "prioridade": "", "justificativa": ""}',
      },
      ragSystem: {
        category: 'Prompt Complexo',
        title: 'Sistema RAG Simulado',
        prompt: 'Você é um assistente especializado em documentação técnica de APIs.\n\nContexto: Você tem acesso à documentação da API de pagamentos "PayFast".\n\nDocumentação disponível:\n- Endpoint POST /payments: cria pagamento (campos: amount, currency, customer_id)\n- Endpoint GET /payments/{id}: consulta status do pagamento\n- Códigos de resposta: 200 (sucesso), 400 (dados inválidos), 401 (não autorizado)\n- Autenticação: Bearer token no header Authorization\n\nPergunta do usuário: "Como criar um pagamento de R$ 50,00 para o cliente ID 123?"\n\nInstruções:\n1. Responda baseado APENAS na documentação fornecida\n2. Se não tiver informação suficiente, diga claramente\n3. Forneça exemplo prático de código\n4. Mencione possíveis códigos de erro\n\nFormato: Resposta estruturada com explicação + código + observações importantes.',
      },
    },
  },

  // Traduções dos dados dos módulos
  moduleData: {
    chapter1: {
      title: 'Estrutura Básica de Prompt',
      description: 'Aprenda os fundamentos de como estruturar um prompt efetivo para modelos de IA.',
      topics: ['Componentes de um prompt', 'Sintaxe básica', 'Boas práticas iniciais'],
    },
    chapter2: {
      title: 'Ser Claro e Direto',
      description: 'Descubra como a clareza e objetividade melhoram drasticamente as respostas da IA.',
      topics: ['Clareza na comunicação', 'Evitar ambiguidades', 'Instruções precisas'],
    },
    chapter3: {
      title: 'Atribuindo Funções',
      description: 'Aprenda a atribuir papéis e contextos específicos para obter respostas mais adequadas.',
      topics: ['Role prompting', 'Contexto profissional', 'Personalidade da IA'],
    },
    chapter4: {
      title: 'Separando Dados de Instruções',
      description: 'Técnicas para estruturar prompts complexos separando claramente dados e comandos.',
      topics: ['Estruturação avançada', 'Delimitadores', 'XML tags'],
    },
    chapter5: {
      title: 'Formatando a Saída',
      description: 'Controle o formato das respostas: JSON, XML, Markdown e outras estruturas.',
      topics: ['Output formatting', 'JSON estruturado', 'Templates de resposta'],
    },
    chapter6: {
      title: 'Precognição (Pensando Passo a Passo)',
      description: 'Use chain-of-thought para fazer a IA raciocinar antes de responder.',
      topics: ['Chain-of-thought', 'Raciocínio explícito', 'Step-by-step'],
    },
    chapter7: {
      title: 'Usando Exemplos',
      description: 'Few-shot learning: ensine a IA por exemplos para resultados mais consistentes.',
      topics: ['Few-shot prompting', 'Exemplos efetivos', 'Pattern recognition'],
    },
    chapter8: {
      title: 'Evitando Alucinações',
      description: 'Técnicas avançadas para minimizar respostas incorretas ou inventadas.',
      topics: ['Grounding', 'Verificação de fatos', 'Confiabilidade'],
    },
    chapter9: {
      title: 'Prompts Complexos',
      description: 'Casos de uso reais: chatbots, serviços jurídicos, finanças e desenvolvimento.',
      topics: ['Casos de uso industriais', 'Integração de sistemas', 'Prompts multi-etapa'],
    },
    chapter10: {
      title: 'Introdução ao LangSmith',
      description: 'Conheça a plataforma de avaliação e monitoramento de aplicações LLM.',
      topics: ['LangSmith overview', 'Datasets', 'Tracing'],
    },
    chapter11: {
      title: 'Métricas de Avaliação & Pairwise',
      description: 'Entenda Precision, Recall, F1-score, Faithfulness, Pairwise Evaluation e LLM-as-a-Judge com simulador interativo.',
      topics: ['Métricas de classificação', 'RAG metrics', 'LLM-as-a-Judge', 'Pairwise Evaluation', 'Simulador interativo'],
    },
    chapter12: {
      title: 'Embeddings e Similaridade',
      description: 'Visualize e compreenda embeddings e busca por similaridade semântica.',
      topics: ['Vector embeddings', 'Cosine similarity', 'Semantic search'],
    },
    chapter13: {
      title: 'Ecossistema de Ferramentas de IA',
      description: 'Explore LangChain, LangSmith, LangFuse, LlamaIndex e PromptLayer com exemplos práticos.',
      topics: ['LangChain framework', 'Observabilidade LangSmith', 'LlamaIndex RAG', 'Prompt versioning'],
    },
  },

  playgroundAnalysis: {
    hasRole: 'Tem definição de papel',
    hasContext: 'Tem contexto adequado',
    hasFormat: 'Tem formato especificado',
    hasExamples: 'Inclui exemplos',
    hasChainOfThought: 'Usa raciocínio passo-a-passo',
    hasConstraints: 'Tem restrições definidas',
    addRole: 'Adicione um papel específico para a IA',
    addContext: 'Forneça mais contexto sobre a situação',
    addFormat: 'Especifique o formato da resposta desejada',
    addExamples: 'Inclua exemplos para maior clareza',
    addChainOfThought: 'Peça para a IA mostrar o raciocínio',
    addConstraints: 'Defina limitações ou restrições',
    improveClarity: 'Seja mais específico e claro',
    improveStructure: 'Organize melhor a estrutura do prompt',
    professionalPersona: 'Especialista profissional',
    creativeProfessional: 'Profissional criativo',
    technicalExpert: 'Especialista técnico',
    educator: 'Educador',
    analyst: 'Analista',
  },

  difficulty: {
    beginner: 'Iniciante',
    intermediate: 'Intermediário',
    advanced: 'Avançado',
  },

  time: {
    minutes: 'min',
    estimatedTime: 'Tempo estimado',
  },

  actions: {
    backToModules: 'Voltar aos módulos',
    complete: 'Marcar como concluído',
    completed: 'Concluído',
    markIncomplete: 'Marcar como incompleto',
    continue: 'Continuar',
    start: 'Começar',
    analyze: 'Analisar',
    clear: 'Limpar',
    improve: 'Melhorar',
    copy: 'Copiar',
    share: 'Compartilhar',
  },

  status: {
    analyzing: 'Analisando...',
    completed: 'Concluído',
    inProgress: 'Em andamento',
    notStarted: 'Não iniciado',
    success: 'Sucesso',
    error: 'Erro',
    noResults: 'Nenhum resultado encontrado',
  },

  common: {
    loading: 'Carregando...',
    error: 'Erro',
    tryAgain: 'Tentar novamente',
    close: 'Fechar',
    save: 'Salvar',
    cancel: 'Cancelar',
    confirm: 'Confirmar',
    yes: 'Sim',
    no: 'Não',
    or: 'ou',
    and: 'e',
    of: 'de',
    in: 'em',
    by: 'por',
    with: 'com',
    from: 'de',
    to: 'para',
  },
};