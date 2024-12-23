"use client";
import { cn } from "@/utils/cn";
import { IoIosArrowDown } from "react-icons/io";
import React, { useEffect, useRef, useState } from "react";
interface IProps {
  icon: React.ReactNode;
  name?: string;
  onClick: () => void;
  className?: string;
  isDisabled?: boolean;
  showArrowDown?: boolean;
  children?: React.ReactNode;
  [key: string]: any;
}
const ToolItem = (props: IProps) => {
  const {
    icon,
    name,
    onClick,
    className,
    children,
    showArrowDown = true,
    isDisabled = false,
    ...rest
  } = props;
  const [showDropDown, setShowDropDown] = useState(false);
  const dropdownRef = useRef<HTMLButtonElement | null>(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setShowDropDown(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="relative flex border-[1px] border-transparent hover:border-gray-300 rounded-[4px] ">
      <button
        onClick={onClick}
        disabled={isDisabled}
        {...rest}
        className={cn(
          `relative pl-[8px] pr-[6px] flex items-center justify-center h-[32px]  bg-transparent hover:bg-[#fafafa] ${
            children ? "rounded-l-[4px]" : "rounded-[4px]"
          }`,
          className
        )}
      >
        {icon}
        {name && <div className="pb-[2px] ml-[5px] text-[14px]">{name}</div>}
      </button>
      {showArrowDown && children && (
        <button
          ref={dropdownRef}
          onClick={() => setShowDropDown((prev) => !prev)}
          className="h-[32px] px-[2px] bg-transparent hover:bg-[#fafafa] rounded-r-[4px]"
        >
          <IoIosArrowDown className="size-[13px] text-black/75 mt-[2px]" />
        </button>
      )}
      {children && showDropDown && (
        <div className="absolute top-full left-0">{children}</div>
      )}
    </div>
  );
};

export default ToolItem;
