/**
 * Domain Entity: User Progress
 * Agregado raiz para gerenciar progresso do usuário
 */

import { ModuleProgress, ModuleId } from './Module';

export interface UserProgressData {
  readonly completedModules: readonly ModuleProgress[];
  readonly totalTimeSpent: number;
  readonly lastActiveDate: Date | null;
  readonly currentStreak: number;
  readonly bestStreak: number;
}

export class UserProgress {
  private constructor(
    private readonly data: UserProgressData
  ) {}

  static create(data?: Partial<UserProgressData>): UserProgress {
    return new UserProgress({
      completedModules: data?.completedModules ?? [],
      totalTimeSpent: data?.totalTimeSpent ?? 0,
      lastActiveDate: data?.lastActiveDate ?? null,
      currentStreak: data?.currentStreak ?? 0,
      bestStreak: data?.bestStreak ?? 0,
    });
  }

  static fromJSON(json: string): UserProgress {
    try {
      const data = JSON.parse(json);
      return new UserProgress({
        completedModules: (data.completedModules || []).map((item: any) => ({
          moduleId: { value: item.moduleId },
          completedAt: new Date(item.completedAt),
          score: item.score,
          timeSpent: item.timeSpent,
        })),
        totalTimeSpent: data.totalTimeSpent || 0,
        lastActiveDate: data.lastActiveDate ? new Date(data.lastActiveDate) : null,
        currentStreak: data.currentStreak || 0,
        bestStreak: data.bestStreak || 0,
      });
    } catch (error) {
      throw new Error(`Invalid JSON for UserProgress: ${error}`);
    }
  }

  completeModule(moduleId: ModuleId, score?: number, timeSpent?: number): UserProgress {
    // Verificar se módulo já foi completado
    if (this.isModuleCompleted(moduleId)) {
      return this;
    }

    const now = new Date();
    const newProgress: ModuleProgress = {
      moduleId,
      completedAt: now,
      score,
      timeSpent: timeSpent || 0,
    };

    const newStreak = this.calculateNewStreak(now);
    
    return new UserProgress({
      completedModules: [...this.data.completedModules, newProgress],
      totalTimeSpent: this.data.totalTimeSpent + (timeSpent || 0),
      lastActiveDate: now,
      currentStreak: newStreak,
      bestStreak: Math.max(this.data.bestStreak, newStreak),
    });
  }

  removeModuleProgress(moduleId: ModuleId): UserProgress {
    const moduleProgress = this.getModuleProgress(moduleId);
    if (!moduleProgress) {
      return this;
    }

    return new UserProgress({
      ...this.data,
      completedModules: this.data.completedModules.filter(
        p => p.moduleId.value !== moduleId.value
      ),
      totalTimeSpent: Math.max(0, this.data.totalTimeSpent - (moduleProgress.timeSpent || 0)),
    });
  }

  isModuleCompleted(moduleId: ModuleId): boolean {
    return this.data.completedModules.some(p => p.moduleId.value === moduleId.value);
  }

  getModuleProgress(moduleId: ModuleId): ModuleProgress | undefined {
    return this.data.completedModules.find(p => p.moduleId.value === moduleId.value);
  }

  getCompletedModulesCount(): number {
    return this.data.completedModules.length;
  }

  getProgressPercentage(totalModules: number): number {
    if (totalModules <= 0) return 0;
    return Math.round((this.getCompletedModulesCount() / totalModules) * 100);
  }

  private calculateNewStreak(currentDate: Date): number {
    if (!this.data.lastActiveDate) {
      return 1;
    }

    const today = currentDate.toDateString();
    const lastActive = this.data.lastActiveDate.toDateString();
    const yesterday = new Date(currentDate.getTime() - 86400000).toDateString();

    if (lastActive === today) {
      return this.data.currentStreak;
    }
    
    if (lastActive === yesterday) {
      return this.data.currentStreak + 1;
    }

    return 1;
  }

  toJSON(): string {
    return JSON.stringify({
      completedModules: this.data.completedModules.map(p => ({
        moduleId: p.moduleId.value,
        completedAt: p.completedAt.toISOString(),
        score: p.score,
        timeSpent: p.timeSpent,
      })),
      totalTimeSpent: this.data.totalTimeSpent,
      lastActiveDate: this.data.lastActiveDate?.toISOString() || null,
      currentStreak: this.data.currentStreak,
      bestStreak: this.data.bestStreak,
    });
  }

  get completedModules(): readonly ModuleProgress[] {
    return this.data.completedModules;
  }

  get totalTimeSpent(): number {
    return this.data.totalTimeSpent;
  }

  get lastActiveDate(): Date | null {
    return this.data.lastActiveDate;
  }

  get currentStreak(): number {
    return this.data.currentStreak;
  }

  get bestStreak(): number {
    return this.data.bestStreak;
  }
}