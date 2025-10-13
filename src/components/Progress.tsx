import { Trophy, Target, Clock, TrendingUp } from 'lucide-react';
import { allModules } from '../data/modules';

export default function Progress() {
  const totalModules = allModules.length;
  const completedModules = 0;
  const progressPercentage = (completedModules / totalModules) * 100;

  const stats = [
    {
      icon: Target,
      label: 'Módulos Concluídos',
      value: `${completedModules}/${totalModules}`,
      color: 'blue'
    },
    {
      icon: Trophy,
      label: 'Pontuação Total',
      value: '0 pts',
      color: 'yellow'
    },
    {
      icon: Clock,
      label: 'Tempo de Estudo',
      value: '0 min',
      color: 'green'
    },
    {
      icon: TrendingUp,
      label: 'Progresso',
      value: `${Math.round(progressPercentage)}%`,
      color: 'purple'
    }
  ];

  const colorClasses = {
    blue: 'bg-blue-50 text-blue-600 border-blue-200',
    yellow: 'bg-yellow-50 text-yellow-600 border-yellow-200',
    green: 'bg-green-50 text-green-600 border-green-200',
    purple: 'bg-purple-50 text-purple-600 border-purple-200'
  };

  return (
    <div className="min-h-[calc(100vh-80px)] bg-slate-50 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">
            Seu{' '}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Progresso
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Acompanhe sua jornada de aprendizado em Prompt Engineering
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition-all"
              >
                <div className={`w-12 h-12 rounded-xl ${colorClasses[stat.color as keyof typeof colorClasses]} border flex items-center justify-center mb-4`}>
                  <Icon size={24} />
                </div>
                <div className="text-3xl font-bold text-slate-800 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-8 mb-8">
          <h3 className="text-2xl font-bold text-slate-800 mb-6">Progresso Geral</h3>
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-slate-600">Conclusão do Curso</span>
              <span className="font-bold text-slate-800">{Math.round(progressPercentage)}%</span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-4">
              <div
                className="bg-gradient-to-r from-green-500 to-emerald-600 h-4 rounded-full transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-8">
          <h3 className="text-2xl font-bold text-slate-800 mb-6">Módulos por Nível</h3>

          <div className="space-y-8">
            {['beginner', 'intermediate', 'advanced'].map((level) => {
              const levelModules = allModules.filter(m => m.difficulty === level);
              const levelLabels = {
                beginner: { label: 'Iniciante', color: 'green' },
                intermediate: { label: 'Intermediário', color: 'blue' },
                advanced: { label: 'Avançado', color: 'orange' }
              };
              const { label, color } = levelLabels[level as keyof typeof levelLabels];

              return (
                <div key={level}>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-bold text-slate-800">{label}</h4>
                    <span className="text-sm text-slate-600">
                      0/{levelModules.length} concluídos
                    </span>
                  </div>

                  <div className="grid gap-3">
                    {levelModules.map((module) => (
                      <div
                        key={module.id}
                        className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200"
                      >
                        <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">
                          {module.chapter}
                        </div>
                        <div className="flex-grow">
                          <h5 className="font-medium text-slate-800">{module.title}</h5>
                          <p className="text-sm text-slate-600">{module.estimatedTime}</p>
                        </div>
                        <div className="flex-shrink-0">
                          <div className="w-8 h-8 rounded-full border-2 border-slate-300" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200 p-8 text-center">
          <h3 className="text-2xl font-bold text-slate-800 mb-3">Continue Aprendendo!</h3>
          <p className="text-slate-600 mb-6">
            Você está no início da sua jornada. Complete os módulos para dominar Prompt Engineering.
          </p>
          <div className="flex justify-center gap-4">
            <div className="text-center">
              <div className="text-4xl mb-2">🎯</div>
              <p className="text-sm text-slate-600">Meta: Completar<br/>todos os módulos</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">⚡</div>
              <p className="text-sm text-slate-600">Próximo: Capítulo 1<br/>Estrutura Básica</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🏆</div>
              <p className="text-sm text-slate-600">Recompensa:<br/>Certificado</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
