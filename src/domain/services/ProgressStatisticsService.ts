/**
 * Domain Services: Progress Statistics
 * Serviço para calcular estatísticas de progresso
 */

import { ModuleEntity } from '../entities/Module';
import { UserProgress } from '../entities/UserProgress';

export interface ProgressStatistics {
  readonly completedCount: number;
  readonly totalModules: number;
  readonly progressPercentage: number;
  readonly totalTimeSpent: number;
  readonly currentStreak: number;
  readonly bestStreak: number;
  readonly lastActiveDate: string;
  readonly recentCompletions: readonly {
    readonly id: string;
    readonly title: string;
    readonly completedAt: string;
  }[];
}

export class ProgressStatisticsService {
  calculateStatistics(
    userProgress: UserProgress, 
    modules: readonly ModuleEntity[]
  ): ProgressStatistics {
    const recentCompletions = this.getRecentCompletions(userProgress, modules);
    
    return {
      completedCount: userProgress.getCompletedModulesCount(),
      totalModules: modules.length,
      progressPercentage: userProgress.getProgressPercentage(modules.length),
      totalTimeSpent: userProgress.totalTimeSpent,
      currentStreak: userProgress.currentStreak,
      bestStreak: userProgress.bestStreak,
      lastActiveDate: userProgress.lastActiveDate?.toLocaleDateString() || '',
      recentCompletions,
    };
  }

  private getRecentCompletions(
    userProgress: UserProgress, 
    modules: readonly ModuleEntity[]
  ) {
    return [...userProgress.completedModules]
      .sort((a, b) => b.completedAt.getTime() - a.completedAt.getTime())
      .slice(0, 5)
      .map(progress => {
        const module = modules.find(m => m.id.value === progress.moduleId.value);
        return {
          id: progress.moduleId.value,
          title: module?.title || 'Módulo Desconhecido',
          completedAt: progress.completedAt.toLocaleDateString(),
        };
      });
  }
}