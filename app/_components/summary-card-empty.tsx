"use client"

export default function SummaryCardEmpty() {
  return (
    <section className="flex flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-border bg-muted/20 p-8 sm:p-10 text-center">
      <p className="text-sm text-muted-foreground">No data</p>
    </section>
  )
}

