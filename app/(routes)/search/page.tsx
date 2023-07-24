"use client"
import React from "react";
import { useQuery } from "react-query";
import { request } from "@/services/service-api";
import Link from "next/link";
import { searchProps } from "@/types/index"
import { usePathname } from "next/navigation";

interface searchPostProps {
    item: searchProps
}

const SearchPost: React.FC<searchPostProps> = () => {
    const { search }: any = usePathname();

    const { data } = useQuery({
        queryKey: ["gigs", search],
        queryFn: () =>
            request.get(`/main/post/search/${search}`).then((res) => {
                return res.data;
            }),
    });

    console.log(data)
    return (
        <div>
            {data?.map((item: searchProps) => (
                <div key={item.id}>
                    <Link href={`/detail/nav/${item.slug}`}>{item.title}</Link>
                </div>
            ))}
            {data?.length === 0 && <p>Ma'lomot mavjud emas !</p>}
        </div>
    );
};

export default SearchPost;
