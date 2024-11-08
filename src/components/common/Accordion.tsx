"use client";
import React, { useEffect, useRef, useState } from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";

const Accordion = ({
  name,
  children,
  actions,
  defaultOpen = false,
}: {
  name: string;
  actions: {
    text: string;
    event: () => void;
  }[];
  defaultOpen?: boolean;
  children: React.ReactNode;
}) => {
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [showActions, setShowActions] = useState(false);
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setShowActions(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);
  return (
    <section>
      {/* head */}
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="group w-full h-[28px] px-[12px] flex items-center justify-between cursor-pointer"
      >
        <div className="flex items-center justify-start">
          <IoIosArrowDown
            className={`text-black/50 mr-[8px] transform transition-transform duration-150 ${
              isOpen ? "-rotate-90" : "rotate-0"
            }`}
          />
          <span className="font-medium text-[16px]">
            {name}
            {/* {nav.sectionName} */}
          </span>
        </div>
        <div
          onClick={(e) => {
            e.stopPropagation();
            setShowActions((prev) => !prev);
          }}
          ref={dropdownRef}
          className="relative"
        >
          <button
            className={`group/more flex items-center justify-center size-[28px]  rounded-md bg-transparent hover:bg-black/5 duration-100`}
          >
            {" "}
            <HiOutlineDotsHorizontal className="text-transparent group-hover:text-black/70" />
          </button>

          {showActions && (
            <div
              className={`absolute top-1/2 left-1/2 min-w-[150px] bg-white shadow-md border-[1px] border-gray-200`}
            >
              {actions.map((action, idx) => {
                return (
                  <li
                    key={idx}
                    onClick={action.event}
                    className="list-none px-[12px] py-[8px] text-[14px] text-black/70 hover:bg-black/5"
                  >
                    <>{action.text}</>
                  </li>
                );
              })}
            </div>
          )}
        </div>
      </div>
      {/* body */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-2">{children}</div>
      </div>
    </section>
  );
};

export default Accordion;
