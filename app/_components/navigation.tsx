"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"
import {
  HomeIcon,
  ListIcon,
  BarChart2Icon,
  SettingsIcon,
} from "lucide-react"

export default function Navigation() {
  const pathname = usePathname();

  const dashboardActive = pathname === "/" || pathname.startsWith("/dashboard");
  const transactionsActive = pathname.startsWith("/transactions");
  const reportsActive = pathname.startsWith("/reports");
  const settingsActive = pathname.startsWith("/settings");

  const activeClass = "data-[active=true]:bg-primary/10 data-[active=true]:font-medium";
  return (
    <Sidebar
      side="left"
      collapsible="icon"
      className="mt-16 px-12 h-[calc(100vh-4rem)] [&_[data-slot=sidebar-inner]]:bg-background [&_[data-slot=sidebar-container]]:border-0 [&_[data-slot=sidebar-container]]:border-none !border-0"
    >
      {/* Navigation Header (empty for now) */}
      <SidebarHeader />

      {/* Navigation Content */}
      <SidebarContent className="px-4 md:px-0">
        <SidebarMenu>
          {/* Dashboard */}
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Dashboard" isActive={dashboardActive} className={activeClass}>
              <Link href="/">
                <HomeIcon strokeWidth={dashboardActive ? 2.4 : 1.5} className={dashboardActive ? "size-6" : "size-3"} />
                <span>Dashboard</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          {/* Transactions */}
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Transactions" isActive={transactionsActive} className={activeClass}>
              <Link href="/transactions">
                <ListIcon strokeWidth={transactionsActive ? 2.4 : 1.5} className={transactionsActive ? "size-6" : "size-3"} />
                <span>Transactions</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          {/* Reports */}
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Reports" isActive={reportsActive} className={activeClass}>
              <Link href="/reports">
                <BarChart2Icon strokeWidth={reportsActive ? 2.4 : 1.5} className={reportsActive ? "size-6" : "size-3"} />
                <span>Reports</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          {/* Settings */}
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Settings" isActive={settingsActive} className={activeClass}>
              <Link href="/settings">
                <SettingsIcon strokeWidth={settingsActive ? 2.4 : 1.5} className={settingsActive ? "size-6" : "size-3"} />
                <span>Settings</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>

      {/* Footer (empty for now) */}
      <SidebarFooter />
    </Sidebar>
  )
}

