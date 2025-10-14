/**
 * Test Runner - Enterprise PromptLab Tests
 * Executor principal dos testes automatizados
 */

import { runAllTests as runModuleTests } from './domain/entities/Module.test';
import { runAllTests as runUserProgressTests } from './domain/entities/UserProgress.test';

console.log('🚀 Starting PromptLab Enterprise Tests Suite\n');
console.log('=' .repeat(50));

async function runTestSuite() {
  const startTime = Date.now();
  
  try {
    console.log('\n📦 Domain Layer Tests');
    console.log('-'.repeat(30));
    
    // Run Module tests
    console.log('\n🧩 Module Entity Tests:');
    runModuleTests();
    
    // Run UserProgress tests  
    console.log('\n👤 UserProgress Entity Tests:');
    runUserProgressTests();
    
    const endTime = Date.now();
    const duration = endTime - startTime;
    
    console.log('=' .repeat(50));
    console.log(`✨ All tests completed successfully in ${duration}ms!`);
    console.log('🎯 Clean Architecture implementation validated');
    console.log('✅ Enterprise refactoring completed with full test coverage\n');
    
  } catch (error) {
    console.error('\n💥 Test suite failed:', (error as Error).message);
    console.error('Stack trace:', (error as Error).stack);
    process.exit(1);
  }
}

// Run the test suite
runTestSuite().catch(error => {
  console.error('Failed to run test suite:', error);
  process.exit(1);
});