"use client"

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import Summary from "./summary"

export default function DashboardTabs() {
  return (
    <Tabs defaultValue="overview" className="w-full">
      {/* Sticky tab list */}
      <TabsList
        className="sticky top-14 z-40 flex w-full justify-start bg-background border-b border-border rounded-none p-0"
      >
        <TabsTrigger
          value="overview"
          className="relative py-4 px-6 text-lg font-medium text-muted-foreground transition-colors focus-visible:outline-none data-[state=active]:text-primary !flex-none rounded-none data-[state=active]:bg-transparent dark:data-[state=active]:bg-transparent data-[state=active]:after:content-[''] data-[state=active]:after:absolute data-[state=active]:after:inset-x-0 data-[state=active]:after:-bottom-px data-[state=active]:after:h-0.5 data-[state=active]:after:bg-primary"
        >
          Overview

        </TabsTrigger>
        <TabsTrigger
          value="transactions"
          className="relative py-4 px-6 text-lg font-medium text-muted-foreground transition-colors focus-visible:outline-none data-[state=active]:text-primary !flex-none rounded-none data-[state=active]:bg-transparent dark:data-[state=active]:bg-transparent data-[state=active]:after:content-[''] data-[state=active]:after:absolute data-[state=active]:after:inset-x-0 data-[state=active]:after:-bottom-px data-[state=active]:after:h-0.5 data-[state=active]:after:bg-primary"
        >
          Transactions

        </TabsTrigger>
      </TabsList>

      <TabsContent value="overview" className="py-3 flex flex-col gap-7">
         <Summary />
      </TabsContent>
      <TabsContent value="transactions" className="py-6">
        <p className="text-sm text-muted-foreground">Transactions content placeholder.</p>
      </TabsContent>
    </Tabs>
  )
}

