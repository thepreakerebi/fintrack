"use client"

import SummaryCard from "./summary-card"
import SummaryCardSkeleton from "./summary-card-skeleton"
import SummaryCardEmpty from "./summary-card-empty"
import { useSummaryStore } from "@/hooks/use-summary"
import { useState, useEffect } from "react"
import { Skeleton } from "@/components/ui/skeleton"

function SkeletonHeader() {
  return <Skeleton className="h-8 w-32" />
}

export default function Summary() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const summary = useSummaryStore((s) => s.summary)

  if (!mounted) {
    return (
      <section className="flex flex-col gap-4 py-3">
        <SkeletonHeader />
        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[...Array(4)].map((_, i) => (
            <SummaryCardSkeleton key={i} />
          ))}
        </section>
      </section>
    )
  }

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
        {cards.map((card) =>
          card.value === "$0" || card.value === "0"
            ? <SummaryCardEmpty key={card.title} />
            : <SummaryCard key={card.title} {...card} />
        )}
      </section>
    </section>
  )
}
