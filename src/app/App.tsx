import { useState } from 'react';
import Navigation from '../components/layout';
import Hero from '../features/home';
import { ModuleGrid, ModuleViewer } from '../features/modules';
import Playground from '../features/playground';
import Progress from '../features/progress';

type View = 'home' | 'modules' | 'module-viewer' | 'playground' | 'progress';

function App() {
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedModuleId, setSelectedModuleId] = useState<string | null>(null);

  const handleNavigate = (view: string) => {
    setCurrentView(view as View);
    setSelectedModuleId(null);
  };

  const handleModuleSelect = (moduleId: string) => {
    setSelectedModuleId(moduleId);
    setCurrentView('module-viewer');
  };

  const handleModuleComplete = () => {
    setCurrentView('modules');
  };

  const handleGetStarted = () => {
    setCurrentView('modules');
  };

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <Hero onGetStarted={handleGetStarted} />;
      case 'modules':
        return <ModuleGrid onModuleSelect={handleModuleSelect} />;
      case 'module-viewer':
        return selectedModuleId ? (
          <ModuleViewer
            moduleId={selectedModuleId}
            onBack={() => setCurrentView('modules')}
            onComplete={handleModuleComplete}
          />
        ) : null;
      case 'playground':
        return <Playground />;
      case 'progress':
        return <Progress />;
      default:
        return <Hero onGetStarted={handleGetStarted} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Navigation currentView={currentView} onNavigate={handleNavigate} />
      <div className="pt-20">
        {renderView()}
      </div>
    </div>
  );
}

export default App;
