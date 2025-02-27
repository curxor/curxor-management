import { useState } from "react";
import { Table, Tooltip, Popconfirm, Badge } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import type { TableColumnsType } from "antd";
import type { VariantOption } from "@/types/products";
import { pageSize } from "@/constants";
import { Link } from "react-router-dom";

const VariantOptionList = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const fakeData: VariantOption[] = [
    {
      _id: "1",
      variant: "Red Shirt - M",
      status: "active",
      stock: 20,
      sold: 5,
      price: 19.99,
      SKU: "RS-M-001",
    },
    {
      _id: "2",
      variant: "Blue Shirt - L",
      status: "out of stock",
      stock: 0,
      sold: 10,
      price: 21.99,
      SKU: "BS-L-002",
    },
    {
      _id: "3",
      variant: "Green Hoodie - XL",
      status: "inactive",
      stock: 15,
      sold: 3,
      price: 29.99,
      SKU: "GH-XL-003",
    },
  ];

  const columns: TableColumnsType<VariantOption> = [
    {
      title: "ID",
      dataIndex: "_id",
      key: "_id",
      render: (_, _record, index) => (currentPage - 1) * pageSize + index + 1,
      width: 60,
      align: "center",
    },
    {
      title: "Variant",
      dataIndex: "variant",
      key: "variant",
      render: (variant: string) => (
        <span className="font-medium">{variant}</span>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => {
        const statusColor =
          status === "active"
            ? "green"
            : status === "inactive"
            ? "red"
            : "orange";
        return (
          <Badge
            color={statusColor}
            text={status.charAt(0).toUpperCase() + status.slice(1)}
          />
        );
      },
      align: "center",
    },
    {
      title: "Stock",
      dataIndex: "stock",
      key: "stock",
      align: "center",
    },
    {
      title: "Sold",
      dataIndex: "sold",
      key: "sold",
      align: "center",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      align: "center",
      render: (price: number) => `$${price.toFixed(2)}`,
    },
    {
      title: "SKU",
      dataIndex: "SKU",
      key: "SKU",
    },
    {
      title: "Action",
      key: "action",
      render: (record) => (
        <div className="flex items-center justify-center space-x-3">
          <Tooltip title="Edit">
            <Link
              to={`/products/${record._id}/edit`}
              className="text-green-600 hover:text-green-800 transition-colors"
            >
              <EditOutlined />
            </Link>
          </Tooltip>
          <Tooltip title="Delete">
            <Popconfirm
              title="Are you sure to delete this product?"
              // onConfirm={() => handleDelete(record._id)}
              okText="Yes"
              cancelText="No"
            >
              <span className="text-red-600 hover:text-red-800 transition-colors cursor-pointer">
                <DeleteOutlined />
              </span>
            </Popconfirm>
          </Tooltip>
        </div>
      ),
      align: "center",
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={fakeData}
      pagination={{
        pageSize: 5,
        onChange: (page) => setCurrentPage(page),
        position: ["bottomRight"],
      }}
      rowKey={(record) => record._id}
      className="mt-4"
    />
  );
};

export default VariantOptionList;
