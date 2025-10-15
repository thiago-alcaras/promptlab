import { FileText, Code, Tag } from 'lucide-react';
import { useLanguage } from '../../../shared/i18n/LanguageContext';

export default function Chapter4() {
  const { t } = useLanguage();
  return (
    <div className="prose max-w-none">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">{t.moduleContent.chapter4.content.mainTitle}</h2>

      <p className="text-slate-700 mb-8 text-lg">
        {t.moduleContent.chapter4.content.introduction}
      </p>

      <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg mb-8">
        <h3 className="font-bold text-amber-900 mb-2">{t.moduleContent.chapter4.content.whyItMattersTitle}</h3>
        <p className="text-amber-800">
          {t.moduleContent.chapter4.content.whyItMattersDesc}
        </p>
      </div>

      <h3 className="text-xl font-bold text-slate-800 mb-4">{t.moduleContent.chapter4.content.delimitationTechniquesTitle}</h3>

      <div className="space-y-6 mb-8">
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
          <div className="bg-slate-50 px-6 py-3 border-b border-slate-200 flex items-center gap-2">
            <Code size={20} className="text-blue-600" />
            <h4 className="font-bold text-slate-800">{t.moduleContent.chapter4.content.techniques.tripleDelimiters.title}</h4>
          </div>
          <div className="p-6">
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 mb-3">
              <pre className="text-sm text-slate-700 whitespace-pre-wrap font-mono">
                {t.moduleContent.chapter4.content.techniques.tripleDelimiters.example}
              </pre>
            </div>
            <p className="text-sm text-slate-600">
              {t.moduleContent.chapter4.content.techniques.tripleDelimiters.description}
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
          <div className="bg-slate-50 px-6 py-3 border-b border-slate-200 flex items-center gap-2">
            <Tag size={20} className="text-green-600" />
            <h4 className="font-bold text-slate-800">{t.moduleContent.chapter4.content.techniques.xmlTags.title}</h4>
          </div>
          <div className="p-6">
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 mb-3">
              <pre className="text-sm text-slate-700 whitespace-pre-wrap font-mono">
                {t.moduleContent.chapter4.content.techniques.xmlTags.example}
              </pre>
            </div>
            <p className="text-sm text-slate-600">
              {t.moduleContent.chapter4.content.techniques.xmlTags.description}
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
          <div className="bg-slate-50 px-6 py-3 border-b border-slate-200 flex items-center gap-2">
            <FileText size={20} className="text-purple-600" />
            <h4 className="font-bold text-slate-800">{t.moduleContent.chapter4.content.techniques.sectionMarkers.title}</h4>
          </div>
          <div className="p-6">
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 mb-3">
              <pre className="text-sm text-slate-700 whitespace-pre-wrap font-mono">
                {t.moduleContent.chapter4.content.techniques.sectionMarkers.example}
              </pre>
            </div>
            <p className="text-sm text-slate-600">
              {t.moduleContent.chapter4.content.techniques.sectionMarkers.description}
            </p>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-bold text-slate-800 mb-4">{t.moduleContent.chapter4.content.practicalExampleTitle}</h3>

      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200 mb-8">
        <div className="bg-white p-5 rounded-lg border border-slate-200">
          <pre className="text-sm text-slate-700 whitespace-pre-wrap font-mono leading-relaxed">
            {t.moduleContent.chapter4.content.practicalExample}
          </pre>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-xl border border-green-200">
        <h4 className="font-bold text-green-900 mb-3">{t.moduleContent.chapter4.content.checklistTitle}</h4>
        <ul className="space-y-2 text-green-800">
          {t.moduleContent.chapter4.content.checklist.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-green-600 font-bold">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
