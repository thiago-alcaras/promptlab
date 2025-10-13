import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onGetStarted: () => void;
}

export default function Hero({ onGetStarted }: HeroProps) {
  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center px-6 py-12">
      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-8 animate-fade-in">
          <Sparkles size={16} className="text-blue-600" />
          <span className="text-sm font-medium text-blue-600">
            Plataforma Educativa Interativa
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Aprenda{' '}
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent animate-gradient">
            IA Generativa
          </span>
          <br />
          de forma interativa
        </h1>

        <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          Domine os conceitos de Prompt Engineering, LangSmith e avaliação de modelos
          através de módulos práticos, visualizações interativas e um playground completo.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onGetStarted}
            className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-medium hover:shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-2"
          >
            Começar Agora
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>

          <button
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            className="px-8 py-4 bg-white text-slate-700 rounded-xl font-medium hover:bg-slate-50 border border-slate-200 transition-all"
          >
            Explorar Conteúdo
          </button>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { number: '12+', label: 'Módulos Interativos' },
            { number: '9', label: 'Capítulos Práticos' },
            { number: '100%', label: 'Gratuito' }
          ].map((stat, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-2xl border border-slate-200 hover:border-blue-200 hover:shadow-md transition-all"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
