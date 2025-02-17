import { ReactNode } from "react";
export type MenuType = {
  key: number;
  name: string;
  icon: ReactNode;
  path: string;
};

export type StatusFilter = {
  label: string;
  key: number;
};
