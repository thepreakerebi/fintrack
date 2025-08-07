"use client"

import { Skeleton } from "@/components/ui/skeleton"

export default function SummaryCardSkeleton() {
  return (
    <section className="relative flex flex-col gap-4 rounded-2xl bg-primary/5 p-8 sm:p-10">
      {/* Title & menu */}
      <section className="flex items-center justify-between w-full">
        <Skeleton className="h-6 w-36" />
        <Skeleton className="h-5 w-5 rounded-full" />
      </section>
      {/* Value */}
      <Skeleton className="h-10 w-32" />
      {/* Change */}
      <Skeleton className="h-4 w-14" />
    </section>
  )
}

