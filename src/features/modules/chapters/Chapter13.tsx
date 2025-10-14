import { useState } from 'react';
import { 
  Layers, 
  BarChart3, 
  Activity, 
  Database, 
  GitBranch, 
  Play, 
  Code, 
  CheckCircle, 
  ExternalLink,
  Zap,
  Eye,
  Settings
} from 'lucide-react';

// Componente reutilizável para blocos de código
interface CodeBlockProps {
  language: string;
  code: string;
  title?: string;
}

function CodeBlock({ language, code, title }: CodeBlockProps) {
  return (
    <div className="bg-slate-900 rounded-lg overflow-hidden">
      {title && (
        <div className="bg-slate-800 px-4 py-2 border-b border-slate-700">
          <span className="text-sm text-slate-300 font-medium">{title}</span>
        </div>
      )}
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <Code size={16} className="text-blue-400" />
          <span className="text-xs text-slate-400 uppercase tracking-wide">{language}</span>
        </div>
        <pre className="text-sm text-slate-100 overflow-x-auto">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}

// Componente reutilizável para simulação de playground
interface PlaygroundSimuladoProps {
  tool: string;
  code: string;
  simulatedResponse: string;
  isRunning: boolean;
  onRun: () => void;
}

function PlaygroundSimulado({ tool, code, simulatedResponse, isRunning, onRun }: PlaygroundSimuladoProps) {
  return (
    <div className="bg-white rounded-lg border-2 border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-4 py-3 border-b border-slate-200">
        <div className="flex items-center justify-between">
          <h5 className="font-semibold text-slate-800 flex items-center gap-2">
            <Zap size={16} className="text-orange-500" />
            Playground - {tool}
          </h5>
          <button
            onClick={onRun}
            disabled={isRunning}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-blue-400 transition-colors flex items-center gap-2 text-sm"
          >
            <Play size={14} />
            {isRunning ? 'Executando...' : 'Rodar Exemplo'}
          </button>
        </div>
      </div>
      
      <div className="p-4 space-y-4">
        <div>
          <h6 className="text-sm font-medium text-slate-700 mb-2">Código:</h6>
          <pre className="bg-slate-100 p-3 rounded text-xs text-slate-800 overflow-x-auto">
            <code>{code}</code>
          </pre>
        </div>
        
        {simulatedResponse && (
          <div>
            <h6 className="text-sm font-medium text-slate-700 mb-2 flex items-center gap-2">
              <CheckCircle size={14} className="text-green-600" />
              Resultado Simulado:
            </h6>
            <div className="bg-green-50 border border-green-200 p-3 rounded">
              <p className="text-sm text-green-800">{simulatedResponse}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Componente reutilizável para cards de informação
interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  features: string[];
  useCase: string;
}

function InfoCard({ icon, title, description, color, features, useCase }: InfoCardProps) {
  const getColorClasses = (color: string) => {
    const colorMap: Record<string, any> = {
      blue: {
        border: 'border-blue-200',
        gradient: 'from-blue-500 to-blue-600',
        text: 'text-blue-100',
        iconText: 'text-blue-600',
        bg: 'bg-blue-50',
        borderBox: 'border-blue-200',
        textBox: 'text-blue-800',
        textSmall: 'text-blue-700'
      },
      green: {
        border: 'border-green-200',
        gradient: 'from-green-500 to-green-600',
        text: 'text-green-100',
        iconText: 'text-green-600',
        bg: 'bg-green-50',
        borderBox: 'border-green-200',
        textBox: 'text-green-800',
        textSmall: 'text-green-700'
      },
      purple: {
        border: 'border-purple-200',
        gradient: 'from-purple-500 to-purple-600',
        text: 'text-purple-100',
        iconText: 'text-purple-600',
        bg: 'bg-purple-50',
        borderBox: 'border-purple-200',
        textBox: 'text-purple-800',
        textSmall: 'text-purple-700'
      },
      orange: {
        border: 'border-orange-200',
        gradient: 'from-orange-500 to-orange-600',
        text: 'text-orange-100',
        iconText: 'text-orange-600',
        bg: 'bg-orange-50',
        borderBox: 'border-orange-200',
        textBox: 'text-orange-800',
        textSmall: 'text-orange-700'
      },
      indigo: {
        border: 'border-indigo-200',
        gradient: 'from-indigo-500 to-indigo-600',
        text: 'text-indigo-100',
        iconText: 'text-indigo-600',
        bg: 'bg-indigo-50',
        borderBox: 'border-indigo-200',
        textBox: 'text-indigo-800',
        textSmall: 'text-indigo-700'
      }
    };
    return colorMap[color] || colorMap.blue;
  };

  const colors = getColorClasses(color);

  return (
    <div className={`bg-white rounded-xl border-2 ${colors.border} overflow-hidden hover:shadow-lg transition-shadow`}>
      <div className={`bg-gradient-to-r ${colors.gradient} px-6 py-4`}>
        <div className="flex items-center gap-3 text-white">
          {icon}
          <div>
            <h3 className="text-xl font-bold">{title}</h3>
            <p className={`${colors.text} text-sm`}>{description}</p>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="mb-4">
          <h4 className="font-semibold text-slate-800 mb-2">Principais recursos:</h4>
          <ul className="space-y-1">
            {features.map((feature, index) => (
              <li key={index} className="text-sm text-slate-600 flex items-center gap-2">
                <CheckCircle size={14} className={colors.iconText} />
                {feature}
              </li>
            ))}
          </ul>
        </div>
        
        <div className={`${colors.bg} p-3 rounded-lg border ${colors.borderBox}`}>
          <h5 className={`font-semibold ${colors.textBox} mb-1`}>Quando usar:</h5>
          <p className={`text-sm ${colors.textSmall}`}>{useCase}</p>
        </div>
      </div>
    </div>
  );
}

export default function Chapter13() {
  const [runningTool, setRunningTool] = useState<string | null>(null);
  const [simulatedOutputs, setSimulatedOutputs] = useState<Record<string, string>>({});

  const handleRunSimulation = (toolName: string, response: string) => {
    setRunningTool(toolName);
    
    setTimeout(() => {
      setSimulatedOutputs(prev => ({ ...prev, [toolName]: response }));
      setRunningTool(null);
    }, 2000);
  };

  const tools = [
    {
      id: 'langchain',
      icon: <Layers size={28} />,
      title: 'LangChain',
      description: 'Framework para orquestração de LLMs',
      color: 'blue',
      features: [
        'Chains e pipelines de prompts',
        'Integrações com múltiplos LLMs',
        'Memória e contexto persistente',
        'Ferramentas e agentes'
      ],
      useCase: 'Quando você precisa criar fluxos complexos combinando múltiplas chamadas de IA, ferramentas externas e lógica de negócio.',
      code: `from langchain.chains import LLMChain
from langchain.prompts import PromptTemplate
from langchain.llms import OpenAI

# Criar um template de prompt
template = """
Você é um especialista em {area}.
Pergunta: {pergunta}
Resposta detalhada:
"""

prompt = PromptTemplate(
    input_variables=["area", "pergunta"],
    template=template
)

# Criar e executar a chain
llm = OpenAI(temperature=0.7)
chain = LLMChain(llm=llm, prompt=prompt)

resultado = chain.run(
    area="marketing digital",
    pergunta="Como melhorar o ROI de campanhas?"
)`,
      simulatedResponse: "🤖 Chain executada com sucesso! A IA analisou a pergunta sobre marketing digital e gerou uma resposta especializada sobre estratégias para melhorar ROI, incluindo segmentação de audiência, testes A/B e otimização de conversão."
    },
    {
      id: 'langsmith',
      icon: <BarChart3 size={28} />,
      title: 'LangSmith',
      description: 'Observabilidade e testes para LLMs',
      color: 'green',
      features: [
        'Rastreamento de execuções',
        'Datasets para testes',
        'Métricas de performance',
        'Debugging de chains'
      ],
      useCase: 'Para monitorar, avaliar e melhorar a performance de suas aplicações de IA em produção.',
      code: `from langsmith import Client
from langsmith.wrappers import wrap_openai

client = Client()

# Criar um dataset para testes
dataset = client.create_dataset(
    dataset_name="marketing_qa",
    description="Perguntas sobre marketing"
)

# Adicionar exemplos ao dataset
client.create_example(
    inputs={"pergunta": "Como calcular CAC?"},
    outputs={"resposta": "CAC = Custo total / Novos clientes"},
    dataset_id=dataset.id
)

# Executar avaliação
def avaliar_modelo(inputs):
    # Seu modelo aqui
    return {"resposta": "Resposta do modelo"}

results = client.evaluate(
    avaliar_modelo,
    data=dataset_name,
    evaluators=[accuracy_evaluator]
)`,
      simulatedResponse: "📊 Avaliação concluída! Dataset processado com 95% de acurácia. Métricas: Latência média 1.2s, Custo por execução $0.003. Identificados 2 casos que precisam de melhoria na chain de raciocínio."
    },
    {
      id: 'langfuse',
      icon: <Activity size={28} />,
      title: 'LangFuse',
      description: 'Plataforma de observabilidade para LLMs',
      color: 'purple',
      features: [
        'Traces detalhados de execução',
        'Métricas de custo e latência',
        'Analytics de usuário',
        'Detecção de anomalias'
      ],
      useCase: 'Para obter insights profundos sobre como seus usuários interagem com a IA e otimizar custos e performance.',
      code: `from langfuse import Langfuse

langfuse = Langfuse(
    public_key="pk_...",
    secret_key="sk_..."
)

# Iniciar uma sessão de trace
trace = langfuse.trace(
    name="customer_support_chat",
    user_id="user123",
    metadata={"channel": "whatsapp"}
)

# Adicionar spans para cada etapa
with trace.span(name="intent_classification") as span:
    intent = classify_intent(user_message)
    span.update(output={"intent": intent})

with trace.span(name="response_generation") as span:
    response = generate_response(intent, user_message)
    span.update(
        output={"response": response},
        usage={"tokens": 150, "cost": 0.002}
    )

trace.update(output={"final_response": response})`,
      simulatedResponse: "📈 Trace registrado! Sessão customer_support_chat monitorada: Intent classificado em 0.3s, resposta gerada em 1.1s. Custo total: $0.002. Padrão detectado: 73% das conversas sobre produto pricing."
    },
    {
      id: 'llamaindex',
      icon: <Database size={28} />,
      title: 'LlamaIndex',
      description: 'Conecte LLMs aos seus dados',
      color: 'orange',
      features: [
        'Indexação de documentos',
        'Retrieval Augmented Generation (RAG)',
        'Conectores para várias fontes',
        'Queries semânticas'
      ],
      useCase: 'Quando você quer que a IA responda perguntas baseadas em seus próprios documentos, bases de conhecimento ou dados.',
      code: `from llama_index import VectorStoreIndex, Document
from llama_index.readers import PDFReader

# Carregar documentos
reader = PDFReader()
documents = reader.load_data("manuais_produto.pdf")

# Criar índice vetorial
index = VectorStoreIndex.from_documents(documents)

# Criar query engine
query_engine = index.as_query_engine()

# Fazer pergunta sobre os documentos
response = query_engine.query(
    "Qual é o procedimento para instalação do produto X?"
)

print(response)`,
      simulatedResponse: "🗂️ Query processada! Analisados 127 documentos, encontradas 5 referências relevantes. Resposta gerada baseada nas seções 3.2 e 4.1 do manual: 'Para instalar o produto X, primeiro verifique os pré-requisitos do sistema...' Confiança: 94%"
    },
    {
      id: 'promptlayer',
      icon: <GitBranch size={28} />,
      title: 'PromptLayer',
      description: 'Versionamento e tracking de prompts',
      color: 'indigo',
      features: [
        'Versionamento de prompts',
        'A/B testing de prompts',
        'Histórico de mudanças',
        'Analytics de performance'
      ],
      useCase: 'Para gerenciar, versionar e testar diferentes versões de prompts em produção de forma controlada.',
      code: `import promptlayer

promptlayer.api_key = "pl_..."

# Criar uma nova versão do prompt
prompt_template = promptlayer.prompts.get(
    prompt_name="customer_classifier",
    version=2
)

# Usar o prompt com tracking
openai = promptlayer.openai
response = openai.ChatCompletion.create(
    model="gpt-4",
    messages=[
        {"role": "system", "content": prompt_template},
        {"role": "user", "content": user_input}
    ],
    pl_tags=["production", "v2.1"]
)

# O PromptLayer automaticamente registra:
# - Custo da chamada
# - Latência
# - Performance vs outras versões`,
      simulatedResponse: "🔄 Prompt v2.1 executado! Performance: +23% melhor que v2.0. Custo: $0.004 (-12% vs versão anterior). Sugestão: versão estável para produção. A/B test com 1000 usuários mostra 89% de satisfação."
    }
  ];

  return (
    <div className="prose max-w-none">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Ecossistema de Ferramentas de IA
        </h1>
        <p className="text-xl text-slate-600 max-w-4xl mx-auto">
          Explore as principais ferramentas que facilitam o desenvolvimento, monitoramento e otimização 
          de aplicações com Large Language Models (LLMs).
        </p>
      </div>

      {/* Introdução */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl border border-blue-200 mb-12">
        <div className="flex items-start gap-4">
          <Settings size={32} className="text-blue-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Por que usar ferramentas especializadas?</h3>
            <p className="text-slate-700 mb-4">
              Trabalhar com LLMs em produção envolve muito mais do que apenas fazer chamadas para APIs. 
              Você precisa orquestrar fluxos complexos, monitorar performance, gerenciar custos e garantir qualidade.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-slate-800 mb-2">Desenvolvimento</h4>
                <p className="text-sm text-slate-600">
                  Frameworks como LangChain e LlamaIndex aceleram o desenvolvimento de aplicações complexas.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-slate-800 mb-2">Observabilidade</h4>
                <p className="text-sm text-slate-600">
                  LangSmith e LangFuse fornecem visibilidade completa sobre performance e custos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cards das Ferramentas */}
      <div className="space-y-12 mb-12">
        {tools.map((tool, index) => (
          <div key={tool.id}>
            <InfoCard
              icon={tool.icon}
              title={tool.title}
              description={tool.description}
              color={tool.color}
              features={tool.features}
              useCase={tool.useCase}
            />
            
            <div className="mt-6">
              <CodeBlock
                language="Python"
                code={tool.code}
                title={`Exemplo prático - ${tool.title}`}
              />
            </div>

            <div className="mt-6">
              <PlaygroundSimulado
                tool={tool.title}
                code={tool.code.split('\n').slice(0, 8).join('\n') + '\n# ... resto do código'}
                simulatedResponse={simulatedOutputs[tool.id] || ''}
                isRunning={runningTool === tool.id}
                onRun={() => handleRunSimulation(tool.id, tool.simulatedResponse)}
              />
            </div>

            {index < tools.length - 1 && <hr className="mt-12 border-slate-200" />}
          </div>
        ))}
      </div>

      {/* Comparativo Rápido */}
      <div className="bg-white rounded-xl border-2 border-slate-200 overflow-hidden mb-12">
        <div className="bg-gradient-to-r from-slate-600 to-slate-700 px-6 py-4">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <Eye size={24} />
            Comparativo Rápido - Quando usar cada ferramenta
          </h3>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50">
              <tr>
                <th className="text-left p-4 font-semibold text-slate-800">Ferramenta</th>
                <th className="text-left p-4 font-semibold text-slate-800">Função Principal</th>
                <th className="text-left p-4 font-semibold text-slate-800">Melhor Para</th>
                <th className="text-left p-4 font-semibold text-slate-800">Fase do Projeto</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  name: '🔗 LangChain',
                  function: 'Framework de orquestração',
                  bestFor: 'Chains complexas, agentes, memória',
                  phase: 'Desenvolvimento'
                },
                {
                  name: '📊 LangSmith',
                  function: 'Testing e avaliação',
                  bestFor: 'Datasets, métricas, debugging',
                  phase: 'Testes / QA'
                },
                {
                  name: '📈 LangFuse',
                  function: 'Observabilidade em produção',
                  bestFor: 'Traces, custos, analytics',
                  phase: 'Produção'
                },
                {
                  name: '🗂️ LlamaIndex',
                  function: 'Conectar dados ao LLM',
                  bestFor: 'RAG, indexação, queries',
                  phase: 'Desenvolvimento'
                },
                {
                  name: '🔄 PromptLayer',
                  function: 'Versionamento de prompts',
                  bestFor: 'A/B tests, tracking, logs',
                  phase: 'Produção'
                }
              ].map((row, index) => (
                <tr key={index} className="border-t border-slate-200">
                  <td className="p-4 font-medium text-slate-800">{row.name}</td>
                  <td className="p-4 text-slate-600">{row.function}</td>
                  <td className="p-4 text-slate-600">{row.bestFor}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      row.phase === 'Desenvolvimento' ? 'bg-blue-100 text-blue-800' :
                      row.phase === 'Testes / QA' ? 'bg-orange-100 text-orange-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {row.phase}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Fluxo de Desenvolvimento */}
      <div className="bg-gradient-to-r from-slate-50 to-blue-50 p-8 rounded-xl border border-slate-200 mb-12">
        <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">
          🚀 Fluxo Completo de Desenvolvimento
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              step: '1',
              title: 'Desenvolver',
              tools: 'LangChain + LlamaIndex',
              description: 'Criar chains, conectar dados, implementar lógica',
              color: 'blue'
            },
            {
              step: '2', 
              title: 'Testar',
              tools: 'LangSmith',
              description: 'Avaliar com datasets, medir performance, debugar',
              color: 'orange'
            },
            {
              step: '3',
              title: 'Monitorar',
              tools: 'LangFuse + PromptLayer',
              description: 'Rastrear em produção, versionar prompts',
              color: 'green'
            },
            {
              step: '4',
              title: 'Otimizar',
              tools: 'Todas as ferramentas',
              description: 'A/B test, reduzir custos, melhorar qualidade',
              color: 'purple'
            }
          ].map((phase) => {
            const stepColors: Record<string, { bg: string; text: string }> = {
              blue: { bg: 'bg-blue-500', text: 'text-blue-600' },
              orange: { bg: 'bg-orange-500', text: 'text-orange-600' },
              green: { bg: 'bg-green-500', text: 'text-green-600' },
              purple: { bg: 'bg-purple-500', text: 'text-purple-600' }
            };
            const colorClass = stepColors[phase.color] || stepColors.blue;
            
            return (
              <div key={phase.step} className="bg-white p-6 rounded-lg border border-slate-200 text-center">
                <div className={`w-12 h-12 ${colorClass.bg} text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3`}>
                  {phase.step}
                </div>
                <h4 className="font-bold text-slate-800 mb-2">{phase.title}</h4>
                <p className={`text-sm font-medium ${colorClass.text} mb-2`}>{phase.tools}</p>
                <p className="text-xs text-slate-600">{phase.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Links para Documentação */}
      <div className="bg-white rounded-xl border-2 border-slate-200 p-8">
        <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
          <ExternalLink size={24} className="text-blue-600" />
          Documentação Oficial
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { name: 'LangChain', url: 'https://docs.langchain.com/', icon: '🔗' },
            { name: 'LangSmith', url: 'https://docs.smith.langchain.com/', icon: '📊' },
            { name: 'LangFuse', url: 'https://langfuse.com/docs', icon: '📈' },
            { name: 'LlamaIndex', url: 'https://docs.llamaindex.ai/', icon: '🗂️' },
            { name: 'PromptLayer', url: 'https://docs.promptlayer.com/', icon: '🔄' }
          ].map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200 hover:bg-slate-100 hover:border-blue-300 transition-colors group"
            >
              <span className="text-2xl">{link.icon}</span>
              <div>
                <h4 className="font-medium text-slate-800 group-hover:text-blue-600">{link.name}</h4>
                <p className="text-xs text-slate-500">Documentação oficial</p>
              </div>
              <ExternalLink size={16} className="text-slate-400 group-hover:text-blue-600 ml-auto" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}