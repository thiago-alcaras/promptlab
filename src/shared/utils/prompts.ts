/**
 * Utility functions for prompt analysis and scoring
 */

export const calculatePromptScore = (_prompt: string) => {
  // Implementation would go here
  return Math.floor(Math.random() * 100);
};

export const detectPromptTechniques = (prompt: string) => {
  const text = prompt.toLowerCase();
  const techniques = [];
  
  if (/você é|como um|atue como/.test(text)) {
    techniques.push('Role Prompting');
  }
  
  if (/pense|raciocine|passo a passo/.test(text)) {
    techniques.push('Chain-of-Thought');
  }
  
  if (/exemplo|por exemplo/.test(text)) {
    techniques.push('Few-Shot Learning');
  }
  
  if (/formato|json|lista/.test(text)) {
    techniques.push('Output Formatting');
  }
  
  return techniques;
};

export const formatModuleDifficulty = (difficulty: string) => {
  const difficultyMap = {
    beginner: 'Iniciante',
    intermediate: 'Intermediário',
    advanced: 'Avançado'
  };
  return difficultyMap[difficulty as keyof typeof difficultyMap] || difficulty;
};