"use client"

import { WalletIcon } from "lucide-react"

export default function TransactionsEmpty() {
  return (
    <section className="flex flex-col items-center justify-center gap-3 py-10 text-center w-full">
      <WalletIcon className="size-8 text-muted-foreground animate-bounce" />
      <p className="text-sm text-muted-foreground">No transactions available.</p>
    </section>
  )
}

