import React, { useState } from "react";
import {
  Table,
  Card,
  Avatar,
  Tag,
  Button,
  Input,
  Space,
  Tooltip,
  message,
} from "antd";
import {
  MessageOutlined,
  DeleteOutlined,
  CopyOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  FacebookFilled,
  WhatsAppOutlined,
  TwitterOutlined,
  LinkedinFilled,
  InstagramFilled,
  LeftOutlined,
  RightOutlined,
  CloseOutlined,
} from "@ant-design/icons";

import "../styles/customers.css";

const customers = [
  {
    key: 1,
    customerId: "#CUST001",
    name: "John Doe",
    phone: "+1234567890",
    email: "john.doe@example.com",
    orderCount: 25,
    totalSpend: "3,450.00",
    status: "Active",
    address: "123 Main St, NY",
    registration: "15.01.2025",
    lastPurchase: "10.01.2025",
    totalOrders: 150,
    completed: 140,
    cancelled: 10,
  },
  {
    key: 2,
    customerId: "#CUST001",
    name: "John Doe",
    phone: "+1234567890",
    email: "john.doe@example.com",
    orderCount: 25,
    totalSpend: "3,450.00",
    status: "Active",
    address: "123 Main St, NY",
    registration: "15.01.2025",
    lastPurchase: "10.01.2025",
    totalOrders: 150,
    completed: 140,
    cancelled: 10,
  },
  {
    key: 3,
    customerId: "#CUST001",
    name: "John Doe",
    phone: "+1234567890",
    email: "john.doe@example.com",
    orderCount: 25,
    totalSpend: "3,450.00",
    status: "Active",
    address: "123 Main St, NY",
    registration: "15.01.2025",
    lastPurchase: "10.01.2025",
    totalOrders: 150,
    completed: 140,
    cancelled: 10,
  },
  {
    key: 4,
    customerId: "#CUST001",
    name: "John Doe",
    phone: "+1234567890",
    email: "john.doe@example.com",
    orderCount: 25,
    totalSpend: "3,450.00",
    status: "Active",
    address: "123 Main St, NY",
    registration: "15.01.2025",
    lastPurchase: "10.01.2025",
    totalOrders: 150,
    completed: 140,
    cancelled: 10,
  },
  {
    key: 5,
    customerId: "#CUST001",
    name: "Jane Smith",
    phone: "+1234567890",
    email: "jane.smith@example.com",
    orderCount: 5,
    totalSpend: "250.00",
    status: "Inactive",
    address: "456 Park Ave, NY",
    registration: "20.02.2025",
    lastPurchase: "05.01.2025",
    totalOrders: 40,
    completed: 35,
    cancelled: 5,
  },
  {
    key: 6,
    customerId: "#CUST001",
    name: "Emily Davis",
    phone: "+1234567890",
    email: "emily.davis@example.com",
    orderCount: 30,
    totalSpend: "4,600.00",
    status: "VIP",
    address: "789 Broadway, NY",
    registration: "11.01.2025",
    lastPurchase: "12.01.2025",
    totalOrders: 200,
    completed: 195,
    cancelled: 5,
  },
  {
    key: 7,
    customerId: "#CUST001",
    name: "Jane Smith",
    phone: "+1234567890",
    email: "jane.smith@example.com",
    orderCount: 5,
    totalSpend: "250.00",
    status: "Inactive",
    address: "456 Park Ave, NY",
    registration: "20.02.2025",
    lastPurchase: "05.01.2025",
    totalOrders: 40,
    completed: 35,
    cancelled: 5,
  },
  {
    key: 8,
    customerId: "#CUST001",
    name: "John Doe",
    phone: "+1234567890",
    email: "john.doe@example.com",
    orderCount: 25,
    totalSpend: "3,450.00",
    status: "Active",
    address: "123 Main St, NY",
    registration: "15.01.2025",
    lastPurchase: "10.01.2025",
    totalOrders: 150,
    completed: 140,
    cancelled: 10,
  },
  {
    key: 9,
    customerId: "#CUST001",
    name: "Emily Davis",
    phone: "+1234567890",
    email: "emily.davis@example.com",
    orderCount: 30,
    totalSpend: "4,600.00",
    status: "VIP",
    address: "789 Broadway, NY",
    registration: "11.01.2025",
    lastPurchase: "12.01.2025",
    totalOrders: 200,
    completed: 195,
    cancelled: 5,
  },
  {
    key: 10,
    customerId: "#CUST001",
    name: "Jane Smith",
    phone: "+1234567890",
    email: "jane.smith@example.com",
    orderCount: 5,
    totalSpend: "250.00",
    status: "Inactive",
    address: "456 Park Ave, NY",
    registration: "20.02.2025",
    lastPurchase: "05.01.2025",
    totalOrders: 40,
    completed: 35,
    cancelled: 5,
  },
];

const statusConfig = {
  Active: {
    color: "#22c55e",
    text: "Active",
  },
  Inactive: {
    color: "#ff4d4f",
    text: "Inactive",
  },
  VIP: {
    color: "#f59e0b",
    text: "VIP",
  },
};

function StatusTag({ status }) {
  const config = statusConfig[status];

  return (
    <span className="status">
      <span
        className="status-dot"
        style={{ backgroundColor: config.color }}
      />
      <span style={{ color: config.color }}>{config.text}</span>
    </span>
  );
}

