"use client"
import Link from "next/link";
import { useState } from "react";
import { getNewsCarouselProps } from "../../types";
import Image from "next/image";

interface HeroProps {
    item: getNewsCarouselProps
}

const HeroItems: React.FC<HeroProps> = ({ item }) => {
    let date = new Date(item.add_time);
    let dateMDY = `${date.getDate()}-${date.getMonth() + 1
        }-${date.getFullYear()} / ${date.getHours()} : ${date.getMinutes()}`;
    const [readMore] = useState("");

    return (
        <div>
            <picture className="
            justify-center
            relative 
            w-full
            " key={item.id}>
                <div className="
                relative 
                overflow-hidden 
                bg-no-repeat 
                bg-cover
                ">
                    <Image
                        className=" 
                        shadow-2xl 
                        md:h-[595px] 
                        h-[310px]  
                        w-full 
                        object-cover 
                        hover:scale-125 
                        transition 
                        duration-700 
                        ease-in-out
                        "
                        src={item.post_img}
                        width={0}
                        height={0}
                        sizes="100vw"
                        alt="yangiliklar"
                    />
                </div>
                <div className="
                absolute 
                pb-2 
                md:pb-0 
                w-full 
                mx-auto 
                bottom-0 
                md:h-[180px] 
                rounded-b-md 
                flex 
                justify-center 
                items-center
                bg-gradient-to-t 
                from-black/70  
                font-medium 
                md:font-semibold 
                text-white
                ">
                    <Link href={`/posts/${item.slug}`}>
                        <div className="
                        2xl:text-2xl  
                        md:text-xl 
                        font-bold 
                        mb-[18px] 
                        px-[30px]
                        ">
                            {readMore ? item.title : `${item.title.substring(0, 200)}`}
                        </div>
                    </Link>
                </div>
                <div className="
                absolute  
                bottom-1 
                right-3 
                text-white 
                text-xs 
                font-medium
                ">
                    <p className="
                    px-3 
                    text-xs   
                    md:text-[16px] 
                    text-gray-200 
                    rounded  
                    md:py-1
                    ">
                        {dateMDY}
                    </p>
                </div>
            </picture>
        </div>
    );
};
export default HeroItems;
