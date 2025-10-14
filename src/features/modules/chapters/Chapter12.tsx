import { Box, Search, Brain, Zap, Eye, GitBranch } from 'lucide-react';

export default function Chapter12() {
  return (
    <div className="prose max-w-none">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">Embeddings e Similaridade</h2>

      <p className="text-slate-700 mb-8 text-lg">
        Embeddings são representações numéricas de texto que capturam significado semântico, 
        permitindo que computadores "entendam" e comparem textos de forma matemática. 
        Esta tecnologia é fundamental para sistemas RAG, busca semântica e muitas outras aplicações de IA.
      </p>

      <div className="space-y-8">
        {/* Seção 1: Fundamentos dos Embeddings */}
        <div className="bg-white rounded-xl border-2 border-purple-200 overflow-hidden">
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 px-6 py-4">
            <div className="flex items-center gap-3 text-white">
              <Box size={28} />
              <div>
                <h3 className="text-xl font-bold">Fundamentos dos Embeddings</h3>
                <p className="text-purple-100 text-sm">O que são e como funcionam os embeddings de texto</p>
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-6">
              <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                  <Brain size={20} className="text-purple-600" />
                  O que são Embeddings?
                </h4>
                <p className="text-sm text-slate-600 mb-3">
                  Embeddings são vetores numéricos (listas de números) que representam palavras, 
                  frases ou documentos em um espaço multidimensional, onde textos com significados 
                  similares ficam próximos uns dos outros.
                </p>
                <div className="bg-white p-4 rounded border">
                  <pre className="text-xs text-slate-700 whitespace-pre-wrap">
{`Exemplo conceitual:
"gato" → [0.2, -0.5, 0.8, 0.1, -0.3, ...]
"felino" → [0.3, -0.4, 0.7, 0.2, -0.2, ...]
"cachorro" → [0.1, -0.6, 0.6, 0.3, -0.4, ...]

Vetores próximos = significados relacionados`}
                  </pre>
                </div>
              </div>

              <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                <h4 className="font-bold text-slate-800 mb-3">🔍 Propriedades dos Embeddings</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-slate-700 mb-2">Dimensionalidade</h5>
                    <p className="text-sm text-slate-600">
                      Típicamente 256, 512, 768 ou 1536 dimensões
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-slate-700 mb-2">Densidade</h5>
                    <p className="text-sm text-slate-600">
                      Vetores densos (todos os valores são significativos)
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-slate-700 mb-2">Normalização</h5>
                    <p className="text-sm text-slate-600">
                      Geralmente normalizados para facilitar comparações
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-slate-700 mb-2">Contextualidade</h5>
                    <p className="text-sm text-slate-600">
                      Capturam contexto e relações semânticas
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h5 className="font-semibold text-blue-800 mb-2">💡 Modelos Populares de Embedding:</h5>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li><strong>OpenAI text-embedding-ada-002:</strong> 1536 dimensões, excelente qualidade geral</li>
                  <li><strong>Sentence-BERT:</strong> Otimizado para frases e parágrafos</li>
                  <li><strong>E5-large:</strong> Modelo open-source de alta performance</li>
                  <li><strong>BGE (BAAI):</strong> Especializado em retrieval</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Seção 2: Métricas de Similaridade */}
        <div className="bg-white rounded-xl border-2 border-blue-200 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-4">
            <div className="flex items-center gap-3 text-white">
              <GitBranch size={28} />
              <div>
                <h3 className="text-xl font-bold">Métricas de Similaridade</h3>
                <p className="text-blue-100 text-sm">Como medir a proximidade entre embeddings</p>
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                <h4 className="font-bold text-slate-800 mb-3 text-center">Similaridade Cosseno</h4>
                <div className="bg-white p-3 rounded border text-center mb-3">
                  <code className="text-sm font-mono text-blue-600">
                    cos(θ) = (A·B) / (|A|×|B|)
                  </code>
                </div>
                <ul className="text-xs text-slate-600 space-y-1">
                  <li>• Valor entre -1 e 1</li>
                  <li>• 1 = idênticos</li>
                  <li>• 0 = perpendiculares</li>
                  <li>• -1 = opostos</li>
                </ul>
              </div>

              <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                <h4 className="font-bold text-slate-800 mb-3 text-center">Distância Euclidiana</h4>
                <div className="bg-white p-3 rounded border text-center mb-3">
                  <code className="text-sm font-mono text-blue-600">
                    d = √Σ(ai-bi)²
                  </code>
                </div>
                <ul className="text-xs text-slate-600 space-y-1">
                  <li>• Valor ≥ 0</li>
                  <li>• 0 = idênticos</li>
                  <li>• Maior = mais distante</li>
                  <li>• Sensível à magnitude</li>
                </ul>
              </div>

              <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                <h4 className="font-bold text-slate-800 mb-3 text-center">Produto Escalar</h4>
                <div className="bg-white p-3 rounded border text-center mb-3">
                  <code className="text-sm font-mono text-blue-600">
                    A·B = Σ(ai×bi)
                  </code>
                </div>
                <ul className="text-xs text-slate-600 space-y-1">
                  <li>• Valor irrestrito</li>
                  <li>• Maior = mais similar</li>
                  <li>• Rápido de calcular</li>
                  <li>• Para vetores normalizados</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h5 className="font-semibold text-green-800 mb-2">🎯 Qual métrica escolher?</h5>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <strong className="text-green-700">Similaridade Cosseno:</strong>
                  <p className="text-green-600">Mais comum, ignora magnitude, boa para textos</p>
                </div>
                <div>
                  <strong className="text-green-700">Distância Euclidiana:</strong>
                  <p className="text-green-600">Quando magnitude importa, dados numéricos</p>
                </div>
                <div>
                  <strong className="text-green-700">Produto Escalar:</strong>
                  <p className="text-green-600">Performance máxima, vetores já normalizados</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Seção 3: Busca Semântica */}
        <div className="bg-white rounded-xl border-2 border-green-200 overflow-hidden">
          <div className="bg-gradient-to-r from-green-500 to-green-600 px-6 py-4">
            <div className="flex items-center gap-3 text-white">
              <Search size={28} />
              <div>
                <h3 className="text-xl font-bold">Busca Semântica</h3>
                <p className="text-green-100 text-sm">Encontrando informações por significado, não apenas palavras-chave</p>
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-6">
              <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                <h4 className="font-bold text-slate-800 mb-3">🔄 Processo de Busca Semântica</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                    <div>
                      <h5 className="font-semibold text-slate-800">Indexação</h5>
                      <p className="text-sm text-slate-600">Converter todos os documentos em embeddings e armazenar</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                    <div>
                      <h5 className="font-semibold text-slate-800">Consulta</h5>
                      <p className="text-sm text-slate-600">Converter a pergunta do usuário em embedding</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                    <div>
                      <h5 className="font-semibold text-slate-800">Similaridade</h5>
                      <p className="text-sm text-slate-600">Calcular similaridade entre consulta e documentos</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                    <div>
                      <h5 className="font-semibold text-slate-800">Ranking</h5>
                      <p className="text-sm text-slate-600">Ordenar e retornar os documentos mais relevantes</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg border-2 border-slate-200">
                <h4 className="font-bold text-slate-800 mb-4">📋 Diferença Prática: Busca Tradicional vs Semântica</h4>
                
                <div className="mb-6 p-4 bg-slate-50 rounded-lg border border-slate-200">
                  <h5 className="font-semibold text-slate-800 mb-3">🎯 Situação: Você precisa de informações sobre redução de gastos</h5>
                  <p className="text-sm text-slate-600">
                    Uma empresa tem uma base de conhecimento com centenas de documentos sobre gestão financeira. 
                    Vamos ver como cada tipo de busca se comporta com a mesma consulta.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-red-700 mb-3">❌ Busca Tradicional (Por Palavras-chave)</h5>
                    <div className="bg-red-50 p-4 rounded border border-red-200 space-y-3">
                      <div>
                        <p className="text-sm font-medium text-red-800">Consulta:</p>
                        <p className="text-sm bg-white p-2 rounded border">"Como reduzir custos?"</p>
                      </div>
                      
                      <div>
                        <p className="text-sm font-medium text-red-800">Como funciona:</p>
                        <p className="text-xs text-red-700">Procura documentos que contêm EXATAMENTE as palavras "reduzir" e "custos"</p>
                      </div>
                      
                      <div>
                        <p className="text-sm font-medium text-red-800">Encontra:</p>
                        <ul className="text-xs text-red-600 space-y-1">
                          <li>• "Manual para reduzir custos operacionais"</li>
                          <li>• "Como reduzir custos de infraestrutura"</li>
                        </ul>
                      </div>
                      
                      <div>
                        <p className="text-sm font-medium text-red-800">NÃO encontra:</p>
                        <ul className="text-xs text-red-600 space-y-1">
                          <li>• "Estratégias para economizar dinheiro"</li>
                          <li>• "Otimização de gastos empresariais"</li>
                          <li>• "Como diminuir despesas"</li>
                          <li>• "Cortar gastos desnecessários"</li>
                        </ul>
                      </div>
                      
                      <div className="bg-red-100 p-2 rounded">
                        <p className="text-xs font-medium text-red-800">Problema:</p>
                        <p className="text-xs text-red-700">Perde 80% do conteúdo relevante por usar sinônimos ou termos relacionados</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-green-700 mb-3">✅ Busca Semântica (Por Significado)</h5>
                    <div className="bg-green-50 p-4 rounded border border-green-200 space-y-3">
                      <div>
                        <p className="text-sm font-medium text-green-800">Consulta:</p>
                        <p className="text-sm bg-white p-2 rounded border">"Como reduzir custos?"</p>
                      </div>
                      
                      <div>
                        <p className="text-sm font-medium text-green-800">Como funciona:</p>
                        <p className="text-xs text-green-700">Converte a pergunta em um vetor matemático e busca por documentos com vetores similares</p>
                      </div>
                      
                      <div>
                        <p className="text-sm font-medium text-green-800">Encontra TUDO relacionado:</p>
                        <ul className="text-xs text-green-600 space-y-1">
                          <li>• "Manual para reduzir custos operacionais"</li>
                          <li>• "Estratégias para economizar dinheiro"</li>
                          <li>• "Otimização de gastos empresariais"</li>
                          <li>• "Como diminuir despesas"</li>
                          <li>• "Cortar gastos desnecessários"</li>
                          <li>• "Aumentar eficiência financeira"</li>
                          <li>• "ROI e controle orçamentário"</li>
                        </ul>
                      </div>
                      
                      <div>
                        <p className="text-sm font-medium text-green-800">Entende contextos:</p>
                        <ul className="text-xs text-green-600 space-y-1">
                          <li>• Sinônimos (economizar = reduzir)</li>
                          <li>• Conceitos relacionados (ROI, eficiência)</li>
                          <li>• Diferentes formulações da mesma ideia</li>
                        </ul>
                      </div>
                      
                      <div className="bg-green-100 p-2 rounded">
                        <p className="text-xs font-medium text-green-800">Vantagem:</p>
                        <p className="text-xs text-green-700">Encontra 95% do conteúdo relevante, mesmo com linguagem completamente diferente</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h5 className="font-semibold text-blue-800 mb-2">🧠 Por que isso acontece?</h5>
                  <p className="text-sm text-blue-700 mb-3">
                    A busca semântica usa <strong>embeddings</strong> - representações matemáticas que capturam o <strong>significado</strong> das palavras, 
                    não apenas as letras que as formam.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-blue-600">
                    <div>
                      <strong>Busca Tradicional analisa:</strong>
                      <p>Letras e palavras exatas</p>
                      <code className="bg-white p-1 rounded">["r","e","d","u","z","i","r"]</code>
                    </div>
                    <div>
                      <strong>Busca Semântica analisa:</strong>
                      <p>Significado matemático</p>
                      <code className="bg-white p-1 rounded">[0.2, -0.5, 0.8, ...]</code>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h5 className="font-semibold text-blue-800 mb-2">🛠️ Ferramentas para Busca Semântica:</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong className="text-blue-700">Vector Databases:</strong>
                    <ul className="text-blue-600 mt-1 space-y-1">
                      <li>• Pinecone (cloud)</li>
                      <li>• Weaviate (open source)</li>
                      <li>• Chroma (simples, local)</li>
                      <li>• Qdrant (Rust, performante)</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="text-blue-700">Extensões SQL:</strong>
                    <ul className="text-blue-600 mt-1 space-y-1">
                      <li>• PostgreSQL + pgvector</li>
                      <li>• MongoDB Atlas Vector Search</li>
                      <li>• Elasticsearch dense_vector</li>
                      <li>• Redis Vector Similarity</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Seção 4: Visualização e Interpretação */}
        <div className="bg-white rounded-xl border-2 border-orange-200 overflow-hidden">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-4">
            <div className="flex items-center gap-3 text-white">
              <Eye size={28} />
              <div>
                <h3 className="text-xl font-bold">Visualização e Interpretação</h3>
                <p className="text-orange-100 text-sm">Como visualizar e entender embeddings</p>
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-6">
              <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                <h4 className="font-bold text-slate-800 mb-3">📊 Técnicas de Redução Dimensional</h4>
                <p className="text-sm text-slate-600 mb-4">
                  Como embeddings têm centenas de dimensões, precisamos reduzi-las para visualizar:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded border">
                    <h5 className="font-semibold text-slate-800 mb-2">t-SNE</h5>
                    <ul className="text-xs text-slate-600 space-y-1">
                      <li>• Preserva estruturas locais</li>
                      <li>• Ótimo para clusters</li>
                      <li>• Não linear</li>
                      <li>• Lento para muitos dados</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded border">
                    <h5 className="font-semibold text-slate-800 mb-2">UMAP</h5>
                    <ul className="text-xs text-slate-600 space-y-1">
                      <li>• Preserva estrutura global</li>
                      <li>• Mais rápido que t-SNE</li>
                      <li>• Melhor para grandes datasets</li>
                      <li>• Paramétros ajustáveis</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded border">
                    <h5 className="font-semibold text-slate-800 mb-2">PCA</h5>
                    <ul className="text-xs text-slate-600 space-y-1">
                      <li>• Técnica linear</li>
                      <li>• Muito rápido</li>
                      <li>• Preserva variância</li>
                      <li>• Boa para exploração inicial</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                <h4 className="font-bold text-slate-800 mb-3">🎨 Interpretando Visualizações</h4>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded border">
                    <h5 className="font-semibold text-slate-800 mb-2">Clusters Próximos</h5>
                    <p className="text-sm text-slate-600">
                      Documentos que aparecem próximos no gráfico têm conteúdo semanticamente similar
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded border">
                    <h5 className="font-semibold text-slate-800 mb-2">Distâncias</h5>
                    <p className="text-sm text-slate-600">
                      Quanto maior a distância visual, menor a similaridade semântica
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded border">
                    <h5 className="font-semibold text-slate-800 mb-2">Outliers</h5>
                    <p className="text-sm text-slate-600">
                      Pontos isolados podem indicar conteúdo único ou problemas de qualidade
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Seção 5: Boas Práticas e Otimizações */}
        <div className="bg-white rounded-xl border-2 border-indigo-200 overflow-hidden">
          <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 px-6 py-4">
            <div className="flex items-center gap-3 text-white">
              <Zap size={28} />
              <div>
                <h3 className="text-xl font-bold">Boas Práticas e Otimizações</h3>
                <p className="text-indigo-100 text-sm">Como maximizar a eficácia dos embeddings</p>
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h4 className="font-bold text-green-800 mb-3">✅ Boas Práticas</h4>
                  <ul className="text-sm text-green-700 space-y-2">
                    <li>• <strong>Chunking inteligente:</strong> Divida documentos em pedaços semânticos</li>
                    <li>• <strong>Modelo consistente:</strong> Use o mesmo modelo para indexação e busca</li>
                    <li>• <strong>Pré-processamento:</strong> Limpe e normalize o texto</li>
                    <li>• <strong>Cache embeddings:</strong> Armazene para evitar recálculos</li>
                    <li>• <strong>Teste A/B:</strong> Compare diferentes modelos e estratégias</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-bold text-blue-800 mb-3">🔧 Otimizações de Performance</h4>
                  <ul className="text-sm text-blue-700 space-y-2">
                    <li>• <strong>Indexação aproximada:</strong> Use HNSW, IVF para busca rápida</li>
                    <li>• <strong>Quantização:</strong> Reduza precisão para economizar espaço</li>
                    <li>• <strong>Filtragem híbrida:</strong> Combine busca semântica com filtros</li>
                    <li>• <strong>Paralelização:</strong> Processe embeddings em lotes</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                  <h4 className="font-bold text-orange-800 mb-3">⚠️ Armadilhas Comuns</h4>
                  <ul className="text-sm text-orange-700 space-y-2">
                    <li>• <strong>Chunks muito grandes/pequenos:</strong> Afeta qualidade da busca</li>
                    <li>• <strong>Modelos inadequados:</strong> Usar modelos genéricos para domínios específicos</li>
                    <li>• <strong>Não normalizar:</strong> Esquecer de normalizar embeddings</li>
                    <li>• <strong>Cold start:</strong> Não ter dados suficientes para treino</li>
                    <li>• <strong>Deriva de modelo:</strong> Não atualizações ou mudanças no modelo</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                  <h4 className="font-bold text-purple-800 mb-3">🎯 Métricas de Qualidade</h4>
                  <ul className="text-sm text-purple-700 space-y-2">
                    <li>• <strong>MRR (Mean Reciprocal Rank):</strong> Posição do primeiro resultado relevante</li>
                    <li>• <strong>NDCG:</strong> Normalized Discounted Cumulative Gain</li>
                    <li>• <strong>Hit Rate@K:</strong> Proporção de buscas com resultado relevante no top-K</li>
                    <li>• <strong>Precision@K:</strong> Precisão nos primeiros K resultados</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Exercício Prático */}
        <div className="bg-gradient-to-r from-slate-50 to-purple-50 p-6 rounded-xl border-2 border-slate-200">
          <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
            <Search className="text-purple-600" />
            Laboratório Prático
          </h3>
          <p className="text-slate-700 mb-4">
            Vamos criar um sistema de busca semântica para uma base de conhecimento técnica.
          </p>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border">
              <h4 className="font-semibold text-slate-800 mb-2">Cenário:</h4>
              <p className="text-sm text-slate-600">
                Uma empresa de software precisa de um sistema para que desenvolvedores encontrem 
                rapidamente documentação técnica, exemplos de código e soluções para problemas comuns.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg border">
              <h4 className="font-semibold text-slate-800 mb-2">Desafios do laboratório:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-600">
                <div>
                  <strong>Parte 1 - Análise:</strong>
                  <ul className="mt-2 space-y-1">
                    <li>• Que tipo de consultas os usuários fariam?</li>
                    <li>• Como dividir a documentação em chunks?</li>
                    <li>• Qual modelo de embedding escolher?</li>
                  </ul>
                </div>
                <div>
                  <strong>Parte 2 - Implementação:</strong>
                  <ul className="mt-2 space-y-1">
                    <li>• Projetar o pipeline de indexação</li>
                    <li>• Definir estratégia de busca híbrida</li>
                    <li>• Criar métricas de avaliação</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-800 mb-2">💡 Exemplo de Consultas para Testar:</h4>
              <div className="text-sm text-purple-700 space-y-1">
                <li>• "Como fazer autenticação JWT?"</li>
                <li>• "Erro de conexão com banco de dados"</li>
                <li>• "Otimizar performance de API"</li>
                <li>• "Configurar deploy no Kubernetes"</li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}