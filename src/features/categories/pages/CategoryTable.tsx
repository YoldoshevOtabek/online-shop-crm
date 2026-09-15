import { useState } from "react";
import { Button, Input, Pagination, Table, Dropdown } from "antd";

import type { ColumnsType } from "antd/es/table";
import type { MenuProps } from "antd";

import {
  Search,
  SlidersHorizontal,
  Plus,
  MoreHorizontal,
  Pencil,
  Trash2,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import useCategory from "../hooks/useCategory";
import type { Category } from "../types/category";
import CategoryModal from "./CategoryModal";

type Product = {
  key: string;
  no: number;
  product: string;
  image: string;
  createdDate: string;
  order: number;
};

const products: Product[] = [
  {
    key: "1",
    no: 1,
    product: "Wireless Bluetooth Headphones",
    image: "https://dummyjson.com/image/80x80",
    createdDate: "01-01-2025",
    order: 25,
  },
  {
    key: "2",
    no: 1,
    product: "Men's T-Shirt",
    image: "https://dummyjson.com/image/80x80",
    createdDate: "01-01-2025",
    order: 20,
  },
  {
    key: "3",
    no: 1,
    product: "Men's Leather Wallet",
    image: "https://dummyjson.com/image/80x80",
    createdDate: "01-01-2025",
    order: 35,
  },
  {
    key: "4",
    no: 1,
    product: "Memory Foam Pillow",
    image: "https://dummyjson.com/image/80x80",
    createdDate: "01-01-2025",
    order: 40,
  },
  {
    key: "5",
    no: 1,
    product: "Coffee Maker",
    image: "https://dummyjson.com/image/80x80",
    createdDate: "01-01-2025",
    order: 45,
  },
  {
    key: "6",
    no: 1,
    product: "Casual Baseball Cap",
    image: "https://dummyjson.com/image/80x80",
    createdDate: "01-01-2025",
    order: 55,
  },
  {
    key: "7",
    no: 1,
    product: "Full HD Webcam",
    image: "https://dummyjson.com/image/80x80",
    createdDate: "01-01-2025",
    order: 20,
  },
  {
    key: "8",
    no: 1,
    product: "Smart LED Color Bulb",
    image: "https://dummyjson.com/image/80x80",
    createdDate: "01-01-2025",
    order: 16,
  },
  {
    key: "9",
    no: 1,
    product: "Men's T-Shirt",
    image: "https://dummyjson.com/image/80x80",
    createdDate: "01-01-2025",
    order: 10,
  },
  {
    key: "10",
    no: 1,
    product: "Men's Leather Wallet",
    image: "https://dummyjson.com/image/80x80",
    createdDate: "01-01-2025",
    order: 35,
  },
];

const CategoryTable = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [search, setSearch] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [selectedCategory, setSelectedCategory] =
  useState<Category | null>(null);

  const handleEdit = (category: Category) => {
    setSelectedCategory(category);
    setOpenModal(true);
  };

  const { categoryData, isLoading, isError } = useCategory();

  const categories: Category[] = categoryData?.data || [];


  const tabs = [
    {
      key: "all",
      label: "All Categories",
      count: categoryData?.meta?.total || 0,
    },
    {
      key: "active",
      label: "Active",
    },
    {
      key: "inactive",
      label: "Inactive",
    },
  ];

  const filteredCategories = categories.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());
  
    if (activeTab === "active") {
      return matchesSearch && item.isActive;
    }
  
    if (activeTab === "inactive") {
      return matchesSearch && !item.isActive;
    }
  
    return matchesSearch;
  });


  const menuItems: MenuProps["items"] = [
    {
      key: "1",
      label: "Filter by date",
    },
    {
      key: "2",
      label: "Filter by order",
    },
  ];

  const columns: ColumnsType<Category> = [
    {
      title: "No.",
      key: "no",
      width: 70,

      render: (_, __, index) => (
        <span className="text-[14px]">{index + 1}</span>
      ),
    },

    {
      title: "Category",
      dataIndex: "name",
      key: "name",
      width: 250,

      render: (_, record) => (
        <div className="flex items-center gap-3">
          {record.image ? (
            <img
              src={record.image}
              alt={record.name}
              className="h-8 w-8 rounded-md object-cover"
            />
          ) : (
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gray-200 text-xs dark:bg-[#202625]">
              {record.name?.charAt(0)}
            </div>
          )}

          <span className="text-[14px] font-medium">{record.name}</span>
        </div>
      ),
    },

    {
      title: "Slug",
      dataIndex: "slug",
      key: "slug",
      width: 180,

      render: (value) => <span className="text-[14px]">{value}</span>,
    },

    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      width: 250,

      render: (value) => (
        <span className="line-clamp-1 text-[14px]">{value || "-"}</span>
      ),
    },

    {
      title: "Status",
      dataIndex: "isActive",
      key: "isActive",
      width: 120,

      render: (value) => (
        <span
          className={`rounded-md px-2 py-1 text-xs ${
            value ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
          }`}
        >
          {value ? "Active" : "Inactive"}
        </span>
      ),
    },

    {
      title: "Sort Order",
      dataIndex: "sortOrder",
      key: "sortOrder",
      width: 120,

      render: (value) => <span className="text-[14px]">{value}</span>,
    },

    {
      title: "Action",
      key: "action",
      width: 120,

      render: (_, record) => (
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleEdit(record)}
            className="flex h-6 w-6 cursor-pointer items-center justify-center rounded border border-gray-300 text-gray-500 transition hover:border-blue-400 hover:text-blue-500 dark:border-gray-600 dark:text-gray-400 dark:hover:border-blue-400 dark:hover:text-blue-400"
          >
            <Pencil size={12} />
          </button>

          <button
            onClick={() => console.log("Delete:", record)}
            className="flex h-6 w-6 cursor-pointer items-center justify-center rounded border border-gray-300 text-gray-500 transition hover:border-red-400 hover:text-red-500 dark:border-gray-600 dark:text-gray-400 dark:hover:border-red-400 dark:hover:text-red-400"
          >
            <Trash2 size={12} />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="content-mood w-full rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      {/* TOP */}
      <div className=" mb-4 flex items-center justify-between gap-4">
        {/* TABS */}
        <div className="content-mood flex items-center rounded-md p-1">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`
                cursor-pointer rounded px-3 py-2 text-[14px] transition-all
                ${
                  activeTab === tab.key
                    ? "bg-[#c0cfcc] font-semibold text-[#315d35] shadow-sm  "
                    : "text-white hover:text-gray-400 dark:text-white dark:hover:text-white"
                }
              `}
            >
              {tab.label}

              {tab.count && (
                <span className="ml-1 text-[10px]">({tab.count})</span>
              )}
            </button>
          ))}
        </div>

        {/* SEARCH + ACTIONS */}
        <div className="flex items-center gap-2">
          {/* SEARCH */}
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search your product"
            className="content-input h-8 w-[190px] rounded-md text-[14px]"
            suffix={<Search size={14} className="text-gray-400" />}
          />

          {/* FILTER */}
          <Dropdown
            menu={{
              items: menuItems,
            }}
            trigger={["click"]}
          >
            <Button
              className="content-input flex h-8 w-8 items-center justify-center !p-0"
              icon={<SlidersHorizontal size={14} />}
            />
          </Dropdown>

          {/* PLUS */}
          <Button
            className="content-input flex h-8 w-8 items-center justify-center !p-0"
            icon={<Plus size={15} />}
          />

          {/* MORE */}
          <Button
            className="content-input flex h-8 w-8 items-center justify-center !p-0"
            icon={<MoreHorizontal size={15} />}
          />
        </div>
      </div>

      {/* TABLE */}
      <div className="overflow-hidden rounded-md">
        <Table<Category>
          rowSelection={{
            type: "checkbox",
          }}
          columns={columns}
          dataSource={filteredCategories}
          pagination={false}
          loading={isLoading}
          size="small"
          rowKey="id"
          components={{
            header: {
              cell: (props) => (
                <th
                  {...props}
                  className={`content-mood ${props.className || ""}`}
                />
              ),
            },

            body: {
              cell: (props) => (
                <td
                  {...props}
                  className={`content-mood ${props.className || ""}`}
                />
              ),
            },
          }}
        />
      </div>

      {/* PAGINATION */}
      <div className="content-mood mt-4 flex items-center justify-between">
        <Button
          className="content-search flex items-center gap-1 text-[11px]"
          icon={<ArrowLeft size={12} />}
        >
          Previous
        </Button>

        <Pagination
          current={1}
          total={240}
          pageSize={10}
          showSizeChanger={false}
          showQuickJumper={false}
          className="content-search product-pagination"
        />

        <Button className="content-search flex items-center gap-1 text-[11px]">
          Next
          <ArrowRight size={12} />
        </Button>
      </div>
      <CategoryModal
  open={openModal}
  category={selectedCategory}
  onClose={() => {
    setOpenModal(false);
    setSelectedCategory(null);
  }}
/>
    </div>
  );
};

export default CategoryTable;
