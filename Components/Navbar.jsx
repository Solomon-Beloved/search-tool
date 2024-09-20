"use client";
// import { IoSearchOutline } from "react-icons/io5";
import Image from "next/image";
import Avatar from "@/public/avatar.png";
import { IoIosNotificationsOutline } from "react-icons/io";
import {
  IoSunnyOutline,
  IoMoonOutline,
  IoSearchOutline,
} from "react-icons/io5";
import { usePathname } from "next/navigation";
const Dashboard = () => {
  const path = usePathname();
  return (
    <div className="flex justify-between items-center pt-1 border-b-2">
      <div>
        <h1>{path.split("/").pop()}</h1>
      </div>

      <div className="flex items-center justify-around">
        <div className="flex">
          <span>
            <IoSearchOutline />
          </span>
          <input type="text" name="" id="" placeholder="Search...." />
        </div>
        <div>
          <IoIosNotificationsOutline />
        </div>
        <div className="flex border-2 ">
          <div>
            <IoSunnyOutline />
          </div>
          <div></div>
          <div>
            <IoMoonOutline />
          </div>
        </div>
        <Image src={Avatar} alt="users" className="w-12 h-12 object-cover" />
      </div>
    </div>
  );
};

export default Dashboard;
