"use client"
import { useGetHokim } from "@/hooks/query/useGetHokim";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import Image from "next/image";
// import Link from "next/link";
import { getHokimProps } from "@/types/index";

const Hokim = () => {
  const useGetHokimInfo = useGetHokim();
  // console.log(useGetHokimInfo);

  return (
    <div className="bg-[#f6f6f6] shadow-xl h-[600px]">
      {useGetHokimInfo.data?.map((item: getHokimProps) => (
        <div key={item.id} className="text-white">
          <p className="text-center pt-[20px] font-semibold text-2xl text-black">
            Piskent tumani hokimi
          </p>
          <div className=" pt-2 pb-8 mx-2 h-[543px]">
            <div className="mx-4">
              <Image
                src={item.images}
                alt="hokim"
                height={360}
                width={330}
                className="flex justify-center mx-auto mt-2"
              />
            </div>
            <div className="flex flex-col items-center text-black">
              <h4 className="text-[22px] text-center mx-4 mt-[10px] ">
                {item.f_name}
              </h4>
            </div>
            <div className="flex items-center gap-2 justify-center mt-[10px] text-black">
              <BsFillTelephoneFill size={16} />
              <p className="text-[18px]">+998 78 150 08 44</p>
            </div>
            {/* <div className="flex justify-center bg-gray-300 hover:bg-[#eef2ff] duration-300 w-[200px] mx-auto lg:mt-[30px] md:mt-[20px] mt-[10px] py-3 rounded-lg cursor-pointer">
              <Link >
                <button className="text-black ">
                  Murojaat yuborish
                </button>r
              </Link>
            </div> */}
            <div className="mt-[20px]">
              <div className="flex justify-center bg-[#1da1f2] hover:bg-[#0088cc] duration-300 w-[200px] mx-auto mt-[10px] py-3 rounded-lg cursor-pointer">
                <a href="https://t.me/Hokimiyatga_murojaat_bot" target="_blank">
                  <button className="text-white flex justify-between items-center gap-4">
                    Murojaat bot <FaTelegramPlane size={20} />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Hokim;
