import { allModules } from '../data/modules';
import ModuleCard from './ModuleCard';
import { useNavigate } from 'react-router-dom';

export default function ModuleGrid() {
  const navigate = useNavigate();
  const beginnerModules = allModules.filter(m => m.difficulty === 'beginner');
  const intermediateModules = allModules.filter(m => m.difficulty === 'intermediate');
  const advancedModules = allModules.filter(m => m.difficulty === 'advanced');

  const Section = ({ title, description, modules }: { title: string; description: string; modules: typeof allModules }) => (
    <div className="mb-16">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-800 mb-2">{title}</h2>
        <p className="text-slate-600">{description}</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {modules.map((module) => (
          <ModuleCard
            key={module.id}
            module={module}
            onSelect={(moduleId) => navigate(`/modules/${moduleId}`)}
          />
        ))}
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">
          Módulos de{' '}
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Aprendizado
          </span>
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Explore nosso currículo completo estruturado em três níveis de dificuldade
        </p>
      </div>

      <Section
        title="🌱 Iniciante"
        description="Fundamentos essenciais para começar sua jornada em Prompt Engineering"
        modules={beginnerModules}
      />

      <Section
        title="🚀 Intermediário"
        description="Técnicas avançadas para criar prompts mais efetivos e estruturados"
        modules={intermediateModules}
      />

      <Section
        title="⚡ Avançado"
        description="Domine casos de uso complexos e ferramentas profissionais"
        modules={advancedModules}
      />
    </div>
  );
}
