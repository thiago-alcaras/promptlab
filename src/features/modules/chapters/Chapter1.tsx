import { AlertCircle, Check, X } from 'lucide-react';

export default function Chapter1() {
  return (
    <div className="prose max-w-none">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">Estrutura Básica de Prompt</h2>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
        <div className="flex items-start gap-3">
          <AlertCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
          <div>
            <h3 className="font-bold text-blue-900 mb-2">O que é um Prompt?</h3>
            <p className="text-blue-800">
              Um prompt é a instrução ou pergunta que você fornece a um modelo de IA para obter uma resposta.
              A qualidade do prompt afeta diretamente a qualidade da resposta.
            </p>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-bold text-slate-800 mb-4">Componentes Essenciais</h3>
      <p className="text-slate-700 mb-6">
        Todo prompt efetivo contém alguns ou todos destes elementos:
      </p>

      <div className="grid gap-4 mb-8">
        {[
          {
            title: 'Tarefa',
            description: 'O que você quer que a IA faça',
            example: 'Resuma este artigo...'
          },
          {
            title: 'Contexto',
            description: 'Informações de fundo relevantes',
            example: 'Como especialista em marketing...'
          },
          {
            title: 'Formato',
            description: 'Como você quer a resposta',
            example: 'Em 3 bullet points...'
          },
          {
            title: 'Tom',
            description: 'O estilo de comunicação desejado',
            example: 'De forma profissional e objetiva...'
          }
        ].map((component, index) => (
          <div key={index} className="bg-slate-50 p-5 rounded-xl border border-slate-200">
            <h4 className="font-bold text-slate-800 mb-2">{component.title}</h4>
            <p className="text-slate-600 text-sm mb-2">{component.description}</p>
            <code className="text-xs bg-white px-3 py-1 rounded border border-slate-200 text-blue-600">
              {component.example}
            </code>
          </div>
        ))}
      </div>

      <h3 className="text-xl font-bold text-slate-800 mb-4">Exemplo Prático</h3>

      <div className="space-y-6 mb-8">
        <div className="border-2 border-red-200 bg-red-50 rounded-xl p-6">
          <div className="flex items-center gap-2 mb-3">
            <X className="text-red-600" size={20} />
            <span className="font-bold text-red-800">Prompt Fraco</span>
          </div>
          <div className="bg-white p-4 rounded-lg border border-red-200">
            <p className="text-slate-700 italic">
              "Explica IA"
            </p>
          </div>
          <p className="text-sm text-red-700 mt-3">
            Muito vago, sem contexto ou formato específico.
          </p>
        </div>

        <div className="border-2 border-green-200 bg-green-50 rounded-xl p-6">
          <div className="flex items-center gap-2 mb-3">
            <Check className="text-green-600" size={20} />
            <span className="font-bold text-green-800">Prompt Forte</span>
          </div>
          <div className="bg-white p-4 rounded-lg border border-green-200">
            <p className="text-slate-700">
              "Explique o conceito de Inteligência Artificial para um estudante do ensino médio,
              usando uma analogia simples e fornecendo 3 exemplos práticos de uso no dia a dia.
              Seja conciso e use linguagem acessível."
            </p>
          </div>
          <p className="text-sm text-green-700 mt-3">
            Claro, específico, com contexto sobre o público e formato desejado.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
        <h4 className="font-bold text-slate-800 mb-3">💡 Dica Importante</h4>
        <p className="text-slate-700">
          Quanto mais específico e estruturado for seu prompt, melhores e mais consistentes
          serão as respostas. Pense no prompt como uma receita: ingredientes claros levam a
          resultados previsíveis.
        </p>
      </div>
    </div>
  );
}
