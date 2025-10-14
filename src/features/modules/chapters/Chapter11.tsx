import { Target, BarChart3, Calculator, TrendingUp, CheckCircle, AlertTriangle } from 'lucide-react';

export default function Chapter11() {
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

        {/* Seção 4: Implementação Prática */}
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