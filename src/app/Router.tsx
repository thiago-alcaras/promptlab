import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from '../components/layout';
import Hero from '../features/home';
import { ModuleGrid, ModuleViewer } from '../features/modules';
import Playground from '../features/playground';
import Progress from '../features/progress';
import ScrollToTop from '../shared/components/ScrollToTop';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <Navigation />
        <div className="pt-20">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="/modules" element={<ModuleGrid />} />
            <Route path="/modules/:moduleId" element={<ModuleViewer />} />
            <Route path="/playground" element={<Playground />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}