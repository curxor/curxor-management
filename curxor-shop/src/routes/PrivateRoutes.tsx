import { Outlet } from "react-router-dom";
import Navbar from "@/layouts/navbar";
import Sidebar from "@/layouts/sidebar";
import { useState } from "react";

function PrivateRoutes() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="flex">
      <div
        className={`transition-all duration-300 ${collapsed ? "w-24" : "w-56"}`}
      >
        <Sidebar setCollapsed={() => setCollapsed(!collapsed)} />
      </div>
      <div className="flex-1 flex flex-col py-4 pr-4">
        <Navbar />
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default PrivateRoutes;
