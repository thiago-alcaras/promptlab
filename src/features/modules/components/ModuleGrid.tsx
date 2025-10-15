import { getAllTranslatedModules } from '../data/modules';
import ModuleCard from './ModuleCard';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../../shared/i18n/LanguageContext';

export default function ModuleGrid() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const allModules = getAllTranslatedModules(t);
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
          {t.modules.title}
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          {t.modules.description}
        </p>
      </div>

      <Section
        title={t.modules.sections.beginner.title}
        description={t.modules.sections.beginner.description}
        modules={beginnerModules}
      />

      <Section
        title={t.modules.sections.intermediate.title}
        description={t.modules.sections.intermediate.description}
        modules={intermediateModules}
      />

      <Section
        title={t.modules.sections.advanced.title}
        description={t.modules.sections.advanced.description}
        modules={advancedModules}
      />
    </div>
  );
}
