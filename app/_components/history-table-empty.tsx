"use client"

export default function HistoryTableEmpty() {
  return (
    <section className="flex flex-col items-center justify-center gap-2 py-10 text-center">
      <p className="text-sm text-muted-foreground">No transactions to display</p>
    </section>
  )
}

