# 🏗️ Arquitetura do Projeto - PromptLab

Este documento descreve a estrutura de pastas e a arquitetura do projeto PromptLab.

## 📁 Estrutura de Pastas

```
src/
├── app/                          # 🚀 Configuração e inicialização da aplicação
│   ├── App.tsx                   # Componente principal da aplicação
│   └── main.tsx                  # Entry point da aplicação
│
├── components/                   # 🧩 Componentes reutilizáveis organizados por categoria
│   ├── layout/                   # Layout components (Navigation, Header, Footer)
│   │   ├── Navigation.tsx
│   │   └── index.ts
│   └── ui/                       # Componentes de UI básicos (Button, Card, Modal)
│
├── features/                     # 🎯 Features organizadas por domínio de negócio
│   ├── home/                     # Feature: Página inicial
│   │   ├── Hero.tsx
│   │   └── index.ts
│   │
│   ├── modules/                  # Feature: Sistema de módulos educacionais
│   │   ├── components/           # Componentes específicos dos módulos
│   │   │   ├── ModuleCard.tsx
│   │   │   ├── ModuleGrid.tsx
│   │   │   └── ModuleViewer.tsx
│   │   ├── chapters/             # Conteúdo dos capítulos
│   │   │   ├── Chapter1.tsx
│   │   │   ├── Chapter2.tsx
│   │   │   └── ...
│   │   ├── data/                 # Dados dos módulos
│   │   │   └── modules.ts
│   │   └── index.ts
│   │
│   ├── playground/               # Feature: Playground interativo
│   │   ├── Playground.tsx
│   │   └── index.ts
│   │
│   └── progress/                 # Feature: Acompanhamento de progresso
│       ├── Progress.tsx
│       └── index.ts
│
├── shared/                       # 📚 Código compartilhado entre features
│   ├── components/               # Componentes compartilhados
│   ├── constants/                # Constantes da aplicação
│   │   └── index.ts
│   ├── hooks/                    # Custom hooks reutilizáveis
│   │   └── useModuleProgress.ts
│   ├── lib/                      # Bibliotecas e configurações externas
│   │   └── supabase.ts
│   ├── services/                 # Serviços e APIs
│   ├── types/                    # Definições de tipos TypeScript
│   │   └── modules.ts
│   └── utils/                    # Funções utilitárias
│       └── prompts.ts
│
├── styles/                       # 🎨 Estilos globais
│   └── index.css
│
└── index.ts                      # Barrel exports para facilitar importações
```

## 🎯 Princípios Arquiteturais

### 1. **Feature-Based Architecture**
- Cada feature tem sua própria pasta com componentes, lógica e dados relacionados
- Facilita a manutenção e escalabilidade
- Permite desenvolvimento independente de features

### 2. **Separation of Concerns**
- **app/**: Configuração e inicialização da aplicação
- **components/**: Componentes reutilizáveis e de UI
- **features/**: Lógica de negócio organizada por domínio
- **shared/**: Código compartilhado entre features

### 3. **Barrel Exports**
- Cada pasta possui um arquivo `index.ts` para facilitar importações
- Evita importações longas e complexas
- Melhora a Developer Experience (DX)

### 4. **Path Mapping**
- Aliases configurados no `tsconfig.json` e `vite.config.ts`
- Importações mais limpas usando `@/features/*`, `@/shared/*`, etc.

## 📦 Convenções de Nomenclatura

### Pastas
- **kebab-case** para pastas: `module-viewer/`, `user-progress/`
- **camelCase** para features: `playground/`, `modules/`

### Arquivos
- **PascalCase** para componentes: `ModuleCard.tsx`, `Hero.tsx`
- **camelCase** para utilitários: `prompts.ts`, `moduleProgress.ts`
- **lowercase** para configuração: `index.ts`, `constants.ts`

### Imports
```typescript
// ✅ Recomendado - usando path aliases
import { ModuleCard } from '@/features/modules';
import { useModuleProgress } from '@/shared/hooks';

// ❌ Evitar - imports relativos longos
import { ModuleCard } from '../../../features/modules/components/ModuleCard';
```

## 🔄 Fluxo de Dados

1. **App.tsx** - Gerencia estado global e roteamento
2. **Features** - Gerenciam seu próprio estado e lógica
3. **Shared/Hooks** - Provide estado compartilhado (ex: progresso do usuário)
4. **Shared/Services** - Comunicação com APIs externas

## 📋 Boas Práticas

### Componentes
- Um componente por arquivo
- Props interface sempre definida
- Usar TypeScript estritamente tipado

### Features
- Cada feature é independente
- Compartilhamento via `shared/`
- Testes unitários dentro de cada feature

### Importações
- Usar barrel exports (`index.ts`)
- Preferir path aliases
- Evitar importações circulares

## 🚀 Como Adicionar Nova Feature

1. Criar pasta em `src/features/nova-feature/`
2. Adicionar componentes, hooks, e lógica específica
3. Criar `index.ts` com exports
4. Atualizar `src/index.ts` se necessário
5. Adicionar ao roteamento em `App.tsx`

## 🔧 Scripts Úteis

```bash
# Desenvolvimento
npm run dev

# Build
npm run build

# Linting
npm run lint

# Type checking
npm run typecheck
```

Esta arquitetura promove:
- ✅ **Escalabilidade**: Fácil adicionar novas features
- ✅ **Manutenibilidade**: Código organizado e bem estruturado  
- ✅ **Reutilização**: Componentes e utilitários compartilhados
- ✅ **Developer Experience**: Imports limpos e estrutura clara
- ✅ **Testabilidade**: Cada feature pode ser testada independentemente