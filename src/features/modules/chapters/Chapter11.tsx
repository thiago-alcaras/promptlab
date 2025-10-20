import { useState } from 'react';
import { Target, BarChart3, Calculator, TrendingUp, CheckCircle, AlertTriangle, Scale, Brain, Eye } from 'lucide-react';

// Componente para simulação de avaliação pairwise
interface PairwiseSimulatorProps {
  responseA: string;
  responseB: string;
  question: string;
  onEvaluate: () => void;
  isEvaluating: boolean;
  result?: {
    winner: 'A' | 'B' | 'tie';
    reasoning: string;
    scores: { responseA: number; responseB: number };
  };
}

function PairwiseSimulator({ responseA, responseB, question, onEvaluate, isEvaluating, result }: PairwiseSimulatorProps) {
  return (
    <div className="bg-white rounded-xl border-2 border-slate-200 overflow-hidden">
      <div className="bg-gradient-to-r from-purple-500 to-indigo-600 px-6 py-4">
        <div className="flex items-center gap-3 text-white">
          <Scale size={28} />
          <div>
            <h4 className="text-xl font-bold">Simulador Pairwise com LLM Judge</h4>
            <p className="text-purple-100 text-sm">Comparação lado-a-lado em tempo real</p>
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Pergunta */}
        <div className="mb-6">
          <h5 className="font-semibold text-slate-800 mb-2">📝 Pergunta:</h5>
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
            <p className="text-slate-700">{question}</p>
          </div>
        </div>

        {/* Respostas lado a lado */}
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="border-2 border-blue-200 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">A</div>
              <h6 className="font-semibold text-slate-800">Resposta A</h6>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">{responseA}</p>
          </div>

          <div className="border-2 border-green-200 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">B</div>
              <h6 className="font-semibold text-slate-800">Resposta B</h6>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">{responseB}</p>
          </div>
        </div>

        {/* Botão de avaliação */}
        <div className="text-center mb-6">
          <button
            onClick={onEvaluate}
            disabled={isEvaluating}
            className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:bg-purple-400 transition-colors flex items-center gap-2 mx-auto"
          >
            <Brain size={20} />
            {isEvaluating ? 'Avaliando...' : 'Avaliar com LLM Judge'}
          </button>
        </div>

        {/* Resultado */}
        {result && (
          <div className="border-t border-slate-200 pt-6">
            <div className="flex items-center gap-2 mb-4">
              <Eye size={20} className="text-purple-600" />
              <h6 className="font-semibold text-slate-800">Resultado da Avaliação:</h6>
            </div>

            <div className="space-y-4">
              {/* Vencedor */}
              <div className="flex items-center gap-2">
                <span className="font-medium text-slate-700">Vencedor:</span>
                <div className="flex items-center gap-2">
                  {result.winner === 'A' && (
                    <>
                      <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">A</div>
                      <CheckCircle size={16} className="text-green-600" />
                      <span className="text-blue-600 font-semibold">Resposta A</span>
                    </>
                  )}
                  {result.winner === 'B' && (
                    <>
                      <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">B</div>
                      <CheckCircle size={16} className="text-green-600" />
                      <span className="text-green-600 font-semibold">Resposta B</span>
                    </>
                  )}
                  {result.winner === 'tie' && (
                    <>
                      <Scale size={16} className="text-yellow-600" />
                      <span className="text-yellow-600 font-semibold">Empate</span>
                    </>
                  )}
                </div>
              </div>

              {/* Scores */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                  <div className="flex items-center justify-between">
                    <span className="text-blue-800 font-medium">Score A:</span>
                    <span className="text-blue-600 font-bold text-lg">{result.scores.responseA}/10</span>
                  </div>
                </div>
                <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                  <div className="flex items-center justify-between">
                    <span className="text-green-800 font-medium">Score B:</span>
                    <span className="text-green-600 font-bold text-lg">{result.scores.responseB}/10</span>
                  </div>
                </div>
              </div>

              {/* Justificativa */}
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <h6 className="font-semibold text-purple-900 mb-2">🤔 Justificativa do Judge:</h6>
                <p className="text-purple-800 text-sm leading-relaxed">{result.reasoning}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Chapter11() {
  const [currentExample, setCurrentExample] = useState(0);
  const [evaluationResults, setEvaluationResults] = useState<any[]>([]);
  const [isEvaluating, setIsEvaluating] = useState(false);

  const examples = [
    {
      question: "Explique o conceito de inteligência artificial em termos simples.",
      responseA: "Inteligência artificial é quando computadores fazem coisas inteligentes como pessoas. É muito complicado e usa matemática difícil para funcionar.",
      responseB: "Inteligência artificial (IA) é a capacidade de máquinas simularem processos cognitivos humanos, como aprendizado, raciocínio e tomada de decisões. Por exemplo, assistentes virtuais como Siri ou sistemas de recomendação do Netflix usam IA para entender preferências e fornecer respostas personalizadas.",
    },
    {
      question: "Como posso melhorar minha produtividade no trabalho?",
      responseA: "Para melhorar produtividade: 1) Use técnica Pomodoro (25min trabalho + 5min pausa), 2) Elimine distrações (celular, redes sociais), 3) Priorize tarefas importantes primeiro, 4) Automatize tarefas repetitivas, 5) Faça pausas regulares para manter o foco.",
      responseB: "Trabalhe mais horas e durma menos. Não faça pausas e tente fazer várias coisas ao mesmo tempo. Café ajuda muito também.",
    },
    {
      question: "Qual a diferença entre machine learning e deep learning?",
      responseA: "Machine Learning é um subcampo da IA onde algoritmos aprendem padrões dos dados. Deep Learning é um tipo específico de ML que usa redes neurais artificiais com múltiplas camadas para processar informações complexas, imitando o funcionamento do cérebro humano.",
      responseB: "Machine learning e deep learning são a mesma coisa, só que deep learning é mais moderno. Ambos usam computadores para aprender coisas automaticamente sem programação.",
    }
  ];

  const handleEvaluate = async () => {
    setIsEvaluating(true);
    
    // Simula avaliação do LLM Judge
    setTimeout(() => {
      let result;

      // Lógica simulada baseada na qualidade das respostas
      if (currentExample === 0) {
        result = {
          winner: 'B' as const,
          reasoning: "A Resposta B é superior porque fornece uma definição clara e concisa de IA, incluindo exemplos práticos e concretos (Siri, Netflix) que facilitam a compreensão. A Resposta A é vaga e menciona 'matemática difícil' sem explicar adequadamente o conceito.",
          scores: { responseA: 4, responseB: 9 }
        };
      } else if (currentExample === 1) {
        result = {
          winner: 'A' as const,
          reasoning: "A Resposta A oferece estratégias específicas e comprovadas para melhorar produtividade, como a técnica Pomodoro e priorização de tarefas. A Resposta B fornece conselhos prejudiciais que podem levar ao burnout e reduzir a produtividade real.",
          scores: { responseA: 9, responseB: 2 }
        };
      } else {
        result = {
          winner: 'A' as const,
          reasoning: "A Resposta A fornece uma explicação precisa e técnica da diferença entre ML e Deep Learning, explicando que DL é um subcampo de ML com redes neurais de múltiplas camadas. A Resposta B contém informações incorretas ao afirmar que são 'a mesma coisa'.",
          scores: { responseA: 8, responseB: 3 }
        };
      }

      const newResults = [...evaluationResults];
      newResults[currentExample] = result;
      setEvaluationResults(newResults);
      setIsEvaluating(false);
    }, 2000);
  };
  return (
    <div className="prose max-w-none">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">Métricas de Avaliação</h2>

      <p className="text-slate-700 mb-8 text-lg">
        A avaliação adequada de sistemas de IA é crucial para garantir qualidade, confiabilidade 
        e performance. Neste módulo, exploramos as principais métricas usadas para avaliar 
        modelos de linguagem e sistemas RAG (Retrieval-Augmented Generation).
      </p>

      <div className="space-y-8">
        {/* Seção 1: Métricas Clássicas de Classificação */}
        <div className="bg-white rounded-xl border-2 border-green-200 overflow-hidden">
          <div className="bg-gradient-to-r from-green-500 to-green-600 px-6 py-4">
            <div className="flex items-center gap-3 text-white">
              <Target size={28} />
              <div>
                <h3 className="text-xl font-bold">Métricas Clássicas de Classificação</h3>
                <p className="text-green-100 text-sm">Precision, Recall, F1-Score e Accuracy</p>
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                  <CheckCircle size={20} className="text-green-600" />
                  Precision (Precisão)
                </h4>
                <p className="text-sm text-slate-600 mb-3">
                  Proporção de predições positivas corretas sobre o total de predições positivas.
                </p>
                <div className="bg-white p-3 rounded border text-center">
                  <code className="text-lg font-mono text-blue-600">
                    Precision = TP / (TP + FP)
                  </code>
                </div>
                <p className="text-xs text-slate-500 mt-2">
                  TP = True Positives, FP = False Positives
                </p>
              </div>

              <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                  <TrendingUp size={20} className="text-blue-600" />
                  Recall (Revocação)
                </h4>
                <p className="text-sm text-slate-600 mb-3">
                  Proporção de casos positivos reais que foram identificados corretamente.
                </p>
                <div className="bg-white p-3 rounded border text-center">
                  <code className="text-lg font-mono text-blue-600">
                    Recall = TP / (TP + FN)
                  </code>
                </div>
                <p className="text-xs text-slate-500 mt-2">
                  FN = False Negatives
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                  <BarChart3 size={20} className="text-purple-600" />
                  F1-Score
                </h4>
                <p className="text-sm text-slate-600 mb-3">
                  Média harmônica entre Precision e Recall, equilibrando ambas as métricas.
                </p>
                <div className="bg-white p-3 rounded border text-center">
                  <code className="text-lg font-mono text-blue-600">
                    F1 = 2 × (P × R) / (P + R)
                  </code>
                </div>
              </div>

              <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                  <Calculator size={20} className="text-orange-600" />
                  Accuracy
                </h4>
                <p className="text-sm text-slate-600 mb-3">
                  Proporção de predições corretas sobre o total de predições.
                </p>
                <div className="bg-white p-3 rounded border text-center">
                  <code className="text-lg font-mono text-blue-600">
                    Accuracy = (TP + TN) / Total
                  </code>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h5 className="font-semibold text-blue-800 mb-2">💡 Quando usar cada métrica:</h5>
              <ul className="text-sm text-blue-700 space-y-1">
                <li><strong>Precision:</strong> Quando falsos positivos são custosos (ex: spam detection)</li>
                <li><strong>Recall:</strong> Quando falsos negativos são perigosos (ex: detecção de doenças)</li>
                <li><strong>F1-Score:</strong> Quando você precisa equilibrar precision e recall</li>
                <li><strong>Accuracy:</strong> Quando as classes estão balanceadas</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Seção 2: Métricas para RAG */}
        <div className="bg-white rounded-xl border-2 border-blue-200 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-4">
            <div className="flex items-center gap-3 text-white">
              <BarChart3 size={28} />
              <div>
                <h3 className="text-xl font-bold">Métricas para Sistemas RAG</h3>
                <p className="text-blue-100 text-sm">Faithfulness, Answer Relevancy e Context Precision</p>
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-6">
              <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                <h4 className="font-bold text-slate-800 mb-3">🔍 Faithfulness (Fidelidade)</h4>
                <p className="text-sm text-slate-600 mb-3">
                  Mede se a resposta gerada é factualmente consistente com o contexto recuperado.
                </p>
                <div className="bg-white p-4 rounded border">
                  <pre className="text-xs text-slate-700 whitespace-pre-wrap">
{`Exemplo de avaliação:
Contexto: "A Torre Eiffel tem 330 metros de altura."
Resposta: "A Torre Eiffel mede aproximadamente 330 metros."
Faithfulness: ALTA ✅

Resposta: "A Torre Eiffel tem mais de 400 metros."
Faithfulness: BAIXA ❌`}
                  </pre>
                </div>
              </div>

              <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                <h4 className="font-bold text-slate-800 mb-3">🎯 Answer Relevancy (Relevância da Resposta)</h4>
                <p className="text-sm text-slate-600 mb-3">
                  Avalia se a resposta realmente responde à pergunta feita pelo usuário.
                </p>
                <div className="bg-white p-4 rounded border">
                  <pre className="text-xs text-slate-700 whitespace-pre-wrap">
{`Pergunta: "Qual é a altura da Torre Eiffel?"
Resposta relevante: "A Torre Eiffel tem 330 metros de altura."
Resposta irrelevante: "A Torre Eiffel foi construída em Paris."`}
                  </pre>
                </div>
              </div>

              <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                <h4 className="font-bold text-slate-800 mb-3">📊 Context Precision (Precisão do Contexto)</h4>
                <p className="text-sm text-slate-600 mb-3">
                  Mede a qualidade dos documentos recuperados para responder à pergunta.
                </p>
                <div className="bg-white p-4 rounded border">
                  <pre className="text-xs text-slate-700 whitespace-pre-wrap">
{`Fórmula: Context Precision = 
(Número de documentos relevantes recuperados) / 
(Total de documentos recuperados)`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Seção 3: LLM-as-a-Judge */}
        <div className="bg-white rounded-xl border-2 border-purple-200 overflow-hidden">
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 px-6 py-4">
            <div className="flex items-center gap-3 text-white">
              <AlertTriangle size={28} />
              <div>
                <h3 className="text-xl font-bold">LLM-as-a-Judge</h3>
                <p className="text-purple-100 text-sm">Usando modelos de linguagem para avaliar outros modelos</p>
              </div>
            </div>
          </div>
          <div className="p-6">
            <p className="text-slate-600 mb-6">
              Técnica onde um modelo de linguagem (geralmente mais poderoso) é usado para avaliar 
              a qualidade das respostas de outro modelo, especialmente útil quando métricas 
              automáticas tradicionais são insuficientes.
            </p>

            <div className="bg-slate-50 p-5 rounded-lg border border-slate-200 mb-6">
              <h4 className="font-bold text-slate-800 mb-3">📝 Exemplo de Prompt para Avaliação</h4>
              <div className="bg-white p-4 rounded border">
                <pre className="text-xs text-slate-700 whitespace-pre-wrap font-mono leading-relaxed">
{`Você é um avaliador especializado em respostas de IA.

TAREFA: Avalie a qualidade da resposta abaixo em uma escala de 1-5.

CRITÉRIOS:
- Precisão factual (1-5)
- Relevância à pergunta (1-5)  
- Clareza e organização (1-5)
- Completude da resposta (1-5)

PERGUNTA: {pergunta}
RESPOSTA: {resposta}

Forneça sua avaliação no formato:
Precisão: X/5
Relevância: X/5
Clareza: X/5
Completude: X/5
Nota Final: X/5

JUSTIFICATIVA: [Explicação breve]`}
                </pre>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <h5 className="font-semibold text-green-800 mb-2">✅ Vantagens</h5>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Avalia aspectos qualitativos complexos</li>
                  <li>• Flexível para diferentes domínios</li>
                  <li>• Pode avaliar criatividade e estilo</li>
                  <li>• Escalável com automação</li>
                </ul>
              </div>

              <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                <h5 className="font-semibold text-orange-800 mb-2">⚠️ Limitações</h5>
                <ul className="text-sm text-orange-700 space-y-1">
                  <li>• Pode ter vieses do modelo avaliador</li>
                  <li>• Custos computacionais elevados</li>
                  <li>• Necessita validação humana</li>
                  <li>• Consistência pode variar</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Seção 4: Pairwise Evaluation */}
        <div className="bg-white rounded-xl border-2 border-emerald-200 overflow-hidden">
          <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 px-6 py-4">
            <div className="flex items-center gap-3 text-white">
              <Scale size={28} />
              <div>
                <h3 className="text-xl font-bold">Pairwise Evaluation (Avaliação Pareada)</h3>
                <p className="text-emerald-100 text-sm">Comparação direta entre duas respostas usando LLM como juiz</p>
              </div>
            </div>
          </div>
          <div className="p-6">
            <p className="text-slate-600 mb-6">
              Pairwise Evaluation é uma metodologia onde duas respostas são comparadas diretamente para determinar qual é superior. 
              Esta abordagem é especialmente eficaz quando combinada com LLM-as-a-Judge, oferecendo avaliações mais precisas e consistentes 
              do que métricas tradicionais.
            </p>

            <div className="mb-6">
              <h4 className="font-bold text-slate-800 mb-4">🎯 Por que Pairwise é Efetivo?</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h5 className="font-semibold text-green-800 mb-2">✅ Vantagens</h5>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• <strong>Mais intuitivo:</strong> É mais fácil comparar duas opções do que dar notas absolutas</li>
                    <li>• <strong>Reduz viés:</strong> Minimiza inconsistências entre avaliadores</li>
                    <li>• <strong>Escalável:</strong> Pode ser automatizado com LLMs como juízes</li>
                    <li>• <strong>Robusto:</strong> Funciona bem mesmo com critérios subjetivos</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h5 className="font-semibold text-blue-800 mb-2">🔧 Casos de Uso</h5>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• <strong>Benchmark de modelos:</strong> Comparar GPT-4 vs Claude vs Llama</li>
                    <li>• <strong>A/B Testing:</strong> Testar diferentes versões de prompts</li>
                    <li>• <strong>Fine-tuning:</strong> Avaliar melhoria de modelos customizados</li>
                    <li>• <strong>RAG Systems:</strong> Comparar diferentes estratégias de retrieval</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-slate-800 mb-3">📝 Estrutura de um Prompt Judge para Pairwise</h4>
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                <pre className="text-xs text-slate-700 whitespace-pre-wrap font-mono leading-relaxed">
{`Você é um juiz especialista em avaliação de respostas de IA.

TAREFA: Compare duas respostas para a mesma pergunta e determine qual é melhor.

CRITÉRIOS DE AVALIAÇÃO:
1. **Precisão**: A resposta está factualmente correta?
2. **Completude**: Aborda todos os aspectos da pergunta?
3. **Clareza**: É fácil de entender e bem estruturada?
4. **Utilidade**: Fornece valor prático ao usuário?
5. **Relevância**: Mantém foco no que foi perguntado?

PERGUNTA: {pergunta}

RESPOSTA A: {resposta_a}

RESPOSTA B: {resposta_b}

INSTRUÇÕES:
1. Avalie cada resposta nos 5 critérios (escala 1-10)
2. Compare as respostas diretamente
3. Declare o vencedor: "A", "B" ou "Empate"
4. Justifique sua decisão com exemplos específicos

FORMATO DE SAÍDA:
Vencedor: [A/B/Empate]
Score A: X/10
Score B: Y/10
Justificativa: [Explicação detalhada]`}
                </pre>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-slate-800 mb-4">🚀 Simulador Interativo</h4>
              <div className="mb-4">
                <div className="flex items-center gap-4">
                  <span className="text-slate-700 font-medium">Exemplo:</span>
                  <div className="flex gap-2">
                    {examples.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentExample(index)}
                        className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                          currentExample === index
                            ? 'bg-emerald-600 text-white'
                            : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                        }`}
                      >
                        {index + 1}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <PairwiseSimulator
                question={examples[currentExample].question}
                responseA={examples[currentExample].responseA}
                responseB={examples[currentExample].responseB}
                onEvaluate={handleEvaluate}
                isEvaluating={isEvaluating}
                result={evaluationResults[currentExample]}
              />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-slate-800 mb-3">⚙️ Implementação em Python</h4>
              <div className="bg-slate-900 rounded-lg overflow-hidden">
                <div className="bg-slate-800 px-4 py-2 border-b border-slate-700">
                  <span className="text-slate-300 text-sm">pairwise_evaluator.py</span>
                </div>
                <div className="p-4">
                  <pre className="text-sm text-green-400 whitespace-pre-wrap font-mono">
{`import openai
from typing import Dict, List

class PairwiseEvaluator:
    def __init__(self, model="gpt-4"):
        self.model = model
        
    def create_judge_prompt(self, question: str, response_a: str, response_b: str) -> str:
        return f"""Você é um juiz especialista em avaliação de respostas de IA.

TAREFA: Compare duas respostas e determine qual é melhor.

CRITÉRIOS: Precisão, Completude, Clareza, Utilidade, Relevância

PERGUNTA: {question}

RESPOSTA A: {response_a}

RESPOSTA B: {response_b}

Avalie cada resposta (1-10) e declare vencedor com justificativa.

FORMATO:
Vencedor: [A/B/Empate]
Score A: X/10
Score B: Y/10
Justificativa: [Explicação detalhada]"""

    def evaluate_pair(self, question: str, response_a: str, response_b: str) -> Dict:
        prompt = self.create_judge_prompt(question, response_a, response_b)
        
        response = openai.ChatCompletion.create(
            model=self.model,
            messages=[{"role": "user", "content": prompt}],
            temperature=0.1
        )
        
        return self.parse_evaluation(response.choices[0].message.content)
    
    def benchmark_models(self, questions: List[str], model_responses: Dict) -> Dict:
        results = {"wins": {}, "total_score": {}}
        
        for model in model_responses.keys():
            results["wins"][model] = 0
            results["total_score"][model] = 0
            
        for question in questions:
            models = list(model_responses.keys())
            for i in range(len(models)):
                for j in range(i+1, len(models)):
                    model_a, model_b = models[i], models[j]
                    
                    result = self.evaluate_pair(
                        question,
                        model_responses[model_a][question],
                        model_responses[model_b][question]
                    )
                    
                    if result["winner"] == "A":
                        results["wins"][model_a] += 1
                    elif result["winner"] == "B":
                        results["wins"][model_b] += 1
                        
        return results

# Exemplo de uso
evaluator = PairwiseEvaluator()
result = evaluator.evaluate_pair(
    question="Explique machine learning",
    response_a="ML é um tipo de IA onde computadores aprendem com dados.",
    response_b="Machine Learning é uma subdisciplina da inteligência artificial..."
)

print(f"Vencedor: {result['winner']}")
print(f"Justificativa: {result['reasoning']}")`}
                  </pre>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h5 className="font-semibold text-green-800 mb-2">✅ Melhores Práticas</h5>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Use critérios específicos e mensuráveis</li>
                  <li>• Randomize a ordem das respostas (A/B)</li>
                  <li>• Valide com avaliação humana periodicamente</li>
                  <li>• Use temperatura baixa (0.1-0.3) para consistência</li>
                  <li>• Mantenha prompts estruturados e claros</li>
                </ul>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                <h5 className="font-semibold text-amber-800 mb-2">⚠️ Cuidados</h5>
                <ul className="text-sm text-amber-700 space-y-1">
                  <li>• Evite critérios vagos ou subjetivos demais</li>
                  <li>• Não coloque sempre a melhor resposta na posição A</li>
                  <li>• Não confie 100% no LLM sem validação</li>
                  <li>• Evite prompts muito longos ou confusos</li>
                  <li>• Considere o viés do modelo avaliador</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Seção 5: Implementação Prática */}
        <div className="bg-white rounded-xl border-2 border-indigo-200 overflow-hidden">
          <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 px-6 py-4">
            <div className="flex items-center gap-3 text-white">
              <Calculator size={28} />
              <div>
                <h3 className="text-xl font-bold">Implementação Prática</h3>
                <p className="text-indigo-100 text-sm">Como implementar e usar essas métricas</p>
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-slate-800 mb-3">🔧 Ferramentas Recomendadas</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-slate-50 rounded-lg border">
                    <h5 className="font-semibold text-slate-800">LangSmith</h5>
                    <p className="text-sm text-slate-600">Plataforma completa de avaliação e monitoramento</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg border">
                    <h5 className="font-semibold text-slate-800">RAGAS</h5>
                    <p className="text-sm text-slate-600">Framework especializado em métricas RAG</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg border">
                    <h5 className="font-semibold text-slate-800">TruLens</h5>
                    <p className="text-sm text-slate-600">Avaliação e monitoramento de aplicações LLM</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-slate-800 mb-3">📊 Processo de Avaliação</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                    <div>
                      <h5 className="font-semibold text-slate-800">Definir Dataset de Teste</h5>
                      <p className="text-sm text-slate-600">Crie um conjunto representativo de perguntas e respostas esperadas</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                    <div>
                      <h5 className="font-semibold text-slate-800">Escolher Métricas Apropriadas</h5>
                      <p className="text-sm text-slate-600">Selecione métricas baseadas no tipo de aplicação e requisitos</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                    <div>
                      <h5 className="font-semibold text-slate-800">Executar Avaliação Automática</h5>
                      <p className="text-sm text-slate-600">Use ferramentas para calcular métricas em escala</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                    <div>
                      <h5 className="font-semibold text-slate-800">Validação Humana</h5>
                      <p className="text-sm text-slate-600">Confirme os resultados com avaliação manual em amostras</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Exercício Prático */}
        <div className="bg-gradient-to-r from-slate-50 to-blue-50 p-6 rounded-xl border-2 border-slate-200">
          <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
            <Target className="text-blue-600" />
            Exercício Prático
          </h3>
          <p className="text-slate-700 mb-4">
            Considere um sistema RAG que responde perguntas sobre documentação técnica. 
            Como você avaliaria sua performance?
          </p>
          <div className="space-y-3">
            <div className="bg-white p-4 rounded-lg border">
              <h4 className="font-semibold text-slate-800 mb-2">Cenário:</h4>
              <p className="text-sm text-slate-600">
                Sistema RAG para documentação de API que deve responder perguntas sobre endpoints, 
                parâmetros e exemplos de uso.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg border">
              <h4 className="font-semibold text-slate-800 mb-2">Sua tarefa:</h4>
              <ol className="text-sm text-slate-600 space-y-1 list-decimal list-inside">
                <li>Identifique 3 métricas principais para avaliar este sistema</li>
                <li>Crie um exemplo de pergunta e resposta para testar</li>
                <li>Defina critérios de qualidade para cada métrica</li>
                <li>Proponha um processo de avaliação contínua</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}