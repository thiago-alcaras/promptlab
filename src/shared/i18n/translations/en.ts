import { Translation } from '../types';

export const enTranslation: Translation = {
  navigation: {
    modules: 'Modules',
    playground: 'Playground',
    progress: 'Progress',
  },

  hero: {
    tagline: 'Learn by doing',
    title: {
      learn: 'Learn',
      promptEngineering: 'Prompt Engineering',
      inPractice: 'in practice',
    },
    description: 'An educational platform created to accompany and facilitate learning Prompt Engineering in a visual, practical and didactic way. Developed with AI and focused on teaching fundamental concepts without complication.',
    startLearning: 'Start learning',
    stats: {
      modules: 'interactive modules',
      modulesDesc: 'From basic to advanced',
      apiCosts: 'API costs',
      apiCostsDesc: 'Everything simulated to learn',
      free: 'free',
      freeDesc: 'Full access at no cost',
    },
    whyExists: {
      title: 'Why does PromptLab exist?',
      description: 'Created during my AI Development studies, PromptLab was born from the need for an educational tool that combined AI learning with good software engineering practices.',
      visualLearning: {
        title: 'Visual Learning',
        description: 'Didactic interface that makes complex Prompt Engineering concepts easy to understand and apply.',
      },
      educationalFocus: {
        title: 'Educational Focus',
        description: 'No real APIs or costs - everything is simulated to keep focus on what really matters: learning.',
      },
      bestPractices: {
        title: 'Best Practices',
        description: 'Developed with Clean Architecture, React, TypeScript and tests - a solid foundation to scale.',
      },
      toolGrows: {
        title: 'A tool that grows with you',
        description: 'PromptLab evolves as my own learning grows. Every new concept I learn about AI and development becomes an improvement to the platform.',
        tagline: 'Created by a developer, for developers',
      },
    },
    whatYouLearn: {
      title: 'What you will learn',
      description: 'carefully structured modules to take you from zero to advanced in Prompt Engineering',
      basic: {
        title: 'Basic Modules',
        description: 'Prompt fundamentals, basic structuring and essential first concepts.',
        link: 'See basic modules →',
      },
      intermediate: {
        title: 'Intermediate Modules',
        description: 'Advanced techniques, complex contexts and result optimization.',
        link: 'See intermediate modules →',
      },
      advanced: {
        title: 'Advanced Modules',
        description: 'Professional use cases, tool integration and best practices.',
        link: 'See advanced modules →',
      },
    },
    howItWorks: {
      title: 'How it works in practice',
      description: 'Three integrated tools for a complete learning experience',
      studyModules: {
        title: '1. Study the Modules',
        description: 'Learn theoretical concepts through interactive modules with practical examples and exercises.',
        button: 'Start with modules',
      },
      practicePlayground: {
        title: '2. Practice in Playground',
        description: 'Test your prompts in a safe environment with instant feedback and improvement suggestions.',
        button: 'Test in playground',
      },
      trackProgress: {
        title: '3. Track your Progress',
        description: 'Monitor your evolution with detailed metrics and motivational gamification system.',
        button: 'See my progress',
      },
      startJourney: 'Start my journey now',
      noRegistration: '• No registration required • Start in 30 seconds',
    },
  },

  modules: {
    title: 'Learning Modules',
    description: 'Explore our complete curriculum structured in three difficulty levels',
    backToModules: 'Back to modules',
    complete: 'Mark as complete',
    completed: 'Completed',
    markIncomplete: 'Mark as incomplete',
    difficulty: {
      beginner: 'Beginner',
      intermediate: 'Intermediate',
      advanced: 'Advanced',
    },
    estimatedTime: 'Estimated time',
    topics: 'Topics',
    moduleNotFound: 'Module not found',
    contentInDevelopment: 'Content in development',
    sections: {
      beginner: {
        title: '🌱 Beginner',
        description: 'Essential fundamentals to start your journey in Prompt Engineering',
      },
      intermediate: {
        title: '🚀 Intermediate',
        description: 'Advanced techniques to create more effective and structured prompts',
      },
      advanced: {
        title: '⚡ Advanced',
        description: 'Master complex use cases and professional tools',
      },
    },
  },

  progress: {
    title: 'Your Progress',
    description: 'Track your learning journey',
    completedModules: 'Completed Modules',
    totalProgress: 'Total Progress',
    continue: 'Continue',
    start: 'Start',
    noProgress: 'No progress yet. Start now!',
    congratulations: 'Congratulations!',
    completedAll: 'You have completed all available modules!',
  },

  playground: {
    title: 'Prompt Playground',
    description: 'Test and improve your prompts with real-time feedback',
    promptPlaceholder: 'Type your prompt here...\n\nExample:\nYou are a digital marketing expert. Create 3 Instagram post ideas about sustainability. Each post should have a catchy title and 3 relevant hashtags.',
    analyzePrompt: 'Analyze Prompt',
    analyzing: 'Analyzing...',
    analysisResult: 'Analysis Result',
    suggestions: 'Improvement Suggestions',
    improvePrompt: 'Improve Prompt',
    clearPrompt: 'Clear Prompt',
    examplePrompts: 'Example Prompts',
  },

  language: {
    title: 'Language',
    portuguese: 'Português (Brasil)',
    english: 'English',
    spanish: 'Español',
  },

  moduleContent: {
    chapter1: {
      title: 'Basic Prompt Structure',
      description: 'Learn the fundamentals of how to structure an effective prompt for AI models.',
      content: {
        whatIsPrompt: 'What is a Prompt?',
        whatIsPromptDesc: 'A prompt is the instruction or question you provide to an AI model to get a response. The quality of the prompt directly affects the quality of the response.',
        essentialComponents: 'Essential Components',
        task: 'Task',
        taskDesc: 'What you want the AI to do',
        taskExample: 'Summarize this article...',
        context: 'Context',
        contextDesc: 'Relevant background information',
        contextExample: 'As a marketing expert...',
        format: 'Format',
        formatDesc: 'How you want the response',
        formatExample: 'In 3 bullet points...',
        tone: 'Tone',
        toneDesc: 'The desired communication style',
        toneExample: 'In a professional and objective manner...',
        practicalExample: 'Practical Example',
        weakPrompt: 'Weak Prompt',
        strongPrompt: 'Strong Prompt',
        weakPromptText: 'Explain AI',
        strongPromptText: 'Explain the concept of Artificial Intelligence to a high school student, using a simple analogy and providing 3 practical examples of daily use. Be concise and use accessible language.',
        weakPromptIssue: 'Too vague, without context or specific format.',
        strongPromptBenefit: 'Clear, specific, with context about the audience and desired format.',
        importantTip: '💡 Important Tip',
        tipDescription: 'The more specific and structured your prompt, the better and more consistent the responses will be. Think of the prompt as a recipe: clear ingredients lead to predictable results.',
      },
    },
    chapter2: {
      title: 'Clarity and Direction',
      description: 'Learn to build clear and direct prompts to get more precise answers.',
      content: {
        mainTitle: 'Be Clear and Direct',
        introduction: 'Clarity is fundamental to getting precise answers. AI models interpret literally what you say, so ambiguities can lead to unexpected results.',
        clarityPrinciples: 'Clarity Principles',
        decompositionTitle: 'Technique: Decomposition',
        decompositionDesc: 'When your task is complex, break it down into smaller, clear steps:',
        goldenRuleTitle: 'Golden Rule',
        goldenRuleDesc: 'If you need to re-read your own prompt to understand it, AI will also have difficulties. Simplicity and clarity always beat unnecessary complexity.',
        principles: {
          directLanguage: {
            title: 'Use direct language',
            bad: 'Maybe you could take a look at this text and see if there is anything that could be improved...',
            good: 'Review this text and correct grammatical and punctuation errors.',
          },
          avoidMultipleQuestions: {
            title: 'Avoid multiple questions in one',
            bad: 'What is Python and how do I learn it and how long does it take?',
            good: 'What is Python? List the steps to learn Python for beginners.',
          },
          beSpecificAboutScope: {
            title: 'Be specific about scope',
            bad: 'Talk about digital marketing',
            good: 'Explain the top 5 digital marketing strategies for small businesses in 2024.',
          },
        },
        decompositionSteps: {
          step1: 'Identify the main theme',
          step2: 'List the key points to be addressed',
          step3: 'Define the expected output format',
        },
        avoid: 'Avoid:',
        prefer: 'Prefer:',
      },
    },
    chapter3: {
      title: 'Role Assignment',
      description: 'Discover how to give specific roles to AI for more targeted responses.',
      content: {
        mainTitle: 'Assigning Roles',
        introduction: 'By assigning a specific role or function to AI, you shape the style, tone and depth of responses. This technique is known as Role Prompting.',
        whyItWorksTitle: 'Why does it work?',
        whyItWorksDesc: 'AI models are trained on vast amounts of text that include different styles and professional contexts. By specifying a role, you activate language patterns and knowledge associated with that function.',
        examplesTitle: 'Role Examples',
        recommendedStructureTitle: 'Recommended Structure',
        practicalComparisonTitle: 'Practical Comparison',
        advancedTipTitle: '💡 Advanced Tip',
        advancedTipDesc: 'Combine multiple characteristics to create more specific personas:',
        advancedTipExample: 'You are a full-stack developer with 10 years of experience, specialized in React and Node.js, known for writing clean and well-documented code...',
        withoutRoleTitle: 'Without Defined Role',
        withoutRoleResult: 'Generic and superficial response',
        withRoleTitle: 'With Defined Role',
        withRoleResult: 'Detailed and specific technical analysis',
        roles: {
          businessConsultant: {
            title: 'Business Consultant',
            prompt: 'As a business consultant specialized in startups, analyze this business plan...',
          },
          scienceTeacher: {
            title: 'Science Teacher',
            prompt: 'As a high school physics teacher, explain the concept of entropy...',
          },
          wellnessCoach: {
            title: 'Wellness Coach',
            prompt: 'As a wellness and mindfulness coach, suggest techniques to reduce anxiety...',
          },
          uxSpecialist: {
            title: 'UX Specialist',
            prompt: 'As a user experience specialist, evaluate this navigation flow...',
          },
        },
        structureTemplate: `You are a [ROLE] with [EXPERTISE].

Your goal is [TASK].

Consider [RELEVANT CONTEXT].

Provide the answer in [FORMAT].`,
        comparisonExamples: {
          withoutRole: 'How can I improve my code?',
          withRole: 'As a senior software engineer specialized in performance, review this code and suggest specific optimizations.',
        },
      },
    },
    chapter4: {
      title: 'Data and Instruction Separation',
      description: 'Techniques for structuring complex prompts by clearly separating data and commands.',
      content: {
        mainTitle: 'Separating Data from Instructions',
        introduction: 'When working with complex prompts that include variable data (texts to analyze, code to review, etc.), it\'s crucial to clearly separate instructions from data.',
        whyItMattersTitle: 'Why this matters?',
        whyItMattersDesc: 'Without clear separation, AI can confuse data with instructions, leading to unpredictable results. Delimiters help create clear boundaries.',
        delimitationTechniquesTitle: 'Delimitation Techniques',
        practicalExampleTitle: 'Complete Practical Example',
        checklistTitle: '✓ Best Practices Checklist',
        techniques: {
          tripleDelimiters: {
            title: '1. Triple Delimiters',
            description: 'Useful for: code, long texts, content with special formatting',
            example: `Analyze the following text and summarize in 3 points:

\`\`\`
[USER TEXT HERE]
This is the content that needs to be analyzed.
It can have multiple lines and even "quotes".
\`\`\`

Provide the summary in bullet points.`,
            useFor: 'code, long texts, content with special formatting',
          },
          xmlTags: {
            title: '2. XML Tags',
            description: 'Useful for: multiple data blocks, hierarchical structure',
            example: `You will receive a document and a question.

<document>
[COMPLETE DOCUMENT]
</document>

<question>
[USER QUESTION]
</question>

Answer the question based only on the information in the document.`,
            useFor: 'multiple data blocks, hierarchical structure',
          },
          sectionMarkers: {
            title: '3. Section Markers',
            description: 'Useful for: multiple sections, comparisons, complex workflows',
            example: `=== INSTRUCTION ===
Compare the two articles below and list the main differences.

=== ARTICLE 1 ===
[First article text]

=== ARTICLE 2 ===
[Second article text]

=== OUTPUT FORMAT ===
List differences in comparative table.`,
            useFor: 'multiple sections, comparisons, complex workflows',
          },
        },
        practicalExample: `You are an expert in sentiment analysis.

Analyze the sentiment of the following product review:

<review>
The product arrived quickly, but the quality is not what I expected.
The packaging was damaged and pieces were missing. I don't recommend it.
</review>

<instructions>
1. Classify sentiment as: Positive, Neutral or Negative
2. Identify mentioned aspects (delivery, quality, packaging)
3. Give a score from 1 to 5 for each aspect
</instructions>

Respond in JSON format.`,
        checklist: [
          'Use consistent delimiters throughout the prompt',
          'Choose delimiters that don\'t appear in the data',
          'Explain the structure before presenting the data',
          'Keep instructions separate from variable data',
        ],
      },
    },
    chapter5: {
      title: 'Output Formatting',
      description: 'Learn to specify structured formats for consistent and integrable responses.',
      content: {
        mainTitle: 'Formatting the Output',
        introduction: 'Specifying the response format is essential for system integration and ensuring consistency. AI can generate outputs in various structured formats.',
        popularFormatsTitle: 'Popular Formats',
        outputTemplatesTitle: 'Output Templates',
        effectiveFormattingTitle: 'Effective Formatting Tips',
        advancedTechniqueTitle: '💡 Advanced Technique: JSON Schema',
        formats: {
          json: {
            title: 'JSON',
            description: 'Ideal for API integration and applications',
            prompt: `Extract the main information from this biography and return in JSON:

Name, Profession, Nationality, Years of Experience

Biography: "Marie Curie was a Polish physicist and chemist..."`,
            expectedResponse: `{
  "name": "Marie Curie",
  "profession": "Physicist and Chemist",
  "nationality": "Polish",
  "years_experience": "Not specified"
}`,
          },
          markdown: {
            title: 'Markdown',
            description: 'Perfect for documentation and web content',
            prompt: `Create a quick Git guide in Markdown format with:
- Main title
- 3 sections (Installation, Basic Commands, Best Practices)
- Code in code blocks
- Relevant links`,
          },
          xml: {
            title: 'XML',
            description: 'Useful for hierarchical data and legacy systems',
            prompt: `Convert this product list to XML:
- iPhone 14, $999, Electronics
- Dell Notebook, $700, Computing

Use tags: <products>, <product>, <name>, <price>, <category>`,
          },
        },
        templateExample: {
          description: 'Provide an empty template for AI to fill:',
          example: `Analyze customer feedback and fill the template:

TEMPLATE:
---
Sentiment: [Positive/Neutral/Negative]
Category: [Product/Service/Delivery/Other]
Priority: [High/Medium/Low]
Recommended Action: [Free text]
---

Feedback: "The product is great, but it took 2 weeks to arrive."`,
        },
        tips: [
          {
            title: 'Be explicit',
            description: 'Specify exactly the desired format, including key structure, field names, etc.',
          },
          {
            title: 'Give examples',
            description: 'Show an example of the expected format whenever possible',
          },
          {
            title: 'Define types',
            description: 'Indicate whether fields should be strings, numbers, arrays, booleans, etc.',
          },
          {
            title: 'Validate afterwards',
            description: 'Always validate AI output before using in production',
          },
        ],
        advancedTechnique: {
          description: 'For maximum precision, provide a JSON Schema describing the expected structure:',
          example: `Return data following this schema:
{
  "type": "object",
  "properties": {
    "title": {"type": "string"},
    "price": {"type": "number"},
    "available": {"type": "boolean"}
  },
  "required": ["title", "price"]
}`,
        },
      },
    },
    chapter6: {
      title: 'Chain-of-Thought (Step-by-Step Reasoning)',
      description: 'Advanced technique to obtain more precise reasoning by showing the thinking process.',
      content: {
        mainTitle: 'Precognition (Thinking Step by Step)',
        cotExplanation: 'Technique that asks AI to show its reasoning before giving the final answer, resulting in more accurate and reliable responses, especially for complex tasks.',
        howItWorksTitle: 'How It Works',
        withoutCotTitle: '❌ Without Chain-of-Thought',
        withCotTitle: '✓ With Chain-of-Thought',
        effectiveTriggersTitle: 'Effective Trigger Phrases',
        advancedExampleTitle: 'Advanced Example',
        whenToUseTitle: 'When to Use CoT',
        zeroShotTechniqueTitle: '💡 Zero-Shot CoT Technique',
        comparison: {
          without: {
            title: '❌ Without Chain-of-Thought',
            prompt: 'A store has 23 apples. It sold 15 in the morning and bought 8 more in the afternoon. How many apples does it have now?',
            response: '16 apples',
            issue: 'Direct answer, without showing reasoning. Could be wrong and you don\'t know why.',
          },
          with: {
            title: '✓ With Chain-of-Thought',
            prompt: 'A store has 23 apples. It sold 15 in the morning and bought 8 more in the afternoon. How many apples does it have now? Think step by step.',
            response: `Step 1: Started with 23 apples
Step 2: Sold 15 → 23 - 15 = 8
Step 3: Bought 8 → 8 + 8 = 16
Answer: 16 apples`,
            benefit: 'Transparent reasoning allows checking each step.',
          },
        },
        triggers: [
          {
            phrase: 'Think step by step',
            use: 'Mathematical and logical problems',
          },
          {
            phrase: 'Before answering, analyze...',
            use: 'Complex analyses and decisions',
          },
          {
            phrase: 'Show your reasoning',
            use: 'Explanations and tutorials',
          },
        ],
        advancedExample: `You need to decide whether to implement a new feature.

Context:
- Team has 3 developers
- 2-week deadline
- Complex feature estimated at 40 hours
- 3 other priority tasks pending

Before giving your recommendation, analyze:
1. The team's actual capacity
2. The impact of other tasks
3. The risks involved
4. Possible alternatives

Then, provide your recommendation with justification.`,
        whenToUse: {
          ideal: [
            'Mathematical problems',
            'Logical reasoning',
            'Decision analysis',
            'Code debugging',
            'Project planning',
          ],
          unnecessary: [
            'Simple factual questions',
            'Text translation',
            'Data formatting',
            'Trivial tasks',
            'Free creative responses',
          ],
        },
        zeroShotTechnique: {
          description: 'The simplest and most effective magic phrase:',
          magicPhrase: 'Let\'s think step by step.',
          studyResult: 'Studies show that just adding this phrase can improve accuracy by up to 50% in complex reasoning tasks.',
        },
      },
    },
    chapter7: {
      title: 'Few-Shot Learning (Using Examples)',
      description: 'Learn to use concrete examples to teach specific patterns to AI.',
      content: {
        mainTitle: 'Using Examples',
        introduction: 'Few-shot learning is the technique of providing concrete examples of desired behavior before presenting the actual task. AI learns the pattern through examples.',
        whyItWorks: 'Examples teach AI the style, format and type of reasoning you expect, making responses more consistent and aligned with your needs.',
        typesTitle: 'Types of Few-Shot',
        effectiveStructureTitle: 'Effective Example Structure',
        practicalExampleTitle: 'Complete Practical Example',
        advancedTipsTitle: 'Advanced Tips',
        whenEssentialTitle: '⚡ When Few-Shot is Essential',
        shotTypes: {
          zeroShot: {
            title: 'Zero-Shot',
            description: 'No examples, just instructions',
            example: `Classify the sentiment of this sentence as positive, negative or neutral:

"The movie was interesting but very long."

Sentiment:`,
          },
          fewShot: {
            title: 'Few-Shot (1-5 examples)',
            description: 'Some examples to establish the pattern',
            example: `Classify the sentiment of these sentences:

Sentence: "I loved every moment of the movie!"
Sentiment: Positive

Sentence: "Terrible experience, I don't recommend it."
Sentiment: Negative

Sentence: "The product is ok, nothing special."
Sentiment: Neutral

Now classify:
Sentence: "The movie was interesting but very long."
Sentiment:`,
          },
        },
        structure: {
          consistentFormat: {
            title: '1. Consistent Format',
            description: 'All examples should follow exactly the same format:',
            example: `Input: [input data]
Output: [expected result]

Input: [other data]
Output: [other result]`,
          },
          representativeVariety: {
            title: '2. Representative Variety',
            description: 'Examples should cover different cases and variations:',
            points: [
              'Simple and complex cases',
              'Different input types',
              'Edge cases when relevant',
            ],
          },
          qualityOverQuantity: {
            title: '3. Quality over Quantity',
            description: 'Usually 2-5 well-chosen examples are more effective than many redundant examples.',
          },
        },
        practicalExample: {
          title: 'Case: Information Extraction',
          example: `Extract name, email and phone from texts:

Example 1:
Text: "Hello, I'm John Silva, my email is john@email.com"
Result: {"name": "John Silva", "email": "john@email.com", "phone": null}

Example 2:
Text: "Maria Santos - (11) 98765-4321 - maria.s@company.com"
Result: {"name": "Maria Santos", "email": "maria.s@company.com", "phone": "(11) 98765-4321"}

Example 3:
Text: "Contact: pedro@site.com.br or call (21) 3333-4444"
Result: {"name": null, "email": "pedro@site.com.br", "phone": "(21) 3333-4444"}

Now extract:
Text: "Carlos Oliveira, phone (85) 99999-8888, email: carlos.o@domain.net"
Result:`,
        },
        advancedTips: [
          {
            title: 'Progressive Examples',
            description: 'Start with simple cases and gradually increase complexity',
          },
          {
            title: 'Counter-examples',
            description: 'Include examples of what NOT to do to avoid unwanted behaviors',
          },
          {
            title: 'Explain the Pattern',
            description: 'Add a brief explanation of the pattern before examples',
          },
          {
            title: 'Test and Refine',
            description: 'Adjust your examples based on actual AI responses',
          },
        ],
        whenEssential: [
          'Tasks with specific or non-conventional format',
          'When you need absolute consistency',
          'Custom classifications or domain-specific categorizations',
          'When verbal instructions alone are not sufficient',
        ],
      },
    },
    chapter8: {
      title: 'Avoiding Hallucinations',
      description: 'Strategies to minimize incorrect information and ensure accuracy in responses.',
      content: {
        mainTitle: 'Avoiding Hallucinations',
        hallucinationDefinition: 'Hallucinations occur when AI generates information that seems plausible but is factually incorrect or invented. It is one of the biggest challenges in AI applications.',
        mitigationStrategiesTitle: 'Mitigation Strategies',
        practicalExamplesTitle: 'Practical Examples',
        verificationTechniquesTitle: 'Verification Techniques',
        strategies: [
          {
            title: '1. Grounding with Sources',
            description: 'Provide reliable sources and ask to base responses only on them',
            example: 'Based only on the attached document, answer...',
          },
          {
            title: '2. Uncertainty Admission',
            description: 'Instruct AI to admit when it doesn\'t know something',
            example: 'If you don\'t know the answer, say "I don\'t have enough information"',
          },
          {
            title: '3. Cross Verification',
            description: 'Ask for multiple perspectives or verifications',
            example: 'Provide the answer and list the sources that support it',
          },
        ],
        examples: [
          {
            title: 'Problematic Prompt',
            content: 'What are the latest discoveries about cancer cure?',
          },
          {
            title: 'Improved Prompt',
            content: 'Based only on the provided scientific articles, summarize cancer treatment discoveries, indicating the evidence level of each one.',
          },
        ],
        verificationTips: [
          'Always provide sources when possible',
          'Use appropriate disclaimers',
          'Ask AI to cite its sources',
          'Avoid questions about very recent events',
        ],
      },
    },
    chapter9: {
      title: 'Complex Use Cases',
      description: 'Practical examples of professional prompts applied to real market scenarios.',
      content: {
        mainTitle: 'Creating Complex Prompts',
        introduction: 'In this advanced module, we explore real use cases from different sectors, applying all learned techniques to create professional-level prompts.',
        casesTitle: 'Practical Cases',
        cases: [
          {
            title: 'Case 1: Customer Service Chatbot',
            subtitle: 'Electronics e-commerce',
            requirements: [
              'Professional but friendly tone',
              'Access to product knowledge base',
              'Escalation to humans when necessary',
            ],
            example: 'You are a customer service assistant specialized in electronics...',
          },
          {
            title: 'Case 2: Legal Analysis',
            subtitle: 'Law firm',
            requirements: [
              'Precise technical language',
              'References to legislation',
              'Precedent analysis',
            ],
            example: 'As a specialized legal assistant, analyze the contract...',
          },
        ],
      },
    },
    chapter10: {
      title: 'Introduction to LangSmith',
      description: 'Professional platform for developing, monitoring and evaluating LLM applications.',
      content: {
        mainTitle: 'Introduction to LangSmith',
        introduction: 'LangSmith is a professional platform for development, monitoring and evaluation of applications with language models (LLM). Essential for those working seriously with AI.',
      },
    },
    chapter11: {
      title: 'Evaluation Metrics & Pairwise',
      description: 'Key metrics to evaluate quality, reliability and performance of AI systems, including Pairwise Evaluation with interactive simulator.',
      content: {
        mainTitle: 'Evaluation Metrics & Pairwise Evaluation',
        introduction: 'Proper evaluation of AI systems is crucial to ensure quality, reliability and performance. In this module, we explore the main metrics used to evaluate language models and the Pairwise methodology with interactive simulator.',
      },
    },
    chapter12: {
      title: 'Embeddings and Similarity',
      description: 'Numerical representations of text that capture semantic meaning for mathematical comparisons.',
      content: {
        mainTitle: 'Embeddings and Similarity',
        introduction: 'Embeddings are numerical representations of text that capture semantic meaning, allowing computers to "understand" and compare texts mathematically.',
      },
    },
    chapter13: {
      title: 'AI Tools Ecosystem',
      description: 'Main tools for developing, monitoring and optimizing LLM applications.',
      content: {
        mainTitle: 'AI Tools Ecosystem',
        introduction: 'Explore the main tools that facilitate the development, monitoring and optimization of applications with Large Language Models (LLMs).',
      },
    },
    common: {
      everyEffectivePrompt: 'Every effective prompt contains some or all of these elements:',
    },
  },

  playgroundContent: {
    title: 'Prompt Playground',
    subtitle: 'Test and improve your prompts with intelligent analysis',
    inputLabel: 'Your Prompt',
    charactersCount: 'characters',
    analysisTitle: 'Prompt Analysis',
    metricsTitle: 'Detailed Metrics',
    suggestionsTitle: 'Improvement Suggestions',
    overallScore: 'Overall Score',
    clarity: 'Clarity',
    specificity: 'Specificity',
    structure: 'Structure',
    contextuality: 'Contextuality',
    persona: 'Persona',
    outputFormat: 'Output Format',
    strengths: 'Strengths',
    improvements: 'Suggested Improvements',
    improvedVersion: 'Improved Version',
    detectedTechniques: 'Detected Techniques',
    tabs: {
      analysis: 'Analysis',
      metrics: 'Metrics',
      suggestions: 'Suggestions',
    },
    buttons: {
      analyze: 'Analyze Prompt',
      clear: 'Clear',
      copy: 'Copy',
      useImproved: 'Use Improved Version',
    },
    noPrompt: 'Enter a prompt to start analysis',
    analyzing: 'Analyzing your prompt...',
    qualityScore: 'Overall Prompt Quality',
    excellentScore: 'Excellent!',
    goodScore: 'Good, but can be improved',
    poorScore: 'Needs significant improvements',
    detectedPersona: 'Detected Persona',
    metrics: {
      clarity: 'Clarity',
      clarityDesc: 'How clear and understandable the instruction is',
      specificity: 'Specificity',
      specificityDesc: 'Level of detail and precision in instructions',
      structure: 'Structure',
      structureDesc: 'Organization and formatting of the prompt',
      contextuality: 'Contextualization',
      contextualityDesc: 'Amount and quality of context provided',
      persona: 'Persona/Role',
      personaDesc: 'Definition of role and tone of voice',
      outputFormat: 'Output Format',
      outputFormatDesc: 'Clear specification of desired format',
    },
    guide: {
      title: '🎯 Essential Prompt Engineering Guide',
      personaContext: {
        title: '🎭 Persona & Context',
        description: 'Define a specific role and clear context',
        example: 'You are an expert in...',
      },
      clearStructure: {
        title: '📋 Clear Structure',
        description: 'Use formatting and organize in sections',
        example: '1. First... 2. Then...',
      },
      specificOutput: {
        title: '🎯 Specific Output',
        description: 'Define format, style and structure',
        example: 'Format: JSON with...',
      },
      practicalExamples: {
        title: '💡 Practical Examples',
        description: 'Few-shot learning with real cases',
        example: 'Example: Input → Output',
      },
      chainOfThought: {
        title: '🧠 Chain-of-Thought',
        description: 'Promote step-by-step reasoning',
        example: 'Think step by step...',
      },
      constraints: {
        title: '⚡ Restrictions & Limits',
        description: 'Define what NOT to do',
        example: 'Do not use... Avoid...',
      },
    },
    examplePrompts: {
      marketingConsultant: {
        category: 'Role Prompting',
        title: 'Marketing Consultant',
        prompt: 'You are a senior digital marketing consultant with 10 years of experience in e-commerce.\n\nSituation: A sustainable products startup needs a content strategy for Instagram.\n\nCreate 3 post ideas that:\n- Educate about sustainability\n- Show products creatively\n- Engage young audience (18-35 years)\n\nFormat: For each post, provide:\n- Catchy title\n- Content description\n- 5 relevant hashtags\n- Specific call-to-action',
      },
      investmentAnalysis: {
        category: 'Chain-of-Thought',
        title: 'Investment Analysis',
        prompt: 'You are a financial analyst specialized in startup evaluation.\n\nAnalyze the following startup: "EcoLogistics - platform that optimizes delivery routes to reduce carbon emissions".\n\nThink step by step:\n1. First, evaluate the market and opportunity\n2. Then, consider risks and challenges\n3. Next, analyze growth potential\n4. Finally, make a recommendation\n\nFormat: Structure your analysis following exactly these 4 steps, with clear conclusions for each one.',
      },
      feedbackClassification: {
        category: 'Few-Shot Learning',
        title: 'Feedback Classification',
        prompt: 'You are a customer success analysis expert. Classify customer feedback into categories.\n\nExamples:\nFeedback: "The app is great, but takes too long to load"\nCategory: Functionality\nSentiment: Mixed\nPriority: Medium\n\nFeedback: "Canceling subscription, too expensive"\nCategory: Price\nSentiment: Negative\nPriority: High\n\nFeedback: "Support team very attentive!"\nCategory: Service\nSentiment: Positive\nPriority: Low\n\nNow classify:\nFeedback: "Product works well, but lacks tutorials"\n\nJSON Format: {"category": "", "sentiment": "", "priority": "", "justification": ""}',
      },
      ragSystem: {
        category: 'Complex Prompt',
        title: 'Simulated RAG System',
        prompt: 'You are an assistant specialized in API technical documentation.\n\nContext: You have access to "PayFast" payment API documentation.\n\nAvailable documentation:\n- POST /payments endpoint: creates payment (fields: amount, currency, customer_id)\n- GET /payments/{id} endpoint: queries payment status\n- Response codes: 200 (success), 400 (invalid data), 401 (unauthorized)\n- Authentication: Bearer token in Authorization header\n\nUser question: "How to create a $50.00 payment for customer ID 123?"\n\nInstructions:\n1. Answer based ONLY on provided documentation\n2. If insufficient information, state clearly\n3. Provide practical code example\n4. Mention possible error codes\n\nFormat: Structured response with explanation + code + important observations.',
      },
    },
  },

  // Module data translations
  moduleData: {
    chapter1: {
      title: 'Basic Prompt Structure',
      description: 'Learn the fundamentals of how to structure an effective prompt for AI models.',
      topics: ['Prompt components', 'Basic syntax', 'Initial best practices'],
    },
    chapter2: {
      title: 'Be Clear and Direct',
      description: 'Discover how clarity and objectivity dramatically improve AI responses.',
      topics: ['Communication clarity', 'Avoiding ambiguities', 'Precise instructions'],
    },
    chapter3: {
      title: 'Assigning Roles',
      description: 'Learn to assign specific roles and contexts to get more appropriate responses.',
      topics: ['Role prompting', 'Professional context', 'AI personality'],
    },
    chapter4: {
      title: 'Separating Data from Instructions',
      description: 'Techniques for structuring complex prompts by clearly separating data and commands.',
      topics: ['Advanced structuring', 'Delimiters', 'XML tags'],
    },
    chapter5: {
      title: 'Formatting Output',
      description: 'Control response formats: JSON, XML, Markdown and other structures.',
      topics: ['Output formatting', 'Structured JSON', 'Response templates'],
    },
    chapter6: {
      title: 'Precognition (Thinking Step by Step)',
      description: 'Use chain-of-thought to make AI reason before responding.',
      topics: ['Chain-of-thought', 'Explicit reasoning', 'Step-by-step'],
    },
    chapter7: {
      title: 'Using Examples',
      description: 'Few-shot learning: teach AI by examples for more consistent results.',
      topics: ['Few-shot prompting', 'Effective examples', 'Pattern recognition'],
    },
    chapter8: {
      title: 'Avoiding Hallucinations',
      description: 'Advanced techniques to minimize incorrect or fabricated responses.',
      topics: ['Grounding', 'Fact verification', 'Reliability'],
    },
    chapter9: {
      title: 'Complex Prompts',
      description: 'Real use cases: chatbots, legal services, finance and development.',
      topics: ['Industrial use cases', 'System integration', 'Multi-step prompts'],
    },
    chapter10: {
      title: 'Introduction to LangSmith',
      description: 'Learn about the LLM application evaluation and monitoring platform.',
      topics: ['LangSmith overview', 'Datasets', 'Tracing'],
    },
    chapter11: {
      title: 'Evaluation Metrics & Pairwise',
      description: 'Understand Precision, Recall, F1-score, Faithfulness, Pairwise Evaluation and LLM-as-a-Judge with interactive simulator.',
      topics: ['Classification metrics', 'RAG metrics', 'LLM-as-a-Judge', 'Pairwise Evaluation', 'Interactive simulator'],
    },
    chapter12: {
      title: 'Embeddings and Similarity',
      description: 'Visualize and understand embeddings and semantic similarity search.',
      topics: ['Vector embeddings', 'Cosine similarity', 'Semantic search'],
    },
    chapter13: {
      title: 'AI Tools Ecosystem',
      description: 'Explore LangChain, LangSmith, LangFuse, LlamaIndex and PromptLayer with practical examples.',
      topics: ['LangChain framework', 'LangSmith observability', 'LlamaIndex RAG', 'Prompt versioning'],
    },
  },

  playgroundAnalysis: {
    hasRole: 'Has role definition',
    hasContext: 'Has adequate context',
    hasFormat: 'Has specified format',
    hasExamples: 'Includes examples',
    hasChainOfThought: 'Uses step-by-step reasoning',
    hasConstraints: 'Has defined constraints',
    addRole: 'Add a specific role for the AI',
    addContext: 'Provide more context about the situation',
    addFormat: 'Specify the desired response format',
    addExamples: 'Include examples for greater clarity',
    addChainOfThought: 'Ask the AI to show reasoning',
    addConstraints: 'Define limitations or restrictions',
    improveClarity: 'Be more specific and clear',
    improveStructure: 'Better organize the prompt structure',
    professionalPersona: 'Professional expert',
    creativeProfessional: 'Creative professional',
    technicalExpert: 'Technical expert',
    educator: 'Educator',
    analyst: 'Analyst',
  },

  difficulty: {
    beginner: 'Beginner',
    intermediate: 'Intermediate',
    advanced: 'Advanced',
  },

  time: {
    minutes: 'min',
    estimatedTime: 'Estimated time',
  },

  actions: {
    backToModules: 'Back to modules',
    complete: 'Mark as complete',
    completed: 'Completed',
    markIncomplete: 'Mark as incomplete',
    continue: 'Continue',
    start: 'Start',
    analyze: 'Analyze',
    clear: 'Clear',
    improve: 'Improve',
    copy: 'Copy',
    share: 'Share',
  },

  status: {
    analyzing: 'Analyzing...',
    completed: 'Completed',
    inProgress: 'In progress',
    notStarted: 'Not started',
    success: 'Success',
    error: 'Error',
    noResults: 'No results found',
  },

  common: {
    loading: 'Loading...',
    error: 'Error',
    tryAgain: 'Try again',
    close: 'Close',
    save: 'Save',
    cancel: 'Cancel',
    confirm: 'Confirm',
    yes: 'Yes',
    no: 'No',
    or: 'or',
    and: 'and',
    of: 'of',
    in: 'in',
    by: 'by',
    with: 'with',
    from: 'from',
    to: 'to',
  },
};