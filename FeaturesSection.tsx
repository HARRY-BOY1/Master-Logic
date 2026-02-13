import { useState } from 'react';
import { 
  BarChart3, Users, Package, Handshake, 
  Zap, GraduationCap, Shield, Cloud,
  ArrowLeft, Check, Sparkles
} from 'lucide-react';
import { features } from '@/data/mockData';

const iconMap: Record<string, React.ElementType> = {
  BarChart3,
  Users,
  Package,
  Handshake,
  Zap,
  GraduationCap,
  Shield,
  Cloud,
};

const colorMap: Record<string, string> = {
  blue: 'from-blue-500 to-blue-600',
  green: 'from-green-500 to-green-600',
  orange: 'from-orange-500 to-orange-600',
  purple: 'from-purple-500 to-purple-600',
  yellow: 'from-yellow-500 to-yellow-600',
  pink: 'from-pink-500 to-pink-600',
  red: 'from-red-500 to-red-600',
  cyan: 'from-cyan-500 to-cyan-600',
};

const bgColorMap: Record<string, string> = {
  blue: 'bg-blue-50 dark:bg-blue-900/20',
  green: 'bg-green-50 dark:bg-green-900/20',
  orange: 'bg-orange-50 dark:bg-orange-900/20',
  purple: 'bg-purple-50 dark:bg-purple-900/20',
  yellow: 'bg-yellow-50 dark:bg-yellow-900/20',
  pink: 'bg-pink-50 dark:bg-pink-900/20',
  red: 'bg-red-50 dark:bg-red-900/20',
  cyan: 'bg-cyan-50 dark:bg-cyan-900/20',
};

export function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState(0);

  const additionalFeatures = [
    'تقارير مالية متقدمة',
    'دعم العملات المتعددة',
    'تكامل مع البنوك',
    'سير عمل مخصص',
    'تطبيق الجوال',
    'API كامل',
    'نسخ احتياطي آلي',
    'تحديثات مستمرة',
  ];

  return (
    <section id="features" className="py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            مميزات قوية
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            كل ما تحتاجه لإدارة <span className="text-gradient">أعمالك</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            نظام متكامل يغطي جميع جوانب عملك من المحاسبة إلى إدارة العلاقات مع العملاء
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            return (
              <div
                key={feature.title}
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setActiveFeature(index)}
                className={`group relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 dark:border-gray-700 animate-fade-in-up ${
                  activeFeature === index ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${colorMap[feature.color]} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Effect */}
                <div className={`absolute inset-0 rounded-2xl ${bgColorMap[feature.color]} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`} />
              </div>
            );
          })}
        </div>

        {/* Feature Highlight */}
        <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative animate-fade-in-up">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
          </div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                لماذا تختار BankFin ERP؟
              </h3>
              <p className="text-blue-100 mb-8 leading-relaxed">
                نقدم لك منصة متكاملة تجمع بين القوة والبساطة، 
                مع دعم فني على مدار الساعة وتحديثات مستمرة.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {additionalFeatures.map((item, index) => (
                  <div
                    key={item}
                    style={{ animationDelay: `${index * 0.05}s` }}
                    className="flex items-center gap-2 animate-fade-in-right"
                  >
                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <button className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
                اكتشف المزيد
                <ArrowLeft className="w-5 h-5" />
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-blue-100">عميل سعيد</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold mb-2">99.9%</div>
                <div className="text-blue-100">استمرارية</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold mb-2">40%</div>
                <div className="text-blue-100">توفير في التكاليف</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-blue-100">دعم فني</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
