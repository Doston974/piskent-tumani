"use client"
import Link from "next/link";
import React, { useState } from "react";
import { BiCalendar } from "react-icons/bi";
import { getAllNewsProps } from "../../types/index"
import Image from "next/image";


interface AllNewsItemProps {
  item: getAllNewsProps
}

const AllNewsItem: React.FC<AllNewsItemProps> = ({ item }) => {
  const [readMore] = useState(false);

  let date = new Date(item.add_time);
  let dateMDY = `${date.getDate()}-${date.getMonth() + 1
    }-${date.getFullYear()}`;
  return (
    <div className="
    m-2 
    hover:shadow-2xl 
    duration-700 
    p-2 
    shadow-md 
    lg:w-[300px]
    ">
      <div className="
      lg:w-[280px] 
      lg:h-[180px]
      ">
        <Image
          src={item.post_img}
          width={0}
          height={0}
          sizes="100vw"
          alt="post img"
          className="
        w-full 
        h-full
        " />
      </div>
      <div className="mt-2">
        <Link
          href={`/posts/${item.slug}`}
          className="
          text-[18px] 
          font-[700] 
          text-[#121221]
          "
        >
          {readMore ? item.title : `${item.title.substring(0, 85)}`}
        </Link>
      </div>
      <p className="
      flex 
      gap-1 
      items-center 
      justify-end 
      text-gray-500 
      mt-[20px] 
      text-[12px]
      ">
        <BiCalendar />
        {dateMDY}
      </p>
    </div>
  );
};

export default AllNewsItem;
