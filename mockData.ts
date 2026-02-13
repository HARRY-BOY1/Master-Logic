// Dashboard Stats
export const dashboardStats = {
  totalRevenue: 2450000,
  totalExpenses: 1680000,
  netProfit: 770000,
  totalCustomers: 1248,
  totalEmployees: 86,
  inventoryValue: 892000,
  pendingInvoices: 34,
  monthlyGrowth: 12.5
};

// Transaction Types
export interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  type: 'income' | 'expense' | 'transfer';
  category: string;
  status: 'completed' | 'pending' | 'cancelled';
  reference?: string;
}

export const recentTransactions: Transaction[] = [
  { id: '1', date: '2025-02-13', description: 'دفعة من شركة التقنية', amount: 45000, type: 'income', category: 'مبيعات', status: 'completed', reference: 'INV-2025-001' },
  { id: '2', date: '2025-02-12', description: 'رواتب الموظفين', amount: 125000, type: 'expense', category: 'رواتب', status: 'completed', reference: 'SAL-2025-02' },
  { id: '3', date: '2025-02-11', description: 'شراء معدات مكتبية', amount: 8500, type: 'expense', category: 'معدات', status: 'completed', reference: 'PO-2025-045' },
  { id: '4', date: '2025-02-10', description: 'دفعة من العميل أحمد', amount: 12000, type: 'income', category: 'مبيعات', status: 'pending', reference: 'INV-2025-002' },
  { id: '5', date: '2025-02-09', description: 'فاتورة كهرباء', amount: 3200, type: 'expense', category: 'خدمات', status: 'completed', reference: 'UTIL-2025-02' },
  { id: '6', date: '2025-02-08', description: 'إيجار المكتب', amount: 25000, type: 'expense', category: 'إيجار', status: 'completed', reference: 'RENT-2025-02' },
];

// Account Types
export interface Account {
  id: string;
  name: string;
  accountNumber: string;
  balance: number;
  currency: string;
  type: 'bank' | 'cash' | 'credit';
  status: 'active' | 'inactive';
}

export const accounts: Account[] = [
  { id: '1', name: 'البنك الأهلي - الجاري', accountNumber: 'SA0380000000608010167519', balance: 1250000, currency: 'SAR', type: 'bank', status: 'active' },
  { id: '2', name: 'البنك الراجحي - التوفير', accountNumber: 'SA6680000026608010167519', balance: 850000, currency: 'SAR', type: 'bank', status: 'active' },
  { id: '3', name: 'الصندوق النقدي', accountNumber: 'CASH-001', balance: 45000, currency: 'SAR', type: 'cash', status: 'active' },
  { id: '4', name: 'بطاقة ائتمانية', accountNumber: '**** **** **** 4582', balance: -15000, currency: 'SAR', type: 'credit', status: 'active' },
];

// Employee Types
export interface Employee {
  id: string;
  name: string;
  email: string;
  phone: string;
  department: string;
  position: string;
  salary: number;
  joinDate: string;
  status: 'active' | 'inactive' | 'on_leave';
  avatar?: string;
}

export const employees: Employee[] = [
  { id: '1', name: 'أحمد محمد العلي', email: 'ahmed@company.sa', phone: '0501234567', department: 'تقنية المعلومات', position: 'مدير تقني', salary: 25000, joinDate: '2022-03-15', status: 'active' },
  { id: '2', name: 'سارة أحمد الخالد', email: 'sara@company.sa', phone: '0502345678', department: 'الموارد البشرية', position: 'مدير موارد بشرية', salary: 22000, joinDate: '2021-06-20', status: 'active' },
  { id: '3', name: 'محمد عبدالله الفهد', email: 'mohammed@company.sa', phone: '0503456789', department: 'المبيعات', position: 'مدير مبيعات', salary: 20000, joinDate: '2023-01-10', status: 'active' },
  { id: '4', name: 'فاطمة سعد الحربي', email: 'fatima@company.sa', phone: '0504567890', department: 'المحاسبة', position: 'محاسب', salary: 12000, joinDate: '2022-09-05', status: 'active' },
  { id: '5', name: 'خالد عمر السالم', email: 'khaled@company.sa', phone: '0505678901', department: 'تقنية المعلومات', position: 'مطور برمجيات', salary: 18000, joinDate: '2023-04-12', status: 'on_leave' },
  { id: '6', name: 'نورة عبدالرحمن الشمري', email: 'noura@company.sa', phone: '0506789012', department: 'التسويق', position: 'مدير تسويق', salary: 19000, joinDate: '2021-11-30', status: 'active' },
];

