"use client"

import { MoreHorizontalIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SummaryCardProps {
  title: string
  value: string
  change: number // percentage change, positive or negative
}

export default function SummaryCard({ title, value, change }: SummaryCardProps) {
  const isPositive = change >= 0
  return (
    <section className="relative flex flex-col gap-4 rounded-2xl bg-muted/50 p-8 sm:p-10">
      {/* Title & menu */}
      <section className="flex items-center justify-between w-full">
        <h3 className="text-xl font-semibold leading-none text-foreground/90 w-full">{title}</h3>
        <Button variant="ghost" size="icon" className="rounded-full">
          <MoreHorizontalIcon className="size-5" />
        </Button>
      </section>
      {/* Value */}
      <section className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
        {value}
      </section>
      {/* Change */}
      <span className={`text-sm font-medium ${isPositive ? "text-primary" : "text-destructive"}`}>
        {isPositive ? "+" : ""}
        {change}%
      </span>
    </section>
  )
}

