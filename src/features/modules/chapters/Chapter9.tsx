import { MessageSquare, Scale, DollarSign, Code2 } from 'lucide-react';
import { useLanguage } from '../../../shared/i18n/LanguageContext';

export default function Chapter9() {
  const { t } = useLanguage();
  return (
    <div className="prose max-w-none">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">{t.moduleContent.chapter9.content.mainTitle}</h2>

      <p className="text-slate-700 mb-8 text-lg">
        {t.moduleContent.chapter9.content.introduction}
      </p>

      <div className="space-y-8">
        <div className="bg-white rounded-xl border-2 border-blue-200 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-4">
            <div className="flex items-center gap-3 text-white">
              <MessageSquare size={28} />
              <div>
                <h3 className="text-xl font-bold">Caso 1: Chatbot de Atendimento ao Cliente</h3>
                <p className="text-blue-100 text-sm">E-commerce de eletrônicos</p>
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="mb-4">
              <h4 className="font-bold text-slate-800 mb-2">Requisitos:</h4>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Tom profissional mas amigável</li>
                <li>• Acesso a base de conhecimento de produtos</li>
                <li>• Escalação para humanos quando necessário</li>
                <li>• Rastreamento de pedidos</li>
              </ul>
            </div>

            <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
              <pre className="text-xs text-slate-700 whitespace-pre-wrap font-mono leading-relaxed">
{`Você é Alex, assistente virtual da TechStore, especializado em eletrônicos.

PERSONALIDADE:
- Profissional, amigável e prestativo
- Empático com frustrações dos clientes
- Proativo em sugerir soluções

BASE DE CONHECIMENTO:
<produtos>
[Catálogo de produtos aqui]
</produtos>

<policies>
- Prazo de devolução: 30 dias
- Frete grátis: pedidos acima de R$200
- Garantia: 12 meses para todos os produtos
</policies>

INSTRUÇÕES:
1. Cumprimente o cliente de forma personalizada
2. Identifique a necessidade (dúvida, reclamação, pedido)
3. Consulte a base de conhecimento para informações
4. Forneça respostas precisas baseadas apenas nas policies
5. Se não souber, seja honesto e ofereça alternativas
6. Para reclamações complexas, diga: "Vou transferir para um especialista"

FORMATO DE RESPOSTA:
- Parágrafos curtos (2-3 linhas)
- Use bullet points quando listar informações
- Sempre finalize com uma pergunta ou próximo passo

NUNCA:
- Invente informações sobre produtos
- Prometa o que não está nas políticas
- Compartilhe dados de outros clientes
- Use gírias ou linguagem muito informal

Conversa atual:
<historico>
[Histórico da conversa]
</historico>

Cliente: [MENSAGEM DO CLIENTE]

Responda como Alex:`}
              </pre>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border-2 border-amber-200 overflow-hidden">
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-4">
            <div className="flex items-center gap-3 text-white">
              <Scale size={28} />
              <div>
                <h3 className="text-xl font-bold">Caso 2: Análise de Contratos Jurídicos</h3>
                <p className="text-amber-100 text-sm">Escritório de advocacia empresarial</p>
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="mb-4">
              <h4 className="font-bold text-slate-800 mb-2">Requisitos:</h4>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Identificar cláusulas críticas</li>
                <li>• Detectar riscos potenciais</li>
                <li>• Comparar com padrões do mercado</li>
                <li>• Gerar resumo executivo</li>
              </ul>
            </div>

            <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
              <pre className="text-xs text-slate-700 whitespace-pre-wrap font-mono leading-relaxed">
{`Você é um assistente jurídico especializado em análise de contratos comerciais.

TAREFA: Analisar o contrato fornecido e gerar relatório estruturado.

<contrato>
[TEXTO DO CONTRATO]
</contrato>

<checklist_analise>
1. Partes envolvidas e qualificação
2. Objeto do contrato
3. Obrigações e responsabilidades de cada parte
4. Prazos e condições de rescisão
5. Cláusulas penais e multas
6. Confidencialidade e propriedade intelectual
7. Jurisdição e foro
8. Cláusulas atípicas ou potencialmente problemáticas
</checklist_analise>

INSTRUÇÕES DE ANÁLISE:
1. Leia o contrato INTEGRALMENTE
2. Para cada item do checklist:
   - Identifique as cláusulas relevantes
   - Cite os artigos específicos
   - Avalie se está completo/ausente/inadequado
3. Identifique riscos em escala: Crítico/Alto/Médio/Baixo
4. Compare com práticas padrão do mercado

FORMATO DE SAÍDA:
{
  "resumo_executivo": "...",
  "partes": {...},
  "pontos_criticos": [
    {
      "clausula": "...",
      "artigo": "...",
      "risco": "...",
      "recomendacao": "..."
    }
  ],
  "pontos_de_atencao": [...],
  "recomendacoes_gerais": [...]
}

IMPORTANTE:
- Base sua análise APENAS no contrato fornecido
- Cite artigos e cláusulas específicas
- Seja objetivo e preciso
- Não dê opinião legal definitiva, apenas identifique pontos de atenção
- Indique quando algo está ausente ou pouco claro`}
              </pre>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border-2 border-green-200 overflow-hidden">
          <div className="bg-gradient-to-r from-green-500 to-green-600 px-6 py-4">
            <div className="flex items-center gap-3 text-white">
              <DollarSign size={28} />
              <div>
                <h3 className="text-xl font-bold">Exercício: Análise Financeira</h3>
                <p className="text-green-100 text-sm">Assessoria de investimentos</p>
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg mb-4">
              <p className="text-green-800 text-sm">
                <strong>Desafio:</strong> Crie um prompt para analisar relatórios financeiros trimestrais
                de empresas e gerar recomendações de investimento.
              </p>
            </div>

            <div className="space-y-3 text-sm text-slate-700">
              <p><strong>Considere:</strong></p>
              <ul className="space-y-2 ml-5">
                <li>• Dados estruturados (balanços, DRE, fluxo de caixa)</li>
                <li>• Indicadores financeiros (ROE, margem líquida, etc.)</li>
                <li>• Comparação com concorrentes</li>
                <li>• Análise de tendências</li>
                <li>• Nível de risco apropriado ao perfil do investidor</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border-2 border-purple-200 overflow-hidden">
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 px-6 py-4">
            <div className="flex items-center gap-3 text-white">
              <Code2 size={28} />
              <div>
                <h3 className="text-xl font-bold">Exercício: Code Review Automatizado</h3>
                <p className="text-purple-100 text-sm">Desenvolvimento de software</p>
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-lg mb-4">
              <p className="text-purple-800 text-sm">
                <strong>Desafio:</strong> Crie um prompt para revisar Pull Requests e fornecer
                feedback construtivo sobre qualidade de código.
              </p>
            </div>

            <div className="space-y-3 text-sm text-slate-700">
              <p><strong>Considere:</strong></p>
              <ul className="space-y-2 ml-5">
                <li>• Padrões de código do projeto</li>
                <li>• Segurança e vulnerabilidades</li>
                <li>• Performance e otimizações</li>
                <li>• Testes e cobertura</li>
                <li>• Documentação e comentários</li>
                <li>• Tom construtivo e educativo</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl border border-indigo-200">
        <h4 className="font-bold text-slate-800 mb-4">🎓 Princípios de Prompts Complexos</h4>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div className="space-y-2">
            <h5 className="font-bold text-slate-700">Estrutura:</h5>
            <ul className="space-y-1 text-slate-600">
              <li>• Role/Persona definida</li>
              <li>• Context (dados e conhecimento)</li>
              <li>• Instructions (passos claros)</li>
              <li>• Constraints (o que não fazer)</li>
              <li>• Output format (estrutura de resposta)</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h5 className="font-bold text-slate-700">Qualidade:</h5>
            <ul className="space-y-1 text-slate-600">
              <li>• Testado com casos reais</li>
              <li>• Versionado e documentado</li>
              <li>• Validação de saídas</li>
              <li>• Handling de edge cases</li>
              <li>• Logging e monitoramento</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
