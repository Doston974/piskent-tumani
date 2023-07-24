"use client"
import React from "react";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import invest from "@/assets/usefullResources/invest.svg";
import uyjoy from "@/assets/usefullResources/uzuyjou.svg";
import lex from "@/assets/usefullResources/lexuz.jpg";
import gerb1 from "@/assets/usefullResources/gerb1.png";
import harakat from "@/assets/usefullResources/harakat.png";
import park from "@/assets/usefullResources/it.png";
import malumotlar from "@/assets/usefullResources/ochiq.png";
import soliq from "@/assets/usefullResources/Davlat Soliq Xizmati.png";
import mygov from "@/assets/usefullResources/mygov.png";
import kiber from "@/assets/usefullResources/kiber.png";
import oliy from "@/assets/usefullResources/oliym.png";
import sama from "@/assets/usefullResources/sama.jpg";
import savdo from "@/assets/usefullResources/savdo.png";
import ivv from "@/assets/usefullResources/iiv.png";
import prok from "@/assets/usefullResources/pr.png";
import ypx from "@/assets/usefullResources/yps.svg";
import "./style.css";
import Image from "next/image";

const data = [
    {
        id: 1,
        organization: "Prezident rasmiy veb-sayti",
        img: gerb1,
        link: "https://president.uz/uz",
    },
    {
        id: 2,
        organization: "O'zbekiston Respublikasi hukumat portali",
        img: gerb1,
        link: "https://gov.uz/uz",
    },
    {
        id: 3,
        organization: "Yagona interaktiv davlat xizmatlari portali",
        img: mygov,
        link: "https://my.gov.uz/oz",
    },
    {
        id: 4,
        organization: "Oliy Majlis qonunchilik palatasi",
        img: oliy,
        link: "https://parliament.gov.uz/uz/",
    },
    {
        id: 5,
        organization: " Davlat Soliq qo'mitasi",
        img: soliq,
        link: "https://soliq.uz/",
    },
    {
        id: 6,
        organization: "Investitsiya salohiyati portali",
        img: gerb1,
        link: "https://invest.gov.uz/",
    },
    {
        id: 7,
        organization: " Qonun hujjatlari milliy bazasi",
        img: lex,
        link: "https://lex.uz/uz/",
    },
    {
        id: 8,
        organization: "Davlat aktivlarini boshqarish agentligi",
        img: sama,
        link: "https://davaktiv.uz/",
    },
    {
        id: 9,
        organization: " Koruppsiyaga qarshi kurashish agentligi",
        img: gerb1,
        link: "https://anticorruption.uz/uz",
    },
    {
        id: 10,
        organization: "Elektron litsenziyalash portali",
        img: invest,
        link: "https://license.gov.uz/",
    },
    {
        id: 11,
        organization: "Prezident virtual qabulxonasi",
        img: gerb1,
        link: "https://pm.gov.uz/uz",
    },
    {
        id: 12,
        organization: "Kommunal xo'jalik va uy-joy fondi portali",
        img: uyjoy,
        link: "https://kommunal.uz/oz",
    },
    {
        id: 13,
        organization: "Harakatlar strategiyasi",
        img: harakat,
        link: "https://strategy.uz/",
    },
    {
        id: 14,
        organization: "Toshkent viloyati Ichki Ishlar Bosh Boshqarmasi",
        img: ivv,
        link: "https://tviibb.uz/",
    },
    {
        id: 15,
        organization: "IT-Park",
        img: park,
        link: "https://it-park.uz/",
    },
    {
        id: 16,
        organization: "Ochiq ma'lumotlar portali",
        img: malumotlar,
        link: "https://data.egov.uz/",
    },
    {
        id: 17,
        organization: "Toshkent viloyati hokimligi sayti",
        img: gerb1,
        link: "https://toshkentviloyati.uz/",
    },
    {
        id: 19,
        organization: "Kiber xavfsizlik markazi",
        img: kiber,
        link: "https://csec.uz/uz/",
    },
    {
        id: 20,
        organization: "O'zbekiston Savdo-Sanoat palatasi",
        img: savdo,
        link: "https://chamber.uz/uz/index",
    },
    {
        id: 21,
        organization: "O'zbekiston Respublikasi Ichki Ishlar Vazirligi",
        img: ivv,
        link: "https://iiv.uz/",
    },
    {
        id: 22,
        organization: "O'zbekiston Respublikasi Bosh prokuraturasi",
        img: prok,
        link: "https://www.prokuratura.uz/#/",
    },
    {
        id: 24,
        organization: "Yoʻl harakati xavfsizligi xizmati",
        img: ypx,
        link: "https://yhxx.uz/oz",
    },
];

const UsefulResources = () => {

    const settings = {
        dots: false,
        speed: 3000,
        arrows: true,
        nextArrow: <NextBtn />,
        prevArrow: <PrevBtn />,
        slidesToShow: 4,
        infinite: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "linear",
        className: "center",
        pauseOnHover: true,
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
    };

    function NextBtn(props: any) {
        const { onClick } = props;
        return (
            <button
                onClick={onClick}
                className="
                font-bold 
                absolute 
                top-[50%] 
                -right-9 
                text-gray-400  
                z-50 
                -translate-y-1/2 
                lg:block 
                md:hidden 
                hidden
                "
            >
                <IoIosArrowForward size={42} />
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
                text-gray-400 
                z-50 absolute  
                top-[50%] 
                -left-9 
                -translate-y-1/2 
                lg:block 
                md:hidden 
                hidden
                "
            >
                <IoIosArrowBack size={42} />
            </button>
        );
    }
    return (
        <div className="
        h-[350px] 
        mt-[20px]
        ">
            <h3 className="
            font-[700] 
            text-center 
            text-[30px] 
            text-#121221 
            mb-6
            ">
                Foydali manbalar
            </h3>
            <Slider {...settings}>
                {data.map((item) => (
                    <div className="
                    pt-2
                    " key={item.id}>
                        <a target="_blank" href={item.link} rel="noreferrer">
                            <div className="
                            bg-white 
                            shadow 
                            card__org 
                            ml-4 
                            p-2 
                            mr-4 
                            md:h-[200px] 
                            h-[230px] 
                            my-4 
                            ransition 
                            ease-in-out 
                            delay-150  
                            hover:-translate-y-1 
                            hover:scale-110  
                            duration-700 
                            ">
                                <div className="
                                flex 
                                justify-center 
                                pt-4
                                ">
                                    <Image
                                        src={item.img}
                                        alt="logolar"
                                        className=" 
                                        object-fill
                                         w-[80px]
                                         "
                                        width={80}
                                        height={80}
                                    />
                                </div>
                                <div className="
                                text-center
                                ">
                                    <h5 className="
                                    text-[#1b5783] 
                                    pt-4 
                                    px-2
                                    ">
                                        {item.organization}
                                    </h5>
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default UsefulResources;
