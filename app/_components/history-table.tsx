"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useTransactionsStore } from "@/hooks/use-transactions"
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table"

import { ArrowUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"
import HistoryTableSkeleton from "./history-table-skeleton"
import HistoryTableEmpty from "./history-table-empty"

export default function HistoryTable() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  const transactions = useTransactionsStore((s) => s.transactions)
  const [sorting, setSorting] = useState<SortingState>([])

  const columns: ColumnDef<(typeof transactions)[number]>[] = [
    {
      accessorKey: "date",
      header: ({ column }) => (
        <HeaderCell column={column} title="Date" />
      ),
    },
    {
      accessorKey: "remark",
      header: ({ column }) => (
        <HeaderCell column={column} title="Remark" />
      ),
    },
    {
      accessorKey: "amount",
      header: ({ column }) => (
        <HeaderCell column={column} title="Amount" />
      ),
      cell: ({ row }) => {
        const amt = row.original.amount
        const prefix = row.original.type === "Debit" ? "-$" : "$"
        return prefix + amt.toLocaleString()
      },
    },
    {
      accessorKey: "currency",
      header: ({ column }) => (
        <HeaderCell column={column} title="Currency" />
      ),
    },
    {
      accessorKey: "type",
      header: ({ column }) => (
        <HeaderCell column={column} title="Type" />
      ),
      cell: ({ row }) => (
        <span
          className={cn(
            "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-sm font-medium",
            row.original.type === "Credit"
              ? "bg-green-100 text-green-800 dark:bg-green-800/20 dark:text-green-300"
              : "bg-red-100 text-red-800 dark:bg-red-800/20 dark:text-red-300"
          )}
        >
          <span
            className={cn(
              "size-2 rounded-full",
              row.original.type === "Credit" ? "bg-green-500" : "bg-red-500"
            )}
          ></span>
          {row.original.type}
        </span>
      ),
    },
  ]

  const table = useReactTable({
    data: transactions,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })

  if (!mounted) {
    return <HistoryTableSkeleton />
  }
  if (transactions.length === 0) {
    return <HistoryTableEmpty />
  }

  return (
    <section className="flex flex-col gap-4 py-7">
      {/* <h2 className="text-2xl font-bold">History</h2> */}
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((hg) => (
            <TableRow key={hg.id}>
              {hg.headers.map((header) => (
                <TableHead key={header.id} colSpan={header.colSpan} className="cursor-pointer select-none">
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  )
}

function HeaderCell({ column, title }: { column: any; title: string }) {
  const sorted = column.getIsSorted() as false | "asc" | "desc"
  return (
    <button
      className="flex items-center gap-1"
      onClick={() => column.toggleSorting(sorted === "asc")}
    >
      {title}
      <ArrowUpDown className="size-3 opacity-50" />
    </button>
  )
}

