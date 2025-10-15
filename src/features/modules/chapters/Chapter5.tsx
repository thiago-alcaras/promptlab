import { FileJson, FileCode, FileText } from 'lucide-react';
import { useLanguage } from '../../../shared/i18n/LanguageContext';

export default function Chapter5() {
  const { t } = useLanguage();
  return (
    <div className="prose max-w-none">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">{t.moduleContent.chapter5.content.mainTitle}</h2>

      <p className="text-slate-700 mb-8 text-lg">
        {t.moduleContent.chapter5.content.introduction}
      </p>

      <h3 className="text-xl font-bold text-slate-800 mb-4">{t.moduleContent.chapter5.content.popularFormatsTitle}</h3>

      <div className="space-y-6 mb-8">
        <div className="bg-white rounded-xl border-2 border-blue-200 overflow-hidden">
          <div className="bg-blue-50 px-6 py-3 border-b border-blue-200 flex items-center gap-3">
            <FileJson size={24} className="text-blue-600" />
            <div>
              <h4 className="font-bold text-slate-800">{t.moduleContent.chapter5.content.formats.json.title}</h4>
              <p className="text-sm text-slate-600">{t.moduleContent.chapter5.content.formats.json.description}</p>
            </div>
          </div>
          <div className="p-6">
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 mb-3">
              <p className="text-sm text-slate-700 mb-3 font-medium">Prompt:</p>
              <pre className="text-sm text-slate-700 whitespace-pre-wrap font-mono mb-4">
                {t.moduleContent.chapter5.content.formats.json.prompt}
              </pre>
              <p className="text-sm text-slate-700 mb-2 font-medium">Resposta esperada:</p>
              <pre className="text-xs text-slate-700 whitespace-pre-wrap font-mono bg-white p-3 rounded border border-slate-200">
                {t.moduleContent.chapter5.content.formats.json.expectedResponse}
              </pre>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border-2 border-green-200 overflow-hidden">
          <div className="bg-green-50 px-6 py-3 border-b border-green-200 flex items-center gap-3">
            <FileText size={24} className="text-green-600" />
            <div>
              <h4 className="font-bold text-slate-800">{t.moduleContent.chapter5.content.formats.markdown.title}</h4>
              <p className="text-sm text-slate-600">{t.moduleContent.chapter5.content.formats.markdown.description}</p>
            </div>
          </div>
          <div className="p-6">
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
              <p className="text-sm text-slate-700 mb-3 font-medium">Prompt:</p>
              <pre className="text-sm text-slate-700 whitespace-pre-wrap font-mono">
                {t.moduleContent.chapter5.content.formats.markdown.prompt}
              </pre>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border-2 border-purple-200 overflow-hidden">
          <div className="bg-purple-50 px-6 py-3 border-b border-purple-200 flex items-center gap-3">
            <FileCode size={24} className="text-purple-600" />
            <div>
              <h4 className="font-bold text-slate-800">{t.moduleContent.chapter5.content.formats.xml.title}</h4>
              <p className="text-sm text-slate-600">{t.moduleContent.chapter5.content.formats.xml.description}</p>
            </div>
          </div>
          <div className="p-6">
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
              <p className="text-sm text-slate-700 mb-3 font-medium">Prompt:</p>
              <pre className="text-sm text-slate-700 whitespace-pre-wrap font-mono">
                {t.moduleContent.chapter5.content.formats.xml.prompt}
              </pre>
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-bold text-slate-800 mb-4">{t.moduleContent.chapter5.content.outputTemplatesTitle}</h3>

      <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mb-8">
        <p className="text-slate-700 mb-4">
          {t.moduleContent.chapter5.content.templateExample.description}
        </p>
        <div className="bg-white p-4 rounded-lg border border-slate-200">
          <pre className="text-sm text-slate-700 whitespace-pre-wrap font-mono">
            {t.moduleContent.chapter5.content.templateExample.example}
          </pre>
        </div>
      </div>

      <h3 className="text-xl font-bold text-slate-800 mb-4">{t.moduleContent.chapter5.content.effectiveFormattingTitle}</h3>

      <div className="grid md:grid-cols-2 gap-4 mb-8">
        {t.moduleContent.chapter5.content.tips.map((tip, index) => (
          <div key={index} className="bg-white p-5 rounded-xl border border-slate-200">
            <h4 className="font-bold text-slate-800 mb-2">{tip.title}</h4>
            <p className="text-sm text-slate-600">{tip.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl border border-indigo-200">
        <h4 className="font-bold text-slate-800 mb-3">{t.moduleContent.chapter5.content.advancedTechniqueTitle}</h4>
        <p className="text-slate-700 mb-3">
          {t.moduleContent.chapter5.content.advancedTechnique.description}
        </p>
        <div className="bg-white p-4 rounded-lg border border-indigo-200">
          <pre className="text-xs text-slate-700 whitespace-pre-wrap font-mono">
            {t.moduleContent.chapter5.content.advancedTechnique.example}
          </pre>
        </div>
      </div>
    </div>
  );
}
