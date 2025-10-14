/**
 * Application Service: Module Progress Management
 * Casos de uso para gerenciar progresso dos módulos
 */

import { UserProgress } from '../../domain/entities/UserProgress';
import { UserProgressRepository } from '../../infrastructure/repositories/UserProgressRepository';

export interface ModuleProgressApplicationService {
  completeModule(moduleId: string, score?: number, timeSpent?: number): Promise<void>;
  removeModuleProgress(moduleId: string): Promise<void>;
  isModuleCompleted(moduleId: string): Promise<boolean>;
  getUserProgress(): Promise<UserProgress>;
  resetProgress(): Promise<void>;
}

export class ModuleProgressService implements ModuleProgressApplicationService {
  private userProgress: UserProgress | null = null;

  constructor(
    private readonly repository: UserProgressRepository
  ) {}

  async completeModule(moduleId: string, score?: number, timeSpent?: number): Promise<void> {
    const progress = await this.getUserProgress();
    const updatedProgress = progress.completeModule(
      { value: moduleId }, 
      score, 
      timeSpent
    );
    
    await this.repository.saveProgress(updatedProgress.toJSON());
    this.userProgress = updatedProgress;
  }

  async removeModuleProgress(moduleId: string): Promise<void> {
    const progress = await this.getUserProgress();
    const updatedProgress = progress.removeModuleProgress({ value: moduleId });
    
    await this.repository.saveProgress(updatedProgress.toJSON());
    this.userProgress = updatedProgress;
  }

  async isModuleCompleted(moduleId: string): Promise<boolean> {
    const progress = await this.getUserProgress();
    return progress.isModuleCompleted({ value: moduleId });
  }

  async getUserProgress(): Promise<UserProgress> {
    if (this.userProgress) {
      return this.userProgress;
    }

    try {
      const savedData = await this.repository.loadProgress();
      this.userProgress = savedData 
        ? UserProgress.fromJSON(savedData)
        : UserProgress.create();
      
      return this.userProgress;
    } catch (error) {
      console.error('Error loading user progress:', error);
      this.userProgress = UserProgress.create();
      return this.userProgress;
    }
  }

  async resetProgress(): Promise<void> {
    await this.repository.deleteProgress();
    this.userProgress = UserProgress.create();
  }
}