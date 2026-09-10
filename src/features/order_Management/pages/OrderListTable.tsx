import {
    Search,
    SlidersHorizontal,
    ArrowDownUp,
    MoreHorizontal,
    ChevronLeft,
    ChevronRight,
    Truck,
  } from "lucide-react";
  
  type Order = {
    id: string;
    product: string;
    date: string;
    price: string;
    payment: "Paid" | "Unpaid";
    status: "Delivered" | "Pending" | "Shipped" | "Cancelled";
    icon: string;
  };
  
  const orders: Order[] = [
    {
      id: "#ORD0001",
      product: "Wireless Bluetooth Headphones",
      date: "01-01-2025",
      price: "49.99",
      payment: "Paid",
      status: "Delivered",
      icon: "🎧",
    },
    {
      id: "#ORD0001",
      product: "Men's T-Shirt",
      date: "01-01-2025",
      price: "14.99",
      payment: "Unpaid",
      status: "Pending",
      icon: "👕",
    },
    {
      id: "#ORD0001",
      product: "Men's Leather Wallet",
      date: "01-01-2025",
      price: "49.99",
      payment: "Paid",
      status: "Delivered",
      icon: "👛",
    },
    {
      id: "#ORD0001",
      product: "Memory Foam Pillow",
      date: "01-01-2025",
      price: "39.99",
      payment: "Paid",
      status: "Shipped",
      icon: "🛏️",
    },
    {
      id: "#ORD0001",
      product: "Adjustable Dumbbells",
      date: "01-01-2025",
      price: "14.99",
      payment: "Unpaid",
      status: "Pending",
      icon: "🏋️",
    },
    {
      id: "#ORD0001",
      product: "Coffee Maker",
      date: "01-01-2025",
      price: "79.99",
      payment: "Unpaid",
      status: "Cancelled",
      icon: "☕",
    },
    {
      id: "#ORD0001",
      product: "Casual Baseball Cap",
      date: "01-01-2025",
      price: "49.99",
      payment: "Paid",
      status: "Delivered",
      icon: "🧢",
    },
    {
      id: "#ORD0001",
      product: "Full HD Webcam",
      date: "01-01-2025",
      price: "39.99",
      payment: "Paid",
      status: "Delivered",
      icon: "📷",
    },
    {
      id: "#ORD0001",
      product: "Smart LED Color Bulb",
      date: "01-01-2025",
      price: "79.99",
      payment: "Unpaid",
      status: "Delivered",
      icon: "💡",
    },
    {
      id: "#ORD0001",
      product: "Men's T-Shirt",
      date: "01-01-2025",
      price: "14.99",
      payment: "Unpaid",
      status: "Delivered",
      icon: "👕",
    },
  ];
  
  const statusStyles = {
    Delivered: "text-emerald-500",
    Pending: "text-orange-400",
    Shipped: "text-gray-700",
    Cancelled: "text-red-400",
  };
  
  const paymentStyles = {
    Paid: "bg-emerald-500",
    Unpaid: "bg-red-500",
  };
  
  export default function OrdersTable() {
    return (
      <div className="min-h-screen bg-white p-3 font-sans text-[11px] text-gray-700">
        <div className="w-full overflow-hidden rounded-sm border border-[#d9e9d6] bg-white shadow-sm">
          {/* Top navigation */}
          <div className="flex items-center justify-between gap-4 px-4 py-3">
            <div className="flex h-7 items-center rounded-md bg-[#eaf6e7] p-0.5">
              <button className="h-6 rounded-md bg-white px-3 font-medium text-gray-700 shadow-sm">
                All order <span className="text-emerald-500">(240)</span>
              </button>
  
              <button className="px-5 text-gray-500">Completed</button>
              <button className="px-5 text-gray-500">Pending</button>
              <button className="px-5 text-gray-500">Canceled</button>
            </div>
  
            <div className="flex items-center gap-2">
              {/* Search */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search order report"
                  className="h-8 w-40 rounded-md border-none bg-gray-50 pl-3 pr-8 text-[10px] outline-none placeholder:text-gray-400 focus:ring-1 focus:ring-emerald-200"
                />
                <Search
                  size={14}
                  className="absolute right-2.5 top-2 text-gray-500"
                />
              </div>
  
              <button className="flex h-8 w-8 items-center justify-center rounded-md border border-gray-200 text-gray-600 hover:bg-gray-50">
                <SlidersHorizontal size={14} />
              </button>
  
              <button className="flex h-8 w-8 items-center justify-center rounded-md border border-gray-200 text-gray-600 hover:bg-gray-50">
                <ArrowDownUp size={14} />
              </button>
  
              <button className="flex h-8 w-8 items-center justify-center rounded-md border border-gray-200 text-gray-600 hover:bg-gray-50">
                <MoreHorizontal size={15} />
              </button>
            </div>
          </div>
  
          {/* Table */}
          <div className="px-4">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="h-8 rounded-md bg-[#e7f5e3] text-left text-[10px] font-medium text-gray-700">
                    <th className="w-[52px] rounded-l-md pl-2">No.</th>
                    <th className="w-[110px]">Order Id</th>
                    <th className="w-[190px]">Product</th>
                    <th className="w-[105px]">Date</th>
                    <th className="w-[90px]">Price</th>
                    <th className="w-[100px]">Payment</th>
                    <th className="rounded-r-md">Status</th>
                  </tr>
                </thead>
  
                <tbody>
                  {orders.map((order, index) => (
                    <tr
                      key={`${order.id}-${index}`}
                      className="h-[41px] border-b border-gray-200 last:border-b-0"
                    >
                      {/* Number */}
                      <td className="pl-2">
                        <div className="flex items-center gap-2">
                          <span className="h-3 w-3 rounded-[2px] border border-[#dcebd9]" />
                          <span>{index + 1}</span>
                        </div>
                      </td>
  
                      {/* Order ID */}
                      <td className="font-medium text-gray-700">
                        {order.id}
                      </td>
  
                      {/* Product */}
                      <td>
                        <div className="flex items-center gap-2">
                          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-sm border border-gray-200 bg-gray-50 text-sm">
                            {order.icon}
                          </div>
  
                          <span className="max-w-[130px] leading-[12px]">
                            {order.product}
                          </span>
                        </div>
                      </td>
  
                      {/* Date */}
                      <td>{order.date}</td>
  
                      {/* Price */}
                      <td>{order.price}</td>
  
                      {/* Payment */}
                      <td>
                        <div className="flex items-center gap-2">
                          <span
                            className={`h-1.5 w-1.5 rounded-full ${paymentStyles[order.payment]}`}
                          />
                          <span>{order.payment}</span>
                        </div>
                      </td>
  
                      {/* Status */}
                      <td>
                        <div
                          className={`flex items-center gap-1.5 font-medium ${statusStyles[order.status]}`}
                        >
                          <Truck size={13} strokeWidth={1.8} />
                          <span>{order.status}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
  
          {/* Pagination */}
          <div className="flex items-center justify-between px-4 py-7">
            <button className="flex h-7 items-center gap-1 rounded-md border border-gray-100 px-2.5 text-[10px] text-gray-700 hover:bg-gray-50">
              <ChevronLeft size={12} />
              Previous
            </button>
  
            <div className="flex items-center gap-2">
              <button className="flex h-7 w-7 items-center justify-center rounded-md bg-[#b9e6b0] font-medium text-gray-700">
                1
              </button>
  
              <button className="flex h-7 w-7 items-center justify-center rounded-md border border-gray-200">
                2
              </button>
  
              <button className="flex h-7 w-7 items-center justify-center rounded-md border border-gray-200">
                3
              </button>
  
              <button className="flex h-7 w-7 items-center justify-center rounded-md border border-gray-200">
                4
              </button>
  
              <button className="flex h-7 w-7 items-center justify-center rounded-md border border-gray-200">
                5
              </button>
  
              <button className="flex h-7 w-7 items-center justify-center rounded-md border border-gray-200">
                ...
              </button>
  
              <button className="flex h-7 w-7 items-center justify-center rounded-md border border-gray-200">
                24
              </button>
            </div>
  
            <button className="flex h-7 items-center gap-1 rounded-md border border-gray-100 px-2.5 text-[10px] text-gray-700 hover:bg-gray-50">
              Next
              <ChevronRight size={12} />
            </button>
          </div>
        </div>
      </div>
    );
  }
  