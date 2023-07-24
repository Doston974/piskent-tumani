"use client"
import React from "react";
import { useGetPopularNews } from "@/hooks/index";
import NewsHeroItem from "./NewsHeroItem";
import { popularNewsProps } from "@/types/index"


const NewsHero = () => {
    const useGetPopularNewsList = useGetPopularNews();
    //  console.log(useGetPopularNewsList)
    return (
        <section>
            <h3 className="
            font-[700] 
            text-[30px] 
            text-#121221 
            mb-4 
            mt-[50px]
            ">
                Dolzarb xabarlar
            </h3>
            <div className="
            lg:flex
            ">
                {useGetPopularNewsList.data?.map((item: popularNewsProps) => {
                    return <NewsHeroItem item={item} key={item.id} />;
                })}
            </div>
        </section>
    );
};

export default NewsHero;
