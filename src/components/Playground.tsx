import { useState } from 'react';
import { Send, Lightbulb, Check, X, Sparkles } from 'lucide-react';

export default function Playground() {
  const [prompt, setPrompt] = useState('');
  const [analysis, setAnalysis] = useState<{
    score: number;
    strengths: string[];
    improvements: string[];
    improvedVersion: string;
  } | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const analyzePrompt = () => {
    if (!prompt.trim()) return;

    setIsAnalyzing(true);

    setTimeout(() => {
      const score = Math.floor(Math.random() * 30) + 60;
      const hasRole = prompt.toLowerCase().includes('você é') || prompt.toLowerCase().includes('como');
      const hasContext = prompt.length > 50;
      const hasFormat = prompt.toLowerCase().includes('formato') || prompt.toLowerCase().includes('json') || prompt.toLowerCase().includes('lista');
      const isClear = prompt.length > 20 && !prompt.includes('...');

      const strengths: string[] = [];
      const improvements: string[] = [];

      if (hasRole) strengths.push('Define um papel ou contexto para a IA');
      else improvements.push('Atribua um papel específico (ex: "Você é um especialista em...")');

      if (hasContext) strengths.push('Fornece contexto adequado');
      else improvements.push('Adicione mais contexto sobre o que você precisa');

      if (hasFormat) strengths.push('Especifica o formato da resposta');
      else improvements.push('Defina o formato desejado (lista, JSON, parágrafos, etc.)');

      if (isClear) strengths.push('Linguagem clara e direta');
      else improvements.push('Seja mais específico e direto em suas instruções');

      if (prompt.length < 30) {
        improvements.push('Prompt muito curto - adicione mais detalhes');
      }

      let improvedVersion = prompt;
      if (!hasRole) {
        improvedVersion = `Você é um assistente especializado. ${improvedVersion}`;
      }
      if (!hasFormat) {
        improvedVersion += '\n\nForneça a resposta de forma estruturada e organizada.';
      }

      setAnalysis({
        score,
        strengths: strengths.length > 0 ? strengths : ['Prompt básico detectado'],
        improvements,
        improvedVersion: improvedVersion !== prompt ? improvedVersion : ''
      });

      setIsAnalyzing(false);
    }, 1500);
  };

  const examplePrompts = [
    {
      title: 'Análise de Sentimentos',
      prompt: 'Como especialista em análise de sentimentos, classifique o seguinte review de produto:\n\n"O produto é bom, mas a entrega demorou muito."\n\nRetorne em formato JSON com: sentimento, confiança, aspectos_mencionados.'
    },
    {
      title: 'Geração de Código',
      prompt: 'Você é um desenvolvedor Python experiente. Crie uma função que recebe uma lista de números e retorna apenas os números primos. Inclui docstring e exemplo de uso.'
    },
    {
      title: 'Resumo de Texto',
      prompt: 'Resuma o seguinte artigo em 3 bullet points, focando nos pontos principais e mantendo um tom profissional:\n\n[Texto do artigo aqui]'
    }
  ];

  return (
    <div className="min-h-[calc(100vh-80px)] bg-slate-50 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full mb-4">
            <Sparkles size={16} className="text-purple-600" />
            <span className="text-sm font-medium text-purple-600">Ambiente de Testes</span>
          </div>
          <h1 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Playground
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Teste e aprimore seus prompts em tempo real com feedback inteligente
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-6">
              <div className="flex items-center gap-2 mb-4">
                <Lightbulb className="text-blue-600" size={20} />
                <h3 className="font-bold text-slate-800">Seu Prompt</h3>
              </div>

              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Digite seu prompt aqui...&#10;&#10;Exemplo:&#10;Você é um especialista em marketing digital. Crie 3 ideias de posts para Instagram sobre sustentabilidade. Cada post deve ter um título chamativo e 3 hashtags relevantes."
                className="w-full h-64 p-4 border border-slate-200 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-700"
              />

              <div className="flex items-center justify-between mt-4">
                <span className="text-sm text-slate-500">
                  {prompt.length} caracteres
                </span>
                <button
                  onClick={analyzePrompt}
                  disabled={!prompt.trim() || isAnalyzing}
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-medium hover:shadow-lg hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isAnalyzing ? (
                    <>Analisando...</>
                  ) : (
                    <>
                      <Send size={18} />
                      Analisar Prompt
                    </>
                  )}
                </button>
              </div>
            </div>

            {analysis && (
              <div className="bg-white rounded-2xl border border-slate-200 p-6 animate-fade-in">
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-slate-800">Pontuação de Qualidade</h3>
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      {analysis.score}/100
                    </div>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-indigo-600 h-3 rounded-full transition-all duration-1000"
                      style={{ width: `${analysis.score}%` }}
                    />
                  </div>
                </div>

                {analysis.strengths.length > 0 && (
                  <div className="mb-6">
                    <h4 className="font-bold text-green-700 mb-3 flex items-center gap-2">
                      <Check size={18} />
                      Pontos Fortes
                    </h4>
                    <ul className="space-y-2">
                      {analysis.strengths.map((strength, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-slate-700">
                          <span className="text-green-500 mt-1">•</span>
                          {strength}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {analysis.improvements.length > 0 && (
                  <div className="mb-6">
                    <h4 className="font-bold text-amber-700 mb-3 flex items-center gap-2">
                      <X size={18} />
                      Sugestões de Melhoria
                    </h4>
                    <ul className="space-y-2">
                      {analysis.improvements.map((improvement, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-slate-700">
                          <span className="text-amber-500 mt-1">•</span>
                          {improvement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {analysis.improvedVersion && (
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-xl border border-green-200">
                    <h4 className="font-bold text-green-800 mb-3">Versão Melhorada</h4>
                    <p className="text-sm text-slate-700 whitespace-pre-wrap leading-relaxed">
                      {analysis.improvedVersion}
                    </p>
                    <button
                      onClick={() => setPrompt(analysis.improvedVersion)}
                      className="mt-3 text-sm text-green-700 font-medium hover:text-green-800 transition-colors"
                    >
                      Usar esta versão →
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-6">
              <h3 className="font-bold text-slate-800 mb-4">Exemplos para Testar</h3>
              <div className="space-y-3">
                {examplePrompts.map((example, index) => (
                  <button
                    key={index}
                    onClick={() => setPrompt(example.prompt)}
                    className="w-full text-left p-4 bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-200 rounded-xl transition-all group"
                  >
                    <h4 className="font-medium text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                      {example.title}
                    </h4>
                    <p className="text-xs text-slate-500 line-clamp-2">
                      {example.prompt}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl border border-indigo-200 p-6">
              <h3 className="font-bold text-slate-800 mb-3">💡 Dicas Rápidas</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 font-bold">1.</span>
                  <span>Defina um papel específico</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 font-bold">2.</span>
                  <span>Forneça contexto claro</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 font-bold">3.</span>
                  <span>Especifique o formato</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 font-bold">4.</span>
                  <span>Seja direto e objetivo</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
