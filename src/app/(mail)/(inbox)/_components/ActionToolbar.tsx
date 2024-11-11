"use client";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { IoCopyOutline } from "react-icons/io5";
import { BsFilter } from "react-icons/bs";
import { HiArrowsUpDown } from "react-icons/hi2";
import inboxSlice, {
  FilterInboxType,
  SortByInboxType,
  SortOrderInboxType,
} from "@/redux/inboxSlice";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IoCheckmarkOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { IoMailUnreadOutline } from "react-icons/io5";
import { RiFlag2Line } from "react-icons/ri";
import { VscSend } from "react-icons/vsc";
import { RiAttachment2 } from "react-icons/ri";
import { RootState } from "@/redux/configure-store";
const ActionToolbar = () => {
  const dispatch = useAppDispatch();
  const { filterInbox, sortByInbox, sortOrderInbox } = useAppSelector(
    (state: RootState) => state.inbox
  );
  const {
    setSelectedInboxes,
    setFilterInbox,
    setSortByInbox,
    setSortOrderInbox,
  } = inboxSlice.actions;

  const handleSetFilter = (type: FilterInboxType) => {
    dispatch(setFilterInbox(type));
  };
  const handleSetSortBy = (type: SortByInboxType) => {
    dispatch(setSortByInbox(type));
  };
  const handleSetSortOrder = (type: SortOrderInboxType) => {
    dispatch(setSortOrderInbox(type));
  };
  return (
    <div className="flex items-center">
      <div className="size-[32px] rounded-sm hover:bg-black/5 flex items-center justify-center">
        <IoCopyOutline />
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="size-[32px] rounded-sm hover:bg-black/5 flex items-center justify-center">
            {filterInbox === "all" && <BsFilter className="size-[16px]" />}
            {filterInbox === "unread" && (
              <IoMailUnreadOutline className="size-[16px] text-primary" />
            )}
            {filterInbox === "flagged" && (
              <RiFlag2Line className="size-[16px] text-primary" />
            )}
            {filterInbox === "to-me" && (
              <IoCheckmarkOutline className="size-[16px] text-primary" />
            )}
            {filterInbox === "has-files" && (
              <RiAttachment2 className="size-[16px] text-primary" />
            )}
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
          {/* <DropdownMenuSeparator /> */}
          <DropdownMenuItem
            onClick={() => handleSetFilter("all")}
            className="group hover:bg-gray-100 cursor-pointer"
          >
            <div className="flex items-center justify-center w-[18px] h-[24px]">
              {filterInbox === "all" && (
                <IoCheckmarkOutline className="size-[16px]" />
              )}
            </div>
            <IoMailOutline className="group-hover:text-primary" />
            <span>All</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => handleSetFilter("unread")}
            className="group hover:bg-gray-100 cursor-pointer"
          >
            <div className="flex items-center justify-center w-[18px] h-[24px]">
              {filterInbox === "unread" && (
                <IoCheckmarkOutline className="size-[16px]" />
              )}
            </div>
            <IoMailUnreadOutline className="group-hover:text-primary" />
            <span>Unread</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => handleSetFilter("flagged")}
            className="group hover:bg-gray-100 cursor-pointer"
          >
            <div className="flex items-center justify-center w-[18px] h-[24px]">
              {filterInbox === "flagged" && (
                <IoCheckmarkOutline className="size-[16px]" />
              )}
            </div>
            <RiFlag2Line className="group-hover:text-primary" />
            <span>Flagged</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => handleSetFilter("to-me")}
            className="group hover:bg-gray-100 cursor-pointer"
          >
            <div className="flex items-center justify-center w-[18px] h-[24px]">
              {filterInbox === "to-me" && (
                <IoCheckmarkOutline className="size-[16px]" />
              )}
            </div>
            <VscSend className="group-hover:text-primary" />
            <span>To me</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => handleSetFilter("has-files")}
            className="group hover:bg-gray-100 cursor-pointer"
          >
            <div className="flex items-center justify-center w-[18px] h-[24px]">
              {filterInbox === "has-files" && (
                <IoCheckmarkOutline className="size-[16px]" />
              )}
            </div>
            <RiAttachment2 className="group-hover:text-primary" />
            <span>Has files</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="size-[32px] rounded-sm hover:bg-black/5 flex items-center justify-center">
            <HiArrowsUpDown />
          </div>
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          <DropdownMenuLabel>Sort by</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => handleSetSortBy("date")}
            className="group hover:bg-gray-100 cursor-pointer"
          >
            <div className="flex items-center justify-center w-[18px] h-[24px]">
              {sortByInbox === "date" && (
                <IoCheckmarkOutline className="size-[16px]" />
              )}
            </div>
            <span>Date</span>
          </DropdownMenuItem>

          <DropdownMenuLabel>Sort order</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => handleSetSortOrder("newest")}
            className="group hover:bg-gray-100 cursor-pointer"
          >
            <div className="flex items-center justify-center w-[18px] h-[24px]">
              {sortOrderInbox === "newest" && (
                <IoCheckmarkOutline className="size-[16px]" />
              )}
            </div>
            <span>Newest</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => handleSetSortOrder("oldest")}
            className="group hover:bg-gray-100 cursor-pointer"
          >
            <div className="flex items-center justify-center w-[18px] h-[24px]">
              {sortOrderInbox === "oldest" && (
                <IoCheckmarkOutline className="size-[16px]" />
              )}
            </div>
            <span>Oldest</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ActionToolbar;
