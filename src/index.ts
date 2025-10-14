/**
 * 🎯 Central Exports - PromptLab
 * 
 * Este arquivo centraliza todas as exportações principais da aplicação,
 * facilitando as importações e mantendo a organização da arquitetura.
 */

// ===== FEATURES =====
// Home Feature
export { default as Hero } from './features/home';

// Modules Feature  
export { 
  ModuleCard, 
  ModuleGrid, 
  ModuleViewer,
  allModules,
  modules,
  additionalModules
} from './features/modules';

// Playground Feature
export { default as Playground } from './features/playground';

// Progress Feature
export { default as Progress } from './features/progress';

// ===== LAYOUT COMPONENTS =====
export { default as Navigation } from './components/layout';

// ===== SHARED UTILITIES =====
export {
  calculatePromptScore,
  detectPromptTechniques,
  formatModuleDifficulty
} from './shared/utils/prompts';

// ===== SHARED HOOKS =====
export { 
  useModuleProgress 
} from './shared/hooks/useModuleProgress';

// ===== SHARED TYPES =====
export type { Module, DifficultyLevel } from './shared/types/modules';

// ===== SHARED CONSTANTS =====
export {
  APP_NAME,
  DIFFICULTY_LEVELS,
  DIFFICULTY_LABELS,
  NAVIGATION_ITEMS,
  PROMPT_TECHNIQUES
} from './shared/constants';