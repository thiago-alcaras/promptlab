import { Check, X, Lightbulb } from 'lucide-react';
import { useLanguage } from '../../../shared/i18n/LanguageContext';

export default function Chapter2() {
  const { t } = useLanguage();
  return (
    <div className="prose max-w-none">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">{t.moduleContent.chapter2.content.mainTitle}</h2>

      <p className="text-slate-700 mb-8 text-lg">
        {t.moduleContent.chapter2.content.introduction}
      </p>

      <h3 className="text-xl font-bold text-slate-800 mb-4">{t.moduleContent.chapter2.content.clarityPrinciples}</h3>

      <div className="space-y-6 mb-8">
        {[
          {
            principle: t.moduleContent.chapter2.content.principles.directLanguage.title,
            bad: t.moduleContent.chapter2.content.principles.directLanguage.bad,
            good: t.moduleContent.chapter2.content.principles.directLanguage.good
          },
          {
            principle: t.moduleContent.chapter2.content.principles.avoidMultipleQuestions.title,
            bad: t.moduleContent.chapter2.content.principles.avoidMultipleQuestions.bad,
            good: t.moduleContent.chapter2.content.principles.avoidMultipleQuestions.good
          },
          {
            principle: t.moduleContent.chapter2.content.principles.beSpecificAboutScope.title,
            bad: t.moduleContent.chapter2.content.principles.beSpecificAboutScope.bad,
            good: t.moduleContent.chapter2.content.principles.beSpecificAboutScope.good
          }
        ].map((item, index) => (
          <div key={index} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
            <div className="bg-slate-50 px-6 py-3 border-b border-slate-200">
              <h4 className="font-bold text-slate-800">{item.principle}</h4>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex gap-3">
                <X className="text-red-500 flex-shrink-0 mt-1" size={18} />
                <div className="flex-grow">
                  <p className="text-sm font-medium text-red-700 mb-1">{t.moduleContent.chapter2.content.avoid}</p>
                  <p className="text-slate-600 italic text-sm">{item.bad}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Check className="text-green-500 flex-shrink-0 mt-1" size={18} />
                <div className="flex-grow">
                  <p className="text-sm font-medium text-green-700 mb-1">{t.moduleContent.chapter2.content.prefer}</p>
                  <p className="text-slate-700 font-medium text-sm">{item.good}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h3 className="text-xl font-bold text-slate-800 mb-4">{t.moduleContent.chapter2.content.decompositionTitle}</h3>
      <p className="text-slate-700 mb-6">
        {t.moduleContent.chapter2.content.decompositionDesc}
      </p>

      <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mb-8">
        <div className="space-y-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-blue-600 text-white text-sm font-bold px-2 py-1 rounded">1</span>
              <span className="font-medium text-slate-800">{t.moduleContent.chapter2.content.decompositionSteps.step1}</span>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-blue-600 text-white text-sm font-bold px-2 py-1 rounded">2</span>
              <span className="font-medium text-slate-800">{t.moduleContent.chapter2.content.decompositionSteps.step2}</span>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-blue-600 text-white text-sm font-bold px-2 py-1 rounded">3</span>
              <span className="font-medium text-slate-800">{t.moduleContent.chapter2.content.decompositionSteps.step3}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-200">
        <div className="flex gap-3">
          <Lightbulb className="text-amber-600 flex-shrink-0" size={24} />
          <div>
            <h4 className="font-bold text-slate-800 mb-2">{t.moduleContent.chapter2.content.goldenRuleTitle}</h4>
            <p className="text-slate-700">
              {t.moduleContent.chapter2.content.goldenRuleDesc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
