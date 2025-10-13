import { BookOpen, Zap, Target } from 'lucide-react';

export default function Chapter7() {
  return (
    <div className="prose max-w-none">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">Usando Exemplos</h2>

      <p className="text-slate-700 mb-8 text-lg">
        Few-shot learning é a técnica de fornecer exemplos concretos do comportamento desejado
        antes de apresentar a tarefa real. A IA aprende o padrão através dos exemplos.
      </p>

      <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg mb-8">
        <div className="flex items-start gap-3">
          <BookOpen className="text-purple-600 flex-shrink-0 mt-1" size={24} />
          <div>
            <h3 className="font-bold text-purple-900 mb-2">Por que funciona?</h3>
            <p className="text-purple-800">
              Exemplos ensinam à IA o estilo, formato e tipo de raciocínio que você espera,
              tornando as respostas mais consistentes e alinhadas com suas necessidades.
            </p>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-bold text-slate-800 mb-4">Tipos de Few-Shot</h3>

      <div className="space-y-6 mb-8">
        <div className="bg-white rounded-xl border-2 border-blue-200 overflow-hidden">
          <div className="bg-blue-50 px-6 py-3 border-b border-blue-200">
            <div className="flex items-center gap-2">
              <Zap className="text-blue-600" size={20} />
              <h4 className="font-bold text-slate-800">Zero-Shot</h4>
            </div>
            <p className="text-sm text-slate-600 mt-1">Sem exemplos, apenas instruções</p>
          </div>
          <div className="p-6">
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
              <pre className="text-sm text-slate-700 whitespace-pre-wrap font-mono">
{`Classifique o sentimento desta frase como positivo, negativo ou neutro:

"O filme foi interessante mas muito longo."

Sentimento:`}
              </pre>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border-2 border-green-200 overflow-hidden">
          <div className="bg-green-50 px-6 py-3 border-b border-green-200">
            <div className="flex items-center gap-2">
              <Target className="text-green-600" size={20} />
              <h4 className="font-bold text-slate-800">Few-Shot (1-5 exemplos)</h4>
            </div>
            <p className="text-sm text-slate-600 mt-1">Alguns exemplos para estabelecer o padrão</p>
          </div>
          <div className="p-6">
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
              <pre className="text-sm text-slate-700 whitespace-pre-wrap font-mono">
{`Classifique o sentimento destas frases:

Frase: "Adorei cada momento do filme!"
Sentimento: Positivo

Frase: "Péssima experiência, não recomendo."
Sentimento: Negativo

Frase: "O produto é ok, nada de especial."
Sentimento: Neutro

Agora classifique:
Frase: "O filme foi interessante mas muito longo."
Sentimento:`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-bold text-slate-800 mb-4">Estrutura de Exemplos Efetivos</h3>

      <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mb-8">
        <div className="space-y-6">
          <div>
            <h4 className="font-bold text-slate-800 mb-3">1. Formato Consistente</h4>
            <p className="text-slate-600 text-sm mb-3">
              Todos os exemplos devem seguir exatamente o mesmo formato:
            </p>
            <div className="bg-white p-4 rounded-lg border border-slate-200">
              <pre className="text-sm text-slate-700 whitespace-pre-wrap font-mono">
{`Input: [dado de entrada]
Output: [resultado esperado]

Input: [outro dado]
Output: [outro resultado]`}
              </pre>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-800 mb-3">2. Variedade Representativa</h4>
            <p className="text-slate-600 text-sm mb-3">
              Exemplos devem cobrir diferentes casos e variações:
            </p>
            <div className="bg-white p-4 rounded-lg border border-slate-200">
              <ul className="text-sm text-slate-700 space-y-2">
                <li>• Casos simples e complexos</li>
                <li>• Diferentes tipos de input</li>
                <li>• Edge cases quando relevante</li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-800 mb-3">3. Qualidade sobre Quantidade</h4>
            <p className="text-slate-600 text-sm">
              Geralmente 2-5 exemplos bem escolhidos são mais efetivos que muitos exemplos
              redundantes.
            </p>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-bold text-slate-800 mb-4">Exemplo Prático Completo</h3>

      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl border border-indigo-200 mb-8">
        <h4 className="font-bold text-slate-800 mb-4">Caso: Extração de Informações</h4>
        <div className="bg-white p-5 rounded-lg border border-slate-200">
          <pre className="text-sm text-slate-700 whitespace-pre-wrap font-mono leading-relaxed">
{`Extraia nome, email e telefone dos textos:

Exemplo 1:
Texto: "Olá, sou João Silva, meu email é joao@email.com"
Resultado: {"nome": "João Silva", "email": "joao@email.com", "telefone": null}

Exemplo 2:
Texto: "Maria Santos - (11) 98765-4321 - maria.s@company.com"
Resultado: {"nome": "Maria Santos", "email": "maria.s@company.com", "telefone": "(11) 98765-4321"}

Exemplo 3:
Texto: "Entre em contato: pedro@site.com.br ou ligue (21) 3333-4444"
Resultado: {"nome": null, "email": "pedro@site.com.br", "telefone": "(21) 3333-4444"}

Agora extraia:
Texto: "Carlos Oliveira, telefone (85) 99999-8888, email: carlos.o@domain.net"
Resultado:`}
          </pre>
        </div>
      </div>

      <h3 className="text-xl font-bold text-slate-800 mb-4">Dicas Avançadas</h3>

      <div className="grid md:grid-cols-2 gap-4 mb-8">
        {[
          {
            title: 'Exemplos Progressivos',
            description: 'Comece com casos simples e aumente a complexidade gradualmente'
          },
          {
            title: 'Contra-exemplos',
            description: 'Inclua exemplos do que NÃO fazer para evitar comportamentos indesejados'
          },
          {
            title: 'Explique o Padrão',
            description: 'Adicione uma breve explicação do padrão antes dos exemplos'
          },
          {
            title: 'Teste e Refine',
            description: 'Ajuste seus exemplos com base nas respostas reais da IA'
          }
        ].map((tip, index) => (
          <div key={index} className="bg-white p-5 rounded-xl border border-slate-200">
            <h4 className="font-bold text-slate-800 mb-2">{tip.title}</h4>
            <p className="text-sm text-slate-600">{tip.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-amber-50 p-6 rounded-xl border border-amber-200">
        <h4 className="font-bold text-amber-900 mb-3">⚡ Quando Few-Shot é Essencial</h4>
        <ul className="space-y-2 text-amber-800">
          <li className="flex items-start gap-2">
            <span className="text-amber-600 font-bold">•</span>
            <span>Tarefas com formato específico ou não-convencional</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 font-bold">•</span>
            <span>Quando você precisa de consistência absoluta</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 font-bold">•</span>
            <span>Classificações personalizadas ou categorizações específicas do domínio</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 font-bold">•</span>
            <span>Quando instruções verbais sozinhas não são suficientes</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