// Inventory Types
export interface InventoryItem {
  id: string;
  name: string;
  sku: string;
  category: string;
  quantity: number;
  unitPrice: number;
  reorderLevel: number;
  warehouse: string;
  status: 'in_stock' | 'low_stock' | 'out_of_stock';
}

export const inventoryItems: InventoryItem[] = [
  { id: '1', name: 'لابتوب Dell XPS 15', sku: 'DELL-XPS15-001', category: 'أجهزة إلكترونية', quantity: 25, unitPrice: 6500, reorderLevel: 10, warehouse: 'المستودع الرئيسي', status: 'in_stock' },
  { id: '2', name: 'طابعة HP LaserJet', sku: 'HP-LJ-002', category: 'أجهزة مكتبية', quantity: 8, unitPrice: 1200, reorderLevel: 5, warehouse: 'المستودع الرئيسي', status: 'low_stock' },
  { id: '3', name: 'شاشة Samsung 27"', sku: 'SAM-27-003', category: 'أجهزة إلكترونية', quantity: 0, unitPrice: 1800, reorderLevel: 8, warehouse: 'المستودع الرئيسي', status: 'out_of_stock' },
  { id: '4', name: 'كرسي مكتب مريح', sku: 'CHAIR-004', category: 'أثاث مكتبي', quantity: 45, unitPrice: 850, reorderLevel: 15, warehouse: 'المستودع الثانوي', status: 'in_stock' },
  { id: '5', name: 'مكتب خشبي', sku: 'DESK-005', category: 'أثاث مكتبي', quantity: 12, unitPrice: 1500, reorderLevel: 8, warehouse: 'المستودع الثانوي', status: 'in_stock' },
];

// CRM Types
export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  status: 'lead' | 'prospect' | 'customer' | 'inactive';
  lastContact: string;
  totalRevenue: number;
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  source: string;
  status: 'new' | 'contacted' | 'qualified' | 'converted' | 'lost';
  assignedTo: string;
  createdAt: string;
}

export const customers: Customer[] = [
  { id: '1', name: 'شركة التقنية المتقدمة', email: 'info@techadv.sa', phone: '0112345678', company: 'التقنية المتقدمة', status: 'customer', lastContact: '2025-02-10', totalRevenue: 450000 },
  { id: '2', name: 'مؤسسة الأمل التجارية', email: 'contact@alamal.com', phone: '0113456789', company: 'الأمل التجارية', status: 'customer', lastContact: '2025-02-08', totalRevenue: 280000 },
  { id: '3', name: 'شركة النور للإنشاءات', email: 'sales@alnoor.com', phone: '0114567890', company: 'النور للإنشاءات', status: 'prospect', lastContact: '2025-02-05', totalRevenue: 0 },
  { id: '4', name: 'مؤسسة الصفوة', email: 'info@alsafwa.sa', phone: '0115678901', company: 'الصفوة', status: 'customer', lastContact: '2025-02-12', totalRevenue: 620000 },
  { id: '5', name: 'شركة الخليج للتجارة', email: 'contact@alkhaleej.com', phone: '0116789012', company: 'الخليج للتجارة', status: 'lead', lastContact: '2025-02-01', totalRevenue: 0 },
];

export const leads: Lead[] = [
  { id: '1', name: 'عبدالله محمد', email: 'abdullah@test.com', phone: '0501111111', source: 'موقع الويب', status: 'new', assignedTo: 'محمد عبدالله', createdAt: '2025-02-13' },
  { id: '2', name: 'منى سالم', email: 'mona@test.com', phone: '0502222222', source: 'وسائل التواصل', status: 'contacted', assignedTo: 'محمد عبدالله', createdAt: '2025-02-12' },
  { id: '3', name: 'يوسف أحمد', email: 'yousef@test.com', phone: '0503333333', source: 'إحالة', status: 'qualified', assignedTo: 'نورة عبدالرحمن', createdAt: '2025-02-10' },
  { id: '4', name: 'ليلى خالد', email: 'laila@test.com', phone: '0504444444', source: 'معرض', status: 'converted', assignedTo: 'محمد عبدالله', createdAt: '2025-02-05' },
];

// Invoice Types
export interface InvoiceItem {
  id: string;
  description: string;
  quantity: number;
  unitPrice: number;
  total: number;
}

