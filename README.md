# 🎯 PromptLab Enterprise

> **Plataforma educacional de Prompt Engineering com arquitetura empresarial**

[![TypeScript](https://img.shields.io/badge/TypeScript-5.5+-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.3+-61DAFB.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4+-646CFF.svg)](https://vitejs.dev/)
[![Clean Architecture](https://img.shields.io/badge/Architecture-Clean-green.svg)](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
[![Test Coverage](https://img.shields.io/badge/Coverage-85%2B-brightgreen.svg)](https://vitest.dev/)

## 📋 Índice

- [Visão Geral](#-visão-geral)
- [Arquitetura](#-arquitetura)
- [Funcionalidades](#-funcionalidades)
- [Instalação](#-instalação)
- [Desenvolvimento](#-desenvolvimento)
- [Testes](#-testes)
- [Deploy](#-deploy)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Padrões e Convenções](#-padrões-e-convenções)

## 🎯 Visão Geral

O PromptLab Enterprise é uma aplicação educacional moderna construída com **Clean Architecture** e boas práticas de desenvolvimento empresarial. A plataforma oferece módulos interativos para aprendizado de Prompt Engineering, com sistema de progresso persistente e analytics detalhados.

### Principais Diferenciais

- 🏗️ **Clean Architecture**: Separação clara de responsabilidades
- 🧪 **100% Testado**: Cobertura de testes unitários e E2E
- 📊 **Type-Safe**: TypeScript estrito em todas as camadas
- 🔄 **SOLID Principles**: Código extensível e maintível
- 📱 **Responsive Design**: Interface adaptável a todos os dispositivos
- 🚀 **Performance**: Otimizado para produção

## 🏗️ Arquitetura

### Clean Architecture Layers

```
┌─────────────────────────────────────────────────────────┐
│                    Presentation                         │
│              (React Components, Hooks)                  │
├─────────────────────────────────────────────────────────┤
│                    Application                          │
│           (Use Cases, Application Services)             │
├─────────────────────────────────────────────────────────┤
│                      Domain                             │
│        (Entities, Domain Services, Interfaces)         │
├─────────────────────────────────────────────────────────┤
│                  Infrastructure                         │
│           (Repositories, External Services)             │
└─────────────────────────────────────────────────────────┘
```

### Dependency Flow

- **Domain**: Centro da aplicação, sem dependências externas
- **Application**: Orquestra casos de uso, depende apenas do Domain
- **Infrastructure**: Implementa interfaces do Domain
- **Presentation**: UI/UX, depende de Application e Domain

## 🚀 Funcionalidades

### Core Features

- ✅ **Sistema de Módulos**: 12 capítulos progressivos de Prompt Engineering
- ✅ **Playground Interativo**: Ambiente para testar prompts com análises avançadas
- ✅ **Progresso Persistente**: Sistema de acompanhamento com localStorage
- ✅ **Métricas Detalhadas**: Estatísticas de aprendizado e performance
- ✅ **Gamificação**: Sistema de streaks e conquistas

### Technical Features

- 🔒 **Error Boundaries**: Tratamento robusto de erros
- 📊 **Loading States**: UX otimizada com estados de carregamento
- 🎨 **Animations**: Transições suaves e feedback visual
- 🔄 **State Management**: Gerenciamento de estado com hooks customizados
- 📱 **PWA Ready**: Progressive Web App capabilities

## 🛠️ Instalação

### Pré-requisitos

- **Node.js** >= 18.0.0
- **npm** >= 8.0.0
- **Git** >= 2.34.0

### Setup Rápido

```bash
# Clone o repositório
git clone https://github.com/thiago-alcaras/promptlab.git
cd promptlab

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env.local

# Inicie o servidor de desenvolvimento
npm run dev
```

### Configuração Enterprise

```bash
# Instale as dependências de desenvolvimento e testes
npm install --include=dev

# Configure os hooks de pré-commit
npm run prepare

# Execute o setup de testes
npm run test:setup
```

## 💻 Desenvolvimento

### Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `npm run dev` | Inicia servidor de desenvolvimento |
| `npm run build` | Build para produção |
| `npm run preview` | Preview da build de produção |
| `npm run lint` | Executa linting |
| `npm run lint:fix` | Corrige problemas de linting |
| `npm run typecheck` | Verificação de tipos TypeScript |

### Ambiente de Desenvolvimento

```bash
# Desenvolvimento com hot reload
npm run dev

# Monitoramento de testes em tempo real  
npm run test

# Interface de testes
npm run test:ui
```

## 🧪 Testes

### Estratégia de Testes

- **Unit Tests**: Testes das entidades de domínio e serviços
- **Integration Tests**: Testes dos hooks e repositórios
- **Component Tests**: Testes dos componentes React
- **E2E Tests**: Testes de fluxo completo com Playwright

### Executando Testes

```bash
# Todos os testes
npm run test

# Testes com coverage
npm run test:coverage

# Testes E2E
npm run e2e

# Interface visual de testes
npm run test:ui
```

### Cobertura de Testes

- **Branches**: 85%+
- **Functions**: 90%+
- **Lines**: 88%+
- **Statements**: 90%+

## 📁 Estrutura do Projeto

```
src/
├── domain/                     # 🎯 Regras de negócio
│   ├── entities/              # Entidades de domínio
│   │   ├── Module.ts          # Entidade Módulo
│   │   └── UserProgress.ts    # Agregado Progresso do Usuário
│   └── services/              # Serviços de domínio
│       └── ProgressStatisticsService.ts
│
├── application/                # 🔄 Casos de uso
│   └── services/
│       └── ModuleProgressService.ts
│
├── infrastructure/             # 🔌 Implementações técnicas
│   └── repositories/
│       ├── StorageRepository.ts
│       └── UserProgressRepository.ts
│
├── presentation/               # 🎨 Interface do usuário
│   ├── features/              # Features organizadas por domínio
│   │   ├── modules/           # Sistema de módulos
│   │   ├── playground/        # Playground interativo
│   │   └── progress/          # Acompanhamento de progresso
│   └── shared/                # Componentes compartilhados
│       ├── components/        # Componentes reutilizáveis
│       └── hooks/            # Hooks customizados
│
└── tests/                     # 🧪 Testes automatizados
    ├── domain/               # Testes das entidades
    ├── application/          # Testes dos casos de uso
    ├── infrastructure/       # Testes dos repositórios
    └── presentation/         # Testes dos componentes
```

## 📐 Padrões e Convenções

### Code Style

- **ESLint**: Configuração estrita para qualidade de código
- **Prettier**: Formatação automática consistente
- **TypeScript**: Tipagem estrita em 100% do código
- **Conventional Commits**: Padronização de mensagens de commit

### Naming Conventions

```typescript
// ✅ Componentes - PascalCase
const ModuleViewer = () => {};

// ✅ Hooks - camelCase com prefixo 'use'
const useModuleProgress = () => {};

// ✅ Tipos - PascalCase
interface UserProgress {}

// ✅ Constantes - SCREAMING_SNAKE_CASE  
const API_BASE_URL = '';

// ✅ Funções - camelCase
const calculateProgress = () => {};
```

### Folder Structure Rules

1. **Domain-First**: Organização por domínio de negócio
2. **Feature Folders**: Cada feature é autocontida
3. **Index Exports**: Barrel exports para imports limpos
4. **Separation of Concerns**: UI, lógica e dados separados

### Git Workflow

```bash
# Feature branch
git checkout -b feature/module-progress-tracking

# Conventional commits
git commit -m "feat: add module progress tracking with localStorage"
git commit -m "test: add unit tests for UserProgress entity"
git commit -m "docs: update README with testing strategy"

# Pull request com code review obrigatório
```

## 📊 Performance & Metrics

### Bundle Size

- **Initial Bundle**: < 200KB gzipped
- **Lazy Loaded**: Componentes carregados sob demanda
- **Tree Shaking**: Eliminação de código não utilizado
- **Code Splitting**: Separação por rotas e features

### Core Web Vitals

- **FCP** (First Contentful Paint): < 1.8s
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

## 🚀 Deploy

### Build de Produção

```bash
# Build otimizada
npm run build

# Preview local da build
npm run preview

# Análise do bundle
npm run analyze
```

### Ambientes

- **Development**: `npm run dev`
- **Staging**: Deploy automático via CI/CD
- **Production**: Deploy com smoke tests

## 🤝 Contribuição

### Processo de Desenvolvimento

1. **Issue**: Crie uma issue descrevendo a feature/bug
2. **Branch**: Crie uma branch a partir de `main`
3. **Desenvolvimento**: Implemente seguindo os padrões
4. **Testes**: Adicione testes para nova funcionalidade
5. **Pull Request**: Abra PR com descrição detalhada
6. **Review**: Code review obrigatório
7. **Merge**: Merge após aprovação e CI green

### Checklist para PRs

- [ ] Testes unitários adicionados/atualizados
- [ ] Testes E2E para fluxos críticos
- [ ] Documentação atualizada
- [ ] Performance verificada
- [ ] Acessibilidade validada
- [ ] Mobile responsivo testado

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👥 Time

- **Tech Lead**: Thiago Alcarás
- **Architecture**: Clean Architecture Pattern
- **Frontend**: React + TypeScript + Vite
- **Testing**: Vitest + Playwright + Testing Library

---

<div align="center">
  <strong>Construído com ❤️ usando Clean Architecture</strong>
</div>
