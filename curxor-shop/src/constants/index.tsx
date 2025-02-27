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
import type { MenuType, StatusFilter } from "@/types/menu";

export const pageSize = 10;

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
    type: "submenu", 
    children: [
      {
        key: 5.1,
        name: "All Products",
        path: "/products",
      },
      {
        key: 5.2,
        name: "Product Attributes",
        path: "/products/attributes",
      },
      {
        key: 5.3,
        name: "Product Variants",
        path: "/products/variants",
      },
    ],
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


export const statusFilter: StatusFilter[] = [
  {
    label: "All",
    key: 1,
  },
  {
    label: "Active",
    key: 2,
  },
  { label: "Inactive", key: 3 },
  { label: "Out of stock", key: 4 },
];
