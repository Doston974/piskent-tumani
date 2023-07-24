"use client"
import Slider from "react-slick";
import HeroItems from "./NewsCarouselItem";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { useGetNewsCarousel } from "@/hooks/index";
import { getNewsCarouselProps } from "@/types/index"


const HeroNews = () => {
    const useGetNewsCarouselList = useGetNewsCarousel();


    const settings = {
        // dots: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 9000,
        arrows: true,
        nextArrow: <NextBtn />,
        prevArrow: <PrevBtn />,
        className: "center",
    };

    function NextBtn(props: any) {
        const { onClick } = props;
        return (
            <button
                className="
                font-bold 
                absolute 
                top-[40px] 
                rounded-[4px] 
                p-2 
                bg-white 
                right-4 
                text-white 
                -translate-y-1/2 
                hover:bg-[#449bda] 
                duration-500
                "
                onClick={onClick}
            >
                <GrLinkNext size={25} />
            </button>
        );
    }

    function PrevBtn(props: any) {
        const { onClick } = props;
        return (
            <button
                onClick={onClick}
                className="
                font-bold 
                text-white 
                bg-white 
                rounded-[4px] 
                p-2 
                z-[1] 
                absolute 
                top-[40px] 
                right-16 
                -translate-y-1/2 
                hover:bg-[#449bda] 
                duration-500
                "
            >
                <GrLinkPrevious size={25} />
            </button>
        );
    }

    return (
        <div className="
        object-cover 
        shadow-xl
        ">
            <Slider {...settings}>
                {useGetNewsCarouselList.data?.map((item: getNewsCarouselProps) => (
                    <HeroItems item={item} key={item.id} />
                ))}
            </Slider>
        </div>
    );
};
export default HeroNews;