function CustomerCard({ customer, onClose }) {
  if (!customer) return null;

  const copyText = async (text) => {
    await navigator.clipboard.writeText(text);
    message.success("Copied!");
  };

  return (
    <Card className="customer-card content-mood" bordered={false}>
      <div className="card-close">
        <Button
          type="text"
          icon={<CloseOutlined />}
          onClick={onClose}
        />
      </div>

      {/* Header */}
      <div className="profile-header">
        <Avatar size={48} className="profile-avatar">
          {customer.name
            .split(" ")
            .map((item) => item[0])
            .join("")}
        </Avatar>

        <div className="profile-name">
          <h3>{customer.name}</h3>
          <div className="email">
            {customer.email}
            <Tooltip title="Copy email">
              <CopyOutlined
                onClick={() => copyText(customer.email)}
              />
            </Tooltip>
          </div>
        </div>
      </div>

      {/* Customer info */}
      <div className="section-title">Customer Info</div>

      <div className="info-input">
        <PhoneOutlined />
        <span>{customer.phone}</span>
        <CopyOutlined
          className="copy-icon"
          onClick={() => copyText(customer.phone)}
        />
      </div>

      <div className="info-input">
        <EnvironmentOutlined />
        <span>{customer.address}</span>
      </div>

      {/* Social */}
      <div className="section-title">Social Media</div>

      <div className="socials">
        <span>
          <FacebookFilled />
        </span>
        <span>
          <WhatsAppOutlined />
        </span>
        <span>
          <TwitterOutlined />
        </span>
        <span>
          <LinkedinFilled />
        </span>
        <span>
          <InstagramFilled />
        </span>
      </div>

      {/* Activity */}
      <div className="section-title">Activity</div>

      <div className="activity-row">
        <div>
          <small>Registration:</small>
          <strong>{customer.registration}</strong>
        </div>

        <div>
          <small>Last purchase:</small>
          <strong>{customer.lastPurchase}</strong>
        </div>
      </div>

      {/* Overview */}
      <div className="section-title">Order overview</div>

      <div className="overview">
        <div className="overview-item">
          <strong>{customer.totalOrders}</strong>
          <span>Total orders</span>
        </div>

        <div className="overview-item">
          <strong>{customer.completed}</strong>
          <span>Completed</span>
        </div>

        <div className="overview-item">
          <strong>{customer.cancelled}</strong>
          <span>Cancelled</span>
        </div>
      </div>
    </Card>
  );
}

export default function CustomerTable() {
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [page, setPage] = useState(1);

  const handleDelete = (record) => {
    message.success(`${record.name} deleted`);
  };

  const columns = [
    {
      title: "Customer Id",
      dataIndex: "customerId",
      key: "customerId",
      width: 105,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: 100,
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
      width: 125,
    },
    {
      title: "Order Count",
      dataIndex: "orderCount",
      key: "orderCount",
      align: "center",
      width: 100,
    },
    {
      title: "Total Spend",
      dataIndex: "totalSpend",
      key: "totalSpend",
      align: "center",
      width: 115,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      width: 100,
      render: (status) => <StatusTag status={status} />,
    },
    {
      title: "Action",
      key: "action",
      width: 80,
      render: (_, record) => (
        <Space size={10}>
          <Tooltip title="Message">
            <MessageOutlined
              className="action-icon"
              onClick={(e) => {
                e.stopPropagation();
                message.info(`Message ${record.name}`);
              }}
            />
          </Tooltip>

          <Tooltip title="Delete">
            <DeleteOutlined
              className="action-icon delete"
              onClick={(e) => {
                e.stopPropagation();
                handleDelete(record);
              }}
            />
          </Tooltip>
        </Space>
      ),
    },
  ];

  return (
    <div className="customer-page ">
      <div
        className={
          selectedCustomer
            ? "content-layout with-card content-mood"
            : "content-layout content-mood"
        }
      >
        {/* TABLE */}
        <div className="table-wrapper ">
          <Table
            className="content-mood"
            columns={columns}
            dataSource={customers}
            pagination={false}
            rowClassName={(record) =>
              selectedCustomer?.key === record.key
                ? "selected-row content-mood"
                : " content-mood"
            }
            onRow={(record) => ({
              onClick: () => {
                setSelectedCustomer(record);
              },
            })}
            scroll={{ x: 750 }}
          />

          {/* Pagination */}
          <div className="pagination ">
            <Button
              icon={<LeftOutlined />}
              disabled={page === 1}
              onClick={() => setPage(Math.max(1, page - 1))}
            >
              Previous
            </Button>

            <div className="page-numbers">
              {[1, 2, 3, 4, 5].map((item) => (
                <Button
                  key={item}
                  type={page === item ? "primary" : "default"}
                  onClick={() => setPage(item)}
                >
                  {item}
                </Button>
              ))}

              <span>...</span>

              <Button
                onClick={() => setPage(24)}
                type={page === 24 ? "primary" : "default"}
              >
                24
              </Button>
            </div>

            <Button
              onClick={() => setPage(Math.min(24, page + 1))}
            >
              Next <RightOutlined />
            </Button>
          </div>
        </div>

        {/* RIGHT CARD */}
        {selectedCustomer && (
          <CustomerCard
            customer={selectedCustomer}
            onClose={() => setSelectedCustomer(null)}
          />
        )}
      </div>
    </div>
  );
}