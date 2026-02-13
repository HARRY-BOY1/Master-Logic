// User Types
export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'manager' | 'user';
  avatar?: string;
  company?: string;
  department?: string;
}

// Navigation Types
export interface NavItem {
  label: string;
  href: string;
  icon: string;
  badge?: number;
  children?: NavItem[];
}

// Dashboard Stats
export interface DashboardStats {
  totalRevenue: number;
  totalExpenses: number;
  netProfit: number;
  totalCustomers: number;
  totalEmployees: number;
  inventoryValue: number;
  pendingInvoices: number;
  monthlyGrowth: number;
}

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

// Invoice Types
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

export interface InvoiceItem {
  id: string;
  description: string;
  quantity: number;
  unitPrice: number;
  total: number;
}

// Chart Data Types
export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    color?: string;
  }[];
}

// Feature Types
export interface Feature {
  icon: string;
  title: string;
  description: string;
  color: string;
}

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

// Notification Types
export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  timestamp: string;
  read: boolean;
}

// Report Types
export interface Report {
  id: string;
  name: string;
  type: 'financial' | 'sales' | 'inventory' | 'hr';
  generatedAt: string;
  format: 'pdf' | 'excel' | 'csv';
  size: string;
}
