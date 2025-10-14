import { Module } from '../../../shared/types/modules';

export const modules: Module[] = [
  {
    id: 'chapter-1',
    chapter: 1,
    title: 'Estrutura Básica de Prompt',
    description: 'Aprenda os fundamentos de como estruturar um prompt efetivo para modelos de IA.',
    difficulty: 'beginner',
    estimatedTime: '15 min',
    topics: ['Componentes de um prompt', 'Sintaxe básica', 'Boas práticas iniciais']
  },
  {
    id: 'chapter-2',
    chapter: 2,
    title: 'Ser Claro e Direto',
    description: 'Descubra como a clareza e objetividade melhoram drasticamente as respostas da IA.',
    difficulty: 'beginner',
    estimatedTime: '12 min',
    topics: ['Clareza na comunicação', 'Evitar ambiguidades', 'Instruções precisas']
  },
  {
    id: 'chapter-3',
    chapter: 3,
    title: 'Atribuindo Funções',
    description: 'Aprenda a atribuir papéis e contextos específicos para obter respostas mais adequadas.',
    difficulty: 'beginner',
    estimatedTime: '18 min',
    topics: ['Role prompting', 'Contexto profissional', 'Personalidade da IA']
  },
  {
    id: 'chapter-4',
    chapter: 4,
    title: 'Separando Dados de Instruções',
    description: 'Técnicas para estruturar prompts complexos separando claramente dados e comandos.',
    difficulty: 'intermediate',
    estimatedTime: '20 min',
    topics: ['Estruturação avançada', 'Delimitadores', 'XML tags']
  },
  {
    id: 'chapter-5',
    chapter: 5,
    title: 'Formatando a Saída',
    description: 'Controle o formato das respostas: JSON, XML, Markdown e outras estruturas.',
    difficulty: 'intermediate',
    estimatedTime: '22 min',
    topics: ['Output formatting', 'JSON estruturado', 'Templates de resposta']
  },
  {
    id: 'chapter-6',
    chapter: 6,
    title: 'Precognição (Pensando Passo a Passo)',
    description: 'Use chain-of-thought para fazer a IA raciocinar antes de responder.',
    difficulty: 'intermediate',
    estimatedTime: '25 min',
    topics: ['Chain-of-thought', 'Raciocínio explícito', 'Step-by-step']
  },
  {
    id: 'chapter-7',
    chapter: 7,
    title: 'Usando Exemplos',
    description: 'Few-shot learning: ensine a IA por exemplos para resultados mais consistentes.',
    difficulty: 'intermediate',
    estimatedTime: '20 min',
    topics: ['Few-shot prompting', 'Exemplos efetivos', 'Pattern recognition']
  },
  {
    id: 'chapter-8',
    chapter: 8,
    title: 'Evitando Alucinações',
    description: 'Técnicas avançadas para minimizar respostas incorretas ou inventadas.',
    difficulty: 'advanced',
    estimatedTime: '30 min',
    topics: ['Grounding', 'Verificação de fatos', 'Confiabilidade']
  },
  {
    id: 'chapter-9',
    chapter: 9,
    title: 'Prompts Complexos',
    description: 'Casos de uso reais: chatbots, serviços jurídicos, finanças e desenvolvimento.',
    difficulty: 'advanced',
    estimatedTime: '45 min',
    topics: ['Casos de uso industriais', 'Integração de sistemas', 'Prompts multi-etapa']
  },
  {
    id: 'langsmith-intro',
    chapter: 10,
    title: 'Introdução ao LangSmith',
    description: 'Conheça a plataforma de avaliação e monitoramento de aplicações LLM.',
    difficulty: 'advanced',
    estimatedTime: '25 min',
    topics: ['LangSmith overview', 'Datasets', 'Tracing']
  }
];

export const additionalModules: Module[] = [
  {
    id: 'metrics',
    chapter: 11,
    title: 'Métricas de Avaliação',
    description: 'Entenda Precision, Recall, F1-score, Faithfulness e outras métricas.',
    difficulty: 'advanced',
    estimatedTime: '35 min',
    topics: ['Métricas de classificação', 'RAG metrics', 'LLM-as-a-Judge']
  },
  {
    id: 'embeddings',
    chapter: 12,
    title: 'Embeddings e Similaridade',
    description: 'Visualize e compreenda embeddings e busca por similaridade semântica.',
    difficulty: 'advanced',
    estimatedTime: '30 min',
    topics: ['Vector embeddings', 'Cosine similarity', 'Semantic search']
  }
];

export const allModules = [...modules, ...additionalModules];
