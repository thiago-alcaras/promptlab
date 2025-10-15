import { ArrowRight, BookOpen, Play, TrendingUp, Brain, Zap, Code, Target, Users, Lightbulb } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { getAllTranslatedModules } from '../modules/data/modules';
import { useLanguage } from '../../shared/i18n/LanguageContext';

export default function Hero() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const allModules = getAllTranslatedModules(t);
  return (
    <div className="min-h-screen px-6 py-12">
      {/* Hero Principal */}
      <div className="max-w-6xl mx-auto text-center mb-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-8 animate-fade-in">
          <BookOpen size={16} className="text-blue-600" />
          <span className="text-sm font-medium text-blue-600">
            {t.hero.tagline}
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          {t.hero.title.learn}{' '}
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent animate-gradient">
            {t.hero.title.promptEngineering}
          </span>
          <br />
          {t.hero.title.inPractice}
        </h1>

        <p className="text-xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed">
          {t.hero.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button
            onClick={() => navigate('/modules')}
            className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-medium hover:shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-2"
          >
            {t.hero.startLearning}
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { number: allModules.length.toString(), label: t.hero.stats.modules, desc: t.hero.stats.modulesDesc },
            { number: '0', label: t.hero.stats.apiCosts, desc: t.hero.stats.apiCostsDesc },
            { number: '100%', label: t.hero.stats.free, desc: t.hero.stats.freeDesc }
          ].map((stat, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-2xl border border-slate-200 hover:border-blue-200 hover:shadow-md transition-all"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-slate-800 font-medium">{stat.label}</div>
              <div className="text-sm text-slate-500 mt-1">{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Conceito e Filosofia */}
      <div className="max-w-6xl mx-auto mb-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            {t.hero.whyExists.title}
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            {t.hero.whyExists.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Brain className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{t.hero.whyExists.visualLearning.title}</h3>
                  <p className="text-slate-600">
                    {t.hero.whyExists.visualLearning.description}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <Target className="text-green-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{t.hero.whyExists.educationalFocus.title}</h3>
                  <p className="text-slate-600">
                    {t.hero.whyExists.educationalFocus.description}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Code className="text-purple-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{t.hero.whyExists.bestPractices.title}</h3>
                  <p className="text-slate-600">
                    {t.hero.whyExists.bestPractices.description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Uma ferramenta que cresce com você</h3>
            <p className="text-slate-600 mb-6">
              O PromptLab evolui conforme meu próprio aprendizado cresce. Cada novo conceito que aprendo 
              sobre IA e desenvolvimento se torna uma melhoria na plataforma.
            </p>
            <div className="flex items-center gap-2 text-blue-600">
              <Lightbulb size={20} />
              <span className="font-medium">Criado por um desenvolvedor, para desenvolvedores</span>
            </div>
          </div>
        </div>
      </div>

      {/* O que você vai aprender */}
      <div className="max-w-6xl mx-auto mb-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            O que você vai aprender
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto">
            {allModules.length} módulos cuidadosamente estruturados para levar você do zero ao avançado em Prompt Engineering
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Users className="text-green-600" size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Módulos Básicos</h3>
            <p className="text-slate-600 mb-4">
              Fundamentos de prompts, estruturação básica e primeiros conceitos essenciais.
            </p>
            <button 
              onClick={() => navigate('/modules')}
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Ver módulos básicos →
            </button>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Zap className="text-blue-600" size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Módulos Intermediários</h3>
            <p className="text-slate-600 mb-4">
              Técnicas avançadas, contextos complexos e otimização de resultados.
            </p>
            <button 
              onClick={() => navigate('/modules')}
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Ver módulos intermediários →
            </button>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="text-orange-600" size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Módulos Avançados</h3>
            <p className="text-slate-600 mb-4">
              Casos de uso profissionais, integração com ferramentas e bests practices.
            </p>
            <button 
              onClick={() => navigate('/modules')}
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Ver módulos avançados →
            </button>
          </div>
        </div>
      </div>

      {/* Como funciona */}
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Como funciona na prática
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto">
            Três ferramentas integradas para uma experiência completa de aprendizado
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
              <BookOpen className="text-blue-600" size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">1. Estude os Módulos</h3>
            <p className="text-slate-600 mb-6">
              Aprenda conceitos teóricos através de módulos interativos com exemplos práticos e exercícios.
            </p>
            <button 
              onClick={() => navigate('/modules')}
              className="w-full py-3 bg-blue-50 text-blue-600 rounded-xl font-medium hover:bg-blue-100 transition-colors"
            >
              Começar pelos módulos
            </button>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
              <Play className="text-green-600" size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">2. Pratique no Playground</h3>
            <p className="text-slate-600 mb-6">
              Teste seus prompts em um ambiente seguro com feedback instantâneo e sugestões de melhoria.
            </p>
            <button 
              onClick={() => navigate('/playground')}
              className="w-full py-3 bg-green-50 text-green-600 rounded-xl font-medium hover:bg-green-100 transition-colors"
            >
              Testar no playground
            </button>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
              <TrendingUp className="text-purple-600" size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">3. Acompanhe seu Progresso</h3>
            <p className="text-slate-600 mb-6">
              Monitore sua evolução com métricas detalhadas e sistema de gamificação motivacional.
            </p>
            <button 
              onClick={() => navigate('/progress')}
              className="w-full py-3 bg-purple-50 text-purple-600 rounded-xl font-medium hover:bg-purple-100 transition-colors"
            >
              Ver meu progresso
            </button>
          </div>
        </div>

        <div className="text-center mt-16">
          <button
            onClick={() => navigate('/modules')}
            className="group px-12 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-medium hover:shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-3 mx-auto text-lg"
          >
            Começar minha jornada agora
            <ArrowRight
              size={24}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
          <p className="text-sm text-slate-500 mt-4">
            • Sem necessidade de cadastro • Comece em 30 segundos
          </p>
        </div>
      </div>
    </div>
  );
}
