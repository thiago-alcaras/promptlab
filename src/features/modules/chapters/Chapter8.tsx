import { Shield, AlertTriangle, CheckCircle2, XCircle } from 'lucide-react';

export default function Chapter8() {
  return (
    <div className="prose max-w-none">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">Evitando Alucinações</h2>

      <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-8">
        <div className="flex items-start gap-3">
          <AlertTriangle className="text-red-600 flex-shrink-0 mt-1" size={24} />
          <div>
            <h3 className="font-bold text-red-900 mb-2">O que são Alucinações?</h3>
            <p className="text-red-800">
              Alucinações ocorrem quando a IA gera informações que parecem plausíveis mas são
              factualmente incorretas ou inventadas. É um dos maiores desafios em aplicações de IA.
            </p>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-bold text-slate-800 mb-4">Estratégias de Mitigação</h3>

      <div className="space-y-6 mb-8">
        <div className="bg-white rounded-xl border-2 border-blue-200 overflow-hidden">
          <div className="bg-blue-50 px-6 py-3 border-b border-blue-200">
            <div className="flex items-center gap-2">
              <Shield className="text-blue-600" size={20} />
              <h4 className="font-bold text-slate-800">1. Grounding com Fontes</h4>
            </div>
          </div>
          <div className="p-6">
            <p className="text-slate-600 text-sm mb-4">
              Forneça documentos ou dados específicos e instrua a IA a basear suas respostas
              exclusivamente nessas fontes.
            </p>
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
              <pre className="text-sm text-slate-700 whitespace-pre-wrap font-mono">
{`Você receberá um documento e uma pergunta.
Responda APENAS com informações contidas no documento.
Se a informação não estiver no documento, diga "Informação não disponível no documento fornecido".

<document>
[DOCUMENTO AQUI]
</document>

Pergunta: [PERGUNTA]

IMPORTANTE: Não invente ou suponha informações.
Cite trechos relevantes do documento em sua resposta.`}
              </pre>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border-2 border-green-200 overflow-hidden">
          <div className="bg-green-50 px-6 py-3 border-b border-green-200">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-green-600" size={20} />
              <h4 className="font-bold text-slate-800">2. Pedir Citações</h4>
            </div>
          </div>
          <div className="p-6">
            <p className="text-slate-600 text-sm mb-4">
              Exija que a IA cite suas fontes ou indique quando não tem certeza.
            </p>
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
              <pre className="text-sm text-slate-700 whitespace-pre-wrap font-mono">
{`Responda à pergunta e inclua:
1. A resposta
2. Trecho exato do texto que suporta a resposta
3. Nível de confiança (Alto/Médio/Baixo)

Se você não tiver certeza, diga explicitamente:
"Não tenho informação suficiente para responder com confiança."`}
              </pre>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border-2 border-purple-200 overflow-hidden">
          <div className="bg-purple-50 px-6 py-3 border-b border-purple-200">
            <div className="flex items-center gap-2">
              <XCircle className="text-purple-600" size={20} />
              <h4 className="font-bold text-slate-800">3. Limitadores Explícitos</h4>
            </div>
          </div>
          <div className="p-6">
            <p className="text-slate-600 text-sm mb-4">
              Seja explícito sobre o que a IA NÃO deve fazer.
            </p>
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
              <pre className="text-sm text-slate-700 whitespace-pre-wrap font-mono">
{`NÃO faça:
- Inventar estatísticas ou números
- Citar fontes que não foram fornecidas
- Fazer suposições sobre informações ausentes
- Extrapolar além dos dados fornecidos

Se você não souber, admita dizendo:
"Esta informação não está disponível nos dados fornecidos."`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-bold text-slate-800 mb-4">Técnicas Avançadas</h3>

      <div className="grid gap-4 mb-8">
        {[
          {
            title: 'Verificação em Duas Etapas',
            description: 'Primeiro peça a resposta, depois peça para a IA verificar sua própria resposta',
            example: 'Etapa 1: Responda. Etapa 2: Revise sua resposta e liste possíveis imprecisões.'
          },
          {
            title: 'Formato Estruturado',
            description: 'Use JSON ou XML para forçar a IA a categorizar informações conhecidas vs. inferidas',
            example: '{"fatos_confirmados": [], "inferencias": [], "incertezas": []}'
          },
          {
            title: 'Temperature Baixa',
            description: 'Em aplicações reais, use temperature=0 ou próximo disso para respostas mais determinísticas',
            example: 'Temperature 0.0-0.3 para máxima precisão factual'
          }
        ].map((technique, index) => (
          <div key={index} className="bg-slate-50 p-5 rounded-xl border border-slate-200">
            <h4 className="font-bold text-slate-800 mb-2">{technique.title}</h4>
            <p className="text-sm text-slate-600 mb-3">{technique.description}</p>
            <code className="text-xs bg-white px-3 py-1 rounded border border-slate-200 text-blue-600">
              {technique.example}
            </code>
          </div>
        ))}
      </div>

      <h3 className="text-xl font-bold text-slate-800 mb-4">Exemplo Prático: RAG Pattern</h3>

      <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-xl border border-indigo-200 mb-8">
        <p className="text-slate-700 mb-4">
          <strong>Retrieval-Augmented Generation (RAG)</strong> é o padrão mais efetivo para
          evitar alucinações em aplicações de IA em produção.
        </p>
        <div className="bg-white p-5 rounded-lg border border-slate-200">
          <pre className="text-sm text-slate-700 whitespace-pre-wrap font-mono leading-relaxed">
{`Sistema: Você é um assistente que responde perguntas sobre
a documentação da empresa.

REGRAS CRÍTICAS:
1. Use APENAS informações dos documentos fornecidos
2. Se a resposta não estiver nos documentos, diga:
   "Esta informação não consta na documentação fornecida."
3. Cite o documento e seção específica de onde veio a informação
4. Não suponha ou extrapole

Documentos recuperados:
<doc1>
[Documento 1 relevante]
</doc1>

<doc2>
[Documento 2 relevante]
</doc2>

Pergunta do usuário: [PERGUNTA]

Responda seguindo as regras acima.`}
          </pre>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-green-50 p-5 rounded-xl border border-green-200">
          <h4 className="font-bold text-green-800 mb-3">✓ Boas Práticas</h4>
          <ul className="space-y-2 text-sm text-green-700">
            <li>• Sempre forneça contexto/dados relevantes</li>
            <li>• Seja explícito sobre limitações</li>
            <li>• Peça citações de fontes</li>
            <li>• Use validação posterior quando crítico</li>
            <li>• Implemente logging para auditoria</li>
          </ul>
        </div>

        <div className="bg-red-50 p-5 rounded-xl border border-red-200">
          <h4 className="font-bold text-red-800 mb-3">✗ Evite</h4>
          <ul className="space-y-2 text-sm text-red-700">
            <li>• Perguntas abertas sem contexto</li>
            <li>• Confiar cegamente em respostas</li>
            <li>• Permitir especulação livre</li>
            <li>• Não verificar informações críticas</li>
            <li>• Usar IA para fatos que mudam</li>
          </ul>
        </div>
      </div>

      <div className="bg-amber-50 p-6 rounded-xl border border-amber-200">
        <h4 className="font-bold text-amber-900 mb-3">⚠️ Lembre-se</h4>
        <p className="text-amber-800">
          Nenhuma técnica elimina 100% das alucinações. Para aplicações críticas (médica, legal,
          financeira), SEMPRE implemente validação humana e não confie cegamente nas respostas da IA.
        </p>
      </div>
    </div>
  );
}
