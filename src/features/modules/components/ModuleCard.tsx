import { Clock, ChevronRight, CheckCircle } from 'lucide-react';
import { Module } from '../../../shared/types/modules';

interface ModuleCardProps {
  module: Module;
  isCompleted?: boolean;
  onSelect: (moduleId: string) => void;
}

export default function ModuleCard({ module, isCompleted, onSelect }: ModuleCardProps) {
  const difficultyColors = {
    beginner: 'bg-green-100 text-green-700 border-green-200',
    intermediate: 'bg-blue-100 text-blue-700 border-blue-200',
    advanced: 'bg-orange-100 text-orange-700 border-orange-200'
  };

  const difficultyLabels = {
    beginner: 'Iniciante',
    intermediate: 'Intermediário',
    advanced: 'Avançado'
  };

  return (
    <button
      onClick={() => onSelect(module.id)}
      className="w-full group relative bg-white rounded-2xl border-2 border-slate-200 p-6 hover:border-blue-400 hover:shadow-xl transition-all text-left"
    >
      {isCompleted && (
        <div className="absolute top-4 right-4">
          <CheckCircle className="text-green-500" size={24} />
        </div>
      )}

      <div className="flex items-start gap-4 mb-4">
        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
          {module.chapter}
        </div>

        <div className="flex-grow">
          <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
            {module.title}
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            {module.description}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3 mb-4">
        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${difficultyColors[module.difficulty]}`}>
          {difficultyLabels[module.difficulty]}
        </span>
        <span className="flex items-center gap-1 text-xs text-slate-500">
          <Clock size={14} />
          {module.estimatedTime}
        </span>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {module.topics.map((topic, index) => (
          <span
            key={index}
            className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs"
          >
            {topic}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-end text-blue-600 font-medium text-sm group-hover:gap-2 transition-all">
        <span>Acessar módulo</span>
        <ChevronRight
          size={18}
          className="group-hover:translate-x-1 transition-transform"
        />
      </div>
    </button>
  );
}
