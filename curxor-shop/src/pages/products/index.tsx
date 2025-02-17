import { useState } from "react";
import { Input, Dropdown, Button, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import type { GetProps, MenuProps } from "antd";
import { statusFilter } from "@/constants";
import ProductList from "@/pages/products/components/ProductList";

const { Search } = Input;

type SearchProps = GetProps<typeof Input.Search>;

function ProductsPage() {
  const [label, setLabel] = useState("All");
  const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
    console.log(info?.source, value);
  const handleMenuClick: MenuProps["onClick"] = (e) => {
    const selectedItem = statusFilter?.find(
      (value) => Number(value?.key) === Number(e.key)
    );
    if (selectedItem) {
      setLabel(selectedItem.label);
    }
  };
  const menuProps = {
    items: statusFilter,
    onClick: handleMenuClick,
  };

  return (
    <div className="mt-4">
      <div className="flex items-center justify-between">
        <Space className="space-x-3">
          <Search
            placeholder="Search..."
            onSearch={onSearch}
            style={{ width: 200 }}
          />
          <Dropdown menu={menuProps}>
            <Button>
              <Space className="font-medium text-[#8B909A]">
                Status: {label}
                <DownOutlined className="size-3" />
              </Space>
            </Button>
          </Dropdown>
        </Space>
        <Dropdown menu={menuProps}>
          <Button>
            <Space className="font-medium text-[#8B909A]">
              Filter by date range
              <DownOutlined className="size-3" />
            </Space>
          </Button>
        </Dropdown>
      </div>
      <ProductList />
    </div>
  );
}

export default ProductsPage;
