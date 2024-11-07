"use client";
import { cn } from "@/utils/cn";
import { IoIosArrowDown } from "react-icons/io";
import React, { useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";
interface IProps {
  icon: React.ReactNode;
  name: string;
  onClick: () => void;
  className?: string;
  isDisabled?: boolean;
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
    isDisabled = false,
    ...rest
  } = props;
  const menuRef = useRef(null);
  const [showDropDown, setShowDropDown] = useState(false);
  const handleClickOutside = () => {
    setShowDropDown(false);
  };
  //   useOnClickOutside(menuRef, handleClickOutside);
  return (
    <div
      ref={menuRef}
      className="relative flex border-[1px] border-transparent  hover:border-[1px] hover:border-gray-300 rounded-[4px] "
    >
      <button
        onClick={() => {
          onClick();
        }}
        disabled={isDisabled}
        {...rest}
        className={cn(
          `relative px-[8px] flex items-center justify-center h-[32px]  bg-transparent hover:bg-[#fafafa]`,
          className
        )}
      >
        {icon}
        <div className="ml-[4px] text-[14px]">{name}</div>
      </button>
      <button
        onClick={() => setShowDropDown(true)}
        className="h-[32px] px-[2px] bg-transparent hover:bg-[#fafafa] "
      >
        <IoIosArrowDown className="size-[13px] text-black/75 mt-[2px]" />
      </button>
      {showDropDown && (
        <div className="absolute top-full left-0 w-auto h-auto">{children}</div>
      )}
    </div>
  );
};

export default ToolItem;
