import { FileJson, FileCode, FileText } from 'lucide-react';

export default function Chapter5() {
  return (
    <div className="prose max-w-none">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">Formatando a Saída</h2>

      <p className="text-slate-700 mb-8 text-lg">
        Especificar o formato da resposta é essencial para integração com sistemas e para
        garantir consistência. A IA pode gerar saídas em diversos formatos estruturados.
      </p>

      <h3 className="text-xl font-bold text-slate-800 mb-4">Formatos Populares</h3>

      <div className="space-y-6 mb-8">
        <div className="bg-white rounded-xl border-2 border-blue-200 overflow-hidden">
          <div className="bg-blue-50 px-6 py-3 border-b border-blue-200 flex items-center gap-3">
            <FileJson size={24} className="text-blue-600" />
            <div>
              <h4 className="font-bold text-slate-800">JSON</h4>
              <p className="text-sm text-slate-600">Ideal para integração com APIs e aplicações</p>
            </div>
          </div>
          <div className="p-6">
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 mb-3">
              <p className="text-sm text-slate-700 mb-3 font-medium">Prompt:</p>
              <pre className="text-sm text-slate-700 whitespace-pre-wrap font-mono mb-4">
{`Extraia as informações principais desta biografia e retorne em JSON:

Nome, Profissão, Nacionalidade, Anos de Experiência

Biografia: "Marie Curie foi uma física e química polonesa..."`}
              </pre>
              <p className="text-sm text-slate-700 mb-2 font-medium">Resposta esperada:</p>
              <pre className="text-xs text-slate-700 whitespace-pre-wrap font-mono bg-white p-3 rounded border border-slate-200">
{`{
  "nome": "Marie Curie",
  "profissao": "Física e Química",
  "nacionalidade": "Polonesa",
  "anos_experiencia": "Não especificado"
}`}
              </pre>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border-2 border-green-200 overflow-hidden">
          <div className="bg-green-50 px-6 py-3 border-b border-green-200 flex items-center gap-3">
            <FileText size={24} className="text-green-600" />
            <div>
              <h4 className="font-bold text-slate-800">Markdown</h4>
              <p className="text-sm text-slate-600">Perfeito para documentação e conteúdo web</p>
            </div>
          </div>
          <div className="p-6">
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
              <p className="text-sm text-slate-700 mb-3 font-medium">Prompt:</p>
              <pre className="text-sm text-slate-700 whitespace-pre-wrap font-mono">
{`Crie um guia rápido sobre Git em formato Markdown com:
- Título principal
- 3 seções (Instalação, Comandos Básicos, Boas Práticas)
- Código em blocos de código
- Links relevantes`}
              </pre>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border-2 border-purple-200 overflow-hidden">
          <div className="bg-purple-50 px-6 py-3 border-b border-purple-200 flex items-center gap-3">
            <FileCode size={24} className="text-purple-600" />
            <div>
              <h4 className="font-bold text-slate-800">XML</h4>
              <p className="text-sm text-slate-600">Útil para dados hierárquicos e sistemas legados</p>
            </div>
          </div>
          <div className="p-6">
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
              <p className="text-sm text-slate-700 mb-3 font-medium">Prompt:</p>
              <pre className="text-sm text-slate-700 whitespace-pre-wrap font-mono">
{`Converta esta lista de produtos para XML:
- iPhone 14, R$4.999, Eletrônicos
- Notebook Dell, R$3.500, Informática

Use as tags: <produtos>, <produto>, <nome>, <preco>, <categoria>`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-bold text-slate-800 mb-4">Templates de Saída</h3>

      <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mb-8">
        <p className="text-slate-700 mb-4">
          Forneça um template vazio para a IA preencher:
        </p>
        <div className="bg-white p-4 rounded-lg border border-slate-200">
          <pre className="text-sm text-slate-700 whitespace-pre-wrap font-mono">
{`Analise o feedback do cliente e preencha o template:

TEMPLATE:
---
Sentimento: [Positivo/Neutro/Negativo]
Categoria: [Produto/Atendimento/Entrega/Outro]
Prioridade: [Alta/Média/Baixa]
Ação Recomendada: [Texto livre]
---

Feedback: "O produto é ótimo, mas demorou 2 semanas para chegar."`}
          </pre>
        </div>
      </div>

      <h3 className="text-xl font-bold text-slate-800 mb-4">Dicas para Formatação Efetiva</h3>

      <div className="grid md:grid-cols-2 gap-4 mb-8">
        {[
          {
            title: 'Seja explícito',
            description: 'Especifique exatamente o formato desejado, incluindo estrutura de chaves, nomes de campos, etc.'
          },
          {
            title: 'Dê exemplos',
            description: 'Mostre um exemplo do formato esperado sempre que possível'
          },
          {
            title: 'Defina tipos',
            description: 'Indique se campos devem ser strings, números, arrays, booleanos, etc.'
          },
          {
            title: 'Valide após',
            description: 'Sempre valide a saída da IA antes de usar em produção'
          }
        ].map((tip, index) => (
          <div key={index} className="bg-white p-5 rounded-xl border border-slate-200">
            <h4 className="font-bold text-slate-800 mb-2">{tip.title}</h4>
            <p className="text-sm text-slate-600">{tip.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl border border-indigo-200">
        <h4 className="font-bold text-slate-800 mb-3">💡 Técnica Avançada: Schema JSON</h4>
        <p className="text-slate-700 mb-3">
          Para máxima precisão, forneça um JSON Schema descrevendo a estrutura esperada:
        </p>
        <div className="bg-white p-4 rounded-lg border border-indigo-200">
          <pre className="text-xs text-slate-700 whitespace-pre-wrap font-mono">
{`Retorne os dados seguindo este schema:
{
  "type": "object",
  "properties": {
    "titulo": {"type": "string"},
    "preco": {"type": "number"},
    "disponivel": {"type": "boolean"}
  },
  "required": ["titulo", "preco"]
}`}
          </pre>
        </div>
      </div>
    </div>
  );
}
