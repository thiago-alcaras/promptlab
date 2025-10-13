import { ArrowLeft, CheckCircle } from 'lucide-react';
import { allModules } from '../../data/modules';
import Chapter1 from './chapters/Chapter1';
import Chapter2 from './chapters/Chapter2';
import Chapter3 from './chapters/Chapter3';
import Chapter4 from './chapters/Chapter4';
import Chapter5 from './chapters/Chapter5';
import Chapter6 from './chapters/Chapter6';
import Chapter7 from './chapters/Chapter7';
import Chapter8 from './chapters/Chapter8';
import Chapter9 from './chapters/Chapter9';

interface ModuleViewerProps {
  moduleId: string;
  onBack: () => void;
  onComplete: (moduleId: string) => void;
}

export default function ModuleViewer({ moduleId, onBack, onComplete }: ModuleViewerProps) {
  const module = allModules.find(m => m.id === moduleId);

  if (!module) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-12">
        <p className="text-center text-slate-600">Módulo não encontrado</p>
      </div>
    );
  }

  const renderContent = () => {
    switch (moduleId) {
      case 'chapter-1': return <Chapter1 />;
      case 'chapter-2': return <Chapter2 />;
      case 'chapter-3': return <Chapter3 />;
      case 'chapter-4': return <Chapter4 />;
      case 'chapter-5': return <Chapter5 />;
      case 'chapter-6': return <Chapter6 />;
      case 'chapter-7': return <Chapter7 />;
      case 'chapter-8': return <Chapter8 />;
      case 'chapter-9': return <Chapter9 />;
      default:
        return (
          <div className="text-center py-12">
            <p className="text-slate-600">Conteúdo em desenvolvimento</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-slate-600 hover:text-slate-800 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          Voltar aos módulos
        </button>

        <div className="bg-white rounded-2xl border border-slate-200 p-8 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl">
              {module.chapter}
            </div>
            <div>
              <h1 className="text-4xl font-bold text-slate-800 mb-3">
                {module.title}
              </h1>
              <p className="text-lg text-slate-600">{module.description}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {module.topics.map((topic, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-8 mb-8">
          {renderContent()}
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => onComplete(moduleId)}
            className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-medium hover:shadow-lg hover:scale-105 transition-all"
          >
            <CheckCircle size={20} />
            Marcar como Concluído
          </button>
        </div>
      </div>
    </div>
  );
}
