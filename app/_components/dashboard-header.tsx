"use client"

import DashboardTitle from "./dashboard-title"

export default function DashboardHeader() {
  return (
    <header className="flex flex-col gap-7 py-7 w-full">
      {/* Title & actions */}
      <section>
        <DashboardTitle />
      </section>
      {/* Placeholder for future filters, stats, etc. */}
      <section></section>
      {/* Placeholder for breadcrumbs or other header content */}
      <section></section>
    </header>
  )
}

