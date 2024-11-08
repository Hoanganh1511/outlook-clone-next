"use client";
import SidebarMail from "@/components/layout/SidebarMail";
import TopBar from "@/components/layout/TopBar";
import { RootState } from "@/redux/configure-store";
import { useAppSelector } from "@/redux/hook";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import React from "react";
const HomeToolTab = dynamic(() => import("@/views/tabs/inbox/HomeToolTab"));
const ViewToolTab = dynamic(() => import("@/views/tabs/inbox/ViewToolTab"));
const HelpToolTab = dynamic(() => import("@/views/tabs/inbox/HelpToolTab"));
const JunkEmailToolTab = dynamic(
  () => import("@/views/tabs/inbox/HomeToolTab")
);
const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const { activeTopBar } = useAppSelector((state: RootState) => state.app);
  const renderToolBar = () => {
    switch (pathname) {
      case "/":
        if (activeTopBar === "home") return <HomeToolTab />;
        if (activeTopBar === "view") return <ViewToolTab />;
        if (activeTopBar === "help") return <HelpToolTab />;
      case "/junkemail":
        return <JunkEmailToolTab />;
    }
  };
  return (
    <div className="bg-[#F5F5F5] h-full flex flex-col">
      <TopBar />
      {renderToolBar()}
      <div className="relative flex flex-1 pt-[10px]">
        <SidebarMail />
        <div className="h-full flex flex-1 px-[12px]">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
