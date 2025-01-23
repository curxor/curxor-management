import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Layout, Menu } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { MenuType as MenuItemProps } from "@/types/menu";
import { menu as menuItems } from "@/constants";
import icons from "@/constants/icons";

const Sidebar = ({ setCollapsed }: { setCollapsed: () => void }) => {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState<string>("");

  useEffect(() => {
    const currentPath = location.pathname;
    const foundItem = menuItems.find((item) => item.path === currentPath);
    if (foundItem) {
      setSelectedKey(foundItem.key.toString());
    }
  }, [location.pathname]);

  const handleSelect = (key: string) => {
    setSelectedKey(key);
  };

  const items = menuItems.map((item: MenuItemProps) => ({
    key: item.key.toString(),
    icon: item.icon,
    label: <Link to={item.path}>{item.name}</Link>,
  }));
  return (
    <Layout.Sider
      className="h-screen fixed top-0 left-0 bottom-0 shadow-md"
      breakpoint="lg"
      theme="light"
      collapsible
      collapsed={isCollapsed}
      trigger={null}
    >
      <div>
        <div className="py-4 pl-4 flex items-center justify-between">
          <div className="flex items-center gap-x-2">
            <img
              className="size-8 border rounded-full"
              src={icons.curxorLogo}
            />
            {isCollapsed ? "" : <p className="font-bold text-2xl">Curxor</p>}
          </div>
          <span
            onClick={() => {
              setIsCollapsed(!isCollapsed);
              setCollapsed();
            }}
            className="w-fit cursor-pointer"
          >
            {isCollapsed ? (
              <MenuUnfoldOutlined className="size-6" />
            ) : (
              <MenuFoldOutlined className="size-6" />
            )}
          </span>
        </div>
        <Menu
          theme="light"
          mode="vertical"
          selectedKeys={[selectedKey]}
          onClick={({ key }) => handleSelect(key)}
          items={items}
        />
      </div>
    </Layout.Sider>
  );
};

export default Sidebar;
