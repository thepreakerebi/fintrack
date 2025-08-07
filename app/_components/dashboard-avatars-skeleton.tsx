"use client"

import { Skeleton } from "@/components/ui/skeleton"

export default function DashboardAvatarsSkeleton() {
  return (
    <section className="flex flex-col sm:flex-row sm:items-center w-full gap-3">
      {/* Avatars */}
      <section className="flex -space-x-2">
        {[...Array(4)].map((_, i) => (
          <Skeleton key={i} className="size-8 rounded-full ring-2 ring-background" />
        ))}
      </section>
      {/* Names line */}
      <Skeleton className="h-4 w-48" />
    </section>
  )
}

