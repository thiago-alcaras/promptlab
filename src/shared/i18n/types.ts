export type Language = 'pt' | 'en' | 'es';

export interface Translation {
  // Navigation
  navigation: {
    modules: string;
    playground: string;
    progress: string;
  };
  
  // Hero Section
  hero: {
    tagline: string;
    title: {
      learn: string;
      promptEngineering: string;
      inPractice: string;
    };
    description: string;
    startLearning: string;
    stats: {
      modules: string;
      modulesDesc: string;
      apiCosts: string;
      apiCostsDesc: string;
      free: string;
      freeDesc: string;
    };
    whyExists: {
      title: string;
      description: string;
      visualLearning: {
        title: string;
        description: string;
      };
      educationalFocus: {
        title: string;
        description: string;
      };
      bestPractices: {
        title: string;
        description: string;
      };
      toolGrows: {
        title: string;
        description: string;
        tagline: string;
      };
    };
    whatYouLearn: {
      title: string;
      description: string;
      basic: {
        title: string;
        description: string;
        link: string;
      };
      intermediate: {
        title: string;
        description: string;
        link: string;
      };
      advanced: {
        title: string;
        description: string;
        link: string;
      };
    };
    howItWorks: {
      title: string;
      description: string;
      studyModules: {
        title: string;
        description: string;
        button: string;
      };
      practicePlayground: {
        title: string;
        description: string;
        button: string;
      };
      trackProgress: {
        title: string;
        description: string;
        button: string;
      };
      startJourney: string;
      noRegistration: string;
    };
  };

  // Modules
  modules: {
    title: string;
    description: string;
    backToModules: string;
    complete: string;
    completed: string;
    markIncomplete: string;
    difficulty: {
      beginner: string;
      intermediate: string;
      advanced: string;
    };
    estimatedTime: string;
    topics: string;
    moduleNotFound: string;
    contentInDevelopment: string;
    sections: {
      beginner: {
        title: string;
        description: string;
      };
      intermediate: {
        title: string;
        description: string;
      };
      advanced: {
        title: string;
        description: string;
      };
    };
  };

  // Progress
  progress: {
    title: string;
    description: string;
    completedModules: string;
    totalProgress: string;
    continue: string;
    start: string;
    noProgress: string;
    congratulations: string;
    completedAll: string;
  };

  // Playground
  playground: {
    title: string;
    description: string;
    promptPlaceholder: string;
    analyzePrompt: string;
    analyzing: string;
    analysisResult: string;
    suggestions: string;
    improvePrompt: string;
    clearPrompt: string;
    examplePrompts: string;
  };

  // Language Selector
  language: {
    title: string;
    portuguese: string;
    english: string;
    spanish: string;
  };

