import Link from "next/link"
import { Badge } from "@/components/ui/badge"

interface Order {
  id: string
  customer: string
  date: string
  amount: number
  status: "processing" | "shipped" | "delivered"
}

const orders: Order[] = [
  {
    id: "ORD-001",
    customer: "John Doe",
    date: "2023-03-08",
    amount: 99.99,
    status: "processing",
  },
  {
    id: "ORD-002",
    customer: "Jane Smith",
    date: "2023-03-07",
    amount: 149.99,
    status: "shipped",
  },
  {
    id: "ORD-003",
    customer: "Robert Johnson",
    date: "2023-03-06",
    amount: 299.97,
    status: "delivered",
  },
  {
    id: "ORD-004",
    customer: "Emily Davis",
    date: "2023-03-05",
    amount: 59.99,
    status: "delivered",
  },
  {
    id: "ORD-005",
    customer: "Michael Wilson",
    date: "2023-03-04",
    amount: 129.99,
    status: "shipped",
  },
]

export function RecentOrders() {
  return (
    <div className="space-y-4">
      {orders.map((order) => (
        <div key={order.id} className="flex items-center justify-between">
          <div>
            <Link href={`/seller/orders/${order.id}`} className="font-medium hover:underline">
              {order.id}
            </Link>
            <div className="text-sm text-muted-foreground">{order.customer}</div>
            <div className="text-xs text-muted-foreground">{order.date}</div>
          </div>
          <div className="text-right">
            <div className="font-medium">${order.amount.toFixed(2)}</div>
            <Badge
              variant={order.status === "processing" ? "outline" : order.status === "shipped" ? "secondary" : "default"}
              className="mt-1"
            >
              {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
            </Badge>
          </div>
        </div>
      ))}
      <div className="text-center mt-4">
        <Link href="/seller/orders" className="text-sm text-primary hover:underline">
          View all orders
        </Link>
      </div>
    </div>
  )
}

