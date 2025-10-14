/**
 * Simple Module Entity for Testing
 * Versão simplificada para demonstração dos testes
 */

export interface ModuleId {
  value: string;
}

export interface ModuleProgress {
  readonly moduleId: ModuleId;
  readonly completedAt: Date;
  readonly score?: number;
  readonly timeSpent?: number;
}

export interface Module {
  readonly id: ModuleId;
  readonly chapter: number;
  readonly title: string;
  readonly description: string;
  readonly difficulty: 'beginner' | 'intermediate' | 'advanced';
  readonly estimatedTime: string;
  readonly topics: readonly string[];
}