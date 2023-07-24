"use client";
import React from "react";
import gerb from "@/assets/img/gerb.png";
import karta from "@/assets/img/kart.png";
import ScrollToTop from "@/components/footer/scrollToTop/ScrollToTOp";
import { FiInstagram, FiYoutube } from "react-icons/fi";
import { FaTelegramPlane } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="
    lg:h-[400px] 
    md:h-[400px] 
    bg-[#012A4A] 
    text-white
    ">
      <div className="
      max-w-[1300px] 
      mx-auto 
      lg:flex 
      md:flex 
      justify-between 
      pt-4 
      lg:px-0 
      md:px-3 
      px-4
      ">
        <div className="
        lg:w-[650px] 
        md:w-[600px] 
        flex 
        flex-col 
        gap-4 
        lg:text-[17px] 
        md:text-[16px]
        ">
          <div className="
          flex 
          gap-2 
          items-center
          pt-[6px]">
            <Image src={gerb} alt="gerb" width={50} height={50} />
            <h2 className="
            text-xl 
            font-semibold 
            text-white
            ">
              Piskent tumani hokimligi
            </h2>
          </div>
          <p className="lg:w-[620px]">
            Sayt Toshkent viloyati hokimligi huzuridagi, Axborot kommunikatsiya
            texnologiyalarini rivojlantirish markazi mutaxassislari tomonidan
            yaratilgan © 2023
          </p>
          <p className="lg:w-[620px]">
            Ushbu sayt materiallaridan foydalanganda www.piskent.uz saytiga
            havola qilish majburiydir
          </p>
          <a className="
          hover:text-gray-400 
          duration-300" 
          href="/saytxaritasi">
            Sayt xaritasi
          </a>
          <div className="flex gap-6 mt-8">
            <a
              className="
              hover:text-[#c43a85]
              duration-300
              "
              href="https://www.instagram.com/piskent_pressa/?igshid=MzNlNGNkZWQ4Mg%3D%3D"
              target="_blank"
            >
              <FiInstagram size={26} />
            </a>
            <a
              className="
              hover:text-[#ff0000]
              duration-300
              "
              href="https://www.youtube.com/watch?v=svhKsqJaUrY"
              target="_blank"
            >
              <FiYoutube size={29} />
            </a>
            <a
              href="https://t.me/PiskentHokimligi"
              target="_blank"
              className="
              hover:text-[#0088cc]
              duration-300
              "
            >
              <FaTelegramPlane size={28} />
            </a>
            <a
              className="
              hover:text-[#4064ac]
              duration-300
              "
              href="https://www.facebook.com/Piskentpressa?mibextid=ZbWKwL"
              target="_blank"
            >
              <BsFacebook size={26} />
            </a>
          </div>
        </div>
        <div className="
        flex 
        flex-col 
        gap-2 
        mt-[10px]
        ">
          <p>Bizning manzil:</p>
          <p>Piskent shaharchasi, Navoiy ko'chasi, 1-uy</p>
          <a
            href="https://www.google.com/maps/place/%D2%9A%D0%B8%D0%B1%D1%80%D0%B0%D0%B9+%D1%82%D1%83%D0%BC%D0%B0%D0%BD%D0%B8+%D2%B3%D0%BE%D0%BA%D0%B8%D0%BC%D0%B8%D1%8F%D1%82%D0%B8/@41.3861762,69.4599097,20z/data=!4m12!1m5!3m4!2zNDHCsDIzJzEwLjEiTiA2OcKwMjcnMzQuMiJF!8m2!3d41.386139!4d69.459494!3m5!1s0x38aef10070d2dfb9:0x54aca3a92b334a4f!8m2!3d41.3861685!4d69.4597848!16s%2Fg%2F11q8_8mhl7?entry=ttu"
            target="_blank"
            className="
            overflow-hidden 
            bg-no-repeat 
            bg-cover
            "
          >
            <Image
              src={karta}
              alt="harita"
              width={400}
              height={400}
              className="
              hover:scale-125 
              object-cover 
              transition 
              duration-700 
              ease-in-out
              "
            />
          </a>
          <p>
            Tel: +998 70 202 20 12 <br />
          </p>
          <p>Murojaat qilish vaqti: 9:00 / 18:00</p>
        </div>
      </div>

      <div className="
      lg:block 
      md:block 
      hidden">
        <ScrollToTop />
      </div>
    </div>
  );
};
export default Footer;
