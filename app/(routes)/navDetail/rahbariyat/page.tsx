"use client"
import React from "react";
import { useGetRahbariyat } from "@/hooks/index";
import RahbariyatItem from "@/pages/rahbariyatItem/RahbariyatItem";
import { RahbariyatListprops } from "@/types/index"

interface rahbariyatProps {
    item: RahbariyatListprops
}


const Rahbariyat: React.FC<rahbariyatProps> = () => {
    const useGetRahbariyatList = useGetRahbariyat();
    console.log(useGetRahbariyatList)

    return (
        <div className="mb-[40px] lg:pl-0 md:pl-4 pl-6">
            <h2 className="text-center my-[20px] text-3xl font-semibold">
                Rahbariyat
            </h2>
            {useGetRahbariyatList.data?.results.map((item:any) => (
                <RahbariyatItem item={item} key={item.id} />
            ))}
        </div>
    );
};

export default Rahbariyat;
