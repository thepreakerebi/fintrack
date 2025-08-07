"use client"

import { BarChart2Icon } from "lucide-react"

export default function SummaryCardEmpty() {
  return (
    <section className="flex flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-border bg-muted/20 p-8 sm:p-10 text-center">
      <BarChart2Icon className="size-8 text-muted-foreground animate-bounce" />
      <p className="text-sm text-muted-foreground">No data</p>
    </section>
  )
}

