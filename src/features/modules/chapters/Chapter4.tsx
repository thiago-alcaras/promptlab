import { FileText, Code, Tag } from 'lucide-react';

export default function Chapter4() {
  return (
    <div className="prose max-w-none">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">Separando Dados de Instruções</h2>

      <p className="text-slate-700 mb-8 text-lg">
        Quando trabalhamos com prompts complexos que incluem dados variáveis (textos para analisar,
        código para revisar, etc.), é crucial separar claramente as instruções dos dados.
      </p>

      <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg mb-8">
        <h3 className="font-bold text-amber-900 mb-2">Por que isso importa?</h3>
        <p className="text-amber-800">
          Sem separação clara, a IA pode confundir dados com instruções, levando a resultados
          imprevisíveis. Delimitadores ajudam a criar fronteiras claras.
        </p>
      </div>

      <h3 className="text-xl font-bold text-slate-800 mb-4">Técnicas de Delimitação</h3>

      <div className="space-y-6 mb-8">
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
          <div className="bg-slate-50 px-6 py-3 border-b border-slate-200 flex items-center gap-2">
            <Code size={20} className="text-blue-600" />
            <h4 className="font-bold text-slate-800">1. Delimitadores Triplos</h4>
          </div>
          <div className="p-6">
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 mb-3">
              <pre className="text-sm text-slate-700 whitespace-pre-wrap font-mono">
{`Analise o seguinte texto e resuma em 3 pontos:

\`\`\`
[TEXTO DO USUÁRIO AQUI]
Este é o conteúdo que precisa ser analisado.
Pode ter múltiplas linhas e até "aspas".
\`\`\`

Forneça o resumo em bullet points.`}
              </pre>
            </div>
            <p className="text-sm text-slate-600">
              Útil para: código, textos longos, conteúdo com formatação especial
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
          <div className="bg-slate-50 px-6 py-3 border-b border-slate-200 flex items-center gap-2">
            <Tag size={20} className="text-green-600" />
            <h4 className="font-bold text-slate-800">2. Tags XML</h4>
          </div>
          <div className="p-6">
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 mb-3">
              <pre className="text-sm text-slate-700 whitespace-pre-wrap font-mono">
{`Você receberá um documento e uma pergunta.

<document>
[DOCUMENTO COMPLETO]
</document>

<question>
[PERGUNTA DO USUÁRIO]
</question>

Responda a pergunta baseando-se apenas nas informações do documento.`}
              </pre>
            </div>
            <p className="text-sm text-slate-600">
              Útil para: múltiplos blocos de dados, estrutura hierárquica
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
          <div className="bg-slate-50 px-6 py-3 border-b border-slate-200 flex items-center gap-2">
            <FileText size={20} className="text-purple-600" />
            <h4 className="font-bold text-slate-800">3. Marcadores de Seção</h4>
          </div>
          <div className="p-6">
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 mb-3">
              <pre className="text-sm text-slate-700 whitespace-pre-wrap font-mono">
{`=== INSTRUÇÃO ===
Compare os dois artigos abaixo e liste as diferenças principais.

=== ARTIGO 1 ===
[Texto do primeiro artigo]

=== ARTIGO 2 ===
[Texto do segundo artigo]

=== FORMATO DE SAÍDA ===
Liste as diferenças em tabela comparativa.`}
              </pre>
            </div>
            <p className="text-sm text-slate-600">
              Útil para: múltiplas seções, comparações, workflows complexos
            </p>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-bold text-slate-800 mb-4">Exemplo Prático Completo</h3>

      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200 mb-8">
        <div className="bg-white p-5 rounded-lg border border-slate-200">
          <pre className="text-sm text-slate-700 whitespace-pre-wrap font-mono leading-relaxed">
{`Você é um especialista em análise de sentimentos.

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

Responda em formato JSON.`}
          </pre>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-xl border border-green-200">
        <h4 className="font-bold text-green-900 mb-3">✓ Checklist de Boas Práticas</h4>
        <ul className="space-y-2 text-green-800">
          <li className="flex items-start gap-2">
            <span className="text-green-600 font-bold">•</span>
            <span>Use delimitadores consistentes em todo o prompt</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 font-bold">•</span>
            <span>Escolha delimitadores que não apareçam nos dados</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 font-bold">•</span>
            <span>Explique a estrutura antes de apresentar os dados</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 font-bold">•</span>
            <span>Mantenha instruções separadas dos dados variáveis</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
