import { create } from "zustand"

export interface DashboardSummary {
  totalBalance: number
  totalCredits: number
  totalDebits: number
  transactionCount: number
  balanceChange: number
  creditsChange: number
  debitsChange: number
  transactionChange: number
}

interface SummaryState {
  summary: DashboardSummary
  setSummary: (s: DashboardSummary) => void
}

export const summaryStore = create<SummaryState>((set) => ({
  summary: {
    totalBalance: 12345,
    totalCredits: 7890,
    totalDebits: 4455,
    transactionCount: 150,
    balanceChange: 5,
    creditsChange: 3,
    debitsChange: -2,
    transactionChange: 10,
  },
  setSummary: (summary) => set({ summary }),
}))

