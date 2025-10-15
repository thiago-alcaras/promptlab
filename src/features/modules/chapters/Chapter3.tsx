import { Users, Briefcase, GraduationCap, Heart } from 'lucide-react';
import { useLanguage } from '../../../shared/i18n/LanguageContext';

export default function Chapter3() {
  const { t } = useLanguage();
  
  const roles = [
    {
      icon: Briefcase,
      role: t.moduleContent.chapter3.content.roles.businessConsultant.title,
      prompt: t.moduleContent.chapter3.content.roles.businessConsultant.prompt,
      color: 'blue'
    },
    {
      icon: GraduationCap,
      role: t.moduleContent.chapter3.content.roles.scienceTeacher.title,
      prompt: t.moduleContent.chapter3.content.roles.scienceTeacher.prompt,
      color: 'green'
    },
    {
      icon: Heart,
      role: t.moduleContent.chapter3.content.roles.wellnessCoach.title,
      prompt: t.moduleContent.chapter3.content.roles.wellnessCoach.prompt,
      color: 'pink'
    },
    {
      icon: Users,
      role: t.moduleContent.chapter3.content.roles.uxSpecialist.title,
      prompt: t.moduleContent.chapter3.content.roles.uxSpecialist.prompt,
      color: 'purple'
    }
  ];

  const colorClasses = {
    blue: 'bg-blue-50 border-blue-200 text-blue-700',
    green: 'bg-green-50 border-green-200 text-green-700',
    pink: 'bg-pink-50 border-pink-200 text-pink-700',
    purple: 'bg-purple-50 border-purple-200 text-purple-700'
  };

  return (
    <div className="prose max-w-none">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">{t.moduleContent.chapter3.content.mainTitle}</h2>

      <p className="text-slate-700 mb-8 text-lg">
        {t.moduleContent.chapter3.content.introduction}
      </p>

      <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-lg mb-8">
        <h3 className="font-bold text-indigo-900 mb-2">{t.moduleContent.chapter3.content.whyItWorksTitle}</h3>
        <p className="text-indigo-800">
          {t.moduleContent.chapter3.content.whyItWorksDesc}
        </p>
      </div>

      <h3 className="text-xl font-bold text-slate-800 mb-4">{t.moduleContent.chapter3.content.examplesTitle}</h3>

      <div className="grid gap-4 mb-8">
        {roles.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className={`p-5 rounded-xl border-2 ${colorClasses[item.color as keyof typeof colorClasses]}`}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Icon size={24} />
                </div>
                <div className="flex-grow">
                  <h4 className="font-bold text-slate-800 mb-2">{item.role}</h4>
                  <code className="text-sm bg-white px-3 py-2 rounded border border-slate-200 text-slate-700 block">
                    {item.prompt}
                  </code>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <h3 className="text-xl font-bold text-slate-800 mb-4">{t.moduleContent.chapter3.content.recommendedStructureTitle}</h3>

      <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mb-8">
        <pre className="text-sm text-slate-700 whitespace-pre-wrap font-mono leading-relaxed">
          {t.moduleContent.chapter3.content.structureTemplate}
        </pre>
      </div>

      <h3 className="text-xl font-bold text-slate-800 mb-4">{t.moduleContent.chapter3.content.practicalComparisonTitle}</h3>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-red-50 border-2 border-red-200 p-5 rounded-xl">
          <h4 className="font-bold text-red-800 mb-3">{t.moduleContent.chapter3.content.withoutRoleTitle}</h4>
          <div className="bg-white p-4 rounded-lg border border-red-200 mb-3">
            <p className="text-sm text-slate-700 italic">
              "{t.moduleContent.chapter3.content.comparisonExamples.withoutRole}"
            </p>
          </div>
          <p className="text-sm text-red-700">
            {t.moduleContent.chapter3.content.withoutRoleResult}
          </p>
        </div>

        <div className="bg-green-50 border-2 border-green-200 p-5 rounded-xl">
          <h4 className="font-bold text-green-800 mb-3">{t.moduleContent.chapter3.content.withRoleTitle}</h4>
          <div className="bg-white p-4 rounded-lg border border-green-200 mb-3">
            <p className="text-sm text-slate-700">
              "{t.moduleContent.chapter3.content.comparisonExamples.withRole}"
            </p>
          </div>
          <p className="text-sm text-green-700">
            {t.moduleContent.chapter3.content.withRoleResult}
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200">
        <h4 className="font-bold text-slate-800 mb-3">{t.moduleContent.chapter3.content.advancedTipTitle}</h4>
        <p className="text-slate-700 mb-3">
          {t.moduleContent.chapter3.content.advancedTipDesc}
        </p>
        <code className="text-sm bg-white px-3 py-2 rounded border border-blue-200 text-slate-700 block">
          "{t.moduleContent.chapter3.content.advancedTipExample}"
        </code>
      </div>
    </div>
  );
}
