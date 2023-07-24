"use client"
import { useGetAllNews } from "@/hooks/index";
import { GoCalendar } from "react-icons/go";
import { useState } from "react";
import { Pagination } from "@mantine/core";
import Link from "next/link";
import { allNewsListProps } from "@/types/index"
import Image from "next/image";

const AllNewsList = () => {
    const [page, setPages] = useState(1);
    const useGetAllNewsList = useGetAllNews({
        page: page,
    });


    return (
        <div className="
        max-w-[1300px] 
        mx-auto
        ">
            <h3 className="
            text-center 
            my-[30px] 
            text-2xl 
            font-semibold
            ">
                Barcha yangiliklar
            </h3>
            <div>
                {useGetAllNewsList.data?.results.map((item: allNewsListProps) => {
                    let date = new Date(item.add_time);
                    let dateMDY = `${date.getDate()}-${date.getMonth() + 1
                        }-${date.getFullYear()}`;
                    return (
                        <div key={item.id}>
                            <div className="
                            lg:flex 
                            gap-4 
                            mb-[20px] 
                            lg:w-[900px]
                            ">
                                  <Image
                                    className=" 
                                    w-[440px] 
                                    h-[300px] 
                                    object-cover
                                    "
                                        src={item.post_img}
                                        alt="post image"
                                        width={0}
                                        height={0}
                                        sizes="100vw"
                                    />
                               
                                <div>
                                    <Link href={`/posts/${item.slug}`}>
                                        <h4 className="
                                        font-semibold 
                                        text-xl 
                                        lg:w-full 
                                        w-[360px]
                                        ">
                                            {item.title}
                                        </h4>
                                        <p
                                            className="
                                        lg:w-full 
                                        w-[360px]
                                        "
                                        >{item.subtitle}
                                        </p>
                                    </Link>
                                    <span className="
                                    flex 
                                    items-center 
                                    gap-1 
                                    text-[16px] 
                                    mt-[35px] 
                                    justify-end 
                                    lg:w-full 
                                    w-[350px]
                                    ">
                                        <GoCalendar />
                                        {dateMDY}
                                    </span>
                                </div>
                            </div>
                            <div className="
                            border-b-2 
                            border-[#0f3460] 
                            pt-[10px] 
                            mb-[34px] 
                            lg:w-full 
                            w-[360px]
                            "></div>
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
                total={useGetAllNewsList.data?.total_pages}
            />
        </div>
    );
};

export default AllNewsList;
