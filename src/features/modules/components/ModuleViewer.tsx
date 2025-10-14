import { useState } from 'react';
import { ArrowLeft, CheckCircle, Sparkles, RotateCcw } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';
import { allModules } from '../data/modules';
import { useModuleProgress } from '@/shared/hooks/useModuleProgress';
import Chapter1 from '../chapters/Chapter1';
import Chapter2 from '../chapters/Chapter2';
import Chapter3 from '../chapters/Chapter3';
import Chapter4 from '../chapters/Chapter4';
import Chapter5 from '../chapters/Chapter5';
import Chapter6 from '../chapters/Chapter6';
import Chapter7 from '../chapters/Chapter7';
import Chapter8 from '../chapters/Chapter8';
import Chapter9 from '../chapters/Chapter9';
import Chapter10 from '../chapters/Chapter10';
import Chapter11 from '../chapters/Chapter11';
import Chapter12 from '../chapters/Chapter12';

export default function ModuleViewer() {
  const { moduleId } = useParams<{ moduleId: string }>();
  const navigate = useNavigate();
  const [isCompleting, setIsCompleting] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isRemoving, setIsRemoving] = useState(false);
  const { markModuleComplete, removeModuleComplete, isModuleCompleted } = useModuleProgress();
  
  if (!moduleId) {
    navigate('/modules');
    return null;
  }
  
  const module = allModules.find(m => m.id === moduleId);
  const moduleCompleted = isModuleCompleted(moduleId);
  
  if (!module) {
    navigate('/modules');
    return null;
  }

  const handleComplete = async () => {
    if (moduleCompleted) return;
    
    setIsCompleting(true);
    
    // Animação de carregamento
    setTimeout(() => {
      markModuleComplete(moduleId);
      setIsCompleted(true);
      
      // Feedback visual
      setTimeout(() => {
        navigate('/modules');
        setIsCompleting(false);
        setIsCompleted(false);
      }, 1500);
    }, 800);
  };

  const handleRemove = async () => {
    if (!moduleCompleted) return;
    
    setIsRemoving(true);
    
    // Animação de remoção
    setTimeout(() => {
      removeModuleComplete(moduleId);
      
      // Feedback visual
      setTimeout(() => {
        setIsRemoving(false);
      }, 1000);
    }, 600);
  };

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
      case 'langsmith-intro': return <Chapter10 />;
      case 'metrics': return <Chapter11 />;
      case 'embeddings': return <Chapter12 />;
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
          onClick={() => navigate('/modules')}
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
            {module.topics.map((topic: string, index: number) => (
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

        <div className="flex justify-center gap-4">
          {moduleCompleted ? (
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-700 text-white rounded-xl font-medium">
                <CheckCircle size={20} />
                <span>✅ Módulo Concluído!</span>
              </div>
              <button
                onClick={handleRemove}
                disabled={isRemoving}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-500 ${
                  isRemoving
                    ? 'bg-gradient-to-r from-orange-500 to-red-600 animate-pulse'
                    : 'bg-gradient-to-r from-slate-500 to-slate-600 hover:from-orange-500 hover:to-red-600 hover:shadow-lg hover:scale-105'
                } text-white`}
              >
                {isRemoving ? (
                  <>
                    <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
                    <span>Removendo...</span>
                  </>
                ) : (
                  <>
                    <RotateCcw size={20} />
                    <span>Remover da Lista</span>
                  </>
                )}
              </button>
            </div>
          ) : (
            <button
              onClick={handleComplete}
              disabled={isCompleting}
              className={`flex items-center gap-2 px-8 py-4 rounded-xl font-medium transition-all duration-500 ${
                isCompleting
                  ? 'bg-gradient-to-r from-blue-500 to-indigo-600 animate-pulse'
                  : isCompleted
                  ? 'bg-gradient-to-r from-green-500 to-emerald-600 animate-bounce'
                  : 'bg-gradient-to-r from-green-500 to-emerald-600 hover:shadow-lg hover:scale-105'
              } text-white`}
            >
              {isCompleting ? (
                <>
                  <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
                  <span>Salvando...</span>
                </>
              ) : isCompleted ? (
                <>
                  <Sparkles size={20} className="animate-pulse" />
                  <span>🎉 Parabéns!</span>
                </>
              ) : (
                <>
                  <CheckCircle size={20} />
                  <span>Marcar como Concluído</span>
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}