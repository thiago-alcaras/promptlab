import { Module } from '../../../shared/types/modules';
import { Translation } from '../../../shared/i18n/types';

// Função para obter dados traduzidos dos módulos
export const getTranslatedModules = (t: Translation): Module[] => [
  {
    id: 'chapter-1',
    chapter: 1,
    title: t.moduleData.chapter1.title,
    description: t.moduleData.chapter1.description,
    difficulty: 'beginner',
    estimatedTime: '15 min',
    topics: t.moduleData.chapter1.topics
  },
  {
    id: 'chapter-2',
    chapter: 2,
    title: t.moduleData.chapter2.title,
    description: t.moduleData.chapter2.description,
    difficulty: 'beginner',
    estimatedTime: '12 min',
    topics: t.moduleData.chapter2.topics
  },
  {
    id: 'chapter-3',
    chapter: 3,
    title: t.moduleData.chapter3.title,
    description: t.moduleData.chapter3.description,
    difficulty: 'beginner',
    estimatedTime: '18 min',
    topics: t.moduleData.chapter3.topics
  },
  {
    id: 'chapter-4',
    chapter: 4,
    title: t.moduleData.chapter4.title,
    description: t.moduleData.chapter4.description,
    difficulty: 'intermediate',
    estimatedTime: '20 min',
    topics: t.moduleData.chapter4.topics
  },
  {
    id: 'chapter-5',
    chapter: 5,
    title: t.moduleData.chapter5.title,
    description: t.moduleData.chapter5.description,
    difficulty: 'intermediate',
    estimatedTime: '22 min',
    topics: t.moduleData.chapter5.topics
  },
  {
    id: 'chapter-6',
    chapter: 6,
    title: t.moduleData.chapter6.title,
    description: t.moduleData.chapter6.description,
    difficulty: 'intermediate',
    estimatedTime: '25 min',
    topics: t.moduleData.chapter6.topics
  },
  {
    id: 'chapter-7',
    chapter: 7,
    title: t.moduleData.chapter7.title,
    description: t.moduleData.chapter7.description,
    difficulty: 'intermediate',
    estimatedTime: '20 min',
    topics: t.moduleData.chapter7.topics
  },
  {
    id: 'chapter-8',
    chapter: 8,
    title: t.moduleData.chapter8.title,
    description: t.moduleData.chapter8.description,
    difficulty: 'advanced',
    estimatedTime: '30 min',
    topics: t.moduleData.chapter8.topics
  },
  {
    id: 'chapter-9',
    chapter: 9,
    title: t.moduleData.chapter9.title,
    description: t.moduleData.chapter9.description,
    difficulty: 'advanced',
    estimatedTime: '45 min',
    topics: t.moduleData.chapter9.topics
  },
  {
    id: 'langsmith-intro',
    chapter: 10,
    title: t.moduleData.chapter10.title,
    description: t.moduleData.chapter10.description,
    difficulty: 'advanced',
    estimatedTime: '25 min',
    topics: t.moduleData.chapter10.topics
  }
];

export const getTranslatedAdditionalModules = (t: Translation): Module[] => [
  {
    id: 'metrics',
    chapter: 11,
    title: t.moduleData.chapter11.title,
    description: t.moduleData.chapter11.description,
    difficulty: 'advanced',
    estimatedTime: '35 min',
    topics: t.moduleData.chapter11.topics
  },
  {
    id: 'embeddings',
    chapter: 12,
    title: t.moduleData.chapter12.title,
    description: t.moduleData.chapter12.description,
    difficulty: 'advanced',
    estimatedTime: '30 min',
    topics: t.moduleData.chapter12.topics
  },
  {
    id: 'lang-tools',
    chapter: 13,
    title: t.moduleData.chapter13.title,
    description: t.moduleData.chapter13.description,
    difficulty: 'advanced',
    estimatedTime: '40 min',
    topics: t.moduleData.chapter13.topics
  }
];

export const getAllTranslatedModules = (t: Translation): Module[] => [
  ...getTranslatedModules(t),
  ...getTranslatedAdditionalModules(t)
];

// Versões estáticas para compatibilidade (deprecated)
export const modules: Module[] = [];
export const additionalModules: Module[] = [];
export const allModules: Module[] = [];
