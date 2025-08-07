"use client"

import { ChevronDownIcon, MoreHorizontalIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DashboardTitle() {
  return (
    <header className="flex flex-col sm:flex-row md:items-center justify-between gap-4 w-full">
      {/* Left group */}
      <section className="flex items-center gap-4">
        {/* Wallet Ledger with caret */}
        <section className="flex items-center gap-1">
          <h2 className="text-2xl md:text-4xl font-semibold">Wallet Ledger</h2>
          <ChevronDownIcon className="size-4" />
        </section>

        {/* Status badge */}
        <section>
          <span className="inline-flex items-center gap-1 rounded-full bg-neutral-100 px-2 py-0.5 text-xs font-medium text-neutral-600 dark:bg-neutral-800/20 dark:text-neutral-400">
            <span className="size-2 rounded-full bg-green-500"></span>
            Active
          </span>
        </section>
      </section>

      {/* Right group */}
      <section className="flex items-center gap-4">
        <Button className="rounded-full px-5">Share</Button>
        <Button variant="outline" className="rounded-full" size="icon" aria-label="More options">
          <MoreHorizontalIcon className="size-5" />
        </Button>
      </section>
    </header>
  )
}

