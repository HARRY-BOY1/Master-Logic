import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Menu, X, ChevronDown, Building2, LogOut, 
  Settings, Bell, Moon, Sun 
} from 'lucide-react';

interface NavbarProps {
  isLoggedIn?: boolean;
  userName?: string;
  onLoginClick?: () => void;
  onDashboardClick?: () => void;
  onLogoutClick?: () => void;
}

export function Navbar({ 
  isLoggedIn = false, 
  userName = '', 
  onLoginClick,
  onDashboardClick,
  onLogoutClick
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const navLinks = [
    { label: 'الرئيسية', href: '#home' },
    { label: 'المميزات', href: '#features' },
    { label: 'الأسعار', href: '#pricing' },
    { label: 'التواصل', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a 
            href="#home"
            className="flex items-center gap-2 hover:scale-102 transition-transform"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gradient">BankFin</span>
              <span className="text-xs text-gray-500 dark:text-gray-400 -mt-1">ERP</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="hidden sm:flex"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600" />
              )}
            </Button>

            {isLoggedIn ? (
              <div className="hidden lg:flex items-center gap-3">
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative"
                >
                  <Bell className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                    3
                  </span>
                </Button>

                {/* Profile Dropdown */}
                <div className="relative">
                  <Button
                    variant="ghost"
                    className="flex items-center gap-2"
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white font-semibold">
                      {userName.charAt(0)}
                    </div>
                    <span className="font-medium">{userName}</span>
                    <ChevronDown className="w-4 h-4" />
                  </Button>

                  {isProfileOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden animate-fade-in">
                      <button
                        onClick={() => {
                          setIsProfileOpen(false);
                          onDashboardClick?.();
                        }}
                        className="w-full flex items-center gap-3 px-4 py-3 text-right hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                      >
                        <Building2 className="w-4 h-4" />
                        <span>لوحة التحكم</span>
                      </button>
                      <button
                        onClick={() => setIsProfileOpen(false)}
                        className="w-full flex items-center gap-3 px-4 py-3 text-right hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                      >
                        <Settings className="w-4 h-4" />
                        <span>الإعدادات</span>
                      </button>
                      <hr className="border-gray-100 dark:border-gray-700" />
                      <button
                        onClick={() => {
                          setIsProfileOpen(false);
                          onLogoutClick?.();
                        }}
                        className="w-full flex items-center gap-3 px-4 py-3 text-right text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                      >
                        <LogOut className="w-4 h-4" />
                        <span>تسجيل الخروج</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="hidden lg:flex items-center gap-3">
                <Button
                  variant="ghost"
                  onClick={onLoginClick}
                  className="font-medium"
                >
                  تسجيل الدخول
                </Button>
                <Button
                  onClick={onLoginClick}
                  className="btn-primary"
                >
                  جرب مجاناً
                </Button>
              </div>
            )}

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 animate-slide-down">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
              >
                {link.label}
              </a>
            ))}
            <hr className="border-gray-100 dark:border-gray-800" />
            {isLoggedIn ? (
              <>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onDashboardClick?.();
                  }}
                  className="w-full flex items-center gap-3 py-2 text-gray-600 dark:text-gray-300"
                >
                  <Building2 className="w-5 h-5" />
                  <span>لوحة التحكم</span>
                </button>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onLogoutClick?.();
                  }}
                  className="w-full flex items-center gap-3 py-2 text-red-600"
                >
                  <LogOut className="w-5 h-5" />
                  <span>تسجيل الخروج</span>
                </button>
              </>
            ) : (
              <div className="flex flex-col gap-2">
                <Button
                  variant="outline"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onLoginClick?.();
                  }}
                  className="w-full"
                >
                  تسجيل الدخول
                </Button>
                <Button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onLoginClick?.();
                  }}
                  className="w-full btn-primary"
                >
                  جرب مجاناً
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
