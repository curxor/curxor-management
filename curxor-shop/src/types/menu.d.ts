import { ReactNode } from "react";
export type MenuType = {
  key: number;
  name: string;
  type?: "submenu";
  icon?: ReactNode;
  path?: string;
  children?: MenuType[];
};

export type StatusFilter = {
  label: string;
  key: number;
};
