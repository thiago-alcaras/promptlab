import { Users, Briefcase, GraduationCap, Heart } from 'lucide-react';

export default function Chapter3() {
  const roles = [
    {
      icon: Briefcase,
      role: 'Consultor de Negócios',
      prompt: 'Como consultor de negócios especializado em startups, analise este plano de negócios...',
      color: 'blue'
    },
    {
      icon: GraduationCap,
      role: 'Professor de Ciências',
      prompt: 'Como professor de física do ensino médio, explique o conceito de entropia...',
      color: 'green'
    },
    {
      icon: Heart,
      role: 'Coach de Bem-estar',
      prompt: 'Como coach de bem-estar e mindfulness, sugira técnicas para reduzir ansiedade...',
      color: 'pink'
    },
    {
      icon: Users,
      role: 'Especialista em UX',
      prompt: 'Como especialista em experiência do usuário, avalie este fluxo de navegação...',
      color: 'purple'
    }
  ];

  const colorClasses = {
    blue: 'bg-blue-50 border-blue-200 text-blue-700',
    green: 'bg-green-50 border-green-200 text-green-700',
    pink: 'bg-pink-50 border-pink-200 text-pink-700',
    purple: 'bg-purple-50 border-purple-200 text-purple-700'
  };

  return (
    <div className="prose max-w-none">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">Atribuindo Funções</h2>

      <p className="text-slate-700 mb-8 text-lg">
        Ao atribuir uma função ou papel específico à IA, você molda o estilo, o tom e a profundidade
        das respostas. Esta técnica é conhecida como <strong>Role Prompting</strong>.
      </p>

      <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-lg mb-8">
        <h3 className="font-bold text-indigo-900 mb-2">Por que funciona?</h3>
        <p className="text-indigo-800">
          Modelos de IA são treinados em vastas quantidades de texto que incluem diferentes estilos
          e contextos profissionais. Ao especificar um papel, você ativa padrões de linguagem e
          conhecimento associados àquela função.
        </p>
      </div>

      <h3 className="text-xl font-bold text-slate-800 mb-4">Exemplos de Funções</h3>

      <div className="grid gap-4 mb-8">
        {roles.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className={`p-5 rounded-xl border-2 ${colorClasses[item.color as keyof typeof colorClasses]}`}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Icon size={24} />
                </div>
                <div className="flex-grow">
                  <h4 className="font-bold text-slate-800 mb-2">{item.role}</h4>
                  <code className="text-sm bg-white px-3 py-2 rounded border border-slate-200 text-slate-700 block">
                    {item.prompt}
                  </code>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <h3 className="text-xl font-bold text-slate-800 mb-4">Estrutura Recomendada</h3>

      <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mb-8">
        <pre className="text-sm text-slate-700 whitespace-pre-wrap font-mono leading-relaxed">
          {`Você é um [FUNÇÃO] com [EXPERTISE].

Seu objetivo é [TAREFA].

Considere [CONTEXTO RELEVANTE].

Forneça a resposta em [FORMATO].`}
        </pre>
      </div>

      <h3 className="text-xl font-bold text-slate-800 mb-4">Comparação Prática</h3>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-red-50 border-2 border-red-200 p-5 rounded-xl">
          <h4 className="font-bold text-red-800 mb-3">Sem Função Definida</h4>
          <div className="bg-white p-4 rounded-lg border border-red-200 mb-3">
            <p className="text-sm text-slate-700 italic">
              "Como posso melhorar meu código?"
            </p>
          </div>
          <p className="text-sm text-red-700">
            Resposta genérica e superficial
          </p>
        </div>

        <div className="bg-green-50 border-2 border-green-200 p-5 rounded-xl">
          <h4 className="font-bold text-green-800 mb-3">Com Função Definida</h4>
          <div className="bg-white p-4 rounded-lg border border-green-200 mb-3">
            <p className="text-sm text-slate-700">
              "Como engenheiro de software sênior especializado em performance,
              revise este código e sugira otimizações específicas."
            </p>
          </div>
          <p className="text-sm text-green-700">
            Análise técnica detalhada e específica
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200">
        <h4 className="font-bold text-slate-800 mb-3">💡 Dica Avançada</h4>
        <p className="text-slate-700 mb-3">
          Combine múltiplas características para criar personas mais específicas:
        </p>
        <code className="text-sm bg-white px-3 py-2 rounded border border-blue-200 text-slate-700 block">
          "Você é uma desenvolvedora full-stack com 10 anos de experiência, especializada
          em React e Node.js, conhecida por escrever código limpo e bem documentado..."
        </code>
      </div>
    </div>
  );
}
