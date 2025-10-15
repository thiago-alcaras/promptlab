import { AlertCircle, Check, X } from 'lucide-react';
import { useLanguage } from '../../../shared/i18n/LanguageContext';

export default function Chapter1() {
  const { t } = useLanguage();
  
  return (
    <div className="prose max-w-none">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">{t.moduleContent.chapter1.title}</h2>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
        <div className="flex items-start gap-3">
          <AlertCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
          <div>
            <h3 className="font-bold text-blue-900 mb-2">{t.moduleContent.chapter1.content.whatIsPrompt}</h3>
            <p className="text-blue-800">
              {t.moduleContent.chapter1.content.whatIsPromptDesc}
            </p>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-bold text-slate-800 mb-4">{t.moduleContent.chapter1.content.essentialComponents}</h3>
      <p className="text-slate-700 mb-6">
        Todo prompt efetivo contém alguns ou todos destes elementos:
      </p>

      <div className="grid gap-4 mb-8">
        {[
          {
            title: t.moduleContent.chapter1.content.task,
            description: t.moduleContent.chapter1.content.taskDesc,
            example: t.moduleContent.chapter1.content.taskExample
          },
          {
            title: t.moduleContent.chapter1.content.context,
            description: t.moduleContent.chapter1.content.contextDesc,
            example: t.moduleContent.chapter1.content.contextExample
          },
          {
            title: t.moduleContent.chapter1.content.format,
            description: t.moduleContent.chapter1.content.formatDesc,
            example: t.moduleContent.chapter1.content.formatExample
          },
          {
            title: t.moduleContent.chapter1.content.tone,
            description: t.moduleContent.chapter1.content.toneDesc,
            example: t.moduleContent.chapter1.content.toneExample
          }
        ].map((component, index) => (
          <div key={index} className="bg-slate-50 p-5 rounded-xl border border-slate-200">
            <h4 className="font-bold text-slate-800 mb-2">{component.title}</h4>
            <p className="text-slate-600 text-sm mb-2">{component.description}</p>
            <code className="text-xs bg-white px-3 py-1 rounded border border-slate-200 text-blue-600">
              {component.example}
            </code>
          </div>
        ))}
      </div>

      <h3 className="text-xl font-bold text-slate-800 mb-4">{t.moduleContent.chapter1.content.practicalExample}</h3>

      <div className="space-y-6 mb-8">
        <div className="border-2 border-red-200 bg-red-50 rounded-xl p-6">
          <div className="flex items-center gap-2 mb-3">
            <X className="text-red-600" size={20} />
            <span className="font-bold text-red-800">{t.moduleContent.chapter1.content.weakPrompt}</span>
          </div>
          <div className="bg-white p-4 rounded-lg border border-red-200">
            <p className="text-slate-700 italic">
              {t.moduleContent.chapter1.content.weakPromptText}
            </p>
          </div>
          <p className="text-sm text-red-700 mt-3">
            {t.moduleContent.chapter1.content.weakPromptIssue}
          </p>
        </div>

        <div className="border-2 border-green-200 bg-green-50 rounded-xl p-6">
          <div className="flex items-center gap-2 mb-3">
            <Check className="text-green-600" size={20} />
            <span className="font-bold text-green-800">{t.moduleContent.chapter1.content.strongPrompt}</span>
          </div>
          <div className="bg-white p-4 rounded-lg border border-green-200">
            <p className="text-slate-700">
              {t.moduleContent.chapter1.content.strongPromptText}
            </p>
          </div>
          <p className="text-sm text-green-700 mt-3">
            {t.moduleContent.chapter1.content.strongPromptBenefit}
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
        <h4 className="font-bold text-slate-800 mb-3">💡 {t.moduleContent.chapter1.content.importantTip}</h4>
        <p className="text-slate-700">
          {t.moduleContent.chapter1.content.tipDescription}
        </p>
      </div>
    </div>
  );
}
