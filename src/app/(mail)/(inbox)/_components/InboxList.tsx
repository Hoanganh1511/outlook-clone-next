"use client";
import React, { useState } from "react";

import { GoTrash } from "react-icons/go";
import { InboxListSkeleton } from "../page";
import useInboxData from "@/hooks/useInboxData";
import MiniSpinLoading from "@/components/common/Loading/MiniSpinLoading";
import { formatDateInbox } from "@/utils/formatDateInbox";
import ActionToolbar from "./ActionToolbar";
import { RootState } from "@/redux/configure-store";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import inboxSlice from "@/redux/inboxSlice";
import InboxItem from "./InboxItem";
const InboxList = () => {
  const dispatch = useAppDispatch();
  const { setSelectedInboxes } = inboxSlice.actions;
  const { filterInbox, sortByInbox, sortOrderInbox } = useAppSelector(
    (state: RootState) => state.inbox
  );
  const [currentTab, setCurrentTab] = useState<"focused" | "other">("focused");
  const { inboxes, isLoading, error, isValidating } = useInboxData(
    filterInbox,
    sortByInbox,
    sortOrderInbox
  );
  const handleSelectInbox = (id: string) => {
    dispatch(setSelectedInboxes(id));
  };
  return (
    <div className="w-[350px] border-[1px] border-gray-300 rounded-t-[6px]">
      <div className=" pl-[64px] pr-[10px] pt-[8px] pb-[6px] border-b-[1px] bg-white border-gray-300 flex justify-between rounded-t-[6px]">
        <div className="flex justify-center gap-[20px]">
          <button
            onClick={() => setCurrentTab("focused")}
            className="group relative pb-[2px]"
          >
            <span
              className={` ${
                currentTab === "focused" ? "font-semibold" : "font-normal"
              } `}
            >
              Focused
            </span>
            <span
              className={`absolute top-full left-1/2 -translate-x-1/2 ${
                currentTab === "focused"
                  ? "w-[80%] bg-primary"
                  : "w-[20%] bg-transparent"
              }  h-[2px] duration-200 group-hover:w-full`}
            ></span>
          </button>
          <button
            onClick={() => setCurrentTab("other")}
            className="group relative pb-[2px]"
          >
            <span
              className={` ${
                currentTab === "other" ? "font-semibold" : "font-normal"
              } `}
            >
              Other
            </span>
            <span
              className={`absolute top-full left-1/2 -translate-x-1/2 ${
                currentTab === "other"
                  ? "w-[80%] bg-primary"
                  : "w-[20%] bg-transparent"
              }  h-[2px] duration-200 group-hover:w-full`}
            ></span>
          </button>
        </div>
        <ActionToolbar />
      </div>

      {/* {isLoading && <p className="text-center py-4">Loading....</p>} */}

      {isLoading ? (
        <InboxListSkeleton />
      ) : (
        <>
          <div className="flex flex-col">
            {inboxes &&
              inboxes.length > 0 &&
              inboxes.map((inbox, idx) => {
                return <InboxItem inbox={inbox} key={idx} />;
              })}
          </div>
          {isValidating && (
            <div className="flex items-center justify-center py-5 bg-white">
              <MiniSpinLoading
                width={18}
                height={18}
                color="#0f6cbd"
                position="center"
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default InboxList;
