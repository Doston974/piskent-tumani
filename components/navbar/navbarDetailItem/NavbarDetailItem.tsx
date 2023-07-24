
"use client"
import { useGetNavbar } from "@/hooks/index";
import Link from "next/link";
import { BiCalendar } from "react-icons/bi";
import Image from "next/image"

const NavbarDetailItem = ({ item }: any) => {
    const useGetNavbarLinks = useGetNavbar();
    console.log(useGetNavbarLinks);

    let date = new Date(item.add_time);
    let dateMDY = `${date.getDate()}-${date.getMonth() + 1
        }-${date.getFullYear()} / ${date.getHours()} : ${date.getMinutes()}`;
    return (
        <div className="
        lg:mx-0 
        md:mx-4
        ">
            <Link href={`/navExtraDetail/${item.slug}`}>
                <div className="
                lg:flex 
                md:flex 
                gap-6 
                mb-[40px]
                ">
                    <div>
                        <Image
                            src={item.post_img ? item.post_img : ""}
                            alt="post-img"
                            width={350}
                            height={230}
                            className="
                            rounded 
                            shadow-2xl
                            "
                        />
                    </div>
                    <div className="
                    lg:w-[600px] 
                    md:w-[400px] 
                    w-[340px]
                    ">
                        <p className="
                        text-xl 
                        lg:mt-0 
                        md:mt-0 
                        mt-4
                        ">{item.title}</p>
                        <div className="
                        flex 
                        items-center 
                        gap-2 
                        lg:mt-[150px] 
                        md:mt-[100px]
                        mt-8 
                        bg-gray-200 
                        w-[180px] 
                        justify-center 
                        rounded
                        ">
                            <BiCalendar size={18} />
                            <p className="
                            text-[14px]
                            ">{dateMDY}</p>
                        </div>
                    </div>
                </div>
            </Link>
            <div className="
            border-b-2 
            border-[#0f3460] 
            pt-[10px] 
            mb-[40px]
            "></div>
        </div>
    );
};
export default NavbarDetailItem;
