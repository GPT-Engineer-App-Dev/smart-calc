import { Outlet } from "react-router-dom";
import { Package2 } from "lucide-react";

function SharedLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
        <div className="flex items-center space-x-2">
          <Package2 className="h-6 w-6" />
          <span className="text-xl font-bold">CalcMaster</span>
        </div>
      </header>
      <main className="flex flex-1">
        <Outlet />
      </main>
    </div>
  );
}

export default SharedLayout;