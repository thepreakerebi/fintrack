"use client"

import SummaryCard from "./summary-card"
import { useSummaryStore } from "@/hooks/use-summary"

export default function Summary() {
  const summary = useSummaryStore((s) => s.summary)

  const cards = [
    {
      title: "Total Balance",
      value: `$${summary.totalBalance.toLocaleString()}`,
      change: summary.balanceChange,
    },
    {
      title: "Total Credits",
      value: `$${summary.totalCredits.toLocaleString()}`,
      change: summary.creditsChange,
    },
    {
      title: "Total Debits",
      value: `$${summary.totalDebits.toLocaleString()}`,
      change: summary.debitsChange,
    },
    {
      title: "Transactions",
      value: summary.transactionCount.toLocaleString(),
      change: summary.transactionChange,
    },
  ]

  return (
    <section className="flex flex-col gap-4 py-3">
      <h2 className="text-2xl font-bold">Summary</h2>
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <SummaryCard key={card.title} {...card} />
        ))}
      </section>
    </section>
  )
}

