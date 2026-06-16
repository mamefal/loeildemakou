import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from '@/contexts/AuthContext.jsx';
import ProtectedRoute from '@/components/ProtectedRoute.jsx';
import { Toaster } from 'sonner';
import ScrollToTop from '@/components/ScrollToTop.jsx';

// Pages
import HomePage from '@/pages/HomePage.jsx';
import DecryptagesPage from '@/pages/DecryptagesPage.jsx';
import CollectionsPage from '@/pages/CollectionsPage.jsx';
import CreateursPage from '@/pages/CreateursPage.jsx';
import IndustrieInnovationPage from '@/pages/IndustrieInnovationPage.jsx';
import FashionWeekPage from '@/pages/FashionWeekPage.jsx';
import OpinionsPage from '@/pages/OpinionsPage.jsx';
import AboutPage from '@/pages/AboutPage.jsx';
import ContactPage from '@/pages/ContactPage.jsx';
import LegalPage from '@/pages/LegalPage.jsx';
import ArticleDetailPage from '@/pages/ArticleDetailPage.jsx';
import LoginPage from '@/pages/LoginPage.jsx';
import AdminDashboard from '@/pages/AdminDashboard.jsx';

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/decryptages" element={<DecryptagesPage />} />
          <Route path="/collections" element={<CollectionsPage />} />
          <Route path="/createurs" element={<CreateursPage />} />
          <Route path="/industrie-innovation" element={<IndustrieInnovationPage />} />
          <Route path="/fashion-week" element={<FashionWeekPage />} />
          <Route path="/opinions" element={<OpinionsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/legal" element={<LegalPage />} />
          <Route path="/articles/:slug" element={<ArticleDetailPage />} />
          
          <Route path="/login" element={<LoginPage />} />
          <Route 
            path="/admin" 
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            } 
          />
          
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Toaster position="bottom-center" />
      </Router>
    </AuthProvider>
  );
}

export default App;