export interface Invoice {
  id: string;
  invoiceNumber: string;
  customer: string;
  date: string;
  dueDate: string;
  amount: number;
  paid: number;
  status: 'draft' | 'sent' | 'paid' | 'overdue' | 'cancelled';
  items: InvoiceItem[];
}

export const invoices: Invoice[] = [
  { 
    id: '1', 
    invoiceNumber: 'INV-2025-001', 
    customer: 'شركة التقنية المتقدمة', 
    date: '2025-02-10', 
    dueDate: '2025-03-10', 
    amount: 45000, 
    paid: 45000, 
    status: 'paid',
    items: [
      { id: '1', description: 'خدمات تطوير البرمجيات', quantity: 1, unitPrice: 35000, total: 35000 },
      { id: '2', description: 'دعم فني - شهر فبراير', quantity: 1, unitPrice: 10000, total: 10000 },
    ]
  },
  { 
    id: '2', 
    invoiceNumber: 'INV-2025-002', 
    customer: 'مؤسسة الأمل التجارية', 
    date: '2025-02-08', 
    dueDate: '2025-03-08', 
    amount: 12000, 
    paid: 0, 
    status: 'sent',
    items: [
      { id: '1', description: 'استشارات تسويقية', quantity: 2, unitPrice: 6000, total: 12000 },
    ]
  },
  { 
    id: '3', 
    invoiceNumber: 'INV-2025-003', 
    customer: 'شركة النور للإنشاءات', 
    date: '2025-01-15', 
    dueDate: '2025-02-15', 
    amount: 75000, 
    paid: 25000, 
    status: 'overdue',
    items: [
      { id: '1', description: 'مشروع إدارة المخزون', quantity: 1, unitPrice: 75000, total: 75000 },
    ]
  },
];

// Pricing Plan Types
export interface PricingPlan {
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  buttonText: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    name: 'البداية',
    price: 299,
    period: 'شهرياً',
    description: 'مثالي للشركات الصغيرة والناشئة',
    features: [
      'حتى 10 مستخدمين',
      'الوحدات الأساسية (محاسبة، مخزون)',
      'دعم عبر البريد الإلكتروني',
      'تقارير أساسية',
      'الوصول عبر الجوال',
      'نسخ احتياطي يومي',
    ],
    buttonText: 'ابدأ الآن',
  },
  {
    name: 'الاحترافي',
    price: 799,
    period: 'شهرياً',
    description: 'الأكثر شيوعاً للشركات المتوسطة',
    features: [
      'حتى 50 مستخدم',
      'جميع الوحدات المتاحة',
      'دعم ذو أولوية',
      'تقارير متقدمة',
      'وصول API',
      'سير عمل مخصص',
      'نسخ احتياطي فوري',
      'تكامل مع التطبيقات',
    ],
    highlighted: true,
    buttonText: 'جرب مجاناً',
  },
  {
    name: 'المؤسسي',
    price: 0,
    period: 'اتصل بنا',
    description: 'للشركات الكبيرة والمؤسسات',
    features: [
      'مستخدمين غير محدود',
      'تخصيص كامل',
      'دعم 24/7 مخصص',
      'تحليلات متقدمة',
      'شركات متعددة',
      'تكاملات مخصصة',
      'نشر محلي متاح',
      'مدير حساب مخصص',
    ],
    buttonText: 'تواصل معنا',
  },
];

// Feature Types
export interface Feature {
  icon: string;
  title: string;
  description: string;
  color: string;
}

