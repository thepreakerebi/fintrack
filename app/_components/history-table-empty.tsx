"use client"

import { TableIcon } from "lucide-react"

export default function HistoryTableEmpty() {
  return (
    <section className="flex flex-col items-center justify-center gap-3 py-10 text-center w-full">
      <TableIcon className="size-8 text-muted-foreground animate-pulse" />
      <p className="text-sm text-muted-foreground">No transactions to display</p>
    </section>
  )
}