  // Module Content - All Chapter Titles and Descriptions
  moduleContent: {
    chapter1: {
      title: string;
      description: string;
      content: {
        whatIsPrompt: string;
        whatIsPromptDesc: string;
        essentialComponents: string;
        task: string;
        taskDesc: string;
        taskExample: string;
        context: string;
        contextDesc: string;
        contextExample: string;
        format: string;
        formatDesc: string;
        formatExample: string;
        tone: string;
        toneDesc: string;
        toneExample: string;
        practicalExample: string;
        weakPrompt: string;
        strongPrompt: string;
        weakPromptText: string;
        strongPromptText: string;
        weakPromptIssue: string;
        strongPromptBenefit: string;
        importantTip: string;
        tipDescription: string;
      };
    };
    chapter2: {
      title: string;
      description: string;
      content: {
        mainTitle: string;
        introduction: string;
        clarityPrinciples: string;
        decompositionTitle: string;
        decompositionDesc: string;
        goldenRuleTitle: string;
        goldenRuleDesc: string;
        principles: {
          directLanguage: {
            title: string;
            bad: string;
            good: string;
          };
          avoidMultipleQuestions: {
            title: string;
            bad: string;
            good: string;
          };
          beSpecificAboutScope: {
            title: string;
            bad: string;
            good: string;
          };
        };
        decompositionSteps: {
          step1: string;
          step2: string;
          step3: string;
        };
        avoid: string;
        prefer: string;
      };
    };
    chapter3: {
      title: string;
      description: string;
      content: {
        mainTitle: string;
        introduction: string;
        whyItWorksTitle: string;
        whyItWorksDesc: string;
        examplesTitle: string;
        recommendedStructureTitle: string;
        practicalComparisonTitle: string;
        advancedTipTitle: string;
        advancedTipDesc: string;
        advancedTipExample: string;
        withoutRoleTitle: string;
        withoutRoleResult: string;
        withRoleTitle: string;
        withRoleResult: string;
        roles: {
          businessConsultant: {
            title: string;
            prompt: string;
          };
          scienceTeacher: {
            title: string;
            prompt: string;
          };
          wellnessCoach: {
            title: string;
            prompt: string;
          };
          uxSpecialist: {
            title: string;
            prompt: string;
          };
        };
        structureTemplate: string;
        comparisonExamples: {
          withoutRole: string;
          withRole: string;
        };
      };
    };
    chapter4: {
      title: string;
      description: string;
      content: {
        mainTitle: string;
        introduction: string;
        whyItMattersTitle: string;
        whyItMattersDesc: string;
        delimitationTechniquesTitle: string;
        practicalExampleTitle: string;
        checklistTitle: string;
        techniques: {
          tripleDelimiters: {
            title: string;
            description: string;
            example: string;
            useFor: string;
          };
          xmlTags: {
            title: string;
            description: string;
            example: string;
            useFor: string;
          };
          sectionMarkers: {
            title: string;
            description: string;
            example: string;
            useFor: string;
          };
        };
        practicalExample: string;
        checklist: string[];
      };
    };
    chapter5: {
      title: string;
      description: string;
      content: {
        mainTitle: string;
        introduction: string;
        popularFormatsTitle: string;
        outputTemplatesTitle: string;
        effectiveFormattingTitle: string;
        advancedTechniqueTitle: string;
        formats: {
          json: {
            title: string;
            description: string;
            prompt: string;
            expectedResponse: string;
          };
          markdown: {
            title: string;
            description: string;
            prompt: string;
          };
          xml: {
            title: string;
            description: string;
            prompt: string;
          };
        };
        templateExample: {
          description: string;
          example: string;
        };
        tips: Array<{
          title: string;
          description: string;
        }>;
        advancedTechnique: {
          description: string;
          example: string;
        };
      };
    };
    chapter6: {
      title: string;
      description: string;
      content: {
        mainTitle: string;
        cotExplanation: string;
        howItWorksTitle: string;
        withoutCotTitle: string;
        withCotTitle: string;
        effectiveTriggersTitle: string;
        advancedExampleTitle: string;
        whenToUseTitle: string;
        zeroShotTechniqueTitle: string;
        comparison: {
          without: {
            title: string;
            prompt: string;
            response: string;
            issue: string;
          };
          with: {
            title: string;
            prompt: string;
            response: string;
            benefit: string;
          };
        };
        triggers: Array<{
          phrase: string;
          use: string;
        }>;
        advancedExample: string;
        whenToUse: {
          ideal: string[];
          unnecessary: string[];
        };
        zeroShotTechnique: {
          description: string;
          magicPhrase: string;
          studyResult: string;
        };
      };
    };
    chapter7: {
      title: string;
      description: string;
      content: {
        mainTitle: string;
        introduction: string;
        whyItWorks: string;
        typesTitle: string;
        effectiveStructureTitle: string;
        practicalExampleTitle: string;
        advancedTipsTitle: string;
        whenEssentialTitle: string;
        shotTypes: {
          zeroShot: {
            title: string;
            description: string;
            example: string;
          };
          fewShot: {
            title: string;
            description: string;
            example: string;
          };
        };
        structure: {
          consistentFormat: {
            title: string;
            description: string;
            example: string;
          };
          representativeVariety: {
            title: string;
            description: string;
            points: string[];
          };
          qualityOverQuantity: {
            title: string;
            description: string;
          };
        };
        practicalExample: {
          title: string;
          example: string;
        };
        advancedTips: Array<{
          title: string;
          description: string;
        }>;
        whenEssential: string[];
      };
    };
    chapter8: {
      title: string;
      description: string;
      content: {
        mainTitle: string;
        hallucinationDefinition: string;
        mitigationStrategiesTitle: string;
        practicalExamplesTitle: string;
        verificationTechniquesTitle: string;
        strategies: Array<{
          title: string;
          description: string;
          example: string;
        }>;
        examples: Array<{
          title: string;
          content: string;
        }>;
        verificationTips: string[];
      };
    };
    chapter9: {
      title: string;
      description: string;
      content: {
        mainTitle: string;
        introduction: string;
        casesTitle: string;
        cases: Array<{
          title: string;
          subtitle: string;
          requirements: string[];
          example: string;
        }>;
      };
    };
    chapter10: {
      title: string;
      description: string;
      content: {
        mainTitle: string;
        introduction: string;
      };
    };
    chapter11: {
      title: string;
      description: string;
      content: {
        mainTitle: string;
        introduction: string;
      };
    };
    chapter12: {
      title: string;
      description: string;
      content: {
        mainTitle: string;
        introduction: string;
      };
    };
    chapter13: {
      title: string;
      description: string;
      content: {
        mainTitle: string;
        introduction: string;
      };
    };
    common: {
      everyEffectivePrompt: string;
    };
    // Adicionar mais capítulos conforme necessário
  };

