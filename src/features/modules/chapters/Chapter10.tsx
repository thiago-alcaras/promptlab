import { Monitor, Database, BarChart2, Settings, Play, Eye } from 'lucide-react';
import { useLanguage } from '../../../shared/i18n/LanguageContext';

export default function Chapter10() {
  const { t } = useLanguage();
  return (
    <div className="prose max-w-none">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">{t.moduleContent.chapter10.content.mainTitle}</h2>

      <p className="text-slate-700 mb-8 text-lg">
        {t.moduleContent.chapter10.content.introduction}
      </p>

      <div className="space-y-8">
        {/* Seção 1: Visão Geral do LangSmith */}
        <div className="bg-white rounded-xl border-2 border-blue-200 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-4">
            <div className="flex items-center gap-3 text-white">
              <Monitor size={28} />
              <div>
                <h3 className="text-xl font-bold">O que é o LangSmith?</h3>
                <p className="text-blue-100 text-sm">Plataforma completa para desenvolvimento e monitoramento de LLMs</p>
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-6">
              <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                <h4 className="font-bold text-slate-800 mb-3">🎯 Principais Funcionalidades</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-slate-700 mb-2">Desenvolvimento</h5>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Debug de chains e agents</li>
                      <li>• Prototipação rápida</li>
                      <li>• Testes A/B de prompts</li>
                      <li>• Versionamento de prompts</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-slate-700 mb-2">Produção</h5>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Monitoramento em tempo real</li>
                      <li>• Alertas de performance</li>
                      <li>• Análise de custos</li>
                      <li>• Logs detalhados</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h5 className="font-semibold text-green-800 mb-2">💡 Por que usar o LangSmith?</h5>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• <strong>Visibilidade:</strong> Veja exatamente o que acontece em cada etapa</li>
                  <li>• <strong>Performance:</strong> Identifique gargalos e otimize rapidamente</li>
                  <li>• <strong>Qualidade:</strong> Avalie e melhore a qualidade das respostas</li>
                  <li>• <strong>Confiabilidade:</strong> Monitore e previna falhas em produção</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Seção 2: Datasets */}
        <div className="bg-white rounded-xl border-2 border-green-200 overflow-hidden">
          <div className="bg-gradient-to-r from-green-500 to-green-600 px-6 py-4">
            <div className="flex items-center gap-3 text-white">
              <Database size={28} />
              <div>
                <h3 className="text-xl font-bold">Trabalhando com Datasets</h3>
                <p className="text-green-100 text-sm">Gerenciamento de dados para treinamento e avaliação</p>
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-6">
              <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                <h4 className="font-bold text-slate-800 mb-3">📊 Tipos de Datasets</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded border">
                    <h5 className="font-semibold text-slate-800 mb-2">Datasets de Exemplo</h5>
                    <p className="text-sm text-slate-600 mb-2">Pares de entrada-saída esperada</p>
                    <ul className="text-xs text-slate-500 space-y-1">
                      <li>• Perguntas e respostas ideais</li>
                      <li>• Casos de teste automatizados</li>
                      <li>• Benchmarks de qualidade</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded border">
                    <h5 className="font-semibold text-slate-800 mb-2">Datasets de Produção</h5>
                    <p className="text-sm text-slate-600 mb-2">Dados reais coletados em produção</p>
                    <ul className="text-xs text-slate-500 space-y-1">
                      <li>• Interações de usuários reais</li>
                      <li>• Feedback e avaliações</li>
                      <li>• Casos extremos e falhas</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded border">
                    <h5 className="font-semibold text-slate-800 mb-2">Datasets Sintéticos</h5>
                    <p className="text-sm text-slate-600 mb-2">Dados gerados artificialmente</p>
                    <ul className="text-xs text-slate-500 space-y-1">
                      <li>• Variações de prompts</li>
                      <li>• Cenários de teste específicos</li>
                      <li>• Augmentação de dados</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                <h4 className="font-bold text-slate-800 mb-3">🔧 Criando um Dataset</h4>
                <div className="bg-white p-4 rounded border">
                  <pre className="text-xs text-slate-700 whitespace-pre-wrap font-mono leading-relaxed">
{`# Exemplo de dataset CSV para LangSmith
input,expected_output,metadata
"Qual é a capital do Brasil?","Brasília","categoria:geografia"
"Como calcular juros compostos?","J = C × (1 + i)^t - C","categoria:matematica"
"Explique o que é API","Uma API é uma interface...","categoria:tecnologia"

# Ou através da interface web:
1. Acesse LangSmith → Datasets
2. Clique em "Create Dataset"
3. Faça upload do CSV ou adicione exemplos manualmente
4. Configure tags e metadados`}
                  </pre>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h5 className="font-semibold text-blue-800 mb-2">📈 Melhores Práticas para Datasets:</h5>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• <strong>Diversidade:</strong> Inclua casos fáceis, médios e difíceis</li>
                  <li>• <strong>Representatividade:</strong> Cubra todos os casos de uso principais</li>
                  <li>• <strong>Qualidade:</strong> Revise e valide exemplos manualmente</li>
                  <li>• <strong>Versionamento:</strong> Mantenha histórico de mudanças</li>
                  <li>• <strong>Metadados:</strong> Adicione contexto e categorização</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Seção 3: Tracing */}
        <div className="bg-white rounded-xl border-2 border-purple-200 overflow-hidden">
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 px-6 py-4">
            <div className="flex items-center gap-3 text-white">
              <Eye size={28} />
              <div>
                <h3 className="text-xl font-bold">Tracing e Observabilidade</h3>
                <p className="text-purple-100 text-sm">Acompanhando cada etapa da execução</p>
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-6">
              <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                  <BarChart2 size={20} className="text-purple-600" />
                  O que é Tracing?
                </h4>
                <p className="text-sm text-slate-600 mb-3">
                  Tracing é o processo de registrar e visualizar cada etapa da execução de uma 
                  aplicação LLM, desde a entrada do usuário até a resposta final, incluindo 
                  todas as chamadas intermediárias.
                </p>
                <div className="bg-white p-4 rounded border">
                  <h5 className="font-semibold text-slate-800 mb-2">📋 O que o Tracing captura:</h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-600">
                    <ul className="space-y-1">
                      <li>• Prompts enviados aos modelos</li>
                      <li>• Respostas recebidas</li>
                      <li>• Tempo de execução de cada etapa</li>
                      <li>• Tokens utilizados e custos</li>
                    </ul>
                    <ul className="space-y-1">
                      <li>• Erros e exceções</li>
                      <li>• Contexto e metadados</li>
                      <li>• Chain de processamento</li>
                      <li>• Decisões do agent</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                <h4 className="font-bold text-slate-800 mb-3">🔍 Configurando Tracing</h4>
                <div className="bg-white p-4 rounded border">
                  <pre className="text-xs text-slate-700 whitespace-pre-wrap font-mono leading-relaxed">
{`# Configuração básica do LangSmith tracing
import os
from langchain import callbacks

# Configurar variáveis de ambiente
os.environ["LANGCHAIN_TRACING_V2"] = "true"
os.environ["LANGCHAIN_PROJECT"] = "meu-projeto"
os.environ["LANGCHAIN_API_KEY"] = "sua-api-key"

# Usar com LangChain
from langchain.chat_models import ChatOpenAI
from langchain.schema import HumanMessage

llm = ChatOpenAI()
response = llm([HumanMessage(content="Olá, como você está?")])

# Automaticamente enviado para LangSmith!`}
                  </pre>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h5 className="font-semibold text-green-800 mb-2">✅ Benefícios do Tracing</h5>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Debug detalhado de problemas</li>
                    <li>• Otimização de performance</li>
                    <li>• Monitoramento de custos</li>
                    <li>• Análise de comportamento</li>
                    <li>• Auditoria e compliance</li>
                  </ul>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                  <h5 className="font-semibold text-orange-800 mb-2">📊 Métricas Importantes</h5>
                  <ul className="text-sm text-orange-700 space-y-1">
                    <li>• Latência total e por etapa</li>
                    <li>• Taxa de sucesso/erro</li>
                    <li>• Consumo de tokens</li>
                    <li>• Custos por requisição</li>
                    <li>• Throughput (req/s)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Seção 4: Avaliações Automatizadas */}
        <div className="bg-white rounded-xl border-2 border-indigo-200 overflow-hidden">
          <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 px-6 py-4">
            <div className="flex items-center gap-3 text-white">
              <Play size={28} />
              <div>
                <h3 className="text-xl font-bold">Avaliações Automatizadas</h3>
                <p className="text-indigo-100 text-sm">Testando e comparando diferentes versões de prompts</p>
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-6">
              <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                <h4 className="font-bold text-slate-800 mb-3">🎯 Tipos de Avaliação</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded border">
                    <h5 className="font-semibold text-slate-800 mb-2">Exatidão</h5>
                    <p className="text-sm text-slate-600">Comparação direta com resposta esperada</p>
                  </div>
                  <div className="bg-white p-4 rounded border">
                    <h5 className="font-semibold text-slate-800 mb-2">Similaridade</h5>
                    <p className="text-sm text-slate-600">Similaridade semântica usando embeddings</p>
                  </div>
                  <div className="bg-white p-4 rounded border">
                    <h5 className="font-semibold text-slate-800 mb-2">LLM-as-Judge</h5>
                    <p className="text-sm text-slate-600">Usando outro LLM para avaliar qualidade</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                <h4 className="font-bold text-slate-800 mb-3">⚡ Executando Avaliações</h4>
                <div className="bg-white p-4 rounded border">
                  <pre className="text-xs text-slate-700 whitespace-pre-wrap font-mono leading-relaxed">
{`# Exemplo de avaliação no LangSmith
from langsmith import Client
from langsmith.evaluation import evaluate

client = Client()

# Função que será avaliada
def minha_aplicacao(inputs):
    pergunta = inputs["pergunta"]
    # Sua lógica aqui
    return {"resposta": resposta_gerada}

# Avaliar usando um dataset
results = evaluate(
    minha_aplicacao,
    data=client.list_examples(dataset_name="meu-dataset"),
    evaluators=[
        "exact_match",     # Comparação exata
        "embedding_cosine", # Similaridade semântica
        "llm_judge"        # Avaliação por LLM
    ],
    experiment_prefix="teste-v1"
)`}
                  </pre>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h5 className="font-semibold text-blue-800 mb-2">🔄 Fluxo de Avaliação Contínua:</h5>
                <div className="space-y-2 text-sm text-blue-700">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs">1</div>
                    <span>Desenvolver nova versão do prompt</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs">2</div>
                    <span>Executar avaliação automática no dataset</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs">3</div>
                    <span>Comparar métricas com versão anterior</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs">4</div>
                    <span>Decidir se deploy ou iteração adicional</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Seção 5: Implementação Prática */}
        <div className="bg-white rounded-xl border-2 border-orange-200 overflow-hidden">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-4">
            <div className="flex items-center gap-3 text-white">
              <Settings size={28} />
              <div>
                <h3 className="text-xl font-bold">Implementação Prática</h3>
                <p className="text-orange-100 text-sm">Configuração e uso do LangSmith em projetos reais</p>
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-6">
              <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                <h4 className="font-bold text-slate-800 mb-3">🚀 Primeiros Passos</h4>
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded border">
                    <h5 className="font-semibold text-slate-800 mb-2">1. Criar Conta</h5>
                    <p className="text-sm text-slate-600">Acesse smith.langchain.com e crie sua conta</p>
                  </div>
                  <div className="bg-white p-4 rounded border">
                    <h5 className="font-semibold text-slate-800 mb-2">2. Obter API Key</h5>
                    <p className="text-sm text-slate-600">Gere uma API key nas configurações da conta</p>
                  </div>
                  <div className="bg-white p-4 rounded border">
                    <h5 className="font-semibold text-slate-800 mb-2">3. Configurar Projeto</h5>
                    <p className="text-sm text-slate-600">Instale o SDK e configure as variáveis de ambiente</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                <h4 className="font-bold text-slate-800 mb-3">📦 Instalação e Configuração</h4>
                <div className="bg-white p-4 rounded border">
                  <pre className="text-xs text-slate-700 whitespace-pre-wrap font-mono leading-relaxed">
{`# Instalar o LangSmith SDK
pip install langsmith langchain

# Configurar variáveis de ambiente (.env)
LANGCHAIN_TRACING_V2=true
LANGCHAIN_PROJECT=meu-projeto-prod
LANGCHAIN_API_KEY=ls__sua_api_key_aqui

# Ou configurar no código
import os
os.environ["LANGCHAIN_TRACING_V2"] = "true"
os.environ["LANGCHAIN_PROJECT"] = "meu-projeto"
os.environ["LANGCHAIN_API_KEY"] = "sua-api-key"`}
                  </pre>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h5 className="font-semibold text-green-800 mb-2">✅ Casos de Uso Ideais</h5>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Aplicações em produção</li>
                    <li>• Sistemas com múltiplos prompts</li>
                    <li>• RAG e agents complexos</li>
                    <li>• Projetos com equipes</li>
                    <li>• Necessidade de auditoria</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <h5 className="font-semibold text-yellow-800 mb-2">💰 Considerações de Custo</h5>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    <li>• Plano gratuito disponível</li>
                    <li>• Cobrança por traces/mês</li>
                    <li>• Custos de avaliação (LLM calls)</li>
                    <li>• ROI através de otimizações</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Exercício Prático */}
        <div className="bg-gradient-to-r from-slate-50 to-indigo-50 p-6 rounded-xl border-2 border-slate-200">
          <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
            <Play className="text-indigo-600" />
            Laboratório Prático
          </h3>
          <p className="text-slate-700 mb-4">
            Configure o LangSmith em um projeto simples de chatbot e explore suas funcionalidades.
          </p>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border">
              <h4 className="font-semibold text-slate-800 mb-2">Objetivo:</h4>
              <p className="text-sm text-slate-600">
                Criar um chatbot simples que responde perguntas sobre documentação técnica, 
                com tracing completo e avaliação automatizada.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg border">
              <h4 className="font-semibold text-slate-800 mb-2">Etapas do laboratório:</h4>
              <ol className="text-sm text-slate-600 space-y-2 list-decimal list-inside">
                <li>Configurar conta e API key do LangSmith</li>
                <li>Criar um dataset com 10 perguntas e respostas esperadas</li>
                <li>Implementar chatbot simples com LangChain + OpenAI</li>
                <li>Configurar tracing para capturar todas as interações</li>
                <li>Executar avaliação automática usando o dataset</li>
                <li>Iterar no prompt baseado nos resultados</li>
                <li>Comparar performance entre versões</li>
              </ol>
            </div>
            <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
              <h4 className="font-semibold text-indigo-800 mb-2">💡 Pontos de Atenção:</h4>
              <ul className="text-sm text-indigo-700 space-y-1">
                <li>• Observe como o tracing mostra cada etapa da execução</li>
                <li>• Analise as métricas de latência e custo</li>
                <li>• Experimente diferentes avaliadores (exact_match, similarity, llm_judge)</li>
                <li>• Compare versões lado a lado no dashboard</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}