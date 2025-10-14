/**
 * Domain Entity: Module
 * Representa um módulo educacional no domínio de negócio
 */

export interface ModuleId {
  value: string;
}

export interface ModuleProgress {
  readonly moduleId: ModuleId;
  readonly completedAt: Date;
  readonly score?: number;
  readonly timeSpent?: number; // em segundos
}

export interface Module {
  readonly id: ModuleId;
  readonly chapter: number;
  readonly title: string;
  readonly description: string;
  readonly difficulty: 'beginner' | 'intermediate' | 'advanced';
  readonly estimatedTime: string;
  readonly topics: readonly string[];
  readonly content?: string;
}

export class ModuleEntity implements Module {
  constructor(
    public readonly id: ModuleId,
    public readonly chapter: number,
    public readonly title: string,
    public readonly description: string,
    public readonly difficulty: 'beginner' | 'intermediate' | 'advanced',
    public readonly estimatedTime: string,
    public readonly topics: readonly string[],
    public readonly content?: string
  ) {
    this.validate();
  }

  private validate(): void {
    if (!this.id.value || this.id.value.trim() === '') {
      throw new Error('Module ID cannot be empty');
    }
    if (this.chapter <= 0) {
      throw new Error('Module chapter must be positive');
    }
    if (!this.title || this.title.trim() === '') {
      throw new Error('Module title cannot be empty');
    }
    if (!this.description || this.description.trim() === '') {
      throw new Error('Module description cannot be empty');
    }
    if (this.topics.length === 0) {
      throw new Error('Module must have at least one topic');
    }
  }

  isCompleted(progress: readonly ModuleProgress[]): boolean {
    return progress.some(p => p.moduleId.value === this.id.value);
  }

  getProgress(progress: readonly ModuleProgress[]): ModuleProgress | undefined {
    return progress.find(p => p.moduleId.value === this.id.value);
  }
}