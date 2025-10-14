/**
 * Application constants
 */

export const APP_NAME = 'PromptLab';

export const DIFFICULTY_LEVELS = {
  BEGINNER: 'beginner',
  INTERMEDIATE: 'intermediate',
  ADVANCED: 'advanced'
} as const;

export const DIFFICULTY_LABELS = {
  [DIFFICULTY_LEVELS.BEGINNER]: 'Iniciante',
  [DIFFICULTY_LEVELS.INTERMEDIATE]: 'Intermediário', 
  [DIFFICULTY_LEVELS.ADVANCED]: 'Avançado'
} as const;

export const NAVIGATION_ITEMS = [
  { id: 'home', label: 'Início' },
  { id: 'modules', label: 'Módulos' },
  { id: 'playground', label: 'Playground' },
  { id: 'progress', label: 'Progresso' }
] as const;

export const PROMPT_TECHNIQUES = {
  ROLE_PROMPTING: 'Role Prompting',
  CHAIN_OF_THOUGHT: 'Chain-of-Thought',
  FEW_SHOT: 'Few-Shot Learning',
  OUTPUT_FORMATTING: 'Output Formatting',
  CONTEXTUALIZING: 'Contextualização',
  CONSTRAINT_SETTING: 'Constraint Setting'
} as const;