  // Playground Content - Complete Playground Interface
  playgroundContent: {
    title: string;
    subtitle: string;
    inputLabel: string;
    charactersCount: string;
    analysisTitle: string;
    metricsTitle: string;
    suggestionsTitle: string;
    overallScore: string;
    clarity: string;
    specificity: string;
    structure: string;
    contextuality: string;
    persona: string;
    outputFormat: string;
    strengths: string;
    improvements: string;
    improvedVersion: string;
    detectedTechniques: string;
    tabs: {
      analysis: string;
      metrics: string;
      suggestions: string;
    };
    buttons: {
      analyze: string;
      clear: string;
      copy: string;
      useImproved: string;
    };
    noPrompt: string;
    analyzing: string;
    qualityScore: string;
    excellentScore: string;
    goodScore: string;
    poorScore: string;
    detectedPersona: string;
    metrics: {
      clarity: string;
      clarityDesc: string;
      specificity: string;
      specificityDesc: string;
      structure: string;
      structureDesc: string;
      contextuality: string;
      contextualityDesc: string;
      persona: string;
      personaDesc: string;
      outputFormat: string;
      outputFormatDesc: string;
    };
    guide: {
      title: string;
      personaContext: {
        title: string;
        description: string;
        example: string;
      };
      clearStructure: {
        title: string;
        description: string;
        example: string;
      };
      specificOutput: {
        title: string;
        description: string;
        example: string;
      };
      practicalExamples: {
        title: string;
        description: string;
        example: string;
      };
      chainOfThought: {
        title: string;
        description: string;
        example: string;
      };
      constraints: {
        title: string;
        description: string;
        example: string;
      };
    };
    examplePrompts: {
      marketingConsultant: {
        category: string;
        title: string;
        prompt: string;
      };
      investmentAnalysis: {
        category: string;
        title: string;
        prompt: string;
      };
      feedbackClassification: {
        category: string;
        title: string;
        prompt: string;
      };
      ragSystem: {
        category: string;
        title: string;
        prompt: string;
      };
    };
  };

  // Module Data Translations
  moduleData: {
    chapter1: {
      title: string;
      description: string;
      topics: string[];
    };
    chapter2: {
      title: string;
      description: string;
      topics: string[];
    };
    chapter3: {
      title: string;
      description: string;
      topics: string[];
    };
    chapter4: {
      title: string;
      description: string;
      topics: string[];
    };
    chapter5: {
      title: string;
      description: string;
      topics: string[];
    };
    chapter6: {
      title: string;
      description: string;
      topics: string[];
    };
    chapter7: {
      title: string;
      description: string;
      topics: string[];
    };
    chapter8: {
      title: string;
      description: string;
      topics: string[];
    };
    chapter9: {
      title: string;
      description: string;
      topics: string[];
    };
    chapter10: {
      title: string;
      description: string;
      topics: string[];
    };
    chapter11: {
      title: string;
      description: string;
      topics: string[];
    };
    chapter12: {
      title: string;
      description: string;
      topics: string[];
    };
    chapter13: {
      title: string;
      description: string;
      topics: string[];
    };
  };

  // Playground Analysis
  playgroundAnalysis: {
    hasRole: string;
    hasContext: string;
    hasFormat: string;
    hasExamples: string;
    hasChainOfThought: string;
    hasConstraints: string;
    addRole: string;
    addContext: string;
    addFormat: string;
    addExamples: string;
    addChainOfThought: string;
    addConstraints: string;
    improveClarity: string;
    improveStructure: string;
    professionalPersona: string;
    creativeProfessional: string;
    technicalExpert: string;
    educator: string;
    analyst: string;
  };

  // Difficulty Levels
  difficulty: {
    beginner: string;
    intermediate: string;
    advanced: string;
  };

  // Time
  time: {
    minutes: string;
    estimatedTime: string;
  };

  // Actions
  actions: {
    backToModules: string;
    complete: string;
    completed: string;
    markIncomplete: string;
    continue: string;
    start: string;
    analyze: string;
    clear: string;
    improve: string;
    copy: string;
    share: string;
  };

  // Status Messages
  status: {
    analyzing: string;
    completed: string;
    inProgress: string;
    notStarted: string;
    success: string;
    error: string;
    noResults: string;
  };

  // Common
  common: {
    loading: string;
    error: string;
    tryAgain: string;
    close: string;
    save: string;
    cancel: string;
    confirm: string;
    yes: string;
    no: string;
    or: string;
    and: string;
    of: string;
    in: string;
    by: string;
    with: string;
    from: string;
    to: string;
  };
}