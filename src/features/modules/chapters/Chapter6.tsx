import { Brain, TrendingUp, Target } from 'lucide-react';
import { useLanguage } from '../../../shared/i18n/LanguageContext';

export default function Chapter6() {
  const { t } = useLanguage();
  return (
    <div className="prose max-w-none">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">{t.moduleContent.chapter6.content.mainTitle}</h2>

      <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-lg mb-8">
        <div className="flex items-start gap-3">
          <Brain className="text-indigo-600 flex-shrink-0 mt-1" size={24} />
          <div>
            <h3 className="font-bold text-indigo-900 mb-2">Chain-of-Thought (CoT)</h3>
            <p className="text-indigo-800">
              {t.moduleContent.chapter6.content.cotExplanation}
            </p>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-bold text-slate-800 mb-4">{t.moduleContent.chapter6.content.howItWorksTitle}</h3>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-red-50 border-2 border-red-200 p-6 rounded-xl">
          <h4 className="font-bold text-red-800 mb-3">{t.moduleContent.chapter6.content.comparison.without.title}</h4>
          <div className="bg-white p-4 rounded-lg border border-red-200 mb-3">
            <p className="text-sm text-slate-700 font-medium mb-2">Prompt:</p>
            <p className="text-sm text-slate-600 italic mb-4">
              "{t.moduleContent.chapter6.content.comparison.without.prompt}"
            </p>
            <p className="text-sm text-slate-700 font-medium mb-2">Resposta:</p>
            <p className="text-sm text-slate-600">"{t.moduleContent.chapter6.content.comparison.without.response}"</p>
          </div>
          <p className="text-sm text-red-700">
            {t.moduleContent.chapter6.content.comparison.without.issue}
          </p>
        </div>

        <div className="bg-green-50 border-2 border-green-200 p-6 rounded-xl">
          <h4 className="font-bold text-green-800 mb-3">{t.moduleContent.chapter6.content.comparison.with.title}</h4>
          <div className="bg-white p-4 rounded-lg border border-green-200 mb-3">
            <p className="text-sm text-slate-700 font-medium mb-2">Prompt:</p>
            <p className="text-sm text-slate-600 italic mb-4">
              "{t.moduleContent.chapter6.content.comparison.with.prompt}"
            </p>
            <p className="text-sm text-slate-700 font-medium mb-2">Resposta:</p>
            <pre className="text-sm text-slate-600 whitespace-pre-wrap">
              {t.moduleContent.chapter6.content.comparison.with.response}
            </pre>
          </div>
          <p className="text-sm text-green-700">
            {t.moduleContent.chapter6.content.comparison.with.benefit}
          </p>
        </div>
      </div>

      <h3 className="text-xl font-bold text-slate-800 mb-4">{t.moduleContent.chapter6.content.effectiveTriggersTitle}</h3>

      <div className="grid gap-4 mb-8">
        {t.moduleContent.chapter6.content.triggers.map((item, index) => {
          const icons = [Target, Brain, TrendingUp];
          const colors = ['blue', 'purple', 'green'];
          const Icon = icons[index];
          const color = colors[index];
          const bgColor = `bg-${color}-50`;
          const borderColor = `border-${color}-200`;
          const textColor = `text-${color}-700`;

          return (
            <div
              key={index}
              className={`${bgColor} border ${borderColor} p-5 rounded-xl`}
            >
              <div className="flex items-start gap-4">
                <Icon className={textColor} size={24} />
                <div>
                  <h4 className="font-bold text-slate-800 mb-2">"{item.phrase}"</h4>
                  <p className="text-sm text-slate-600 mb-2">
                    <strong>Melhor para:</strong> {item.use}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <h3 className="text-xl font-bold text-slate-800 mb-4">{t.moduleContent.chapter6.content.advancedExampleTitle}</h3>

      <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mb-8">
        <pre className="text-sm text-slate-700 whitespace-pre-wrap font-mono leading-relaxed">
          {t.moduleContent.chapter6.content.advancedExample}
        </pre>
      </div>

      <h3 className="text-xl font-bold text-slate-800 mb-4">{t.moduleContent.chapter6.content.whenToUseTitle}</h3>

      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <div className="bg-green-50 p-5 rounded-xl border border-green-200">
          <h4 className="font-bold text-green-800 mb-3">✓ Ideal para:</h4>
          <ul className="space-y-2 text-sm text-green-700">
            {t.moduleContent.chapter6.content.whenToUse.ideal.map((item, index) => (
              <li key={index}>• {item}</li>
            ))}
          </ul>
        </div>

        <div className="bg-amber-50 p-5 rounded-xl border border-amber-200">
          <h4 className="font-bold text-amber-800 mb-3">⚠ Desnecessário para:</h4>
          <ul className="space-y-2 text-sm text-amber-700">
            {t.moduleContent.chapter6.content.whenToUse.unnecessary.map((item, index) => (
              <li key={index}>• {item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
        <h4 className="font-bold text-slate-800 mb-3">{t.moduleContent.chapter6.content.zeroShotTechniqueTitle}</h4>
        <p className="text-slate-700 mb-3">
          {t.moduleContent.chapter6.content.zeroShotTechnique.description}
        </p>
        <div className="bg-white p-4 rounded-lg border border-blue-200">
          <code className="text-blue-600 font-mono">
            "{t.moduleContent.chapter6.content.zeroShotTechnique.magicPhrase}"
          </code>
        </div>
        <p className="text-sm text-slate-600 mt-3">
          {t.moduleContent.chapter6.content.zeroShotTechnique.studyResult}
        </p>
      </div>
    </div>
  );
}
