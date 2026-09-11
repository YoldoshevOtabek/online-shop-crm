
import { useState } from "react";
import {
  ArrowDownUp,
  MoreHorizontal,
  SlidersHorizontal,
  Truck,
} from "lucide-react";
import {
  Button,
  Checkbox,
  Dropdown,
  Input,
  Pagination,
  Table,
  Tag,
} from "antd";
import type { ColumnsType } from "antd/es/table";
import type { MenuProps } from "antd";

type Order = {
  key: string;
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
    key: "1",
    id: "#ORD0001",
    product: "Wireless Bluetooth Headphones",
    date: "01-01-2025",
    price: "49.99",
    payment: "Paid",
    status: "Delivered",
    icon: "🎧",
  },
  {
    key: "2",
    id: "#ORD0002",
    product: "Men's T-Shirt",
    date: "01-01-2025",
    price: "14.99",
    payment: "Unpaid",
    status: "Pending",
    icon: "👕",
  },
  {
    key: "3",
    id: "#ORD0003",
    product: "Men's Leather Wallet",
    date: "01-01-2025",
    price: "49.99",
    payment: "Paid",
    status: "Delivered",
    icon: "👛",
  },
  {
    key: "4",
    id: "#ORD0004",
    product: "Memory Foam Pillow",
    date: "01-01-2025",
    price: "39.99",
    payment: "Paid",
    status: "Shipped",
    icon: "🛏️",
  },
  {
    key: "5",
    id: "#ORD0005",
    product: "Adjustable Dumbbells",
    date: "01-01-2025",
    price: "14.99",
    payment: "Unpaid",
    status: "Pending",
    icon: "🏋️",
  },
  {
    key: "6",
    id: "#ORD0006",
    product: "Coffee Maker",
    date: "01-01-2025",
    price: "79.99",
    payment: "Unpaid",
    status: "Cancelled",
    icon: "☕",
  },
  {
    key: "7",
    id: "#ORD0007",
    product: "Casual Baseball Cap",
    date: "01-01-2025",
    price: "49.99",
    payment: "Paid",
    status: "Delivered",
    icon: "🧢",
  },
  {
    key: "8",
    id: "#ORD0008",
    product: "Full HD Webcam",
    date: "01-01-2025",
    price: "39.99",
    payment: "Paid",
    status: "Delivered",
    icon: "📷",
  },
  {
    key: "9",
    id: "#ORD0009",
    product: "Smart LED Color Bulb",
    date: "01-01-2025",
    price: "79.99",
    payment: "Unpaid",
    status: "Delivered",
    icon: "💡",
  },
  {
    key: "10",
    id: "#ORD0010",
    product: "Men's T-Shirt",
    date: "01-01-2025",
    price: "14.99",
    payment: "Unpaid",
    status: "Delivered",
    icon: "👕",
  },
];

type TabType = "All" | "Completed" | "Pending" | "Canceled";

