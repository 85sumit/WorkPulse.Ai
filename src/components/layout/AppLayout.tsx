import { ReactNode } from "react";
import AppSidebar from "./AppSidebar";
import TopNav from "./TopNav";

const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex min-h-screen w-full">
      <AppSidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <TopNav />
        <main className="flex-1 p-6 overflow-auto animate-fade-in">{children}</main>
      </div>
    </div>
  );
};

export default AppLayout;
