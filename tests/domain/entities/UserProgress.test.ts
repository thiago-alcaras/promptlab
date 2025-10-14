/**
 * Tests: User Progress Entity
 * Testes unitários simplificados para entidade UserProgress
 */

import assert from 'assert';
import { UserProgress } from '../../../src/types/UserProgress';
import { ModuleId } from '../../../src/types/Module';

// Helper function to create ModuleId
function createModuleId(value: string): ModuleId {
  return { value };
}

// Simple test functions for UserProgress
console.log('🧪 Running UserProgress Tests...\n');

function testCreateEmptyProgress() {
  console.log('✅ Testing: create empty progress by default');
  const progress = UserProgress.create();
  
  assert.strictEqual(progress.completedModules.length, 0, 'Should have no completed modules');
  assert.strictEqual(progress.totalTimeSpent, 0, 'Should have zero time spent');
  assert.strictEqual(progress.currentStreak, 0, 'Should have zero current streak');
  assert.strictEqual(progress.bestStreak, 0, 'Should have zero best streak');
  assert.strictEqual(progress.lastActiveDate, null, 'Should have null last active date');
  
  console.log('   ✓ Empty progress created correctly\n');
}

function testCreateProgressWithInitialData() {
  console.log('✅ Testing: create progress with initial data');
  const initialData = {
    totalTimeSpent: 1800,
    currentStreak: 3,
    bestStreak: 5,
  };

  const progress = UserProgress.create(initialData);
  
  assert.strictEqual(progress.totalTimeSpent, 1800, 'Should set initial total time');
  assert.strictEqual(progress.currentStreak, 3, 'Should set initial current streak');
  assert.strictEqual(progress.bestStreak, 5, 'Should set initial best streak');
  
  console.log('   ✓ Progress with initial data created correctly\n');
}

function testCompleteModule() {
  console.log('✅ Testing: complete module functionality');
  const userProgress = UserProgress.create();
  const moduleId = createModuleId('module-1');
  
  const updatedProgress = userProgress.completeModule(moduleId, 95, 300);
  
  assert.notStrictEqual(updatedProgress, userProgress, 'Should return new instance');
  assert.strictEqual(updatedProgress.completedModules.length, 1, 'Should have one completed module');
  assert.ok(updatedProgress.completedModules.some(m => m.moduleId.value === moduleId.value), 'Should contain completed module');
  assert.strictEqual(updatedProgress.totalTimeSpent, 300, 'Should update total time');
  
  console.log('   ✓ Module completion works correctly\n');
}

function testStreakCalculation() {
  console.log('✅ Testing: streak calculation');
  let userProgress = UserProgress.create();
  const moduleId = createModuleId('module-1');
  
  // Complete first module
  let progress = userProgress.completeModule(moduleId, 95, 300);
  assert.strictEqual(progress.currentStreak, 1, 'Should have streak of 1');
  assert.strictEqual(progress.bestStreak, 1, 'Should update best streak');
  
  // Complete another module on same day (streak should remain 1)
  const moduleId2 = createModuleId('module-2');
  progress = progress.completeModule(moduleId2, 90, 250);
  assert.strictEqual(progress.currentStreak, 1, 'Should maintain streak of 1 on same day');
  assert.strictEqual(progress.bestStreak, 1, 'Best streak should remain 1');
  
  console.log('   ✓ Streak calculation works correctly\n');
}

function testRemoveModule() {
  console.log('✅ Testing: remove completed module');
  let userProgress = UserProgress.create();
  const moduleId = createModuleId('module-1');
  
  // Complete module first
  let progress = userProgress.completeModule(moduleId, 95, 300);
  assert.strictEqual(progress.completedModules.length, 1, 'Should have one completed module');
  
  // Remove module
  progress = progress.removeModuleProgress(moduleId);
  assert.strictEqual(progress.completedModules.length, 0, 'Should have no completed modules');
  assert.strictEqual(progress.totalTimeSpent, 0, 'Should reset total time');
  
  console.log('   ✓ Module removal works correctly\n');
}

function testIsModuleCompleted() {
  console.log('✅ Testing: module completion check');
  const userProgress = UserProgress.create();
  const moduleId = createModuleId('module-1');
  
  // Initially not completed
  assert.strictEqual(userProgress.isModuleCompleted(moduleId), false, 'Should not be completed initially');
  
  // After completion
  const progress = userProgress.completeModule(moduleId);
  assert.strictEqual(progress.isModuleCompleted(moduleId), true, 'Should be completed after completion');
  
  console.log('   ✓ Module completion check works correctly\n');
}

function testGetProgressPercentage() {
  console.log('✅ Testing: progress percentage calculation');
  let userProgress = UserProgress.create();
  const moduleId1 = createModuleId('module-1');
  const moduleId2 = createModuleId('module-2');
  
  // Complete one module out of two total
  let progress = userProgress.completeModule(moduleId1);
  assert.strictEqual(progress.getProgressPercentage(2), 50, 'Should be 50% with 1 of 2 completed');
  
  // Complete second module
  progress = progress.completeModule(moduleId2);
  assert.strictEqual(progress.getProgressPercentage(2), 100, 'Should be 100% with 2 of 2 completed');
  
  // Test zero total modules
  assert.strictEqual(userProgress.getProgressPercentage(0), 0, 'Should be 0% with zero total modules');
  
  console.log('   ✓ Progress percentage calculation works correctly\n');
}

function testImmutability() {
  console.log('✅ Testing: immutability of operations');
  const userProgress = UserProgress.create();
  const moduleId = createModuleId('module-1');
  
  const originalProgress = userProgress.completeModule(moduleId, 95, 300);
  const modifiedProgress = originalProgress.removeModuleProgress(moduleId);
  
  // Original should remain unchanged
  assert.strictEqual(originalProgress.completedModules.length, 1, 'Original should still have completed module');
  assert.strictEqual(modifiedProgress.completedModules.length, 0, 'Modified should have no completed modules');
  
  console.log('   ✓ Immutability maintained correctly\n');
}

// Run all tests
function runAllTests() {
  try {
    testCreateEmptyProgress();
    testCreateProgressWithInitialData();
    testCompleteModule();
    testStreakCalculation();
    testRemoveModule();
    testIsModuleCompleted();
    testGetProgressPercentage();
    testImmutability();
    
    console.log('🎉 All UserProgress tests passed successfully!\n');
  } catch (error) {
    console.error('❌ Test failed:', (error as Error).message);
    console.error('Stack trace:', (error as Error).stack);
    process.exit(1);
  }
}

// Export for potential external usage
export { runAllTests };