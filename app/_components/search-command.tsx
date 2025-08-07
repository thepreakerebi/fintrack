"use client"

import { useState } from "react"
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandGroup,
  CommandItem,
  CommandEmpty,
} from "@/components/ui/command"
import { SearchIcon } from "lucide-react"
import { useTransactionsStore } from "@/hooks/use-transactions"
import { Button } from "@/components/ui/button"

export default function SearchCommand() {
  const [open, setOpen] = useState(false)
  const transactions = useTransactionsStore((s) => s.transactions)

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        aria-label="Search"
        onClick={() => setOpen(true)}
      >
        <SearchIcon className="size-5" />
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen} title="Search transactions">
        <CommandInput placeholder="Search by remark, amount, type or date..." />
        <CommandList>
          <CommandEmpty>No results.</CommandEmpty>
          <CommandGroup heading="Transactions">
            {transactions.map((tx) => (
              <CommandItem
                key={tx.id}
                value={`${tx.remark} ${tx.amount} ${tx.type} ${tx.date}`}
              >
                <div className="flex flex-col">
                  <span className="font-medium">{tx.remark}</span>
                  <span className="text-xs text-muted-foreground">
                    {tx.date} · {tx.type} · {tx.currency} {tx.amount}
                  </span>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}

