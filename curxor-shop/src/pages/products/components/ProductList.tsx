import { useState } from "react";
import {
  Table,
  TableColumnsType,
  Tag,
  Image,
  Badge,
  Popconfirm,
  Rate,
  Tooltip,
} from "antd";
import { pageSize } from "@/constants";
import type { Products } from "@/types/products";
import { Link } from "react-router-dom";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";

const fakeData: Products[] = [
  {
    _id: "1",
    title: "Product A",
    image:
      "https://images.unsplash.com/photo-1739641375724-dfea74e0df69?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    sold: 150,
    status: "active",
    rating: 4.5,
    brand: "Brand A",
    origin: "USA",
  },
  {
    _id: "2",
    title: "Product B",
    image:
      "https://images.unsplash.com/photo-1739641375724-dfea74e0df69?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    sold: 80,
    status: "inactive",
    rating: 3.8,
    brand: "Brand B",
    origin: "Germany",
  },
  {
    _id: "3",
    title: "Product C",
    image:
      "https://images.unsplash.com/photo-1739641375724-dfea74e0df69?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    sold: 200,
    status: "out of stock",
    rating: 4.9,
    brand: "Brand C",
    origin: "Japan",
  },
];

const ProductList = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const columns: TableColumnsType<Products> = [
    {
      title: "ID",
      dataIndex: "_id",
      key: "_id",
      render: (_, _record, index) => (currentPage - 1) * pageSize + index + 1,
      width: 60,
      align: "center",
    },
    {
      title: "Product Title",
      dataIndex: "title",
      key: "title",
      render: (title: string) => (
        <span className="font-medium text-gray-800">{title}</span>
      ),
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (imageUrl: string) => (
        <Image
          src={imageUrl}
          alt="Product"
          width={80}
          height={80}
          className="rounded-md shadow"
          preview={{
            maskClassName: "bg-gray-900/50",
            mask: <span className="text-white text-xs">View</span>,
          }}
        />
      ),
      align: "center",
    },
    {
      title: "Sold",
      dataIndex: "sold",
      key: "sold",
      render: (sold: number) => (
        <Tag color="geekblue" className="text-xs">
          {sold}
        </Tag>
      ),
      align: "center",
    },
    {
      title: "Rating",
      dataIndex: "rating",
      key: "rating",
      render: (rating: number) => <Rate disabled allowHalf value={rating} />,
      align: "center",
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
      title: "Brand",
      dataIndex: "brand",
      key: "brand",
      render: (brand: string) => (
        <span className="text-sm font-medium text-gray-700">{brand}</span>
      ),
      align: "center",
    },
    {
      title: "Origin",
      dataIndex: "origin",
      key: "origin",
      render: (origin: string) => (
        <span className="text-sm font-medium text-gray-700">{origin}</span>
      ),
      align: "center",
    },
    {
      title: "Action",
      key: "action",
      render: (record) => (
        <div className="flex items-center justify-center space-x-3">
          <Tooltip title={"View"}>
            <Link
              to={`/products/${record._id}`}
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              <EyeOutlined />
            </Link>
          </Tooltip>
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
      loading={false}
      pagination={{
        pageSize,
        onChange: (page) => setCurrentPage(page),
        position: ["bottomRight"],
      }}
      rowKey={(record) => record._id}
      className="mt-4"
    />
  );
};

export default ProductList;
