import { BellOutlined } from "@ant-design/icons";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between">
      <p className="text-2xl font-bold">Dashboard</p>
      <div className="flex items-center gap-x-4">
        <div className="relative">
          <BellOutlined className="size-6" />
          <span className="px-1 py-[2px] absolute left-2 rounded-full bg-danger-80 text-white text-[8px] font-medium">
            10
          </span>
        </div>
        <div>
          <div className="w-10 h-10 rounded-full bg-indigo-800 relative">
            <span className="w-3 h-3 rounded-full bg-green-400 absolute right-0 bottom-0 border-2"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
