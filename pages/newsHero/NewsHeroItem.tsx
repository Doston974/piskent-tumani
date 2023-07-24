"use client"
import Link from "next/link";
import React, { useState } from "react";
import { BiCalendar } from "react-icons/bi";
import { popularNewsProps } from "@/types/index"
import Image from "next/image";

interface heroNewsItemProps {
    item: popularNewsProps
}

const NewsHeroItem: React.FC<heroNewsItemProps> = ({ item }) => {
    const [readMore, setReadMore] = useState(false);
    let date = new Date(item.add_time);
    let dateMDY = `${date.getDate()}-${date.getMonth() + 1
        }-${date.getFullYear()} / ${date.getHours()} : ${date.getMinutes()}`;
    return (
        <div className="
        m-2 
        hover:shadow-2xl 
        duration-700 
        p-2 
        shadow-md
        ">
            <div className="
            lg:h-[300px]
            ">
                <div className="
                relative 
                overflow-hidden 
                bg-no-repeat 
                bg-cover 
                lg:w-[280px] 
                lg:h-[180px]
                ">
                    <Image
                        src={item.post_img}
                        width={0}
                        height={0}
                        sizes="100vw"
                        alt="NewsHero"
                        className="
                    w-full 
                    h-full
                    " />
                </div>
                <div className="
                text-[18px] 
                font-[700]
                text-[#121221] 
                mt-2
                ">
                    <Link href={`/posts/${item.slug}`}>
                        {readMore ? item.title : `${item.title.substring(0, 90)} `}
                        {item.title.substring(0, 180) ? (
                            ""
                        ) : (
                            <button onClick={() => setReadMore(!readMore)}>
                                {readMore ? "" : "batafsil"}
                            </button>
                        )}
                    </Link>
                </div>
            </div>
            <p className="
            flex 
            items-center 
            gap-1 
            text-[12px] 
            justify-end 
            text-gray-500 
            lg:mt-[10px] 
            md:mt-[15px] 
            mt-[40px]
            ">
                <BiCalendar size={14} /> {dateMDY}
            </p>
        </div>
    );
};

export default NewsHeroItem;
