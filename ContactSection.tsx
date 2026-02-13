import { useState } from 'react';
import { 
  Mail, Phone, MapPin, Clock, Send, 
  MessageCircle, Headphones, Calendar 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('شكراً لتواصلك معنا! سنرد عليك في أقرب وقت.');
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'البريد الإلكتروني',
      content: 'contact@bankfin.sa',
      description: 'نرد خلال 24 ساعة',
    },
    {
      icon: Phone,
      title: 'الهاتف',
      content: '9200xxxxx',
      description: 'من السبت إلى الخميس',
    },
    {
      icon: MapPin,
      title: 'العنوان',
      content: 'الرياض، المملكة العربية السعودية',
      description: 'برج المملكة، الطابق 25',
    },
    {
      icon: Clock,
      title: 'ساعات العمل',
      content: '8:00 ص - 6:00 م',
      description: 'السبت - الخميس',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-4">
            <MessageCircle className="w-4 h-4" />
            تواصل معنا
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            نحن هنا <span className="text-gradient">للمساعدة</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            فريقنا جاهز للإجابة على جميع استفساراتك ومساعدتك في اختيار الحل المناسب
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-4">
            {contactInfo.map((item, index) => (
              <div
                key={item.title}
                style={{ animationDelay: `${index * 0.1}s` }}
                className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow animate-fade-in-right"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{item.title}</h4>
                    <p className="text-gray-900 dark:text-white font-medium">{item.content}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl p-5 text-white animate-fade-in-right">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                  <Headphones className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold">دعم فني 24/7</h4>
                  <p className="text-sm text-blue-100">فريقنا جاهز دائماً</p>
                </div>
              </div>
              <Button className="w-full bg-white text-blue-600 hover:bg-blue-50">
                <Calendar className="w-4 h-4 mr-2" />
                حجز موعد
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 animate-fade-in-up">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold mb-6">أرسل لنا رسالة</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
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
                    <label className="block text-sm font-medium mb-2">البريد الإلكتروني *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="form-input-banking"
                      placeholder="ahmed@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
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
                  <div>
                    <label className="block text-sm font-medium mb-2">رقم الهاتف</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="form-input-banking"
                      placeholder="050xxxxxxx"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">الرسالة *</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="form-input-banking resize-none"
                    placeholder="اكتب رسالتك هنا..."
                  />
                </div>

                <Button type="submit" className="btn-primary w-full md:w-auto">
                  <Send className="w-5 h-5 mr-2" />
                  إرسال الرسالة
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
