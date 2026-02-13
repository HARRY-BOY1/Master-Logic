import { useState } from 'react';
import { 
  LayoutDashboard, Wallet, Users, Package, Handshake, 
  FileText, BarChart3, Settings, Bell, Search, Menu, X,
  LogOut, ChevronDown, TrendingUp, TrendingDown, Calendar,
  ArrowLeft, Download, Filter, RefreshCw, Building, Lock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  AreaChart, Area, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend 
} from 'recharts';
import { 
  recentTransactions, revenueChartData, expenseChartData, 
  notifications, accounts, employees, inventoryItems, 
  customers, invoices, reports 
} from '@/data/mockData';

interface DashboardPageProps {
  onLogout: () => void;
}

const navItems = [
  { id: 'dashboard', label: 'لوحة التحكم', icon: LayoutDashboard },
  { id: 'accounting', label: 'المحاسبة', icon: Wallet },
  { id: 'hr', label: 'الموارد البشرية', icon: Users },
  { id: 'inventory', label: 'المخزون', icon: Package },
  { id: 'crm', label: 'إدارة العملاء', icon: Handshake },
  { id: 'invoices', label: 'الفواتير', icon: FileText },
  { id: 'reports', label: 'التقارير', icon: BarChart3 },
  { id: 'settings', label: 'الإعدادات', icon: Settings },
];

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];

