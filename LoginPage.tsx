import { useState } from 'react';
import { 
  Building2, Eye, EyeOff, Lock, Mail, 
  ArrowLeft, Check, Shield, Zap, Sparkles 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface LoginPageProps {
  onLogin: (email: string, password: string) => void;
  onBackToHome: () => void;
}

export function LoginPage({ onLogin, onBackToHome }: LoginPageProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    company: '',
    agreeTerms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(formData.email, formData.password);
  };

  const benefits = [
    { icon: Check, text: 'تجربة مجانية لمدة 30 يوماً' },
    { icon: Check, text: 'لا حاجة لبطاقة ائتمان' },
    { icon: Check, text: 'إعداد في دقائق' },
    { icon: Check, text: 'دعم فني مجاني' },
  ];

  const features = [
    { icon: Shield, title: 'أمان بنكي', desc: 'حماية على مستوى البنوك' },
    { icon: Zap, title: 'سريع وسهل', desc: 'إعداد في دقائق' },
    { icon: Sparkles, title: 'مميزات متكاملة', desc: 'جميع الوحدات متاحة' },
  ];

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Form */}
      <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-8 xl:px-12 py-12">
        <div className="max-w-md w-full mx-auto">
          {/* Logo */}
          <button
            onClick={onBackToHome}
            className="flex items-center gap-2 mb-8 hover:opacity-80 transition-opacity"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gradient">BankFin</span>
              <span className="text-xs text-gray-500 -mt-1">ERP</span>
            </div>
          </button>

          <div>
            <h1 className="text-2xl font-bold mb-2">
              {isLogin ? 'مرحباً بعودتك!' : 'إنشاء حساب جديد'}
            </h1>
            <p className="text-gray-500 mb-8">
              {isLogin 
                ? 'سجل دخولك للوصول إلى لوحة التحكم' 
                : 'ابدأ رحلتك مع BankFin ERP'}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <>
                  <div>
                    <label className="block text-sm font-medium mb-2">الاسم الكامل *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="form-input-banking"
                      placeholder="أحمد محمد"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">اسم الشركة</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="form-input-banking"
                      placeholder="شركة التقنية"
                    />
                  </div>
                </>
              )}

              <div>
                <label className="block text-sm font-medium mb-2">البريد الإلكتروني *</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="form-input-banking pl-12"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">كلمة المرور *</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="form-input-banking pl-12"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium mb-2">تأكيد كلمة المرور *</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                      className="form-input-banking pl-12"
                      placeholder="••••••••"
                    />
                  </div>
                </div>
              )}

              {!isLogin && (
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={formData.agreeTerms}
                    onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                    className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 mt-0.5"
                  />
                  <label htmlFor="terms" className="text-sm text-gray-600">
                    أوافق على{' '}
                    <a href="#" className="text-blue-600 hover:underline">شروط الاستخدام</a>
                    {' '}و{' '}
                    <a href="#" className="text-blue-600 hover:underline">سياسة الخصوصية</a>
                  </label>
                </div>
              )}

              {isLogin && (
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="remember"
                      className="w-4 h-4 rounded border-gray-300 text-blue-600"
                    />
                    <label htmlFor="remember" className="text-sm text-gray-600">تذكرني</label>
                  </div>
                  <a href="#" className="text-sm text-blue-600 hover:underline">
                    نسيت كلمة المرور؟
                  </a>
                </div>
              )}

              <Button type="submit" className="w-full btn-primary py-4">
                {isLogin ? 'تسجيل الدخول' : 'إنشاء حساب'}
                <ArrowLeft className="w-5 h-5 mr-2" />
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-600">
                {isLogin ? 'ليس لديك حساب؟' : 'لديك حساب بالفعل؟'}{' '}
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-blue-600 font-semibold hover:underline"
                >
                  {isLogin ? 'سجل الآن' : 'سجل دخولك'}
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Info */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-blue-600 to-cyan-500 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 flex flex-col justify-center px-16 py-12 text-white">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              حوّل عملك مع BankFin ERP
            </h2>
            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
              انضم إلى مئات الشركات التي تثق بنا في إدارة أعمالها
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-12">
              {benefits.map((benefit) => (
                <div
                  key={benefit.text}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                    <benefit.icon className="w-4 h-4" />
                  </div>
                  <span>{benefit.text}</span>
                </div>
              ))}
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center"
                >
                  <feature.icon className="w-8 h-8 mx-auto mb-2" />
                  <h4 className="font-semibold text-sm">{feature.title}</h4>
                  <p className="text-xs text-blue-100">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
