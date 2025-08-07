import { create } from "zustand"
import { v4 as uuid } from "uuid"

export type TransactionType = "Credit" | "Debit"

export interface Transaction {
  id: string
  date: string // ISO string YYYY-MM-DD
  remark: string
  amount: number // positive for display
  currency: string
  type: TransactionType
}

interface TxState {
  transactions: Transaction[]
  setTransactions: (t: Transaction[]) => void
  addTransaction: (t: Omit<Transaction, "id">) => void
}

export const transactionsStore = create<TxState>((set) => ({
  transactions: [
    { id: uuid(), date: "2023-10-01", remark: "Salary", amount: 3000, currency: "USD", type: "Credit" },
    { id: uuid(), date: "2023-10-02", remark: "Groceries", amount: 150, currency: "USD", type: "Debit" },
    { id: uuid(), date: "2023-10-03", remark: "Gym Membership", amount: 50, currency: "USD", type: "Debit" },
    { id: uuid(), date: "2023-10-04", remark: "Dinner", amount: 40, currency: "USD", type: "Debit" },
    { id: uuid(), date: "2023-10-05", remark: "Movie Tickets", amount: 30, currency: "USD", type: "Debit" },
    { id: uuid(), date: "2023-10-06", remark: "Rent", amount: 1200, currency: "USD", type: "Debit" },
    { id: uuid(), date: "2023-10-07", remark: "Utilities", amount: 100, currency: "USD", type: "Debit" },
    { id: uuid(), date: "2023-10-08", remark: "Car Payment", amount: 400, currency: "USD", type: "Debit" },
    { id: uuid(), date: "2023-10-09", remark: "Insurance", amount: 200, currency: "USD", type: "Debit" },
  ],
  setTransactions: (transactions) => set({ transactions }),
  addTransaction: (t) => set((state) => ({ transactions: [...state.transactions, { ...t, id: uuid() }] })),
}))

