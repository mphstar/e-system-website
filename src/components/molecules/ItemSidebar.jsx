"use client"

import IconsSidebar from "../atoms/IconsSidebar";
import { IoIosArrowDown } from "react-icons/io";

const ItemSidebar = ({ image, title, isNotif = false, isDropdown = false, setDropdown = false, onClick = () => {} }) => {
  return (
    <div onClick={onClick} className="flex flex-row gap-2 px-6 hover:bg-blue-500 py-2 items-center duration-300 ease-in-out cursor-pointer">
      <IconsSidebar image={image} isNotif={isNotif} />
      <span className="text-white flex-1 line-clamp-1">{title}</span>
      {isDropdown && <IoIosArrowDown className={`fill-white ${!setDropdown ? 'rotate-0' : 'rotate-180'} duration-300 ease-in-out`} />}
    </div>
  );
};

export default ItemSidebar;
