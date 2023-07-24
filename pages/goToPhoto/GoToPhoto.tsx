"use client"

import Slider from "react-slick";
import { useGetPhotoCarusel } from "@/hooks/index";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import { getPhotoCaruselProps } from "@/types/index"
import Image from "next/image";

const GoToPhoto = () => {
    const settings = {
        dots: false,
        speed: 500,
        slidesToScroll: 1,
        arrows: true,
        className: "center",
        slidesToShow: 4,
        infinite: true,
        autoplay: false,
        cssEase: "linear",
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
        nextArrow: <NextBtn />,
        prevArrow: <PrevBtn />,
    };

    const useGetPhotoCarouselList = useGetPhotoCarusel();
    // console.log(useGetPhotoCarouselList)

    function NextBtn(props: any) {
        const { onClick } = props;
        return (
            <button
                className="
                font-bold
                absolute
                top-[44%] 
                -right-9 
                text-gray-400
                z-50 
                -translate-y-1/2 
                lg:block 
                md:hidden 
                hidden"
                onClick={onClick}
            >
                <IoIosArrowForward size={40} />
            </button>
        );
    }

    function PrevBtn(props: any) {
        const { onClick } = props;
        return (
            <button
                className="
                font-bold 
                text-gray-400 
                z-50 
                absolute  
                top-[44%] 
                -left-9 
                -translate-y-1/2 
                lg:block 
                md:hidden 
                hidden
                "
                onClick={onClick}
            >
                <IoIosArrowBack size={40} />
            </button>
        );
    }

    return (
        <div className="
        h-[350px] 
        mt-[100px]
        ">
            <h3 className="
            font-[700] 
            text-center 
            text-[30px] 
            text-#121221 
            mb-8
            ">
                Tuman hayotidan fotolavhalar
            </h3>
            <Slider {...settings}>
                {useGetPhotoCarouselList.data?.map((item: getPhotoCaruselProps) => {
                    return (
                        <Link key={item.id} href="/photogalery">
                            <div>
                                <div className="
                                overflow-hidden 
                                bg-no-repeat 
                                bg-cover
                                ">
                                    <Image
                                        className="
                                        hover:scale-125
                                        object-cover
                                        transition
                                        duration-700
                                        ease-in-out
                                        h-[210px]
                                        w-full
                                        "
                                        src={item.post_img}
                                        alt="rasimlar"
                                        width={0}
                                        height={0}
                                        sizes="100vw"
                                    />
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </Slider>
        </div>
    );
};

export default GoToPhoto;
