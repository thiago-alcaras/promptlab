import { ArrowRight, BookOpen } from 'lucide-react';

interface HeroProps {
  onGetStarted: () => void;
}

export default function Hero({ onGetStarted }: HeroProps) {
  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center px-6 py-12">
      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-8 animate-fade-in">
          <BookOpen size={16} className="text-blue-600" />
          <span className="text-sm font-medium text-blue-600">
            Aprenda fazendo
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Aprenda{' '}
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent animate-gradient">
            Prompt Engineering
          </span>
          <br />
          na prática
        </h1>

        <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          Descubra como criar prompts eficazes, entenda o que funciona (e o que não funciona), 
          e coloque a mão na massa com exercícios práticos. Tudo de forma gratuita e sem complicação.
        </p>

        <div className="flex justify-center">
          <button
            onClick={onGetStarted}
            className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-medium hover:shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-2"
          >
            Vamos começar!
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { number: '12+', label: 'exercícios práticos' },
            { number: '9', label: 'capítulos didáticos' },
            { number: '100%', label: 'gratuito' }
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
