export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced';

export interface Module {
  id: string;
  chapter: number;
  title: string;
  description: string;
  difficulty: DifficultyLevel;
  estimatedTime: string;
  topics: string[];
}

export interface ModuleContent {
  id: string;
  title: string;
  content: string;
  examples?: Example[];
  interactive?: InteractiveComponent;
  quiz?: Quiz;
}

export interface Example {
  title: string;
  before?: string;
  after?: string;
  explanation: string;
  code?: string;
}

export interface InteractiveComponent {
  type: 'prompt-builder' | 'comparison' | 'simulator' | 'quiz';
  data: any;
}

export interface Quiz {
  questions: Question[];
}

export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}
