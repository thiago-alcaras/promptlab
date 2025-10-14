/**
 * Infrastructure: LocalStorage Implementation
 * Implementação concreta do repositório usando localStorage
 */

import { StorageRepository, StorageError } from './StorageRepository';

export class LocalStorageRepository implements StorageRepository<string> {
  async save(key: string, data: string): Promise<void> {
    try {
      window.localStorage.setItem(key, data);
    } catch (error) {
      throw new StorageError(`Failed to save data to localStorage for key: ${key}`, error);
    }
  }

  async load(key: string): Promise<string | null> {
    try {
      return window.localStorage.getItem(key);
    } catch (error) {
      throw new StorageError(`Failed to load data from localStorage for key: ${key}`, error);
    }
  }

  async delete(key: string): Promise<void> {
    try {
      window.localStorage.removeItem(key);
    } catch (error) {
      throw new StorageError(`Failed to delete data from localStorage for key: ${key}`, error);
    }
  }

  async exists(key: string): Promise<boolean> {
    try {
      return window.localStorage.getItem(key) !== null;
    } catch (error) {
      throw new StorageError(`Failed to check existence in localStorage for key: ${key}`, error);
    }
  }
}

export class UserProgressRepository {
  private readonly storageKey = 'user-progress';

  constructor(private readonly storage: StorageRepository<string>) {}

  async saveProgress(progress: string): Promise<void> {
    await this.storage.save(this.storageKey, progress);
  }

  async loadProgress(): Promise<string | null> {
    return await this.storage.load(this.storageKey);
  }

  async deleteProgress(): Promise<void> {
    await this.storage.delete(this.storageKey);
  }

  async hasProgress(): Promise<boolean> {
    return await this.storage.exists(this.storageKey);
  }
}