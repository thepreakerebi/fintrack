"use client"

import { SidebarTrigger } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { LayoutGridIcon } from "lucide-react"
import SearchCommand from "./search-command"
import Image from "next/image"

export default function Topbar() {
  return (
    <header className="flex w-full bg-background items-center justify-between gap-7 px-2 md:px-12 py-3">
      {/* Left section: Sidebar trigger and logo */}
      <section className="flex items-center gap-1 md:gap-7">
        <SidebarTrigger />
        <Image src="/logo.svg" alt="Fintrack logo" width={112} height={33} className="h-8 w-auto" priority />
      </section>

      {/* Right section: Search, Grid, Avatar */}
      <section className="flex items-center gap-1 md:gap-7">
        <SearchCommand />
        <Button variant="ghost" size="icon" aria-label="Applications">
          <LayoutGridIcon className="size-5" />
        </Button>
        <Avatar>
          <AvatarImage src="/ava.png" alt="Ava" />
          <AvatarFallback>FT</AvatarFallback>
        </Avatar>
      </section>
    </header>
  )
}