export function DashboardPage({ onLogout }: DashboardPageProps) {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardOverview />;
      case 'accounting':
        return <AccountingModule />;
      case 'hr':
        return <HRModule />;
      case 'inventory':
        return <InventoryModule />;
      case 'crm':
        return <CRMModule />;
      case 'invoices':
        return <InvoicesModule />;
      case 'reports':
        return <ReportsModule />;
      case 'settings':
        return <SettingsModule />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex">
      {/* Sidebar */}
      {isSidebarOpen && (
        <aside className="fixed lg:static inset-y-0 right-0 z-40 w-72 bg-white dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700 flex flex-col animate-slide-in-right">
          {/* Logo */}
          <div className="h-16 flex items-center justify-center border-b border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
                <LayoutDashboard className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-gradient">BankFin</span>
                <span className="text-xs text-gray-500 block -mt-1">ERP</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto py-4 px-3">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl mb-1 transition-all ${
                    activeTab === item.id
                      ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700/50'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* User Profile */}
          <div className="p-4 border-t border-gray-100 dark:border-gray-700">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white font-semibold">
                أ
              </div>
              <div className="flex-1 text-right">
                <p className="font-medium text-sm">أحمد محمد</p>
                <p className="text-xs text-gray-500">مدير النظام</p>
              </div>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </button>

            {isProfileOpen && (
              <div className="mt-2 space-y-1 animate-fade-in">
                <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-lg">
                  <Settings className="w-4 h-4" />
                  الإعدادات
                </button>
                <button 
                  onClick={onLogout}
                  className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg"
                >
                  <LogOut className="w-4 h-4" />
                  تسجيل الخروج
                </button>
              </div>
            )}
          </div>
        </aside>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="h-16 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between px-4 lg:px-8">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="lg:hidden"
            >
              {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="hidden lg:flex"
            >
              <Menu className="w-5 h-5" />
            </Button>
            <h1 className="text-lg font-semibold hidden sm:block">
              {navItems.find(item => item.id === activeTab)?.label}
            </h1>
          </div>

          <div className="flex items-center gap-3">
            {/* Search */}
            <div className="hidden md:flex items-center relative">
              <Search className="absolute right-3 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="بحث..."
                className="w-64 pr-10 pl-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Notifications */}
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                className="relative"
              >
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  3
                </span>
              </Button>

              {isNotificationsOpen && (
                <div className="absolute left-0 top-full mt-2 w-80 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden z-50 animate-fade-in">
                  <div className="p-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between">
                    <h4 className="font-semibold">الإشعارات</h4>
                    <button className="text-sm text-blue-600">تحديد الكل كمقروء</button>
                  </div>
                  <div className="max-h-80 overflow-y-auto">
                    {notifications.map((notif) => (
                      <div
                        key={notif.id}
                        className={`p-4 border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 cursor-pointer ${
                          !notif.read ? 'bg-blue-50/50 dark:bg-blue-900/10' : ''
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                            notif.type === 'success' ? 'bg-green-500' :
                            notif.type === 'warning' ? 'bg-yellow-500' :
                            notif.type === 'error' ? 'bg-red-500' : 'bg-blue-500'
                          }`} />
                          <div>
                            <p className="font-medium text-sm">{notif.title}</p>
                            <p className="text-sm text-gray-500">{notif.message}</p>
                            <p className="text-xs text-gray-400 mt-1">{notif.timestamp}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto p-4 lg:p-8">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

// Dashboard Overview Component
function DashboardOverview() {
  const stats = [
    { 
      label: 'إجمالي الإيرادات', 
      value: '2,450,000 ر.س', 
      change: '+12.5%', 
      trend: 'up',
      icon: Wallet,
      color: 'blue'
    },
    { 
      label: 'إجمالي المصروفات', 
      value: '1,680,000 ر.س', 
      change: '+5.2%', 
      trend: 'down',
      icon: TrendingDown,
      color: 'red'
    },
    { 
      label: 'صافي الربح', 
      value: '770,000 ر.س', 
      change: '+18.3%', 
      trend: 'up',
      icon: TrendingUp,
      color: 'green'
    },
    { 
      label: 'العملاء', 
      value: '1,248', 
      change: '+8.2%', 
      trend: 'up',
      icon: Users,
      color: 'purple'
    },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">مرحباً، أحمد! 👋</h2>
          <p className="text-gray-500">نظرة عامة على أداء عملك</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Calendar className="w-4 h-4" />
          {new Date().toLocaleDateString('ar-SA', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            style={{ animationDelay: `${index * 0.1}s` }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 stat-card animate-fade-in-up"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`w-12 h-12 rounded-xl bg-${stat.color}-100 dark:bg-${stat.color}-900/30 flex items-center justify-center`}>
                <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
              </div>
              <span className={`text-sm font-medium ${
                stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.change}
              </span>
            </div>
            <p className="text-gray-500 text-sm mb-1">{stat.label}</p>
            <p className="text-2xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 animate-fade-in-up">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold">الإيرادات والمصروفات</h3>
            <select className="text-sm border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-1 bg-transparent">
              <option>السنة الحالية</option>
              <option>السنة الماضية</option>
            </select>
          </div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueChartData.labels.map((label, i) => ({
                name: label,
                إيرادات: revenueChartData.datasets[0].data[i],
                مصروفات: revenueChartData.datasets[1].data[i],
              }))}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorExpense" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="name" stroke="#9ca3af" fontSize={12} />
                <YAxis stroke="#9ca3af" fontSize={12} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px'
                  }}
                />
                <Legend />
                <Area type="monotone" dataKey="إيرادات" stroke="#3b82f6" fillOpacity={1} fill="url(#colorRevenue)" />
                <Area type="monotone" dataKey="مصروفات" stroke="#ef4444" fillOpacity={1} fill="url(#colorExpense)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Expense Distribution */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 animate-fade-in-up">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold">توزيع المصروفات</h3>
            <Button variant="ghost" size="sm">
              <Download className="w-4 h-4 mr-2" />
              تصدير
            </Button>
          </div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={expenseChartData.datasets[0].data.map((value, i) => ({
                    name: expenseChartData.labels[i],
                    value
                  }))}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {expenseChartData.datasets[0].data.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden animate-fade-in-up">
        <div className="p-6 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between">
          <h3 className="font-bold">آخر المعاملات</h3>
          <Button variant="ghost" size="sm" className="text-blue-600">
            عرض الكل
            <ArrowLeft className="w-4 h-4 mr-2" />
          </Button>
        </div>
        <div className="overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr>
                <th>التاريخ</th>
                <th>الوصف</th>
                <th>الفئة</th>
                <th>المبلغ</th>
                <th>الحالة</th>
              </tr>
            </thead>
            <tbody>
              {recentTransactions.slice(0, 5).map((transaction) => (
                <tr key={transaction.id}>
                  <td>{transaction.date}</td>
                  <td>{transaction.description}</td>
                  <td>{transaction.category}</td>
                  <td className={transaction.type === 'income' ? 'text-green-600' : 'text-red-600'}>
                    {transaction.type === 'income' ? '+' : '-'}{transaction.amount.toLocaleString()} ر.س
                  </td>
                  <td>
                    <span className={`status-badge ${
                      transaction.status === 'completed' ? 'status-success' :
                      transaction.status === 'pending' ? 'status-warning' : 'status-danger'
                    }`}>
                      {transaction.status === 'completed' ? 'مكتمل' :
                       transaction.status === 'pending' ? 'معلق' : 'ملغي'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// Accounting Module
function AccountingModule() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">الإدارة المالية</h2>
        <div className="flex gap-3">
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            تصفية
          </Button>
          <Button className="btn-primary">
            + معاملة جديدة
          </Button>
        </div>
      </div>

      {/* Accounts Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {accounts.map((account, index) => (
          <div
            key={account.id}
            style={{ animationDelay: `${index * 0.1}s` }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 animate-fade-in-up"
          >
            <p className="text-gray-500 text-sm mb-2">{account.name}</p>
            <p className={`text-2xl font-bold ${account.balance < 0 ? 'text-red-600' : ''}`}>
              {account.balance.toLocaleString()} {account.currency}
            </p>
            <p className="text-xs text-gray-400 mt-2">{account.accountNumber}</p>
          </div>
        ))}
      </div>

      {/* Transactions Table */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
        <div className="p-6 border-b border-gray-100 dark:border-gray-700">
          <h3 className="font-bold">سجل المعاملات</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr>
                <th>التاريخ</th>
                <th>المرجع</th>
                <th>الوصف</th>
                <th>الفئة</th>
                <th>النوع</th>
                <th>المبلغ</th>
                <th>الحالة</th>
              </tr>
            </thead>
            <tbody>
              {recentTransactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td>{transaction.date}</td>
                  <td>{transaction.reference}</td>
                  <td>{transaction.description}</td>
                  <td>{transaction.category}</td>
                  <td>
                    <span className={`status-badge ${
                      transaction.type === 'income' ? 'status-success' : 'status-danger'
                    }`}>
                      {transaction.type === 'income' ? 'إيراد' : 'مصروف'}
                    </span>
                  </td>
                  <td className={transaction.type === 'income' ? 'text-green-600' : 'text-red-600'}>
                    {transaction.type === 'income' ? '+' : '-'}{transaction.amount.toLocaleString()} ر.س
                  </td>
                  <td>
                    <span className={`status-badge ${
                      transaction.status === 'completed' ? 'status-success' :
                      transaction.status === 'pending' ? 'status-warning' : 'status-danger'
                    }`}>
                      {transaction.status === 'completed' ? 'مكتمل' :
                       transaction.status === 'pending' ? 'معلق' : 'ملغي'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// HR Module
function HRModule() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">إدارة الموارد البشرية</h2>
        <Button className="btn-primary">
          + موظف جديد
        </Button>
      </div>

      {/* Stats */}
      <div className="grid sm:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
          <p className="text-gray-500 text-sm">إجمالي الموظفين</p>
          <p className="text-3xl font-bold">86</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
          <p className="text-gray-500 text-sm">نشطين</p>
          <p className="text-3xl font-bold text-green-600">78</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
          <p className="text-gray-500 text-sm">في إجازة</p>
          <p className="text-3xl font-bold text-yellow-600">5</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
          <p className="text-gray-500 text-sm">إجمالي الرواتب</p>
          <p className="text-3xl font-bold">1.2M ر.س</p>
        </div>
      </div>

      {/* Employees Table */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
        <div className="p-6 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between">
          <h3 className="font-bold">قائمة الموظفين</h3>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              تصدير
            </Button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr>
                <th>الموظف</th>
                <th>القسم</th>
                <th>المنصب</th>
                <th>الراتب</th>
                <th>تاريخ التعيين</th>
                <th>الحالة</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white font-semibold">
                        {employee.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium">{employee.name}</p>
                        <p className="text-xs text-gray-500">{employee.email}</p>
                      </div>
                    </div>
                  </td>
                  <td>{employee.department}</td>
                  <td>{employee.position}</td>
                  <td>{employee.salary.toLocaleString()} ر.س</td>
                  <td>{employee.joinDate}</td>
                  <td>
                    <span className={`status-badge ${
                      employee.status === 'active' ? 'status-success' :
                      employee.status === 'on_leave' ? 'status-warning' : 'status-danger'
                    }`}>
                      {employee.status === 'active' ? 'نشط' :
                       employee.status === 'on_leave' ? 'في إجازة' : 'غير نشط'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// Inventory Module
function InventoryModule() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">إدارة المخزون</h2>
        <div className="flex gap-3">
          <Button variant="outline">
            <RefreshCw className="w-4 h-4 mr-2" />
            تحديث
          </Button>
          <Button className="btn-primary">
            + منتج جديد
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid sm:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
          <p className="text-gray-500 text-sm">إجمالي المنتجات</p>
          <p className="text-3xl font-bold">156</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
          <p className="text-gray-500 text-sm">في المخزون</p>
          <p className="text-3xl font-bold text-green-600">142</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
          <p className="text-gray-500 text-sm">مخزون منخفض</p>
          <p className="text-3xl font-bold text-yellow-600">8</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
          <p className="text-gray-500 text-sm">نفذ من المخزون</p>
          <p className="text-3xl font-bold text-red-600">6</p>
        </div>
      </div>

      {/* Inventory Table */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
        <div className="p-6 border-b border-gray-100 dark:border-gray-700">
          <h3 className="font-bold">قائمة المخزون</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr>
                <th>المنتج</th>
                <th>SKU</th>
                <th>الفئة</th>
                <th>الكمية</th>
                <th>سعر الوحدة</th>
                <th>المستودع</th>
                <th>الحالة</th>
              </tr>
            </thead>
            <tbody>
              {inventoryItems.map((item) => (
                <tr key={item.id}>
                  <td className="font-medium">{item.name}</td>
                  <td className="text-gray-500">{item.sku}</td>
                  <td>{item.category}</td>
                  <td>{item.quantity}</td>
                  <td>{item.unitPrice.toLocaleString()} ر.س</td>
                  <td>{item.warehouse}</td>
                  <td>
                    <span className={`status-badge ${
                      item.status === 'in_stock' ? 'status-success' :
                      item.status === 'low_stock' ? 'status-warning' : 'status-danger'
                    }`}>
                      {item.status === 'in_stock' ? 'متوفر' :
                       item.status === 'low_stock' ? 'منخفض' : 'نفذ'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// CRM Module
function CRMModule() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">إدارة علاقات العملاء</h2>
        <Button className="btn-primary">
          + عميل جديد
        </Button>
      </div>

      {/* Stats */}
      <div className="grid sm:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
          <p className="text-gray-500 text-sm">إجمالي العملاء</p>
          <p className="text-3xl font-bold">1,248</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
          <p className="text-gray-500 text-sm">عملاء نشطون</p>
          <p className="text-3xl font-bold text-green-600">892</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
          <p className="text-gray-500 text-sm">عملاء محتملون</p>
          <p className="text-3xl font-bold text-blue-600">156</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
          <p className="text-gray-500 text-sm">إجمالي الإيرادات</p>
          <p className="text-3xl font-bold">4.2M ر.س</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
        <div className="flex border-b border-gray-100 dark:border-gray-700">
          <button className="px-6 py-4 font-medium text-blue-600 border-b-2 border-blue-600">
            العملاء
          </button>
          <button className="px-6 py-4 font-medium text-gray-500 hover:text-gray-700">
            العملاء المحتملون
          </button>
        </div>

        <div className="p-6">
          <table className="data-table">
            <thead>
              <tr>
                <th>العميل</th>
                <th>الشركة</th>
                <th>الحالة</th>
                <th>آخر تواصل</th>
                <th>إجمالي الإيرادات</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr key={customer.id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-400 flex items-center justify-center text-white font-semibold">
                        {customer.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium">{customer.name}</p>
                        <p className="text-xs text-gray-500">{customer.email}</p>
                      </div>
                    </div>
                  </td>
                  <td>{customer.company}</td>
                  <td>
                    <span className={`status-badge ${
                      customer.status === 'customer' ? 'status-success' :
                      customer.status === 'prospect' ? 'status-warning' : 'status-info'
                    }`}>
                      {customer.status === 'customer' ? 'عميل' :
                       customer.status === 'prospect' ? 'محتمل' : 'متوقف'}
                    </span>
                  </td>
                  <td>{customer.lastContact}</td>
                  <td>{customer.totalRevenue.toLocaleString()} ر.س</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// Invoices Module
function InvoicesModule() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">إدارة الفواتير</h2>
        <Button className="btn-primary">
          + فاتورة جديدة
        </Button>
      </div>

      {/* Stats */}
      <div className="grid sm:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
          <p className="text-gray-500 text-sm">إجمالي الفواتير</p>
          <p className="text-3xl font-bold">156</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
          <p className="text-gray-500 text-sm">مدفوعة</p>
          <p className="text-3xl font-bold text-green-600">98</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
          <p className="text-gray-500 text-sm">معلقة</p>
          <p className="text-3xl font-bold text-yellow-600">34</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
          <p className="text-gray-500 text-sm">متأخرة</p>
          <p className="text-3xl font-bold text-red-600">24</p>
        </div>
      </div>

      {/* Invoices Table */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
        <div className="p-6 border-b border-gray-100 dark:border-gray-700">
          <h3 className="font-bold">قائمة الفواتير</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr>
                <th>رقم الفاتورة</th>
                <th>العميل</th>
                <th>التاريخ</th>
                <th>تاريخ الاستحقاق</th>
                <th>المبلغ</th>
                <th>المدفوع</th>
                <th>الحالة</th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((invoice) => (
                <tr key={invoice.id}>
                  <td className="font-medium">{invoice.invoiceNumber}</td>
                  <td>{invoice.customer}</td>
                  <td>{invoice.date}</td>
                  <td>{invoice.dueDate}</td>
                  <td>{invoice.amount.toLocaleString()} ر.س</td>
                  <td>{invoice.paid.toLocaleString()} ر.س</td>
                  <td>
                    <span className={`status-badge ${
                      invoice.status === 'paid' ? 'status-success' :
                      invoice.status === 'sent' ? 'status-info' :
                      invoice.status === 'overdue' ? 'status-danger' : 'status-warning'
                    }`}>
                      {invoice.status === 'paid' ? 'مدفوعة' :
                       invoice.status === 'sent' ? 'مرسلة' :
                       invoice.status === 'overdue' ? 'متأخرة' : 'مسودة'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// Reports Module
function ReportsModule() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">التقارير</h2>
        <Button className="btn-primary">
          + تقرير جديد
        </Button>
      </div>

      {/* Report Types */}
      <div className="grid sm:grid-cols-4 gap-6">
        {[
          { name: 'المالية', icon: Wallet, color: 'blue', count: 12 },
          { name: 'المبيعات', icon: TrendingUp, color: 'green', count: 8 },
          { name: 'المخزون', icon: Package, color: 'orange', count: 6 },
          { name: 'الموارد البشرية', icon: Users, color: 'purple', count: 4 },
        ].map((type, index) => (
          <div
            key={type.name}
            style={{ animationDelay: `${index * 0.1}s` }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 cursor-pointer hover:shadow-md transition-shadow animate-fade-in-up"
          >
            <div className={`w-12 h-12 rounded-xl bg-${type.color}-100 dark:bg-${type.color}-900/30 flex items-center justify-center mb-4`}>
              <type.icon className={`w-6 h-6 text-${type.color}-600`} />
            </div>
            <p className="text-gray-500 text-sm">تقارير {type.name}</p>
            <p className="text-2xl font-bold">{type.count}</p>
          </div>
        ))}
      </div>

      {/* Reports List */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
        <div className="p-6 border-b border-gray-100 dark:border-gray-700">
          <h3 className="font-bold">التقارير الأخيرة</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr>
                <th>اسم التقرير</th>
                <th>النوع</th>
                <th>تاريخ الإنشاء</th>
                <th>الصيغة</th>
                <th>الحجم</th>
                <th>الإجراءات</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report) => (
                <tr key={report.id}>
                  <td className="font-medium">{report.name}</td>
                  <td>
                    <span className="status-badge status-info">
                      {report.type === 'financial' ? 'مالي' :
                       report.type === 'sales' ? 'مبيعات' :
                       report.type === 'inventory' ? 'مخزون' : 'موارد بشرية'}
                    </span>
                  </td>
                  <td>{report.generatedAt}</td>
                  <td className="uppercase">{report.format}</td>
                  <td>{report.size}</td>
                  <td>
                    <Button variant="ghost" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      تحميل
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// Settings Module
function SettingsModule() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">الإعدادات</h2>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-2">
          {[
            { id: 'general', label: 'عام', icon: Settings },
            { id: 'company', label: 'الشركة', icon: Building },
            { id: 'users', label: 'المستخدمين', icon: Users },
            { id: 'security', label: 'الأمان', icon: Lock },
            { id: 'notifications', label: 'الإشعارات', icon: Bell },
          ].map((item) => (
            <button
              key={item.id}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-right"
            >
              <item.icon className="w-5 h-5 text-gray-500" />
              <span>{item.label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
          <h3 className="font-bold mb-6">الإعدادات العامة</h3>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">اسم الشركة</label>
              <input
                type="text"
                defaultValue="شركة التقنية المتقدمة"
                className="form-input-banking"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">البريد الإلكتروني</label>
              <input
                type="email"
                defaultValue="info@company.sa"
                className="form-input-banking"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">العملة الافتراضية</label>
              <select className="form-input-banking">
                <option value="SAR">ريال سعودي (SAR)</option>
                <option value="USD">دولار أمريكي (USD)</option>
                <option value="EUR">يورو (EUR)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">اللغة</label>
              <select className="form-input-banking">
                <option value="ar">العربية</option>
                <option value="en">English</option>
              </select>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
              <div>
                <p className="font-medium">الوضع الليلي</p>
                <p className="text-sm text-gray-500">تفعيل الوضع الليلي في الواجهة</p>
              </div>
              <button className="w-12 h-6 rounded-full bg-blue-600 relative">
                <div className="absolute left-1 top-1 w-4 h-4 rounded-full bg-white" />
              </button>
            </div>

            <div className="pt-4">
              <Button className="btn-primary">
                حفظ التغييرات
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
