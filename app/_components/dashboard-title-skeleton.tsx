"use client"

import { Skeleton } from "@/components/ui/skeleton"

export default function DashboardTitleSkeleton() {
  return (
    <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 w-full">
      {/* Left group */}
      <section className="flex items-center gap-4 w-full">
        {/* Title */}
        <Skeleton className="h-8 w-60" />
        {/* Badge */}
        <Skeleton className="h-5 w-16 rounded-full" />
      </section>
      {/* Right group */}
      <section className="flex items-center gap-4">
        <Skeleton className="h-9 w-24 rounded-full" />
        <Skeleton className="h-9 w-9 rounded-full" />
      </section>
    </header>
  )
}

