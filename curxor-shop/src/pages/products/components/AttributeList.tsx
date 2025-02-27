import { useState } from "react";
import { Link } from "react-router-dom";
import { Tooltip, Table, TableColumnsType, Popconfirm } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { pageSize } from "@/constants";
import type { Attributes } from "@/types/products";

const fakeData: Attributes[] = [
  { _id: "1", name: "Color", value: "Red", product: "Nike" },
  { _id: "2", name: "Size", value: "Medium", product: "Nike" },
  { _id: "3", name: "Material", value: "Cotton", product: "Nike" },
  { _id: "4", name: "Brand", value: "Nike", product: "Nike" },
  { _id: "5", name: "Weight", value: "500g", product: "Nike" },
];
const AttributeList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const columns: TableColumnsType<Attributes> = [
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
      title: "Value",
      dataIndex: "value",
      key: "value",
      render: (value: string) => (
        <span className="text-sm font-medium text-gray-700">{value}</span>
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

export default AttributeList;
