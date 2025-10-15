import AppRouter from './Router';
import { LanguageProvider } from '../shared/i18n/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <AppRouter />
    </LanguageProvider>
  );
}

export default App;
