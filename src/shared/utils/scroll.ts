/**
 * Função utilitária para fazer scroll suave para o topo da página
 */
export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
};

/**
 * Função utilitária para fazer scroll suave para um elemento específico
 */
export const scrollToElement = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
};

/**
 * Hook personalizado para scroll automático em mudanças de rota
 */
export const useScrollToTop = () => {
  return scrollToTop;
};