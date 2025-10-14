import { Check, X, Lightbulb } from 'lucide-react';

export default function Chapter2() {
  return (
    <div className="prose max-w-none">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">Ser Claro e Direto</h2>

      <p className="text-slate-700 mb-8 text-lg">
        A clareza é fundamental para obter respostas precisas. Modelos de IA interpretam
        literalmente o que você diz, portanto ambiguidades podem levar a resultados inesperados.
      </p>

      <h3 className="text-xl font-bold text-slate-800 mb-4">Princípios de Clareza</h3>

      <div className="space-y-6 mb-8">
        {[
          {
            principle: 'Use linguagem direta',
            bad: 'Talvez você pudesse dar uma olhada neste texto e ver se há algo que possa ser melhorado...',
            good: 'Revise este texto e corrija erros gramaticais e de pontuação.'
          },
          {
            principle: 'Evite múltiplas perguntas em uma',
            bad: 'O que é Python e como eu aprendo e quanto tempo leva?',
            good: 'O que é Python? Liste os passos para aprender Python para iniciantes.'
          },
          {
            principle: 'Seja específico sobre o escopo',
            bad: 'Fale sobre marketing digital',
            good: 'Explique as 5 principais estratégias de marketing digital para pequenas empresas em 2024.'
          }
        ].map((item, index) => (
          <div key={index} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
            <div className="bg-slate-50 px-6 py-3 border-b border-slate-200">
              <h4 className="font-bold text-slate-800">{item.principle}</h4>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex gap-3">
                <X className="text-red-500 flex-shrink-0 mt-1" size={18} />
                <div className="flex-grow">
                  <p className="text-sm font-medium text-red-700 mb-1">Evite:</p>
                  <p className="text-slate-600 italic text-sm">{item.bad}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Check className="text-green-500 flex-shrink-0 mt-1" size={18} />
                <div className="flex-grow">
                  <p className="text-sm font-medium text-green-700 mb-1">Prefira:</p>
                  <p className="text-slate-700 font-medium text-sm">{item.good}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h3 className="text-xl font-bold text-slate-800 mb-4">Técnica: Decomposição</h3>
      <p className="text-slate-700 mb-6">
        Quando sua tarefa é complexa, divida-a em passos menores e claros:
      </p>

      <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mb-8">
        <div className="space-y-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-blue-600 text-white text-sm font-bold px-2 py-1 rounded">1</span>
              <span className="font-medium text-slate-800">Identifique o tema principal</span>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-blue-600 text-white text-sm font-bold px-2 py-1 rounded">2</span>
              <span className="font-medium text-slate-800">Liste os pontos-chave a serem abordados</span>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-blue-600 text-white text-sm font-bold px-2 py-1 rounded">3</span>
              <span className="font-medium text-slate-800">Defina o formato de saída esperado</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-200">
        <div className="flex gap-3">
          <Lightbulb className="text-amber-600 flex-shrink-0" size={24} />
          <div>
            <h4 className="font-bold text-slate-800 mb-2">Regra de Ouro</h4>
            <p className="text-slate-700">
              Se você precisa reler seu próprio prompt para entendê-lo, a IA também terá dificuldades.
              Simplicidade e clareza sempre vencem complexidade desnecessária.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
