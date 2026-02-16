export interface FinancialMetric {
  label: string;
  value: number;
  unit: string;
  growth?: number;
}

export interface CapTableEntry {
  name: string;
  percentage: number;
  fill: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum View {
  DASHBOARD = 'DASHBOARD',
  FINANCIALS = 'FINANCIALS',
  STRATEGY = 'STRATEGY',
  ASSISTANT = 'ASSISTANT'
}