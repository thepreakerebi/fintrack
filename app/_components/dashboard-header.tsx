"use client"

import DashboardTitle from "./dashboard-title"
import DashboardAvatars from "./dashboard-avatars"

export default function DashboardHeader() {
  return (
    <header className="flex flex-col gap-7 py-7 w-full">
      {/* Title & actions */}
      <section>
        <DashboardTitle />
      </section>
      {/* Avatars */}
      <section>
        {/* Dashboard avatars component */}
        <DashboardAvatars />
      </section>
      {/* Placeholder for breadcrumbs or other header content */}
      <section></section>
    </header>
  )
}

