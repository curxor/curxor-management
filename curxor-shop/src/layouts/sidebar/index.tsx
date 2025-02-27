import { Layout, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { menu as menuItems } from "@/constants";
import icons from "@/constants/icons";
import type { MenuType } from "@/types/menu";

const Sidebar = ({
  setCollapsed,
  getSelectedPage,
}: {
  setCollapsed: () => void;
  getSelectedPage: (page: string) => void;
}) => {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState<string>("");

  useEffect(() => {
    const currentPath = location.pathname;
    const foundItem = menuItems
      .flatMap((item) => (item.children ? item.children : item))
      .find((item) => item.path === currentPath);

    if (foundItem) {
      setSelectedKey(foundItem.key.toString());
      getSelectedPage(foundItem.name);
    }
  }, [getSelectedPage, location.pathname]);

  const handleSelect = (key: string) => {
    setSelectedKey(key);
  };

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
          mode="inline"
          selectedKeys={[selectedKey]}
          onClick={({ key }) => handleSelect(key)}
        >
          {menuItems.map((item: MenuType) =>
            item.children ? (
              <Menu.SubMenu key={item.key} icon={item.icon} title={item.name}>
                {item.children.map((subItem) => (
                  <Menu.Item key={subItem.key}>
                    <Link to={subItem.path!}>{subItem.name}</Link>
                  </Menu.Item>
                ))}
              </Menu.SubMenu>
            ) : (
              <Menu.Item key={item.key} icon={item.icon}>
                <Link to={item.path!}>{item.name}</Link>
              </Menu.Item>
            )
          )}
        </Menu>
      </div>
    </Layout.Sider>
  );
};

export default Sidebar;
