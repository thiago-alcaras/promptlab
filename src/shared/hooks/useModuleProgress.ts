/**
 * Presentation Hook: Module Progress
 * Hook refatorado usando Clean Architecture com Dependency Injection
 */

import { useState, useEffect, useCallback } from 'react';
import { ModuleProgressService } from '../../application/services/ModuleProgressService';
import { UserProgressRepository, LocalStorageRepository } from '../../infrastructure/repositories/UserProgressRepository';
import { ProgressStatisticsService } from '../../domain/services/ProgressStatisticsService';
import { UserProgress } from '../../domain/entities/UserProgress';
import { ModuleEntity } from '../../domain/entities/Module';

// Dependency Injection Container (singleton pattern)
class ServiceContainer {
  private static instance: ServiceContainer;
  private _moduleProgressService: ModuleProgressService | null = null;
  private _statisticsService: ProgressStatisticsService | null = null;

  static getInstance(): ServiceContainer {
    if (!ServiceContainer.instance) {
      ServiceContainer.instance = new ServiceContainer();
    }
    return ServiceContainer.instance;
  }

  get moduleProgressService(): ModuleProgressService {
    if (!this._moduleProgressService) {
      const repository = new UserProgressRepository(new LocalStorageRepository());
      this._moduleProgressService = new ModuleProgressService(repository);
    }
    return this._moduleProgressService;
  }

  get statisticsService(): ProgressStatisticsService {
    if (!this._statisticsService) {
      this._statisticsService = new ProgressStatisticsService();
    }
    return this._statisticsService;
  }
}

interface UseModuleProgressReturn {
  isLoading: boolean;
  error: string | null;
  markModuleComplete: (moduleId: string, score?: number, timeSpent?: number) => Promise<void>;
  removeModuleComplete: (moduleId: string) => Promise<void>;
  isModuleCompleted: (moduleId: string) => boolean;
  getProgressStats: () => ReturnType<ProgressStatisticsService['calculateStatistics']> | null;
  resetProgress: () => Promise<void>;
  userProgress: UserProgress | null;
}

export const useModuleProgress = (modules: readonly ModuleEntity[] = []): UseModuleProgressReturn => {
  const [userProgress, setUserProgress] = useState<UserProgress | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const services = ServiceContainer.getInstance();

  // Load initial progress
  useEffect(() => {
    const loadProgress = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const progress = await services.moduleProgressService.getUserProgress();
        setUserProgress(progress);
      } catch (err) {
        setError(`Failed to load progress: ${err}`);
        setUserProgress(UserProgress.create());
      } finally {
        setIsLoading(false);
      }
    };

    loadProgress();
  }, []);

  const markModuleComplete = useCallback(async (
    moduleId: string, 
    score?: number, 
    timeSpent?: number
  ) => {
    try {
      setError(null);
      await services.moduleProgressService.completeModule(moduleId, score, timeSpent);
      const updatedProgress = await services.moduleProgressService.getUserProgress();
      setUserProgress(updatedProgress);
    } catch (err) {
      setError(`Failed to complete module: ${err}`);
    }
  }, []);

  const removeModuleComplete = useCallback(async (moduleId: string) => {
    try {
      setError(null);
      await services.moduleProgressService.removeModuleProgress(moduleId);
      const updatedProgress = await services.moduleProgressService.getUserProgress();
      setUserProgress(updatedProgress);
    } catch (err) {
      setError(`Failed to remove module progress: ${err}`);
    }
  }, []);

  const isModuleCompleted = useCallback((moduleId: string): boolean => {
    if (!userProgress) return false;
    return userProgress.isModuleCompleted({ value: moduleId });
  }, [userProgress]);

  const getProgressStats = useCallback(() => {
    if (!userProgress) return null;
    return services.statisticsService.calculateStatistics(userProgress, modules);
  }, [userProgress, modules]);

  const resetProgress = useCallback(async () => {
    try {
      setError(null);
      await services.moduleProgressService.resetProgress();
      const resetUserProgress = UserProgress.create();
      setUserProgress(resetUserProgress);
    } catch (err) {
      setError(`Failed to reset progress: ${err}`);
    }
  }, []);

  return {
    isLoading,
    error,
    markModuleComplete,
    removeModuleComplete,
    isModuleCompleted,
    getProgressStats,
    resetProgress,
    userProgress,
  };
};