"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, Filter, ArrowUpDown, ChevronDown, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Order {
  id: string
  customer: string
  date: string
  amount: number
  items: number
  status: "processing" | "shipped" | "delivered" | "cancelled"
}

const orders: Order[] = [
  {
    id: "ORD-001",
    customer: "John Doe",
    date: "2023-03-08",
    amount: 99.99,
    items: 1,
    status: "processing",
  },
  {
    id: "ORD-002",
    customer: "Jane Smith",
    date: "2023-03-07",
    amount: 149.99,
    items: 2,
    status: "shipped",
  },
  {
    id: "ORD-003",
    customer: "Robert Johnson",
    date: "2023-03-06",
    amount: 299.97,
    items: 3,
    status: "delivered",
  },
  {
    id: "ORD-004",
    customer: "Emily Davis",
    date: "2023-03-05",
    amount: 59.99,
    items: 1,
    status: "delivered",
  },
  {
    id: "ORD-005",
    customer: "Michael Wilson",
    date: "2023-03-04",
    amount: 129.99,
    items: 1,
    status: "shipped",
  },
  {
    id: "ORD-006",
    customer: "Sarah Brown",
    date: "2023-03-03",
    amount: 249.98,
    items: 2,
    status: "delivered",
  },
  {
    id: "ORD-007",
    customer: "David Miller",
    date: "2023-03-02",
    amount: 79.99,
    items: 1,
    status: "cancelled",
  },
  {
    id: "ORD-008",
    customer: "Jennifer Taylor",
    date: "2023-03-01",
    amount: 189.97,
    items: 3,
    status: "delivered",
  },
]

export default function OrdersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState<keyof Order>("date")
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc")
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null)

  const statuses = Array.from(new Set(orders.map((order) => order.status)))

  const filteredOrders = orders
    .filter(
      (order) =>
        order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        order.customer.toLowerCase().includes(searchQuery.toLowerCase()),
    )
    .filter((order) => (selectedStatus ? order.status === selectedStatus : true))
    .sort((a, b) => {
      const aValue = a[sortBy]
      const bValue = b[sortBy]

      if (typeof aValue === "string" && typeof bValue === "string") {
        return sortOrder === "asc" ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue)
      }

      return sortOrder === "asc" ? (aValue as number) - (bValue as number) : (bValue as number) - (aValue as number)
    })

  const handleSort = (column: keyof Order) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc")
    } else {
      setSortBy(column)
      setSortOrder("asc")
    }
  }

  return (
    <div className="container px-4 md:px-6 py-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Orders</h1>
          <p className="text-muted-foreground">Manage your customer orders</p>
        </div>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Order Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex flex-col">
              <span className="text-muted-foreground text-sm">Total Orders</span>
              <span className="text-2xl font-bold">{orders.length}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-muted-foreground text-sm">Processing</span>
              <span className="text-2xl font-bold">{orders.filter((o) => o.status === "processing").length}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-muted-foreground text-sm">Shipped</span>
              <span className="text-2xl font-bold">{orders.filter((o) => o.status === "shipped").length}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-muted-foreground text-sm">Delivered</span>
              <span className="text-2xl font-bold">{orders.filter((o) => o.status === "delivered").length}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search orders..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              {selectedStatus ? selectedStatus.charAt(0).toUpperCase() + selectedStatus.slice(1) : "All Statuses"}
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => setSelectedStatus(null)}>All Statuses</DropdownMenuItem>
            {statuses.map((status) => (
              <DropdownMenuItem key={status} onClick={() => setSelectedStatus(status)}>
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="cursor-pointer" onClick={() => handleSort("id")}>
                Order ID
                {sortBy === "id" && <ArrowUpDown className="ml-2 h-4 w-4 inline" />}
              </TableHead>
              <TableHead className="cursor-pointer" onClick={() => handleSort("customer")}>
                Customer
                {sortBy === "customer" && <ArrowUpDown className="ml-2 h-4 w-4 inline" />}
              </TableHead>
              <TableHead className="cursor-pointer" onClick={() => handleSort("date")}>
                Date
                {sortBy === "date" && <ArrowUpDown className="ml-2 h-4 w-4 inline" />}
              </TableHead>
              <TableHead className="cursor-pointer" onClick={() => handleSort("amount")}>
                Amount
                {sortBy === "amount" && <ArrowUpDown className="ml-2 h-4 w-4 inline" />}
              </TableHead>
              <TableHead>Items</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredOrders.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-8">
                  No orders found
                </TableCell>
              </TableRow>
            ) : (
              filteredOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>{order.id}</TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell>{order.date}</TableCell>
                  <TableCell>${order.amount.toFixed(2)}</TableCell>
                  <TableCell>{order.items}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        order.status === "processing"
                          ? "outline"
                          : order.status === "shipped"
                            ? "secondary"
                            : order.status === "delivered"
                              ? "default"
                              : "destructive"
                      }
                    >
                      {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/seller/orders/${order.id}`}>
                        <Eye className="mr-2 h-4 w-4" />
                        View
                      </Link>
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

