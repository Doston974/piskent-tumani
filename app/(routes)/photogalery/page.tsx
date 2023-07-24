"use client"
import { useState } from 'react';
import { IoClose } from "react-icons/io5";
import "./style.css";
import { useGetAllPhoto } from "@/hooks/index";
import { Pagination } from "@mantine/core";
import Image from "next/image";
import { getAllPhotoProps } from "@/types/index"

const photogalery = () => {
    const [page, setPages] = useState(1);
    const useGetAllPhotoList = useGetAllPhoto();
    // console.log(useGetAllPhotoList)
    const [model, setModel] = useState(false);
    const [tempImg, setTempImg] = useState("");
    const getImg = (img: any) => {
        setTempImg(img);
        setModel(true);
    };
    return (
        <div className="
        mb-[40px]
        max-w-[1300px]
        mx-auto
        ">
            <h3 className="
            title 
            text-4xl 
            font-semibold 
            mb-6
            ">
                Piskent tumani foto suratlarda
            </h3>

            <div className={model ? "model open" : "model"}>
                <img src={tempImg} alt="Oqqo'rg'on tumani foto" />
                <IoClose className="
                icon__x
                " onClick={() => setModel(false)} />
            </div>

            <div className="
             gallery
            ">
                {useGetAllPhotoList.data?.results.map((item: getAllPhotoProps) => {
                    return (
                        <div
                            className="
                            pics 
                            relative 
                            overflow-hidden 
                            bg-no-repeat 
                            bg-cover 
                            "
                            key={item.id}
                            onClick={() => getImg(item.post_img)}
                        >
                            <Image
                                className="
                                hover:scale-125 
                                object-cover 
                                transition 
                                duration-700 
                                ease-in-out
                                w-full
                                h-full
                                "
                                src={item.post_img}
                                width={0}
                                height={0}
                                sizes="100vw"
                                alt="Foto suratlar"
                            />
                        </div>
                    );
                })}
            </div>
            <Pagination
                py={28}
                color="cyan"
                size="lg"
                radius="xl"
                value={page}
                onChange={setPages}
                disabled={page >= 10}
                total={useGetAllPhotoList.data?.total_pages}
            />
        </div>
    )
}

export default photogalery