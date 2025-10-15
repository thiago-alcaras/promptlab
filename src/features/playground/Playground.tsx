import { useState } from 'react';
import { Send, Lightbulb, Check, Zap, Target, User, BarChart3, Brain, FileText, Sparkles, AlertTriangle, TrendingUp, Eye } from 'lucide-react';
import { useLanguage } from '../../shared/i18n/LanguageContext';

interface AnalysisResult {
  overallScore: number;
  metrics: {
    clarity: number;
    specificity: number;
    structure: number;
    contextuality: number;
    persona: number;
    outputFormat: number;
  };
  strengths: string[];
  improvements: string[];
  improvedVersion: string;
  techniques: string[];
  persona: string | null;
  detectedElements: {
    hasRole: boolean;
    hasContext: boolean;
    hasFormat: boolean;
    hasExamples: boolean;
    hasChainOfThought: boolean;
    hasConstraints: boolean;
  };
}

export default function Playground() {
  const { t } = useLanguage();
  const [prompt, setPrompt] = useState('');
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [activeTab, setActiveTab] = useState<'analysis' | 'metrics' | 'suggestions'>('analysis');

  const analyzePrompt = () => {
    if (!prompt.trim()) return;

    setIsAnalyzing(true);

    setTimeout(() => {
      // Análise detalhada do prompt
      const text = prompt.toLowerCase();
      
      // Detecção de elementos estruturais
      const hasRole = /você é|como um|atue como|sua função|seu papel|especialista|assistente/.test(text);
      const hasContext = prompt.length > 80 && /contexto|situação|cenário|background/.test(text);
      const hasFormat = /formato|json|lista|tabela|markdown|estrutura|organize/.test(text);
      const hasExamples = /exemplo|por exemplo|como:|similar a|igual a/.test(text);
      const hasChainOfThought = /pense|raciocine|passo a passo|etapas|primeiro|depois/.test(text);
      const hasConstraints = /não|evite|limite|máximo|mínimo|apenas|somente/.test(text);

      // Detecção de persona
      let detectedPersona = null;
      const personaPatterns = {
        'Especialista Técnico': /especialista|expert|técnico|profissional|engenheiro/,
        'Educador': /professor|educador|ensine|explique|aprenda/,
        'Consultor': /consultor|conselho|recomend|sugere|orienta/,
        'Analista': /analise|avalie|compare|examine|investigue/,
        'Criativo': /criativo|criative|inove|imagine|design/
      };

      for (const [persona, pattern] of Object.entries(personaPatterns)) {
        if (pattern.test(text)) {
          detectedPersona = persona;
          break;
        }
      }

      // Cálculo de métricas individuais
      const metrics = {
        clarity: Math.min(100, Math.max(20, 
          (prompt.length > 20 ? 30 : 10) +
          (hasRole ? 20 : 0) +
          (!text.includes('...') ? 15 : 0) +
          (prompt.split(' ').length > 10 ? 20 : 10) +
          (hasConstraints ? 15 : 0)
        )),
        specificity: Math.min(100, Math.max(15,
          (hasContext ? 25 : 0) +
          (hasExamples ? 20 : 0) +
          (hasConstraints ? 20 : 0) +
          (prompt.length > 100 ? 25 : prompt.length > 50 ? 15 : 5) +
          (prompt.split('\n').length > 1 ? 10 : 0)
        )),
        structure: Math.min(100, Math.max(20,
          (hasFormat ? 30 : 0) +
          (prompt.includes('\n\n') ? 20 : 0) +
          (hasChainOfThought ? 25 : 0) +
          (prompt.split(':').length > 1 ? 15 : 0) +
          (prompt.includes('1.') || prompt.includes('-') ? 10 : 0)
        )),
        contextuality: Math.min(100, Math.max(10,
          (hasContext ? 40 : 0) +
          (hasExamples ? 25 : 0) +
          (prompt.length > 150 ? 25 : prompt.length > 80 ? 15 : 5) +
          (detectedPersona ? 10 : 0)
        )),
        persona: Math.min(100, Math.max(0,
          (hasRole ? 50 : 0) +
          (detectedPersona ? 30 : 0) +
          (/tom|estilo|forma/.test(text) ? 20 : 0)
        )),
        outputFormat: Math.min(100, Math.max(0,
          (hasFormat ? 60 : 0) +
          (hasChainOfThought ? 20 : 0) +
          (/organize|estruture/.test(text) ? 20 : 0)
        ))
      };

      const overallScore = Math.round(Object.values(metrics).reduce((a, b) => a + b, 0) / 6);

      // Análise de pontos fortes e melhorias
      const strengths: string[] = [];
      const improvements: string[] = [];
      const techniques: string[] = [];

      if (hasRole) {
        strengths.push('✅ Define um papel ou persona clara');
        techniques.push('Role Prompting');
      } else {
        improvements.push('🎯 Adicione um papel específico (ex: "Você é um especialista em...")');
      }

      if (hasContext) {
        strengths.push('✅ Fornece contexto adequado');
        techniques.push('Contextualização');
      } else {
        improvements.push('📝 Adicione mais contexto sobre a situação ou domínio');
      }

      if (hasFormat) {
        strengths.push('✅ Especifica formato de saída');
        techniques.push('Output Formatting');
      } else {
        improvements.push('📊 Defina o formato desejado (JSON, lista, tabela, etc.)');
      }

      if (hasExamples) {
        strengths.push('✅ Inclui exemplos para orientação');
        techniques.push('Few-shot Learning');
      } else {
        improvements.push('💡 Adicione exemplos para melhor orientação');
      }

      if (hasChainOfThought) {
        strengths.push('✅ Promove raciocínio estruturado');
        techniques.push('Chain-of-Thought');
      } else {
        improvements.push('🧠 Considere adicionar "pense passo a passo" para raciocínio');
      }

      if (hasConstraints) {
        strengths.push('✅ Define limitações claras');
        techniques.push('Constraint Setting');
      } else {
        improvements.push('⚡ Adicione restrições para evitar respostas indesejadas');
      }

      if (prompt.length < 50) {
        improvements.push('📏 Prompt muito curto - expanda com mais detalhes');
      }

      if (detectedPersona) {
        strengths.push(`✅ Persona detectada: ${detectedPersona}`);
      }

      // Versão melhorada
      let improvedVersion = prompt;
      let needsImprovement = false;

      if (!hasRole) {
        improvedVersion = `Você é um assistente especializado no assunto. ${improvedVersion}`;
        needsImprovement = true;
      }

      if (!hasContext && prompt.length < 100) {
        improvedVersion += '\n\nContexto: [Adicione contexto relevante sobre a situação ou domínio]';
        needsImprovement = true;
      }

      if (!hasFormat) {
        improvedVersion += '\n\nFormato de resposta: Organize a resposta de forma clara e estruturada.';
        needsImprovement = true;
      }

      if (!hasChainOfThought && improvements.length > 2) {
        improvedVersion += '\n\nPense passo a passo antes de responder.';
        needsImprovement = true;
      }

      setAnalysis({
        overallScore,
        metrics,
        strengths: strengths.length > 0 ? strengths : ['Prompt básico - há muito espaço para melhorias'],
        improvements,
        improvedVersion: needsImprovement ? improvedVersion : '',
        techniques,
        persona: detectedPersona,
        detectedElements: {
          hasRole,
          hasContext,
          hasFormat,
          hasExamples,
          hasChainOfThought,
          hasConstraints
        }
      });

      setIsAnalyzing(false);
    }, 2000);
  };

  const examplePrompts = [
    {
      category: 'Role Prompting',
      title: 'Consultor de Marketing',
      prompt: 'Você é um consultor sênior de marketing digital com 10 anos de experiência em e-commerce.\n\nSituação: Uma startup de produtos sustentáveis precisa de uma estratégia de conteúdo para Instagram.\n\nCrie 3 ideias de posts que:\n- Eduquem sobre sustentabilidade\n- Mostrem os produtos de forma criativa\n- Engajem a audiência jovem (18-35 anos)\n\nFormato: Para cada post, forneça:\n- Título chamativo\n- Descrição do conteúdo\n- 5 hashtags relevantes\n- Call-to-action específico',
      techniques: ['Role Prompting', 'Contextualização', 'Output Formatting']
    },
    {
      category: 'Chain-of-Thought',
      title: 'Análise de Investimento',
      prompt: 'Você é um analista financeiro especializado em avaliação de startups.\n\nAnalise a seguinte startup: "EcoLogistics - plataforma que otimiza rotas de entrega para reduzir emissões de carbono".\n\nPense passo a passo:\n1. Primeiro, avalie o mercado e oportunidade\n2. Depois, considere os riscos e desafios\n3. Em seguida, analise o potencial de crescimento\n4. Finalmente, faça uma recomendação\n\nFormato: Estruture sua análise seguindo exatamente essas 4 etapas, com conclusões claras para cada uma.',
      techniques: ['Role Prompting', 'Chain-of-Thought', 'Estruturação']
    },
    {
      category: 'Few-Shot Learning',
      title: 'Classificação de Feedback',
      prompt: 'Você é um especialista em análise de customer success. Classifique feedbacks de clientes em categorias.\n\nExemplos:\nFeedback: "O app é ótimo, mas demora para carregar"\nCategoria: Funcionalidade\nSentimento: Misto\nPrioridade: Média\n\nFeedback: "Cancelando assinatura, muito caro"\nCategoria: Preço\nSentimento: Negativo\nPrioridade: Alta\n\nFeedback: "Equipe de suporte muito atenciosa!"\nCategoria: Atendimento\nSentimento: Positivo\nPrioridade: Baixa\n\nAgora classifique:\nFeedback: "Produto funciona bem, mas faltam tutoriais"\n\nFormato JSON: {"categoria": "", "sentimento": "", "prioridade": "", "justificativa": ""}',
      techniques: ['Few-Shot Learning', 'Output Formatting', 'Classificação']
    },
    {
      category: 'Prompt Complexo',
      title: 'Sistema RAG Simulado',
      prompt: 'Você é um assistente especializado em documentação técnica de APIs.\n\nContexto: Você tem acesso à documentação da API de pagamentos "PayFast".\n\nDocumentação disponível:\n- Endpoint POST /payments: cria pagamento (campos: amount, currency, customer_id)\n- Endpoint GET /payments/{id}: consulta status do pagamento\n- Códigos de resposta: 200 (sucesso), 400 (dados inválidos), 401 (não autorizado)\n- Autenticação: Bearer token no header Authorization\n\nPergunta do usuário: "Como criar um pagamento de R$ 50,00 para o cliente ID 123?"\n\nInstruções:\n1. Responda baseado APENAS na documentação fornecida\n2. Se não tiver informação suficiente, diga claramente\n3. Forneça exemplo prático de código\n4. Mencione possíveis códigos de erro\n\nFormato: Resposta estruturada com explicação + código + observações importantes.',
      techniques: ['Contextualização', 'RAG Simulation', 'Constraint Setting', 'Output Formatting']
    }
  ];

  return (
    <div className="min-h-[calc(100vh-80px)] bg-slate-50 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full mb-4">
            <Zap size={16} className="text-purple-600" />
            <span className="text-sm font-medium text-purple-600">Ambiente de Testes</span>
          </div>
          <h1 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {t.playgroundContent.title}
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            {t.playgroundContent.subtitle}
          </p>
        </div>

        {/* Guia de Boas Práticas - Destaque no topo */}
        <div className="mb-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border-2 border-blue-200 p-6">
          <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
            <Target className="text-blue-600" size={24} />
            {t.playgroundContent.guide.title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white/80 p-4 rounded-lg border border-blue-100">
              <h4 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                🎭 <span>{t.playgroundContent.guide.personaContext.title}</span>
              </h4>
              <p className="text-sm text-slate-600 mb-2">{t.playgroundContent.guide.personaContext.description}</p>
              <code className="text-xs bg-slate-100 p-1 rounded">{t.playgroundContent.guide.personaContext.example}</code>
            </div>
            <div className="bg-white/80 p-4 rounded-lg border border-blue-100">
              <h4 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                📋 <span>{t.playgroundContent.guide.clearStructure.title}</span>
              </h4>
              <p className="text-sm text-slate-600 mb-2">{t.playgroundContent.guide.clearStructure.description}</p>
              <code className="text-xs bg-slate-100 p-1 rounded">{t.playgroundContent.guide.clearStructure.example}</code>
            </div>
            <div className="bg-white/80 p-4 rounded-lg border border-blue-100">
              <h4 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                🎯 <span>{t.playgroundContent.guide.specificOutput.title}</span>
              </h4>
              <p className="text-sm text-slate-600 mb-2">{t.playgroundContent.guide.specificOutput.description}</p>
              <code className="text-xs bg-slate-100 p-1 rounded">{t.playgroundContent.guide.specificOutput.example}</code>
            </div>
            <div className="bg-white/80 p-4 rounded-lg border border-blue-100">
              <h4 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                💡 <span>{t.playgroundContent.guide.practicalExamples.title}</span>
              </h4>
              <p className="text-sm text-slate-600 mb-2">{t.playgroundContent.guide.practicalExamples.description}</p>
              <code className="text-xs bg-slate-100 p-1 rounded">{t.playgroundContent.guide.practicalExamples.example}</code>
            </div>
            <div className="bg-white/80 p-4 rounded-lg border border-blue-100">
              <h4 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                🧠 <span>{t.playgroundContent.guide.chainOfThought.title}</span>
              </h4>
              <p className="text-sm text-slate-600 mb-2">{t.playgroundContent.guide.chainOfThought.description}</p>
              <code className="text-xs bg-slate-100 p-1 rounded">{t.playgroundContent.guide.chainOfThought.example}</code>
            </div>
            <div className="bg-white/80 p-4 rounded-lg border border-blue-100">
              <h4 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                ⚡ <span>{t.playgroundContent.guide.constraints.title}</span>
              </h4>
              <p className="text-sm text-slate-600 mb-2">{t.playgroundContent.guide.constraints.description}</p>
              <code className="text-xs bg-slate-100 p-1 rounded">{t.playgroundContent.guide.constraints.example}</code>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-6">
              <div className="flex items-center gap-2 mb-4">
                <Lightbulb className="text-blue-600" size={20} />
                <h3 className="font-bold text-slate-800">{t.playgroundContent.inputLabel}</h3>
              </div>

              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder={t.playground.promptPlaceholder}
                className="w-full h-64 p-4 border border-slate-200 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-700"
              />

              <div className="flex items-center justify-between mt-4">
                <span className="text-sm text-slate-500">
                  {prompt.length} {t.playgroundContent.charactersCount}
                </span>
                <button
                  onClick={analyzePrompt}
                  disabled={!prompt.trim() || isAnalyzing}
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-medium hover:shadow-lg hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isAnalyzing ? (
                    <>{t.playgroundContent.analyzing}</>
                  ) : (
                    <>
                      <Send size={18} />
                      {t.playgroundContent.buttons.analyze}
                    </>
                  )}
                </button>
              </div>
            </div>

            {analysis && (
              <div className="bg-white rounded-2xl border border-slate-200 p-6 animate-fade-in">
                {/* Tabs de navegação */}
                <div className="flex gap-2 mb-6 border-b border-slate-200">
                  <button
                    onClick={() => setActiveTab('analysis')}
                    className={`px-4 py-2 font-medium transition-colors ${
                      activeTab === 'analysis'
                        ? 'text-blue-600 border-b-2 border-blue-600'
                        : 'text-slate-600 hover:text-blue-600'
                    }`}
                  >
                    {t.playgroundContent.tabs.analysis}
                  </button>
                  <button
                    onClick={() => setActiveTab('metrics')}
                    className={`px-4 py-2 font-medium transition-colors ${
                      activeTab === 'metrics'
                        ? 'text-blue-600 border-b-2 border-blue-600'
                        : 'text-slate-600 hover:text-blue-600'
                    }`}
                  >
                    {t.playgroundContent.tabs.metrics}
                  </button>
                  <button
                    onClick={() => setActiveTab('suggestions')}
                    className={`px-4 py-2 font-medium transition-colors ${
                      activeTab === 'suggestions'
                        ? 'text-blue-600 border-b-2 border-blue-600'
                        : 'text-slate-600 hover:text-blue-600'
                    }`}
                  >
                    {t.playgroundContent.tabs.suggestions}
                  </button>
                </div>

                {/* Pontuação geral */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-slate-800 flex items-center gap-2">
                      <Target className="text-blue-600" size={20} />
                      {t.playgroundContent.overallScore}
                    </h3>
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      {analysis.overallScore}/100
                    </div>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-3">
                    <div
                      className={`h-3 rounded-full transition-all duration-1000 ${
                        analysis.overallScore >= 80 ? 'bg-gradient-to-r from-green-500 to-green-600' :
                        analysis.overallScore >= 60 ? 'bg-gradient-to-r from-yellow-500 to-yellow-600' :
                        'bg-gradient-to-r from-red-500 to-red-600'
                      }`}
                      style={{ width: `${analysis.overallScore}%` }}
                    />
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    {analysis.overallScore >= 80 ? 'Excelente!' : 
                     analysis.overallScore >= 60 ? 'Bom, mas pode melhorar' : 
                     'Precisa de melhorias significativas'}
                  </div>
                </div>

                {/* Conteúdo baseado na tab ativa */}
                {activeTab === 'analysis' && (
                  <div className="space-y-6">
                    {/* Técnicas detectadas */}
                    {analysis.techniques.length > 0 && (
                      <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                        <h4 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
                          <Brain className="text-blue-600" size={18} />
                          Técnicas Identificadas
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {analysis.techniques.map((technique, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                            >
                              {technique}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Persona detectada */}
                    {analysis.persona && (
                      <div className="bg-purple-50 p-4 rounded-xl border border-purple-200">
                        <h4 className="font-bold text-purple-800 mb-2 flex items-center gap-2">
                          <User className="text-purple-600" size={18} />
                          Persona Detectada
                        </h4>
                        <p className="text-purple-700 text-sm">{analysis.persona}</p>
                      </div>
                    )}

                    {/* Pontos fortes */}
                    {analysis.strengths.length > 0 && (
                      <div className="mb-6">
                        <h4 className="font-bold text-green-700 mb-3 flex items-center gap-2">
                          <Check size={18} />
                          Pontos Fortes
                        </h4>
                        <ul className="space-y-2">
                          {analysis.strengths.map((strength, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm text-slate-700">
                              <span className="text-green-500 mt-1 font-bold">•</span>
                              {strength}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Melhorias */}
                    {analysis.improvements.length > 0 && (
                      <div className="mb-6">
                        <h4 className="font-bold text-amber-700 mb-3 flex items-center gap-2">
                          <AlertTriangle size={18} />
                          Oportunidades de Melhoria
                        </h4>
                        <ul className="space-y-2">
                          {analysis.improvements.map((improvement, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm text-slate-700">
                              <span className="text-amber-500 mt-1 font-bold">•</span>
                              {improvement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Versão melhorada */}
                    {analysis.improvedVersion && (
                      <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-xl border border-green-200">
                        <h4 className="font-bold text-green-800 mb-3 flex items-center gap-2">
                          <Sparkles className="text-green-600" size={18} />
                          Versão Otimizada
                        </h4>
                        <p className="text-sm text-slate-700 whitespace-pre-wrap leading-relaxed bg-white p-4 rounded border">
                          {analysis.improvedVersion}
                        </p>
                        <button
                          onClick={() => setPrompt(analysis.improvedVersion)}
                          className="mt-3 px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors"
                        >
                          Usar esta versão →
                        </button>
                      </div>
                    )}
                  </div>
                )}

                {/* Tab de Métricas Detalhadas */}
                {activeTab === 'metrics' && (
                  <div className="space-y-4">
                    <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                      <BarChart3 className="text-blue-600" size={20} />
                      Análise Detalhada por Dimensão
                    </h4>
                    
                    {Object.entries(analysis.metrics).map(([key, value]) => {
                      const metricNames: Record<string, { name: string; description: string; icon: any }> = {
                        clarity: {
                          name: t.playgroundContent.metrics.clarity,
                          description: t.playgroundContent.metrics.clarityDesc,
                          icon: Eye
                        },
                        specificity: {
                          name: t.playgroundContent.metrics.specificity,
                          description: t.playgroundContent.metrics.specificityDesc,
                          icon: Target
                        },
                        structure: {
                          name: t.playgroundContent.metrics.structure,
                          description: t.playgroundContent.metrics.structureDesc,
                          icon: FileText
                        },
                        contextuality: {
                          name: t.playgroundContent.metrics.contextuality,
                          description: t.playgroundContent.metrics.contextualityDesc,
                          icon: Brain
                        },
                        persona: {
                          name: t.playgroundContent.metrics.persona,
                          description: t.playgroundContent.metrics.personaDesc,
                          icon: User
                        },
                        outputFormat: {
                          name: t.playgroundContent.metrics.outputFormat,
                          description: t.playgroundContent.metrics.outputFormatDesc,
                          icon: BarChart3
                        }
                      };

                      const metric = metricNames[key];
                      const Icon = metric.icon;
                      
                      return (
                        <div key={key} className="bg-slate-50 p-4 rounded-lg border">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <Icon size={16} className="text-slate-600" />
                              <span className="font-semibold text-slate-800">{metric.name}</span>
                            </div>
                            <span className={`font-bold text-lg ${
                              value >= 80 ? 'text-green-600' :
                              value >= 60 ? 'text-yellow-600' :
                              'text-red-600'
                            }`}>
                              {value}/100
                            </span>
                          </div>
                          <p className="text-xs text-slate-600 mb-2">{metric.description}</p>
                          <div className="w-full bg-slate-200 rounded-full h-2">
                            <div
                              className={`h-2 rounded-full transition-all duration-700 ${
                                value >= 80 ? 'bg-green-500' :
                                value >= 60 ? 'bg-yellow-500' :
                                'bg-red-500'
                              }`}
                              style={{ width: `${value}%` }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Tab de Sugestões Avançadas */}
                {activeTab === 'suggestions' && (
                  <div className="space-y-6">
                    <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                      <TrendingUp className="text-blue-600" size={20} />
                      Sugestões Avançadas de Otimização
                    </h4>

                    {/* Elementos detectados */}
                    <div className="bg-slate-50 p-4 rounded-lg border">
                      <h5 className="font-semibold text-slate-800 mb-3">Elementos Estruturais Detectados:</h5>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className={`flex items-center gap-2 ${analysis.detectedElements.hasRole ? 'text-green-600' : 'text-slate-400'}`}>
                          <span className={analysis.detectedElements.hasRole ? '✅' : '❌'} />
                          Papel/Persona
                        </div>
                        <div className={`flex items-center gap-2 ${analysis.detectedElements.hasContext ? 'text-green-600' : 'text-slate-400'}`}>
                          <span className={analysis.detectedElements.hasContext ? '✅' : '❌'} />
                          Contexto
                        </div>
                        <div className={`flex items-center gap-2 ${analysis.detectedElements.hasFormat ? 'text-green-600' : 'text-slate-400'}`}>
                          <span className={analysis.detectedElements.hasFormat ? '✅' : '❌'} />
                          Formato de Saída
                        </div>
                        <div className={`flex items-center gap-2 ${analysis.detectedElements.hasExamples ? 'text-green-600' : 'text-slate-400'}`}>
                          <span className={analysis.detectedElements.hasExamples ? '✅' : '❌'} />
                          Exemplos
                        </div>
                        <div className={`flex items-center gap-2 ${analysis.detectedElements.hasChainOfThought ? 'text-green-600' : 'text-slate-400'}`}>
                          <span className={analysis.detectedElements.hasChainOfThought ? '✅' : '❌'} />
                          Chain-of-Thought
                        </div>
                        <div className={`flex items-center gap-2 ${analysis.detectedElements.hasConstraints ? 'text-green-600' : 'text-slate-400'}`}>
                          <span className={analysis.detectedElements.hasConstraints ? '✅' : '❌'} />
                          Restrições/Limites
                        </div>
                      </div>
                    </div>

                    {/* Técnicas recomendadas */}
                    <div className="space-y-4">
                      <h5 className="font-semibold text-slate-800">Técnicas Recomendadas para seu Prompt:</h5>
                      
                      {!analysis.detectedElements.hasRole && (
                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                          <h6 className="font-semibold text-blue-800 mb-2">🎭 Role Prompting</h6>
                          <p className="text-sm text-blue-700 mb-2">Defina um papel específico para obter respostas mais focadas.</p>
                          <code className="text-xs bg-white p-2 rounded block text-blue-800">
                            "Você é um [ESPECIALISTA] com [X ANOS] de experiência em [ÁREA]..."
                          </code>
                        </div>
                      )}

                      {!analysis.detectedElements.hasExamples && analysis.overallScore < 70 && (
                        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                          <h6 className="font-semibold text-green-800 mb-2">📚 Few-Shot Learning</h6>
                          <p className="text-sm text-green-700 mb-2">Adicione exemplos para melhor orientação.</p>
                          <code className="text-xs bg-white p-2 rounded block text-green-800">
                            "Exemplo 1: [INPUT] → [OUTPUT]<br/>Exemplo 2: [INPUT] → [OUTPUT]"
                          </code>
                        </div>
                      )}

                      {!analysis.detectedElements.hasChainOfThought && analysis.metrics.structure < 60 && (
                        <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                          <h6 className="font-semibold text-purple-800 mb-2">🧠 Chain-of-Thought</h6>
                          <p className="text-sm text-purple-700 mb-2">Promova raciocínio estruturado.</p>
                          <code className="text-xs bg-white p-2 rounded block text-purple-800">
                            "Pense passo a passo: 1) Analise... 2) Considere... 3) Conclua..."
                          </code>
                        </div>
                      )}

                      {!analysis.detectedElements.hasFormat && (
                        <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                          <h6 className="font-semibold text-orange-800 mb-2">📋 Output Formatting</h6>
                          <p className="text-sm text-orange-700 mb-2">Especifique o formato desejado.</p>
                          <code className="text-xs bg-white p-2 rounded block text-orange-800">
                            "Formato de resposta: JSON com campos 'título', 'descrição', 'tags'"
                          </code>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-6">
              <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                <Lightbulb className="text-yellow-500" size={20} />
                Prompts de Exemplo
              </h3>
              <div className="space-y-4">
                {examplePrompts.map((example, index) => (
                  <div key={index} className="border border-slate-200 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setPrompt(example.prompt)}
                      className="w-full text-left p-4 bg-slate-50 hover:bg-blue-50 hover:border-blue-200 transition-all group"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium text-slate-800 group-hover:text-blue-600 transition-colors">
                          {example.title}
                        </h4>
                        <span className="text-xs bg-slate-200 text-slate-600 px-2 py-1 rounded">
                          {example.category}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 mb-3 line-clamp-2">
                        {example.prompt.substring(0, 120)}...
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {example.techniques.map((technique, techIndex) => (
                          <span
                            key={techIndex}
                            className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
                          >
                            {technique}
                          </span>
                        ))}
                      </div>
                    </button>
                  </div>
                ))}
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}
