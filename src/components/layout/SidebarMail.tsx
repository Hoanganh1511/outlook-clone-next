"use client";
import React from "react";
import { GoInbox } from "react-icons/go";
import { VscSend } from "react-icons/vsc";
import { PiPencilLineDuotone } from "react-icons/pi";
import { RiFolderForbidLine } from "react-icons/ri";
import { GoTrash } from "react-icons/go";
import { HiOutlineArchiveBox } from "react-icons/hi2";
import { CiStickyNote } from "react-icons/ci";
import Accordion from "../common/Accordion";
import Link from "next/link";
import { usePathname } from "next/navigation";
const navs = [
  {
    sectionName: "Favourites",
    actions: [
      {
        text: "Add favourite",
        event: () => {
          alert("add favourite");
        },
      },
      {
        text: "Hide favourite",
        event: () => {
          alert("hide favourite");
        },
      },
    ],
    items: [
      { name: "Inbox", href: "/", icon: <GoInbox /> },
      { name: "Sent Items", href: "/sentitems", icon: <VscSend /> },
      { name: "Drafts", href: "/drafts", icon: <PiPencilLineDuotone /> },
      ,
    ],
    defaultOpen: false,
  },
  {
    sectionName: "Folders",
    actions: [
      {
        text: "New group",
        event: () => {
          alert("new group");
        },
      },
    ],
    items: [
      { name: "Inbox", href: "/", icon: <GoInbox /> },
      { name: "Junk Email", href: "/junkemail", icon: <RiFolderForbidLine /> },
      { name: "Drafts", href: "/drafts", icon: <PiPencilLineDuotone /> },
      { name: "Sent Items", href: "/sentitems", icon: <VscSend /> },
      { name: "Deleted Items", href: "/deleteditems", icon: <GoTrash /> },
      { name: "Archive", href: "/archive", icon: <HiOutlineArchiveBox /> },
      { name: "Notes", href: "/notes", icon: <GoInbox /> },
      {
        name: "Conversation History",
        href: "/conversationhistory",
        icon: <CiStickyNote />,
      },
    ],
    defaultOpen: true,
  },
];
const SidebarMail = () => {
  const pathname = usePathname();
  return (
    <div className="w-[260px] pt-[6px]  flex flex-col gap-y-[16px]">
      {navs.map((nav, idx) => {
        return (
          <Accordion
            name={nav.sectionName}
            actions={nav.actions}
            defaultOpen={nav.defaultOpen}
            key={idx}
          >
            <div>
              <ul>
                {nav.items.map((item, id) => {
                  return (
                    <li key={id}>
                      <Link
                        href={item?.href || ""}
                        className={`${
                          pathname === item?.href ? "bg-[#cfe4fa]" : ""
                        } pl-[30px] hover:bg-black/5 rounded-sm duration-100 cursor-pointer py-[8px] px-[12px] flex items-center justify-start`}
                      >
                        {item?.icon}
                        <span className="pl-[12px] text-[14px]">
                          {item?.name}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Accordion>
        );
      })}
    </div>
  );
};

export default SidebarMail;
