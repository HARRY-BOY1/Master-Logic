import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/home/HeroSection';
import { FeaturesSection } from '@/components/home/FeaturesSection';
import { PricingSection } from '@/components/home/PricingSection';
import { ContactSection } from '@/components/home/ContactSection';
import { LoginPage } from '@/pages/LoginPage';
import { DashboardPage } from '@/pages/DashboardPage';
import { Toaster } from '@/components/ui/sonner';
import { toast } from 'sonner';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'login' | 'dashboard'>('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  const handleLogin = (email: string, password: string) => {
    // Simulate login
    if (email && password) {
      setIsLoggedIn(true);
      setUserName('أحمد محمد');
      setCurrentPage('dashboard');
      toast.success('تم تسجيل الدخول بنجاح!', {
        description: 'مرحباً بك في BankFin ERP',
      });
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName('');
    setCurrentPage('home');
    toast.info('تم تسجيل الخروج');
  };

  const handleGetStarted = () => {
    setCurrentPage('login');
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
  };

  const handleDashboardClick = () => {
    setCurrentPage('dashboard');
  };

  // Render different pages
  if (currentPage === 'login') {
    return (
      <>
        <LoginPage 
          onLogin={handleLogin} 
          onBackToHome={handleBackToHome} 
        />
        <Toaster position="top-center" richColors />
      </>
    );
  }

  if (currentPage === 'dashboard') {
    return (
      <>
        <DashboardPage onLogout={handleLogout} />
        <Toaster position="top-center" richColors />
      </>
    );
  }

  // Home Page
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar 
        isLoggedIn={isLoggedIn}
        userName={userName}
        onLoginClick={handleGetStarted}
        onDashboardClick={handleDashboardClick}
        onLogoutClick={handleLogout}
      />
      
      <main>
        <HeroSection onGetStarted={handleGetStarted} />
        <FeaturesSection />
        <PricingSection />
        <ContactSection />
      </main>

      <Footer />
      <Toaster position="top-center" richColors />
    </div>
  );
}

export default App;
