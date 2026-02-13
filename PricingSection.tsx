import { useState } from 'react';
import { Check, Sparkles, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { pricingPlans } from '@/data/mockData';

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            خطط الأسعار
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            اختر <span className="text-gradient">الخطة المناسبة</span> لعملك
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            خطط مرنة تناسب جميع الأحجام، مع إمكانية الترقية في أي وقت
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className={`text-sm font-medium ${!isYearly ? 'text-gray-900 dark:text-white' : 'text-gray-500'}`}>
            شهري
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className={`relative w-14 h-7 rounded-full transition-colors ${
              isYearly ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
            }`}
          >
            <div
              className={`absolute top-1 w-5 h-5 rounded-full bg-white transition-transform ${
                isYearly ? 'left-8' : 'left-1'
              }`}
            />
          </button>
          <span className={`text-sm font-medium ${isYearly ? 'text-gray-900 dark:text-white' : 'text-gray-500'}`}>
            سنوي
            <span className="mr-2 px-2 py-0.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs">
              وفّر 20%
            </span>
          </span>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.name}
              style={{ animationDelay: `${index * 0.1}s` }}
              className={`relative rounded-2xl p-8 animate-fade-in-up ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-xl shadow-blue-500/25 scale-105'
                  : 'bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700'
              }`}
            >
              {/* Popular Badge */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="px-4 py-1 rounded-full bg-yellow-400 text-yellow-900 text-sm font-bold flex items-center gap-1">
                    <Sparkles className="w-4 h-4" />
                    الأكثر شيوعاً
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className={`text-xl font-bold mb-2 ${
                  plan.highlighted ? 'text-white' : 'text-gray-900 dark:text-white'
                }`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-4 ${
                  plan.highlighted ? 'text-blue-100' : 'text-gray-500 dark:text-gray-400'
                }`}>
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  {plan.price > 0 ? (
                    <>
                      <span className={`text-4xl font-bold ${
                        plan.highlighted ? 'text-white' : 'text-gray-900 dark:text-white'
                      }`}>
                        {isYearly ? Math.round(plan.price * 0.8 * 12) : plan.price}
                      </span>
                      <span className={plan.highlighted ? 'text-blue-100' : 'text-gray-500'}>
                        ر.س / {isYearly ? 'سنوياً' : 'شهرياً'}
                      </span>
                    </>
                  ) : (
                    <span className={`text-2xl font-bold ${
                      plan.highlighted ? 'text-white' : 'text-gray-900 dark:text-white'
                    }`}>
                      {plan.period}
                    </span>
                  )}
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      plan.highlighted ? 'bg-white/20' : 'bg-green-100 dark:bg-green-900/30'
                    }`}>
                      <Check className={`w-3 h-3 ${
                        plan.highlighted ? 'text-white' : 'text-green-600'
                      }`} />
                    </div>
                    <span className={plan.highlighted ? 'text-white' : 'text-gray-600 dark:text-gray-400'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                className={`w-full py-3 ${
                  plan.highlighted
                    ? 'bg-white text-blue-600 hover:bg-blue-50'
                    : 'btn-primary'
                }`}
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>

        {/* Enterprise CTA */}
        <div className="mt-16 text-center animate-fade-in-up">
          <div className="inline-flex items-center gap-4 p-6 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700">
            <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
              <Building2 className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-right">
              <h4 className="font-bold">تحتاج حلاً مخصصاً؟</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                فريقنا جاهز لمساعدتك في بناء الحل المثالي لعملك
              </p>
            </div>
            <Button variant="outline" className="mr-4">
              تواصل معنا
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
