import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Pequeno delay para garantir que o conteúdo foi renderizado
    const timeoutId = setTimeout(() => {
      // Scroll suave para o topo da página sempre que a rota mudar
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }, 100);

    // Cleanup do timeout se o componente for desmontado
    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return null;
}