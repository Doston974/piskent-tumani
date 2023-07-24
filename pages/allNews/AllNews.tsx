"use client"
import React from "react";
import { useGetEightNews } from "@/hooks/index";
import { GrFormNextLink } from "react-icons/gr";
import AllNewsItem from "./AllNewsItem";
import Link from "next/link";
import { getAllNewsProps } from "@/types/index"

const AllNews = () => {
    const useGetEightNewsList = useGetEightNews();

    return (
        <div className="
        mt-[50px]
        ">
            <h2 className="
            font-[700] 
            text-[30px] 
            text-#121221 
            mb-4
            ">
                So'nggi yangiliklar
            </h2>
            <div className="
            lg:grid 
            grid-cols-4 
            ">
                {useGetEightNewsList.data?.map((item: getAllNewsProps) => (
                    <AllNewsItem item={item} key={item.id} />
                ))}
            </div>
            <Link href="/all-news">
                <span className="
                flex 
                gap-2 
                px-1 
                py-2 
                hover:bg-[#EEF2FF] 
                bg-gray-200 
                duration-200 
                rounded-r-full 
                items-center 
                w-[170px] 
                m-4 
                ">
                    <p>Ko'proq yangilik </p>
                    <GrFormNextLink size={22} />
                </span>
            </Link>
        </div>
    );
};

export default AllNews;
