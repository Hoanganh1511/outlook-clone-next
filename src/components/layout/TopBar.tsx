"use client";
import appSlice from "@/app/appSlice";
import { useAppDispatch } from "@/redux/hook";
import { TabType } from "@/types";
import React, { useEffect, useRef, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
// import { useDispatch } from "react-redux";
// import HomeToolTab from "@/views/tabs/HomeToolTab";
// import ViewToolTab from "@/views/tabs/ViewToolTab";
// import HelpToolTab from "@/views/tabs/HelpToolTab";
const allTabs = [
  {
    id: "home" as TabType,
    name: "Home",
  },
  {
    id: "view" as TabType,
    name: "View",
  },
  {
    id: "help" as TabType,
    name: "Help",
  },
];
const TopBar = () => {
  const dispatch = useAppDispatch();
  const { setActiveTopBar } = appSlice.actions;
  const tabsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeTabIndex, setActiveTabIndex] = useState<number | null>(0);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);
  useEffect(() => {
    if (activeTabIndex === null) {
      return;
    }

    const setTabPosition = () => {
      const currentTab = tabsRef.current[activeTabIndex] as HTMLElement;
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    };
    setTabPosition();
  }, [activeTabIndex]);
  return (
    <div className="">
      <div className="flex  px-[14px] pb-[4px]">
        <button className="size-[34px] flex items-center justify-center hover:bg-black/5">
          <AiOutlineMenu className="text-black/85 size-[20px]" />
        </button>
        <div className="grid grid-cols-4 relative">
          <span
            className={`absolute bottom-0  h-[3px] bg-[#0F6CBD] flex overflow-hidden rounded-3xl  transition-all duration-300`}
            style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
          ></span>
          {allTabs.map((tab, index) => {
            const isActive = activeTabIndex === index;
            return (
              <button
                key={index}
                onClick={() => {
                  setActiveTabIndex(index);
                  dispatch(setActiveTopBar(tab.id as TabType));
                }}
                className="col-span-1 flex items-center h-[34px] px-[16px] hover:bg-black/5"
              >
                <div
                  ref={(el) => {
                    tabsRef.current[index] = el;
                  }}
                  className={`${
                    isActive
                      ? "font-semibold"
                      : "text-black/70 hover:text-black font-semibold"
                  } `}
                >
                  <span className="text-[14px]">{tab.name}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
      {/* <div className="px-[8px]">
        {activeTabIndex === 0 && <HomeToolTab />}
        {activeTabIndex === 1 && <ViewToolTab />}
        {activeTabIndex === 2 && <HelpToolTab />}
      </div> */}
    </div>
  );
};

export default TopBar;