export const features: Feature[] = [
  {
    icon: 'BarChart3',
    title: 'الإدارة المالية',
    description: 'نظام محاسبة متكامل مع دعم العملات المتعددة، الميزانيات، والتقارير المالية الشاملة',
    color: 'blue',
  },
  {
    icon: 'Users',
    title: 'إدارة الموارد البشرية',
    description: 'إدارة كاملة لدورة حياة الموظف من التوظيف، الرواتب، التقييم، وحتى إنهاء الخدمة',
    color: 'green',
  },
  {
    icon: 'Package',
    title: 'إدارة المخزون',
    description: 'مراقبة المخزون في الوقت الفعلي، الطلب التلقائي، وإدارة المستودعات بكفاءة',
    color: 'orange',
  },
  {
    icon: 'Handshake',
    title: 'إدارة علاقات العملاء',
    description: 'متابعة المبيعات، خدمة العملاء، والعمليات التسويقية في منصة واحدة',
    color: 'purple',
  },
  {
    icon: 'Zap',
    title: 'أتمتة العمليات',
    description: 'تقليل الأخطاء البشرية عبر تحويل المهام اليدوية المتكررة إلى عمليات آلية',
    color: 'yellow',
  },
  {
    icon: 'GraduationCap',
    title: 'التعليم',
    description: 'أدوات خاصة لإدارة الكورسات، الطلاب، والحضور لقطاع التعليم',
    color: 'pink',
  },
  {
    icon: 'Shield',
    title: 'أمان على مستوى البنوك',
    description: 'حماية بمستوى بنكي مع تحكم دقيق في صلاحيات المستخدمين وسجل التدقيق الكامل',
    color: 'red',
  },
  {
    icon: 'Cloud',
    title: 'نظام سحابي',
    description: 'الوصول من أي مكان وفي أي وقت دون الحاجة لخوادم داخلية مع ضمان استمرارية 99.9%',
    color: 'cyan',
  },
];

// Notification Types
export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  timestamp: string;
  read: boolean;
}

export const notifications: Notification[] = [
  { id: '1', title: 'فاتورة جديدة', message: 'تم إنشاء فاتورة جديدة بقيمة 45,000 ريال', type: 'success', timestamp: '2025-02-13 10:30', read: false },
  { id: '2', title: 'تنبيه المخزون', message: 'المنتج طابعة HP LaserJet وصل للحد الأدنى', type: 'warning', timestamp: '2025-02-12 16:45', read: false },
  { id: '3', title: 'موعد استحقاق', message: 'فاتورة INV-2025-003 متأخرة عن الاستحقاق', type: 'error', timestamp: '2025-02-12 09:00', read: true },
  { id: '4', title: 'موظف جديد', message: 'تم إضافة موظف جديد: خالد عمر', type: 'info', timestamp: '2025-02-11 14:20', read: true },
];

// Report Types
export interface Report {
  id: string;
  name: string;
  type: 'financial' | 'sales' | 'inventory' | 'hr';
  generatedAt: string;
  format: 'pdf' | 'excel' | 'csv';
  size: string;
}

export const reports: Report[] = [
  { id: '1', name: 'التقرير المالي الشهري - يناير 2025', type: 'financial', generatedAt: '2025-02-01', format: 'pdf', size: '2.4 MB' },
  { id: '2', name: 'تقرير المبيعات الربع سنوي', type: 'sales', generatedAt: '2025-01-15', format: 'excel', size: '1.8 MB' },
  { id: '3', name: 'جرد المخزون - نهاية يناير', type: 'inventory', generatedAt: '2025-01-31', format: 'pdf', size: '3.2 MB' },
  { id: '4', name: 'تقرير الموارد البشرية - يناير', type: 'hr', generatedAt: '2025-02-05', format: 'excel', size: '980 KB' },
];

// Chart Data
export const revenueChartData = {
  labels: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
  datasets: [
    {
      label: 'الإيرادات',
      data: [180000, 195000, 210000, 185000, 220000, 245000, 230000, 250000, 265000, 240000, 280000, 295000],
      color: '#3b82f6',
    },
    {
      label: 'المصروفات',
      data: [140000, 155000, 160000, 150000, 175000, 190000, 180000, 195000, 200000, 185000, 210000, 220000],
      color: '#ef4444',
    },
  ],
};

export const expenseChartData = {
  labels: ['رواتب', 'إيجار', 'خدمات', 'تسويق', 'معدات', 'نقل', 'أخرى'],
  datasets: [
    {
      label: 'المصروفات حسب الفئة',
      data: [125000, 25000, 15000, 20000, 12000, 8000, 5000],
      color: '#10b981',
    },
  ],
};

export const salesChartData = {
  labels: ['السبت', 'الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة'],
  datasets: [
    {
      label: 'المبيعات',
      data: [12000, 19000, 15000, 22000, 18000, 25000, 8000],
      color: '#8b5cf6',
    },
  ],
};

export const inventoryChartData = {
  labels: ['أجهزة إلكترونية', 'أجهزة مكتبية', 'أثاث مكتبي', 'قرطاسية', 'أخرى'],
  datasets: [
    {
      label: 'القيمة',
      data: [450000, 180000, 120000, 85000, 57000],
      color: '#f59e0b',
    },
  ],
};
