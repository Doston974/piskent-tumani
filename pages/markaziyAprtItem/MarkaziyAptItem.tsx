"use client"
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { FcCellPhone, FcFeedback } from "react-icons/fc";
import avatar from "@/assets/img/avatar.png";
import { Collapse } from "react-collapse";
import Image from "next/image";


const MarkaziyAprtItem = ({ item }: any) => {
    const [showInfo, setShowInfo] = useState(false);
    return (
        <>
            <div className="
            lg:flex 
            md:flex 
            lg:mx-0 
            md:mx-4 
            mx-8">
                <div className="
                lg:w-[350px] 
                lg:h-[350px] 
                md:w-[330px] 
                md:h-[330px] 
                w-[300px] 
                h-[300px] 
                mr-2">
                    <Image
                        src={item.post_img ? item.post_img : avatar}
                        alt="Markaziy apparat"
                        width={330}
                        height={330}
                        className="
                        object-cover 
                        rounded 
                        shadow-2xl
                        "
                    />
                </div>

                <div className="
                flex 
                flex-col 
                gap-3 
                ">
                    <p className="
                    lg:w-[600px] 
                    md:w-[400px] 
                    w-[300px] 
                    text-xl 
                    font-semibold 
                    lm:mt-0 
                    md:mt-0 
                    mt-4
                    ">
                        {item.job}
                    </p>
                    <p className="lg:w-[600px] text-2xl font-bold">{item.f_name}</p>
                    <p className="flex items-center gap-2">
                        <FcCellPhone fontSize={25} />
                        {item.phone}
                    </p>
                    <p className="flex items-center gap-2">
                        <FcFeedback fontSize={25} />
                        {item.email}
                    </p>
                    <div onClick={() => setShowInfo(!showInfo)}>
                        <button className="
                        flex 
                        items-center 
                        gap-2 
                        border-2 
                        px-2 
                        rounded 
                        bg-[#229ed9] 
                        border-[#229ed9] 
                        hover:border-[#00afb9]
                         hover:bg-[#00afb9]  
                         text-white  
                         lg:mt-[140px] 
                         md:mt-[100px] 
                         transition-all 
                         duration-200 
                         ">
                            Mutahassislar
                            <span>
                                {showInfo ? (
                                    <IoIosArrowDown fontSize={16} />
                                ) : (
                                    <IoIosArrowForward fontSize={16} />
                                )}
                            </span>
                        </button>
                    </div>
                    <Collapse isOpened={showInfo}>
                        {item.workers.map((worker: any, index: any) => (
                            <div key={index} className="flex mb-[25px] gap-4">
                                <div>
                                    <img
                                        src={worker.image ? worker.image : avatar}
                                        alt="mutahassislar"
                                        width="230px"
                                        height="230px"
                                        className="object-cover rounded shadow-2xl"
                                    />
                                </div>
                                <div>
                                    <p className="lg:text-xl">{worker.job}</p>
                                    <p className="text-base">{worker.f_name}</p>
                                </div>
                            </div>
                        ))}
                    </Collapse>
                </div>
            </div>
            <div className="border-b-2 border-[#0f3460] py-[20px] mb-[50px]"></div>
        </>
    );
};
export default MarkaziyAprtItem;
