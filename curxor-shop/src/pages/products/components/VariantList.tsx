import { useState } from "react";
import { Link } from "react-router-dom";
import { Tooltip, Table, TableColumnsType, Popconfirm, Image } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { pageSize } from "@/constants";
import type { Variants } from "@/types/products";

const fakeData: Variants[] = [
  {
    _id: "1",
    name: "Nike Air Max",
    image:
      "https://images.unsplash.com/photo-1740423963699-69de8aa7e75b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    product: "Nike",
  },
  {
    _id: "2",
    name: "Adidas Ultraboost",
    image:
      "https://images.unsplash.com/photo-1740423963699-69de8aa7e75b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    product: "Adidas",
  },
  {
    _id: "3",
    name: "Puma Running Shoes",
    image:
      "https://images.unsplash.com/photo-1740423963699-69de8aa7e75b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    product: "Puma",
  },
  {
    _id: "4",
    name: "New Balance 990",
    image:
      "https://images.unsplash.com/photo-1740423963699-69de8aa7e75b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    product: "New Balance",
  },
];

const VariantList = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const columns: TableColumnsType<Variants> = [
    {
      title: "ID",
      dataIndex: "_id",
      key: "_id",
      render: (_, _record, index) => (currentPage - 1) * pageSize + index + 1,
      width: 60,
      align: "center",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (name: string) => (
        <span className="font-medium text-gray-800">{name}</span>
      ),
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (image: string) => (
        <Image
          src={image}
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
      title: "Product",
      dataIndex: "product",
      key: "product",
      render: (product: string) => (
        <span className="text-sm font-medium text-gray-700">{product}</span>
      ),
      align: "center",
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

export default VariantList;
