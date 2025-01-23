import {
  DashboardOutlined,
  ShoppingCartOutlined,
  AppstoreOutlined,
  DollarCircleOutlined,
  ShoppingOutlined,
  StarOutlined,
  TagsOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuType } from "@/types/menu";

export const menu: MenuType[] = [
  {
    key: 1,
    name: "Dashboard",
    icon: <DashboardOutlined />,
    path: "/dashboard",
  },
  {
    key: 2,
    name: "Orders",
    icon: <ShoppingCartOutlined />,
    path: "/orders",
  },
  {
    key: 3,
    name: "Categories",
    icon: <AppstoreOutlined />,
    path: "/categories",
  },
  {
    key: 4,
    name: "Transactions",
    icon: <DollarCircleOutlined />,
    path: "/transactions",
  },
  {
    key: 5,
    name: "Products",
    icon: <ShoppingOutlined />,
    path: "/products",
  },
  {
    key: 6,
    name: "Brands",
    icon: <StarOutlined />,
    path: "/brands",
  },
  {
    key: 7,
    name: "Coupons",
    icon: <TagsOutlined />,
    path: "/coupons",
  },
  {
    key: 8,
    name: "Profile",
    icon: <UserOutlined />,
    path: "/profile",
  },
];
