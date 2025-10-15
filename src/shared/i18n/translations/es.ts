import { Translation } from '../types';

export const esTranslation: Translation = {
  navigation: {
    modules: 'Módulos',
    playground: 'Playground',
    progress: 'Progreso',
  },

  hero: {
    tagline: 'Aprende haciendo',
    title: {
      learn: 'Aprende',
      promptEngineering: 'Prompt Engineering',
      inPractice: 'en la práctica',
    },
    description: 'Una plataforma educativa creada para acompañar y facilitar el aprendizaje de Prompt Engineering de forma visual, práctica y didáctica. Desarrollada con IA y enfocada en enseñar conceptos fundamentales sin complicaciones.',
    startLearning: 'Empezar a aprender',
    stats: {
      modules: 'módulos interactivos',
      modulesDesc: 'Desde básico hasta avanzado',
      apiCosts: 'costos de API',
      apiCostsDesc: 'Todo simulado para aprender',
      free: 'gratis',
      freeDesc: 'Acceso completo sin costos',
    },
    whyExists: {
      title: '¿Por qué existe PromptLab?',
      description: 'Creado durante mis estudios de Desarrollo con IA, PromptLab nació de la necesidad de una herramienta educativa que combinara el aprendizaje de IA con buenas prácticas de ingeniería de software.',
      visualLearning: {
        title: 'Aprendizaje Visual',
        description: 'Interfaz didáctica que hace que los conceptos complejos de Prompt Engineering sean fáciles de entender y aplicar.',
      },
      educationalFocus: {
        title: 'Enfoque Educativo',
        description: 'Sin APIs reales ni costos - todo está simulado para mantener el foco en lo que realmente importa: aprender.',
      },
      bestPractices: {
        title: 'Buenas Prácticas',
        description: 'Desarrollado con Clean Architecture, React, TypeScript y tests - una base sólida para escalar.',
      },
      toolGrows: {
        title: 'Una herramienta que crece contigo',
        description: 'PromptLab evoluciona conforme crece mi propio aprendizaje. Cada nuevo concepto que aprendo sobre IA y desarrollo se convierte en una mejora de la plataforma.',
        tagline: 'Creado por un desarrollador, para desarrolladores',
      },
    },
    whatYouLearn: {
      title: 'Lo que vas a aprender',
      description: 'módulos cuidadosamente estructurados para llevarte de cero a avanzado en Prompt Engineering',
      basic: {
        title: 'Módulos Básicos',
        description: 'Fundamentos de prompts, estructuración básica y primeros conceptos esenciales.',
        link: 'Ver módulos básicos →',
      },
      intermediate: {
        title: 'Módulos Intermedios',
        description: 'Técnicas avanzadas, contextos complejos y optimización de resultados.',
        link: 'Ver módulos intermedios →',
      },
      advanced: {
        title: 'Módulos Avanzados',
        description: 'Casos de uso profesionales, integración con herramientas y mejores prácticas.',
        link: 'Ver módulos avanzados →',
      },
    },
    howItWorks: {
      title: 'Cómo funciona en la práctica',
      description: 'Tres herramientas integradas para una experiencia completa de aprendizaje',
      studyModules: {
        title: '1. Estudia los Módulos',
        description: 'Aprende conceptos teóricos a través de módulos interactivos con ejemplos prácticos y ejercicios.',
        button: 'Empezar por los módulos',
      },
      practicePlayground: {
        title: '2. Practica en el Playground',
        description: 'Prueba tus prompts en un ambiente seguro con retroalimentación instantánea y sugerencias de mejora.',
        button: 'Probar en playground',
      },
      trackProgress: {
        title: '3. Sigue tu Progreso',
        description: 'Monitorea tu evolución con métricas detalladas y sistema de gamificación motivacional.',
        button: 'Ver mi progreso',
      },
      startJourney: 'Empezar mi jornada ahora',
      noRegistration: '• Sin necesidad de registro • Empieza en 30 segundos',
    },
  },

  modules: {
    title: 'Módulos de Aprendizaje',
    description: 'Explora nuestro currículo completo estructurado en tres niveles de dificultad',
    backToModules: 'Volver a los módulos',
    complete: 'Marcar como completado',
    completed: 'Completado',
    markIncomplete: 'Marcar como incompleto',
    difficulty: {
      beginner: 'Principiante',
      intermediate: 'Intermedio',
      advanced: 'Avanzado',
    },
    estimatedTime: 'Tiempo estimado',
    topics: 'Temas',
    moduleNotFound: 'Módulo no encontrado',
    contentInDevelopment: 'Contenido en desarrollo',
    sections: {
      beginner: {
        title: '🌱 Principiante',
        description: 'Fundamentos esenciales para comenzar tu jornada en Prompt Engineering',
      },
      intermediate: {
        title: '🚀 Intermedio',
        description: 'Técnicas avanzadas para crear prompts más efectivos y estructurados',
      },
      advanced: {
        title: '⚡ Avanzado',
        description: 'Domina casos de uso complejos y herramientas profesionales',
      },
    },
  },

  progress: {
    title: 'Tu Progreso',
    description: 'Sigue tu jornada de aprendizaje',
    completedModules: 'Módulos Completados',
    totalProgress: 'Progreso Total',
    continue: 'Continuar',
    start: 'Empezar',
    noProgress: 'Sin progreso aún. ¡Empieza ahora!',
    congratulations: '¡Felicitaciones!',
    completedAll: '¡Has completado todos los módulos disponibles!',
  },

  playground: {
    title: 'Playground de Prompts',
    description: 'Prueba y mejora tus prompts con retroalimentación en tiempo real',
    promptPlaceholder: 'Escribe tu prompt aquí...\n\nEjemplo:\nEres un experto en marketing digital. Crea 3 ideas de posts para Instagram sobre sostenibilidad. Cada post debe tener un título atractivo y 3 hashtags relevantes.',
    analyzePrompt: 'Analizar Prompt',
    analyzing: 'Analizando...',
    analysisResult: 'Resultado del Análisis',
    suggestions: 'Sugerencias de Mejora',
    improvePrompt: 'Mejorar Prompt',
    clearPrompt: 'Limpiar Prompt',
    examplePrompts: 'Ejemplos de Prompts',
  },

  language: {
    title: 'Idioma',
    portuguese: 'Português (Brasil)',
    english: 'English',
    spanish: 'Español',
  },

  moduleContent: {
    chapter1: {
      title: 'Estructura Básica de Prompt',
      description: 'Aprende los fundamentos de cómo estructurar un prompt efectivo para modelos de IA.',
      content: {
        whatIsPrompt: '¿Qué es un Prompt?',
        whatIsPromptDesc: 'Un prompt es la instrucción o pregunta que proporcionas a un modelo de IA para obtener una respuesta. La calidad del prompt afecta directamente la calidad de la respuesta.',
        essentialComponents: 'Componentes Esenciales',
        task: 'Tarea',
        taskDesc: 'Lo que quieres que haga la IA',
        taskExample: 'Resume este artículo...',
        context: 'Contexto',
        contextDesc: 'Información de fondo relevante',
        contextExample: 'Como experto en marketing...',
        format: 'Formato',
        formatDesc: 'Cómo quieres la respuesta',
        formatExample: 'En 3 puntos clave...',
        tone: 'Tono',
        toneDesc: 'El estilo de comunicación deseado',
        toneExample: 'De manera profesional y objetiva...',
        practicalExample: 'Ejemplo Práctico',
        weakPrompt: 'Prompt Débil',
        strongPrompt: 'Prompt Fuerte',
        weakPromptText: 'Explica IA',
        strongPromptText: 'Explica el concepto de Inteligencia Artificial a un estudiante de secundaria, usando una analogía simple y proporcionando 3 ejemplos prácticos de uso diario. Sé conciso y usa lenguaje accesible.',
        weakPromptIssue: 'Demasiado vago, sin contexto o formato específico.',
        strongPromptBenefit: 'Claro, específico, con contexto sobre la audiencia y formato deseado.',
        importantTip: '💡 Consejo Importante',
        tipDescription: 'Cuanto más específico y estructurado sea tu prompt, mejores y más consistentes serán las respuestas. Piensa en el prompt como una receta: ingredientes claros llevan a resultados predecibles.',
      },
    },
    chapter2: {
      title: 'Claridad y Dirección',
      description: 'Aprende a construir prompts claros y directos para obtener respuestas más precisas.',
      content: {
        mainTitle: 'Ser Claro y Directo',
        introduction: 'La claridad es fundamental para obtener respuestas precisas. Los modelos de IA interpretan literalmente lo que dices, por lo que las ambigüedades pueden llevar a resultados inesperados.',
        clarityPrinciples: 'Principios de Claridad',
        decompositionTitle: 'Técnica: Descomposición',
        decompositionDesc: 'Cuando tu tarea es compleja, divídela en pasos más pequeños y claros:',
        goldenRuleTitle: 'Regla de Oro',
        goldenRuleDesc: 'Si necesitas releer tu propio prompt para entenderlo, la IA también tendrá dificultades. La simplicidad y claridad siempre vencen a la complejidad innecesaria.',
        principles: {
          directLanguage: {
            title: 'Usa lenguaje directo',
            bad: 'Quizás podrías echar un vistazo a este texto y ver si hay algo que se pueda mejorar...',
            good: 'Revisa este texto y corrige errores gramaticales y de puntuación.',
          },
          avoidMultipleQuestions: {
            title: 'Evita múltiples preguntas en una',
            bad: '¿Qué es Python y cómo lo aprendo y cuánto tiempo toma?',
            good: '¿Qué es Python? Lista los pasos para aprender Python para principiantes.',
          },
          beSpecificAboutScope: {
            title: 'Sé específico sobre el alcance',
            bad: 'Habla sobre marketing digital',
            good: 'Explica las 5 principales estrategias de marketing digital para pequeñas empresas en 2024.',
          },
        },
        decompositionSteps: {
          step1: 'Identifica el tema principal',
          step2: 'Lista los puntos clave a abordar',
          step3: 'Define el formato de salida esperado',
        },
        avoid: 'Evita:',
        prefer: 'Prefiere:',
      },
    },
    chapter3: {
      title: 'Asignación de Roles',
      description: 'Descubre cómo dar roles específicos a la IA para respuestas más dirigidas.',
      content: {
        mainTitle: 'Asignando Funciones',
        introduction: 'Al asignar una función o rol específico a la IA, moldeas el estilo, tono y profundidad de las respuestas. Esta técnica se conoce como Role Prompting.',
        whyItWorksTitle: '¿Por qué funciona?',
        whyItWorksDesc: 'Los modelos de IA se entrenan en vastas cantidades de texto que incluyen diferentes estilos y contextos profesionales. Al especificar un rol, activas patrones de lenguaje y conocimiento asociados a esa función.',
        examplesTitle: 'Ejemplos de Funciones',
        recommendedStructureTitle: 'Estructura Recomendada',
        practicalComparisonTitle: 'Comparación Práctica',
        advancedTipTitle: '💡 Consejo Avanzado',
        advancedTipDesc: 'Combina múltiples características para crear personas más específicas:',
        advancedTipExample: 'Eres una desarrolladora full-stack con 10 años de experiencia, especializada en React y Node.js, conocida por escribir código limpio y bien documentado...',
        withoutRoleTitle: 'Sin Función Definida',
        withoutRoleResult: 'Respuesta genérica y superficial',
        withRoleTitle: 'Con Función Definida',
        withRoleResult: 'Análisis técnico detallado y específico',
        roles: {
          businessConsultant: {
            title: 'Consultor de Negocios',
            prompt: 'Como consultor de negocios especializado en startups, analiza este plan de negocios...',
          },
          scienceTeacher: {
            title: 'Profesor de Ciencias',
            prompt: 'Como profesor de física de secundaria, explica el concepto de entropía...',
          },
          wellnessCoach: {
            title: 'Coach de Bienestar',
            prompt: 'Como coach de bienestar y mindfulness, sugiere técnicas para reducir la ansiedad...',
          },
          uxSpecialist: {
            title: 'Especialista en UX',
            prompt: 'Como especialista en experiencia de usuario, evalúa este flujo de navegación...',
          },
        },
        structureTemplate: `Eres un [FUNCIÓN] con [EXPERIENCIA].

Tu objetivo es [TAREA].

Considera [CONTEXTO RELEVANTE].

Proporciona la respuesta en [FORMATO].`,
        comparisonExamples: {
          withoutRole: '¿Cómo puedo mejorar mi código?',
          withRole: 'Como ingeniero de software senior especializado en rendimiento, revisa este código y sugiere optimizaciones específicas.',
        },
      },
    },
    chapter4: {
      title: 'Separación de Datos e Instrucciones',
      description: 'Técnicas para estructurar prompts complejos separando claramente datos y comandos.',
      content: {
        mainTitle: 'Separando Datos de Instrucciones',
        introduction: 'Cuando trabajamos con prompts complejos que incluyen datos variables (textos para analizar, código para revisar, etc.), es crucial separar claramente las instrucciones de los datos.',
        whyItMattersTitle: '¿Por qué esto importa?',
        whyItMattersDesc: 'Sin separación clara, la IA puede confundir datos con instrucciones, llevando a resultados impredecibles. Los delimitadores ayudan a crear límites claros.',
        delimitationTechniquesTitle: 'Técnicas de Delimitación',
        practicalExampleTitle: 'Ejemplo Práctico Completo',
        checklistTitle: '✓ Lista de Verificación de Buenas Prácticas',
        techniques: {
          tripleDelimiters: {
            title: '1. Delimitadores Triples',
            description: 'Útil para: código, textos largos, contenido con formato especial',
            example: `Analiza el siguiente texto y resume en 3 puntos:

\`\`\`
[TEXTO DEL USUARIO AQUÍ]
Este es el contenido que necesita ser analizado.
Puede tener múltiples líneas e incluso "comillas".
\`\`\`

Proporciona el resumen en puntos de bala.`,
            useFor: 'código, textos largos, contenido con formato especial',
          },
          xmlTags: {
            title: '2. Etiquetas XML',
            description: 'Útil para: múltiples bloques de datos, estructura jerárquica',
            example: `Recibirás un documento y una pregunta.

<document>
[DOCUMENTO COMPLETO]
</document>

<question>
[PREGUNTA DEL USUARIO]
</question>

Responde la pregunta basándote solo en la información del documento.`,
            useFor: 'múltiples bloques de datos, estructura jerárquica',
          },
          sectionMarkers: {
            title: '3. Marcadores de Sección',
            description: 'Útil para: múltiples secciones, comparaciones, flujos de trabajo complejos',
            example: `=== INSTRUCCIÓN ===
Compara los dos artículos a continuación y enumera las diferencias principales.

=== ARTÍCULO 1 ===
[Texto del primer artículo]

=== ARTÍCULO 2 ===
[Texto del segundo artículo]

=== FORMATO DE SALIDA ===
Enumera las diferencias en tabla comparativa.`,
            useFor: 'múltiples secciones, comparaciones, flujos de trabajo complejos',
          },
        },
        practicalExample: `Eres un experto en análisis de sentimientos.

Analiza el sentimiento de la siguiente reseña de producto:

<review>
El producto llegó rápido, pero la calidad no es lo que esperaba.
El empaque estaba dañado y faltaban piezas. No lo recomiendo.
</review>

<instructions>
1. Clasifica el sentimiento como: Positivo, Neutral o Negativo
2. Identifica los aspectos mencionados (entrega, calidad, empaque)
3. Da una puntuación del 1 al 5 para cada aspecto
</instructions>

Responde en formato JSON.`,
        checklist: [
          'Usa delimitadores consistentes en todo el prompt',
          'Elige delimitadores que no aparezcan en los datos',
          'Explica la estructura antes de presentar los datos',
          'Mantén las instrucciones separadas de los datos variables',
        ],
      },
    },
    chapter5: {
      title: 'Formateo de Salida',
      description: 'Aprende a especificar formatos estructurados para obtener respuestas consistentes e integrables.',
      content: {
        mainTitle: 'Formateando la Salida',
        introduction: 'Especificar el formato de respuesta es esencial para la integración con sistemas y para garantizar consistencia. La IA puede generar salidas en diversos formatos estructurados.',
        popularFormatsTitle: 'Formatos Populares',
        outputTemplatesTitle: 'Plantillas de Salida',
        effectiveFormattingTitle: 'Consejos para Formateo Efectivo',
        advancedTechniqueTitle: '💡 Técnica Avanzada: Schema JSON',
        formats: {
          json: {
            title: 'JSON',
            description: 'Ideal para integración con APIs y aplicaciones',
            prompt: `Extrae la información principal de esta biografía y devuelve en JSON:

Nombre, Profesión, Nacionalidad, Años de Experiencia

Biografía: "Marie Curie fue una física y química polaca..."`,
            expectedResponse: `{
  "nombre": "Marie Curie",
  "profesion": "Física y Química",
  "nacionalidad": "Polaca",
  "anos_experiencia": "No especificado"
}`,
          },
          markdown: {
            title: 'Markdown',
            description: 'Perfecto para documentación y contenido web',
            prompt: `Crea una guía rápida sobre Git en formato Markdown con:
- Título principal
- 3 secciones (Instalación, Comandos Básicos, Mejores Prácticas)
- Código en bloques de código
- Enlaces relevantes`,
          },
          xml: {
            title: 'XML',
            description: 'Útil para datos jerárquicos y sistemas legados',
            prompt: `Convierte esta lista de productos a XML:
- iPhone 14, $999, Electrónicos
- Notebook Dell, $700, Informática

Usa las etiquetas: <productos>, <producto>, <nombre>, <precio>, <categoria>`,
          },
        },
        templateExample: {
          description: 'Proporciona una plantilla vacía para que la IA complete:',
          example: `Analiza el feedback del cliente y completa la plantilla:

PLANTILLA:
---
Sentimiento: [Positivo/Neutral/Negativo]
Categoría: [Producto/Servicio/Entrega/Otro]
Prioridad: [Alta/Media/Baja]
Acción Recomendada: [Texto libre]
---

Feedback: "El producto es excelente, pero tardó 2 semanas en llegar."`,
        },
        tips: [
          {
            title: 'Sé explícito',
            description: 'Especifica exactamente el formato deseado, incluyendo estructura de claves, nombres de campos, etc.',
          },
          {
            title: 'Da ejemplos',
            description: 'Muestra un ejemplo del formato esperado siempre que sea posible',
          },
          {
            title: 'Define tipos',
            description: 'Indica si los campos deben ser strings, números, arrays, booleanos, etc.',
          },
          {
            title: 'Valida después',
            description: 'Siempre valida la salida de la IA antes de usar en producción',
          },
        ],
        advancedTechnique: {
          description: 'Para máxima precisión, proporciona un JSON Schema describiendo la estructura esperada:',
          example: `Devuelve los datos siguiendo este schema:
{
  "type": "object",
  "properties": {
    "titulo": {"type": "string"},
    "precio": {"type": "number"},
    "disponible": {"type": "boolean"}
  },
  "required": ["titulo", "precio"]
}`,
        },
      },
    },
    chapter6: {
      title: 'Chain-of-Thought (Razonamiento Paso a Paso)',
      description: 'Técnica avanzada para obtener razonamientos más precisos mostrando el proceso de pensamiento.',
      content: {
        mainTitle: 'Precognición (Pensando Paso a Paso)',
        cotExplanation: 'Técnica que pide a la IA mostrar su razonamiento antes de dar la respuesta final, resultando en respuestas más precisas y confiables, especialmente para tareas complejas.',
        howItWorksTitle: 'Cómo Funciona',
        withoutCotTitle: '❌ Sin Chain-of-Thought',
        withCotTitle: '✓ Con Chain-of-Thought',
        effectiveTriggersTitle: 'Frases Gatillo Efectivas',
        advancedExampleTitle: 'Ejemplo Avanzado',
        whenToUseTitle: 'Cuándo Usar CoT',
        zeroShotTechniqueTitle: '💡 Técnica Zero-Shot CoT',
        comparison: {
          without: {
            title: '❌ Sin Chain-of-Thought',
            prompt: 'Una tienda tiene 23 manzanas. Vendió 15 por la mañana y compró 8 más por la tarde. ¿Cuántas manzanas tiene ahora?',
            response: '16 manzanas',
            issue: 'Respuesta directa, sin mostrar el razonamiento. Podría estar mal y no sabes por qué.',
          },
          with: {
            title: '✓ Con Chain-of-Thought',
            prompt: 'Una tienda tiene 23 manzanas. Vendió 15 por la mañana y compró 8 más por la tarde. ¿Cuántas manzanas tiene ahora? Piensa paso a paso.',
            response: `Paso 1: Comenzó con 23 manzanas
Paso 2: Vendió 15 → 23 - 15 = 8
Paso 3: Compró 8 → 8 + 8 = 16
Respuesta: 16 manzanas`,
            benefit: 'Razonamiento transparente permite verificar cada paso.',
          },
        },
        triggers: [
          {
            phrase: 'Piensa paso a paso',
            use: 'Problemas matemáticos y lógicos',
          },
          {
            phrase: 'Antes de responder, analiza...',
            use: 'Análisis complejos y decisiones',
          },
          {
            phrase: 'Muestra tu razonamiento',
            use: 'Explicaciones y tutoriales',
          },
        ],
        advancedExample: `Necesitas decidir si implementar una nueva funcionalidad.

Contexto:
- El equipo tiene 3 desarrolladores
- Plazo de 2 semanas
- Funcionalidad compleja estimada en 40 horas
- Otras 3 tareas prioritarias pendientes

Antes de dar tu recomendación, analiza:
1. La capacidad real del equipo
2. El impacto de las otras tareas
3. Los riesgos involucrados
4. Alternativas posibles

Luego, proporciona tu recomendación con justificación.`,
        whenToUse: {
          ideal: [
            'Problemas matemáticos',
            'Razonamiento lógico',
            'Análisis de decisiones',
            'Depuración de código',
            'Planificación de proyectos',
          ],
          unnecessary: [
            'Preguntas factuales simples',
            'Traducción de textos',
            'Formateo de datos',
            'Tareas triviales',
            'Respuestas creativas libres',
          ],
        },
        zeroShotTechnique: {
          description: 'La frase mágica más simple y efectiva:',
          magicPhrase: 'Pensemos paso a paso.',
          studyResult: 'Los estudios muestran que solo agregar esta frase puede mejorar la precisión hasta en un 50% en tareas de razonamiento complejo.',
        },
      },
    },
    chapter7: {
      title: 'Few-Shot Learning (Usando Ejemplos)',
      description: 'Aprende a usar ejemplos concretos para enseñar patrones específicos a la IA.',
      content: {
        mainTitle: 'Usando Ejemplos',
        introduction: 'Few-shot learning es la técnica de proporcionar ejemplos concretos del comportamiento deseado antes de presentar la tarea real. La IA aprende el patrón a través de los ejemplos.',
        whyItWorks: 'Los ejemplos enseñan a la IA el estilo, formato y tipo de razonamiento que esperas, haciendo las respuestas más consistentes y alineadas con tus necesidades.',
        typesTitle: 'Tipos de Few-Shot',
        effectiveStructureTitle: 'Estructura de Ejemplos Efectivos',
        practicalExampleTitle: 'Ejemplo Práctico Completo',
        advancedTipsTitle: 'Consejos Avanzados',
        whenEssentialTitle: '⚡ Cuándo Few-Shot es Esencial',
        shotTypes: {
          zeroShot: {
            title: 'Zero-Shot',
            description: 'Sin ejemplos, solo instrucciones',
            example: `Clasifica el sentimiento de esta oración como positivo, negativo o neutral:

"La película fue interesante pero muy larga."

Sentimiento:`,
          },
          fewShot: {
            title: 'Few-Shot (1-5 ejemplos)',
            description: 'Algunos ejemplos para establecer el patrón',
            example: `Clasifica el sentimiento de estas oraciones:

Oración: "¡Amé cada momento de la película!"
Sentimiento: Positivo

Oración: "Pésima experiencia, no lo recomiendo."
Sentimiento: Negativo

Oración: "El producto está bien, nada especial."
Sentimiento: Neutral

Ahora clasifica:
Oración: "La película fue interesante pero muy larga."
Sentimiento:`,
          },
        },
        structure: {
          consistentFormat: {
            title: '1. Formato Consistente',
            description: 'Todos los ejemplos deben seguir exactamente el mismo formato:',
            example: `Input: [datos de entrada]
Output: [resultado esperado]

Input: [otros datos]
Output: [otro resultado]`,
          },
          representativeVariety: {
            title: '2. Variedad Representativa',
            description: 'Los ejemplos deben cubrir diferentes casos y variaciones:',
            points: [
              'Casos simples y complejos',
              'Diferentes tipos de entrada',
              'Casos límite cuando sea relevante',
            ],
          },
          qualityOverQuantity: {
            title: '3. Calidad sobre Cantidad',
            description: 'Generalmente 2-5 ejemplos bien elegidos son más efectivos que muchos ejemplos redundantes.',
          },
        },
        practicalExample: {
          title: 'Caso: Extracción de Información',
          example: `Extrae nombre, email y teléfono de los textos:

Ejemplo 1:
Texto: "Hola, soy Juan Silva, mi email es juan@email.com"
Resultado: {"nombre": "Juan Silva", "email": "juan@email.com", "telefono": null}

Ejemplo 2:
Texto: "María Santos - (11) 98765-4321 - maria.s@company.com"
Resultado: {"nombre": "María Santos", "email": "maria.s@company.com", "telefono": "(11) 98765-4321"}

Ejemplo 3:
Texto: "Contacto: pedro@site.com.br o llama (21) 3333-4444"
Resultado: {"nombre": null, "email": "pedro@site.com.br", "telefono": "(21) 3333-4444"}

Ahora extrae:
Texto: "Carlos Oliveira, teléfono (85) 99999-8888, email: carlos.o@domain.net"
Resultado:`,
        },
        advancedTips: [
          {
            title: 'Ejemplos Progresivos',
            description: 'Comienza con casos simples y aumenta la complejidad gradualmente',
          },
          {
            title: 'Contra-ejemplos',
            description: 'Incluye ejemplos de lo que NO hacer para evitar comportamientos no deseados',
          },
          {
            title: 'Explica el Patrón',
            description: 'Añade una breve explicación del patrón antes de los ejemplos',
          },
          {
            title: 'Prueba y Refina',
            description: 'Ajusta tus ejemplos basándote en las respuestas reales de la IA',
          },
        ],
        whenEssential: [
          'Tareas con formato específico o no convencional',
          'Cuando necesitas consistencia absoluta',
          'Clasificaciones personalizadas o categorizaciones específicas del dominio',
          'Cuando las instrucciones verbales solas no son suficientes',
        ],
      },
    },
    chapter8: {
      title: 'Evitando Alucinaciones',
      description: 'Estrategias para minimizar información incorrecta y garantizar precisión en las respuestas.',
      content: {
        mainTitle: 'Evitando Alucinaciones',
        hallucinationDefinition: 'Las alucinaciones ocurren cuando la IA genera información que parece plausible pero es factualmente incorrecta o inventada. Es uno de los mayores desafíos en aplicaciones de IA.',
        mitigationStrategiesTitle: 'Estrategias de Mitigación',
        practicalExamplesTitle: 'Ejemplos Prácticos',
        verificationTechniquesTitle: 'Técnicas de Verificación',
        strategies: [
          {
            title: '1. Grounding con Fuentes',
            description: 'Proporciona fuentes confiables y pide basar respuestas solo en ellas',
            example: 'Basándote solo en el documento adjunto, responde...',
          },
          {
            title: '2. Admisión de Incertidumbre',
            description: 'Instruye a la IA a admitir cuando no sepa algo',
            example: 'Si no conoces la respuesta, di "No tengo información suficiente"',
          },
          {
            title: '3. Verificación Cruzada',
            description: 'Pide múltiples perspectivas o verificaciones',
            example: 'Proporciona la respuesta y enumera las fuentes que la respaldan',
          },
        ],
        examples: [
          {
            title: 'Prompt Problemático',
            content: '¿Cuáles son los últimos descubrimientos sobre la cura del cáncer?',
          },
          {
            title: 'Prompt Mejorado',
            content: 'Basándote solo en los artículos científicos proporcionados, resume los descubrimientos sobre tratamientos de cáncer, indicando el nivel de evidencia de cada uno.',
          },
        ],
        verificationTips: [
          'Siempre proporciona fuentes cuando sea posible',
          'Usa disclaimers apropiados',
          'Pide a la IA que cite sus fuentes',
          'Evita preguntas sobre eventos muy recientes',
        ],
      },
    },
    chapter9: {
      title: 'Casos de Uso Complejos',
      description: 'Ejemplos prácticos de prompts profesionales aplicados a escenarios reales del mercado.',
      content: {
        mainTitle: 'Creando Prompts Complejos',
        introduction: 'En este módulo avanzado, exploramos casos de uso reales de diferentes sectores, aplicando todas las técnicas aprendidas para crear prompts de nivel profesional.',
        casesTitle: 'Casos Prácticos',
        cases: [
          {
            title: 'Caso 1: Chatbot de Atención al Cliente',
            subtitle: 'E-commerce de electrónicos',
            requirements: [
              'Tono profesional pero amigable',
              'Acceso a base de conocimiento de productos',
              'Escalación a humanos cuando sea necesario',
            ],
            example: 'Eres un asistente de atención especializado en electrónicos...',
          },
          {
            title: 'Caso 2: Análisis Jurídico',
            subtitle: 'Bufete de abogados',
            requirements: [
              'Lenguaje técnico preciso',
              'Referencias a legislación',
              'Análisis de precedentes',
            ],
            example: 'Como asistente jurídico especializado, analiza el contrato...',
          },
        ],
      },
    },
    chapter10: {
      title: 'Introducción a LangSmith',
      description: 'Plataforma profesional para desarrollo, monitoreo y evaluación de aplicaciones con LLMs.',
      content: {
        mainTitle: 'Introducción a LangSmith',
        introduction: 'LangSmith es una plataforma profesional de desarrollo, monitoreo y evaluación de aplicaciones con modelos de lenguaje (LLM). Esencial para quienes trabajan seriamente con IA.',
      },
    },
    chapter11: {
      title: 'Métricas de Evaluación',
      description: 'Métricas principales para evaluar calidad, confiabilidad y rendimiento de sistemas de IA.',
      content: {
        mainTitle: 'Métricas de Evaluación',
        introduction: 'La evaluación adecuada de sistemas de IA es crucial para garantizar calidad, confiabilidad y rendimiento. En este módulo, exploramos las principales métricas usadas para evaluar modelos de lenguaje.',
      },
    },
    chapter12: {
      title: 'Embeddings y Similaridad',
      description: 'Representaciones numéricas de texto que capturan significado semántico para comparaciones matemáticas.',
      content: {
        mainTitle: 'Embeddings y Similaridad',
        introduction: 'Los embeddings son representaciones numéricas de texto que capturan significado semántico, permitiendo que las computadoras "entiendan" y comparen textos de forma matemática.',
      },
    },
    chapter13: {
      title: 'Ecosistema de Herramientas de IA',
      description: 'Principales herramientas para desarrollo, monitoreo y optimización de aplicaciones con LLMs.',
      content: {
        mainTitle: 'Ecosistema de Herramientas de IA',
        introduction: 'Explora las principales herramientas que facilitan el desarrollo, monitoreo y optimización de aplicaciones con Large Language Models (LLMs).',
      },
    },
    common: {
      everyEffectivePrompt: 'Todo prompt efectivo contiene algunos o todos estos elementos:',
    },
  },

  playgroundContent: {
    title: 'Playground de Prompts',
    subtitle: 'Prueba y mejora tus prompts con análisis inteligente',
    inputLabel: 'Tu Prompt',
    charactersCount: 'caracteres',
    analysisTitle: 'Análisis del Prompt',
    metricsTitle: 'Métricas Detalladas',
    suggestionsTitle: 'Sugerencias de Mejora',
    overallScore: 'Puntuación General',
    clarity: 'Claridad',
    specificity: 'Especificidad',
    structure: 'Estructura',
    contextuality: 'Contextualidad',
    persona: 'Persona',
    outputFormat: 'Formato de Salida',
    strengths: 'Fortalezas',
    improvements: 'Mejoras Sugeridas',
    improvedVersion: 'Versión Mejorada',
    detectedTechniques: 'Técnicas Detectadas',
    tabs: {
      analysis: 'Análisis',
      metrics: 'Métricas',
      suggestions: 'Sugerencias',
    },
    buttons: {
      analyze: 'Analizar Prompt',
      clear: 'Limpiar',
      copy: 'Copiar',
      useImproved: 'Usar Versión Mejorada',
    },
    noPrompt: 'Ingresa un prompt para comenzar el análisis',
    analyzing: 'Analizando tu prompt...',
    qualityScore: 'Calidad General del Prompt',
    excellentScore: '¡Excelente!',
    goodScore: 'Bueno, pero puede mejorar',
    poorScore: 'Necesita mejoras significativas',
    detectedPersona: 'Persona Detectada',
    metrics: {
      clarity: 'Claridad',
      clarityDesc: 'Qué tan clara y comprensible es la instrucción',
      specificity: 'Especificidad',
      specificityDesc: 'Nivel de detalle y precisión en las instrucciones',
      structure: 'Estructura',
      structureDesc: 'Organización y formato del prompt',
      contextuality: 'Contextualización',
      contextualityDesc: 'Cantidad y calidad del contexto proporcionado',
      persona: 'Persona/Rol',
      personaDesc: 'Definición del rol y tono de voz',
      outputFormat: 'Formato de Salida',
      outputFormatDesc: 'Especificación clara del formato deseado',
    },
    guide: {
      title: '🎯 Guía Esencial de Prompt Engineering',
      personaContext: {
        title: '🎭 Persona y Contexto',
        description: 'Define un rol específico y contexto claro',
        example: 'Eres un experto en...',
      },
      clearStructure: {
        title: '📋 Estructura Clara',
        description: 'Usa formato y organiza en secciones',
        example: '1. Primero... 2. Luego...',
      },
      specificOutput: {
        title: '🎯 Salida Específica',
        description: 'Define formato, estilo y estructura',
        example: 'Formato: JSON con...',
      },
      practicalExamples: {
        title: '💡 Ejemplos Prácticos',
        description: 'Few-shot learning con casos reales',
        example: 'Ejemplo: Entrada → Salida',
      },
      chainOfThought: {
        title: '🧠 Chain-of-Thought',
        description: 'Promueve razonamiento paso a paso',
        example: 'Piensa paso a paso...',
      },
      constraints: {
        title: '⚡ Restricciones y Límites',
        description: 'Define lo que NO hacer',
        example: 'No uses... Evita...',
      },
    },
    examplePrompts: {
      marketingConsultant: {
        category: 'Role Prompting',
        title: 'Consultor de Marketing',
        prompt: 'Eres un consultor senior de marketing digital con 10 años de experiencia en e-commerce.\n\nSituación: Una startup de productos sostenibles necesita una estrategia de contenido para Instagram.\n\nCrea 3 ideas de posts que:\n- Eduquen sobre sostenibilidad\n- Muestren los productos de forma creativa\n- Enganchen a audiencia joven (18-35 años)\n\nFormato: Para cada post, proporciona:\n- Título llamativo\n- Descripción del contenido\n- 5 hashtags relevantes\n- Call-to-action específico',
      },
      investmentAnalysis: {
        category: 'Chain-of-Thought',
        title: 'Análisis de Inversión',
        prompt: 'Eres un analista financiero especializado en evaluación de startups.\n\nAnaliza la siguiente startup: "EcoLogistics - plataforma que optimiza rutas de entrega para reducir emisiones de carbono".\n\nPiensa paso a paso:\n1. Primero, evalúa el mercado y oportunidad\n2. Luego, considera riesgos y desafíos\n3. A continuación, analiza el potencial de crecimiento\n4. Finalmente, haz una recomendación\n\nFormato: Estructura tu análisis siguiendo exactamente estos 4 pasos, con conclusiones claras para cada uno.',
      },
      feedbackClassification: {
        category: 'Few-Shot Learning',
        title: 'Clasificación de Feedback',
        prompt: 'Eres un experto en análisis de customer success. Clasifica feedbacks de clientes en categorías.\n\nEjemplos:\nFeedback: "La app es genial, pero tarda mucho en cargar"\nCategoría: Funcionalidad\nSentimiento: Mixto\nPrioridad: Media\n\nFeedback: "Cancelando suscripción, muy caro"\nCategoría: Precio\nSentimiento: Negativo\nPrioridad: Alta\n\nFeedback: "¡Equipo de soporte muy atento!"\nCategoría: Atención\nSentimiento: Positivo\nPrioridad: Baja\n\nAhora clasifica:\nFeedback: "Producto funciona bien, pero faltan tutoriales"\n\nFormato JSON: {"categoria": "", "sentimiento": "", "prioridad": "", "justificacion": ""}',
      },
      ragSystem: {
        category: 'Prompt Complejo',
        title: 'Sistema RAG Simulado',
        prompt: 'Eres un asistente especializado en documentación técnica de APIs.\n\nContexto: Tienes acceso a la documentación de la API de pagos "PayFast".\n\nDocumentación disponible:\n- Endpoint POST /payments: crea pago (campos: amount, currency, customer_id)\n- Endpoint GET /payments/{id}: consulta estado del pago\n- Códigos de respuesta: 200 (éxito), 400 (datos inválidos), 401 (no autorizado)\n- Autenticación: Bearer token en header Authorization\n\nPregunta del usuario: "¿Cómo crear un pago de $50.00 para el cliente ID 123?"\n\nInstrucciones:\n1. Responde basado SOLO en la documentación proporcionada\n2. Si no tienes información suficiente, di claramente\n3. Proporciona ejemplo práctico de código\n4. Menciona posibles códigos de error\n\nFormato: Respuesta estructurada con explicación + código + observaciones importantes.',
      },
    },
  },

  // Traducciones de datos de módulos
  moduleData: {
    chapter1: {
      title: 'Estructura Básica de Prompt',
      description: 'Aprende los fundamentos de cómo estructurar un prompt efectivo para modelos de IA.',
      topics: ['Componentes de un prompt', 'Sintaxis básica', 'Mejores prácticas iniciales'],
    },
    chapter2: {
      title: 'Ser Claro y Directo',
      description: 'Descubre cómo la claridad y objetividad mejoran drásticamente las respuestas de la IA.',
      topics: ['Claridad en comunicación', 'Evitar ambigüedades', 'Instrucciones precisas'],
    },
    chapter3: {
      title: 'Asignando Funciones',
      description: 'Aprende a asignar roles y contextos específicos para obtener respuestas más adecuadas.',
      topics: ['Role prompting', 'Contexto profesional', 'Personalidad de IA'],
    },
    chapter4: {
      title: 'Separando Datos de Instrucciones',
      description: 'Técnicas para estructurar prompts complejos separando claramente datos y comandos.',
      topics: ['Estructuración avanzada', 'Delimitadores', 'Etiquetas XML'],
    },
    chapter5: {
      title: 'Formateando la Salida',
      description: 'Controla el formato de las respuestas: JSON, XML, Markdown y otras estructuras.',
      topics: ['Formateo de salida', 'JSON estructurado', 'Plantillas de respuesta'],
    },
    chapter6: {
      title: 'Precognición (Pensando Paso a Paso)',
      description: 'Usa chain-of-thought para hacer que la IA razone antes de responder.',
      topics: ['Chain-of-thought', 'Razonamiento explícito', 'Paso a paso'],
    },
    chapter7: {
      title: 'Usando Ejemplos',
      description: 'Few-shot learning: enseña a la IA por ejemplos para resultados más consistentes.',
      topics: ['Few-shot prompting', 'Ejemplos efectivos', 'Reconocimiento de patrones'],
    },
    chapter8: {
      title: 'Evitando Alucinaciones',
      description: 'Técnicas avanzadas para minimizar respuestas incorrectas o inventadas.',
      topics: ['Grounding', 'Verificación de hechos', 'Confiabilidad'],
    },
    chapter9: {
      title: 'Prompts Complejos',
      description: 'Casos de uso reales: chatbots, servicios legales, finanzas y desarrollo.',
      topics: ['Casos de uso industriales', 'Integración de sistemas', 'Prompts multi-etapa'],
    },
    chapter10: {
      title: 'Introducción a LangSmith',
      description: 'Conoce la plataforma de evaluación y monitoreo de aplicaciones LLM.',
      topics: ['Visión general LangSmith', 'Datasets', 'Tracing'],
    },
    chapter11: {
      title: 'Métricas de Evaluación',
      description: 'Entiende Precision, Recall, F1-score, Faithfulness y otras métricas.',
      topics: ['Métricas de clasificación', 'Métricas RAG', 'LLM-as-a-Judge'],
    },
    chapter12: {
      title: 'Embeddings y Similitud',
      description: 'Visualiza y comprende embeddings y búsqueda por similitud semántica.',
      topics: ['Vector embeddings', 'Similitud coseno', 'Búsqueda semántica'],
    },
    chapter13: {
      title: 'Ecosistema de Herramientas de IA',
      description: 'Explora LangChain, LangSmith, LangFuse, LlamaIndex y PromptLayer con ejemplos prácticos.',
      topics: ['Framework LangChain', 'Observabilidad LangSmith', 'LlamaIndex RAG', 'Versionado de prompts'],
    },
  },

  playgroundAnalysis: {
    hasRole: 'Tiene definición de rol',
    hasContext: 'Tiene contexto adecuado',
    hasFormat: 'Tiene formato especificado',
    hasExamples: 'Incluye ejemplos',
    hasChainOfThought: 'Usa razonamiento paso a paso',
    hasConstraints: 'Tiene restricciones definidas',
    addRole: 'Agrega un rol específico para la IA',
    addContext: 'Proporciona más contexto sobre la situación',
    addFormat: 'Especifica el formato de respuesta deseado',
    addExamples: 'Incluye ejemplos para mayor claridad',
    addChainOfThought: 'Pide a la IA que muestre el razonamiento',
    addConstraints: 'Define limitaciones o restricciones',
    improveClarity: 'Sé más específico y claro',
    improveStructure: 'Organiza mejor la estructura del prompt',
    professionalPersona: 'Experto profesional',
    creativeProfessional: 'Profesional creativo',
    technicalExpert: 'Experto técnico',
    educator: 'Educador',
    analyst: 'Analista',
  },

  difficulty: {
    beginner: 'Principiante',
    intermediate: 'Intermedio',
    advanced: 'Avanzado',
  },

  time: {
    minutes: 'min',
    estimatedTime: 'Tiempo estimado',
  },

  actions: {
    backToModules: 'Volver a los módulos',
    complete: 'Marcar como completado',
    completed: 'Completado',
    markIncomplete: 'Marcar como incompleto',
    continue: 'Continuar',
    start: 'Empezar',
    analyze: 'Analizar',
    clear: 'Limpiar',
    improve: 'Mejorar',
    copy: 'Copiar',
    share: 'Compartir',
  },

  status: {
    analyzing: 'Analizando...',
    completed: 'Completado',
    inProgress: 'En progreso',
    notStarted: 'No iniciado',
    success: 'Éxito',
    error: 'Error',
    noResults: 'No se encontraron resultados',
  },

  common: {
    loading: 'Cargando...',
    error: 'Error',
    tryAgain: 'Intentar de nuevo',
    close: 'Cerrar',
    save: 'Guardar',
    cancel: 'Cancelar',
    confirm: 'Confirmar',
    yes: 'Sí',
    no: 'No',
    or: 'o',
    and: 'y',
    of: 'de',
    in: 'en',
    by: 'por',
    with: 'con',
    from: 'de',
    to: 'a',
  },
};