export default function OrdersTable() {
  const [activeTab, setActiveTab] = useState<TabType>("All");
  const [search, setSearch] = useState("");

  // Tab bo'yicha filter
  const filteredByTab = orders.filter((order) => {
    if (activeTab === "All") return true;

    if (activeTab === "Completed") {
      return order.status === "Delivered";
    }

    if (activeTab === "Pending") {
      return order.status === "Pending";
    }

    if (activeTab === "Canceled") {
      return order.status === "Cancelled";
    }

    return true;
  });

  // Search
  const filteredOrders = filteredByTab.filter((order) =>
    `${order.id} ${order.product} ${order.payment} ${order.status}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const columns: ColumnsType<Order> = [
    {
      title: "No.",
      key: "number",
      width: 70,
      render: (_, __, index) => (
        <div className="flex items-center gap-2">
          <Checkbox />
          <span>{index + 1}</span>
        </div>
      ),
    },

    {
      title: "Order Id",
      dataIndex: "id",
      key: "id",
      width: 130,
      render: (id) => (
        <span className="font-medium ">{id}</span>
      ),
    },

    {
      title: "Product",
      dataIndex: "product",
      key: "product",
      width: 280,
      render: (product, record) => (
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-gray-50 text-lg">
            {record.icon}
          </div>

          <span className="font-medium ">
            {product}
          </span>
        </div>
      ),
    },

    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      width: 130,
    },

    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      width: 110,
      render: (price) => (
        <span className="font-medium">${price}</span>
      ),
    },

    {
      title: "Payment",
      dataIndex: "payment",
      key: "payment",
      width: 130,
      render: (payment) => (
        <div className="flex items-center gap-2">
          <span
            className={`h-2 w-2 rounded-full ${
              payment === "Paid"
                ? "bg-emerald-500"
                : "bg-red-500"
            }`}
          />

          <span
            className={
              payment === "Paid"
                ? "text-emerald-600"
                : "text-red-500"
            }
          >
            {payment}
          </span>
        </div>
      ),
    },

    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      width: 150,
      render: (status) => {
        const statusConfig:any = {
          Delivered: {
            color: "success",
            text: "Delivered",
          },
          Pending: {
            color: "warning",
            text: "Pending",
          },
          Shipped: {
            color: "default",
            text: "Shipped",
          },
          Cancelled: {
            color: "error",
            text: "Cancelled",
          },
        } as const;

        const config = statusConfig[status];

        return (
          <Tag
            color={config.color}
            className="flex w-fit items-center gap-1 rounded-full px-3 py-1"
          >
            <Truck size={13} />
            {config.text}
          </Tag>
        );
      },
    },
  ];

  const menuItems: MenuProps["items"] = [
    {
      key: "1",
      label: "View order",
    },
    {
      key: "2",
      label: "Edit order",
    },
    {
      key: "3",
      label: "Delete order",
      danger: true,
    },
  ];

  const tabs: {
    label: string;
    value: TabType;
    count: number;
  }[] = [
    {
      label: "All order",
      value: "All",
      count: orders.length,
    },
    {
      label: "Completed",
      value: "Completed",
      count: orders.filter(
        (item) => item.status === "Delivered"
      ).length,
    },
    {
      label: "Pending",
      value: "Pending",
      count: orders.filter(
        (item) => item.status === "Pending"
      ).length,
    },
    {
      label: "Canceled",
      value: "Canceled",
      count: orders.filter(
        (item) => item.status === "Cancelled"
      ).length,
    },
  ];

  return (
    <div className="content-bg w-full min-h-[calc(100vh-96px)] bg-white p-6">

      {/* Main Card */}
      <div className="content-mood w-full rounded-xl border border-[#d9e9d6] bg-white shadow-[0px_1px_3px_0px_#00000033]">

        {/* Header */}
        <div className="flex items-center justify-between gap-5 px-6 py-5">

          {/* Tabs */}
          <div className="flex items-center rounded-lg bg-[#eaf6e7] p-1">

            {tabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={`
                  h-9 rounded-md px-5 text-sm transition-all
                  ${
                    activeTab === tab.value
                      ? "bg-white font-semibold text-gray-800 shadow-sm"
                      : "text-gray-500 hover:text-gray-800"
                  }
                `}
              >
                {tab.label}

                <span
                  className={`ml-1.5 ${
                    activeTab === tab.value
                      ? "text-emerald-500"
                      : "text-gray-400"
                  }`}
                >
                  ({tab.count})
                </span>
              </button>
            ))}

          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">

            {/* Search */}
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search order report"
              className="!w-56 !h-9 !rounded-lg"
            />

            {/* Filter */}
            <Button
              className="!h-9 !w-9 !p-0 flex items-center justify-center"
              icon={<SlidersHorizontal size={15} />}
            />

            {/* Sort */}
            <Button
              className="!h-9 !w-9 !p-0 flex items-center justify-center"
              icon={<ArrowDownUp size={15} />}
            />

            {/* More */}
            <Dropdown
              menu={{ items: menuItems }}
              trigger={["click"]}
            >
              <Button
                className="!h-9 !w-9 !p-0 flex items-center justify-center"
                icon={<MoreHorizontal size={16} />}
              />
            </Dropdown>

          </div>
        </div>

        {/* Table */}
        <div className="px-6">
          <Table
            columns={columns}
            dataSource={filteredOrders}
            pagination={false}
            scroll={{ x: 900 }}
            rowClassName={() => "content-bg-in h-[58px]"}
          />
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between px-6 py-6">

          <span className="text-sm ">
            Showing {filteredOrders.length} of {orders.length} orders
          </span>

          <Pagination
            defaultCurrent={1}
            total={240}
            pageSize={10}
            showSizeChanger={false}
          />

        </div>

      </div>
    </div>
  );
}

