import React from "react";
import Header from "./Header";
import VerticalNav from "./VerticalNav";

type Props = {
  children: React.ReactNode;
};

const MainLayout = (props: Props) => {
  return (
    <>
      <Header />
      <div className="pt-[48px] h-screen">
        <div className="relative h-full ">
          <VerticalNav />
          <div className="pl-[48px] bg-[#F5F5F5] h-full">{props.children}</div>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
