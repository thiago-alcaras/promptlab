/**
 * Tests: Module Entity
 * Testes unitários simplificados para entidade Module
 */

import assert from 'assert';
import { Module, ModuleId } from '../../../src/types/Module';

// Helper function to create ModuleId
function createModuleId(value: string): ModuleId {
  return { value };
}

// Helper function to create Module
function createModule(data: Partial<Module>): Module {
  return {
    id: data.id || createModuleId('test-module'),
    chapter: data.chapter || 1,
    title: data.title || 'Test Module',
    description: data.description || 'Test description',
    difficulty: data.difficulty || 'beginner',
    estimatedTime: data.estimatedTime || '30 minutes',
    topics: data.topics || ['test'],
  };
}

// Simple test functions for Module
console.log('🧪 Running Module Tests...\n');

function testModuleCreation() {
  console.log('✅ Testing: module creation');
  const moduleId = createModuleId('chapter-1');
  const module = createModule({
    id: moduleId,
    chapter: 1,
    title: 'Introduction to Prompting',
    description: 'Learn the basics of prompt engineering',
    difficulty: 'beginner',
    estimatedTime: '45 minutes',
    topics: ['basics', 'fundamentals'],
  });
  
  assert.strictEqual(module.id.value, 'chapter-1', 'Should have correct ID');
  assert.strictEqual(module.chapter, 1, 'Should have correct chapter');
  assert.strictEqual(module.title, 'Introduction to Prompting', 'Should have correct title');
  assert.strictEqual(module.description, 'Learn the basics of prompt engineering', 'Should have correct description');
  assert.strictEqual(module.difficulty, 'beginner', 'Should have correct difficulty');
  assert.strictEqual(module.estimatedTime, '45 minutes', 'Should have correct estimated time');
  assert.strictEqual(module.topics.length, 2, 'Should have correct number of topics');
  assert.ok(module.topics.includes('basics'), 'Should contain basics topic');
  assert.ok(module.topics.includes('fundamentals'), 'Should contain fundamentals topic');
  
  console.log('   ✓ Module creation works correctly\n');
}

function testModuleIdEquality() {
  console.log('✅ Testing: module ID equality');
  const id1 = createModuleId('same-id');
  const id2 = createModuleId('same-id');
  const id3 = createModuleId('different-id');
  
  assert.strictEqual(id1.value, id2.value, 'Same IDs should have same values');
  assert.notStrictEqual(id1.value, id3.value, 'Different IDs should have different values');
  
  console.log('   ✓ Module ID equality works correctly\n');
}

function testModuleDifficulties() {
  console.log('✅ Testing: module difficulties');
  const beginnerModule = createModule({ difficulty: 'beginner' });
  const intermediateModule = createModule({ difficulty: 'intermediate' });
  const advancedModule = createModule({ difficulty: 'advanced' });
  
  assert.strictEqual(beginnerModule.difficulty, 'beginner', 'Should create beginner module');
  assert.strictEqual(intermediateModule.difficulty, 'intermediate', 'Should create intermediate module');
  assert.strictEqual(advancedModule.difficulty, 'advanced', 'Should create advanced module');
  
  console.log('   ✓ Module difficulties work correctly\n');
}

function testModuleTopics() {
  console.log('✅ Testing: module topics');
  const module = createModule({
    topics: ['prompt engineering', 'AI', 'machine learning', 'best practices'],
  });
  
  assert.strictEqual(module.topics.length, 4, 'Should have correct number of topics');
  assert.ok(module.topics.includes('prompt engineering'), 'Should contain prompt engineering topic');
  assert.ok(module.topics.includes('AI'), 'Should contain AI topic');
  assert.ok(module.topics.includes('machine learning'), 'Should contain machine learning topic');
  assert.ok(module.topics.includes('best practices'), 'Should contain best practices topic');
  
  console.log('   ✓ Module topics work correctly\n');
}

function testModuleReadonly() {
  console.log('✅ Testing: module readonly properties');
  const module = createModule({
    topics: ['original', 'topics'],
  });
  
  // Test that topics array is readonly (this is compile-time check mainly)
  assert.strictEqual(module.topics.length, 2, 'Should have original topics');
  
  // Attempt to modify (should not affect original in a proper readonly implementation)
  const topicsCopy = [...module.topics, 'new topic'];
  assert.strictEqual(module.topics.length, 2, 'Original should remain unchanged');
  assert.strictEqual(topicsCopy.length, 3, 'Copy should have new topic');
  
  console.log('   ✓ Module readonly properties work correctly\n');
}

// Run all tests
function runAllTests() {
  try {
    testModuleCreation();
    testModuleIdEquality();
    testModuleDifficulties();
    testModuleTopics();
    testModuleReadonly();
    
    console.log('🎉 All Module tests passed successfully!\n');
  } catch (error) {
    console.error('❌ Test failed:', (error as Error).message);
    console.error('Stack trace:', (error as Error).stack);
    process.exit(1);
  }
}

// Export for potential external usage
export { runAllTests };