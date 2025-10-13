import { Brain, TrendingUp, Target } from 'lucide-react';

export default function Chapter6() {
  return (
    <div className="prose max-w-none">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">Precognição (Pensando Passo a Passo)</h2>

      <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-lg mb-8">
        <div className="flex items-start gap-3">
          <Brain className="text-indigo-600 flex-shrink-0 mt-1" size={24} />
          <div>
            <h3 className="font-bold text-indigo-900 mb-2">Chain-of-Thought (CoT)</h3>
            <p className="text-indigo-800">
              Técnica que pede à IA para mostrar seu raciocínio antes de dar a resposta final,
              resultando em respostas mais precisas e confiáveis, especialmente para tarefas complexas.
            </p>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-bold text-slate-800 mb-4">Como Funciona</h3>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-red-50 border-2 border-red-200 p-6 rounded-xl">
          <h4 className="font-bold text-red-800 mb-3">❌ Sem Chain-of-Thought</h4>
          <div className="bg-white p-4 rounded-lg border border-red-200 mb-3">
            <p className="text-sm text-slate-700 font-medium mb-2">Prompt:</p>
            <p className="text-sm text-slate-600 italic mb-4">
              "Uma loja tem 23 maçãs. Vendeu 15 pela manhã e comprou mais 8 à tarde.
              Quantas maçãs tem agora?"
            </p>
            <p className="text-sm text-slate-700 font-medium mb-2">Resposta:</p>
            <p className="text-sm text-slate-600">"16 maçãs"</p>
          </div>
          <p className="text-sm text-red-700">
            Resposta direta, sem mostrar o raciocínio. Pode estar errada e você não sabe porquê.
          </p>
        </div>

        <div className="bg-green-50 border-2 border-green-200 p-6 rounded-xl">
          <h4 className="font-bold text-green-800 mb-3">✓ Com Chain-of-Thought</h4>
          <div className="bg-white p-4 rounded-lg border border-green-200 mb-3">
            <p className="text-sm text-slate-700 font-medium mb-2">Prompt:</p>
            <p className="text-sm text-slate-600 italic mb-4">
              "Uma loja tem 23 maçãs. Vendeu 15 pela manhã e comprou mais 8 à tarde.
              Quantas maçãs tem agora? Pense passo a passo."
            </p>
            <p className="text-sm text-slate-700 font-medium mb-2">Resposta:</p>
            <p className="text-sm text-slate-600">
              "Passo 1: Começou com 23 maçãs<br/>
              Passo 2: Vendeu 15 → 23 - 15 = 8<br/>
              Passo 3: Comprou 8 → 8 + 8 = 16<br/>
              Resposta: 16 maçãs"
            </p>
          </div>
          <p className="text-sm text-green-700">
            Raciocínio transparente permite verificar cada etapa.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-bold text-slate-800 mb-4">Frases-Gatilho Efetivas</h3>

      <div className="grid gap-4 mb-8">
        {[
          {
            phrase: '"Pense passo a passo"',
            icon: Target,
            use: 'Problemas matemáticos e lógicos',
            color: 'blue'
          },
          {
            phrase: '"Antes de responder, analise..."',
            icon: Brain,
            use: 'Análises complexas e decisões',
            color: 'purple'
          },
          {
            phrase: '"Mostre seu raciocínio"',
            icon: TrendingUp,
            use: 'Explicações e tutoriais',
            color: 'green'
          }
        ].map((item, index) => {
          const Icon = item.icon;
          const bgColor = `bg-${item.color}-50`;
          const borderColor = `border-${item.color}-200`;
          const textColor = `text-${item.color}-700`;

          return (
            <div
              key={index}
              className={`${bgColor} border ${borderColor} p-5 rounded-xl`}
            >
              <div className="flex items-start gap-4">
                <Icon className={textColor} size={24} />
                <div>
                  <h4 className="font-bold text-slate-800 mb-2">{item.phrase}</h4>
                  <p className="text-sm text-slate-600 mb-2">
                    <strong>Melhor para:</strong> {item.use}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <h3 className="text-xl font-bold text-slate-800 mb-4">Exemplo Avançado</h3>

      <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mb-8">
        <pre className="text-sm text-slate-700 whitespace-pre-wrap font-mono leading-relaxed">
{`Você precisa decidir se deve implementar uma nova funcionalidade.

Contexto:
- Equipe tem 3 desenvolvedores
- Prazo de 2 semanas
- Feature complexa estimada em 40 horas
- Outras 3 tarefas prioritárias pendentes

Antes de dar sua recomendação, analise:
1. A capacidade real da equipe
2. O impacto das outras tarefas
3. Os riscos envolvidos
4. Alternativas possíveis

Depois, forneça sua recomendação com justificativa.`}
        </pre>
      </div>

      <h3 className="text-xl font-bold text-slate-800 mb-4">Quando Usar CoT</h3>

      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <div className="bg-green-50 p-5 rounded-xl border border-green-200">
          <h4 className="font-bold text-green-800 mb-3">✓ Ideal para:</h4>
          <ul className="space-y-2 text-sm text-green-700">
            <li>• Problemas matemáticos</li>
            <li>• Raciocínio lógico</li>
            <li>• Análise de decisões</li>
            <li>• Debugging de código</li>
            <li>• Planejamento de projetos</li>
          </ul>
        </div>

        <div className="bg-amber-50 p-5 rounded-xl border border-amber-200">
          <h4 className="font-bold text-amber-800 mb-3">⚠ Desnecessário para:</h4>
          <ul className="space-y-2 text-sm text-amber-700">
            <li>• Perguntas factuais simples</li>
            <li>• Tradução de textos</li>
            <li>• Formatação de dados</li>
            <li>• Tarefas triviais</li>
            <li>• Respostas criativas livres</li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
        <h4 className="font-bold text-slate-800 mb-3">💡 Técnica Zero-Shot CoT</h4>
        <p className="text-slate-700 mb-3">
          A frase mágica mais simples e efetiva:
        </p>
        <div className="bg-white p-4 rounded-lg border border-blue-200">
          <code className="text-blue-600 font-mono">
            "Vamos pensar passo a passo."
          </code>
        </div>
        <p className="text-sm text-slate-600 mt-3">
          Estudos mostram que apenas adicionar essa frase pode melhorar a precisão em até 50%
          em tarefas de raciocínio complexo.
        </p>
      </div>
    </div>
  );
}
