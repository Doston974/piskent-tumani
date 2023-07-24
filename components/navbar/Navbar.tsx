"use client";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTelegramPlane } from "react-icons/fa"
import { BsInstagram, BsFacebook, BsYoutube } from "react-icons/bs"
import { FiLink } from "react-icons/fi"
import gerb from "@/assets/img/gerb.png";
import Image from "next/image";
import Search from "@/pages/search/Search";
import { useState } from "react";
import NavbarItem from './NavbarItem';
import { IoCloseCircleOutline } from "react-icons/io5";

const socData = [
  {
    icon: <FaTelegramPlane size={30} />,
    title: "Telegram",
    color: "#229ED9",
    link: "https://t.me/PiskentHokimligi",
  },
  {
    id: 2,
    icon: <BsInstagram size={30} />,
    title: "Instagram",
    color: "#C13584",
    link: "https://www.instagram.com/piskent_pressa/?igshid=MzNlNGNkZWQ4Mg%3D%3D",
  },
  {
    id: 3,
    icon: <BsFacebook size={30} />,
    title: "Facebook",
    color: "#4267B2",
    link: "https://www.facebook.com/Piskentpressa?mibextid=ZbWKwL",
  },
  {
    id: 4,
    icon: <BsYoutube size={30} />,
    title: "Youtube",
    color: "#ff0000",
    link: "https://www.youtube.com/watch?v=svhKsqJaUrY",
  },
]

const Navbar = () => {

  const [opened, setOpened] = useState(false)
  return (
    <div className="
    h-[60px] 
    bg-[#012A4A] 
    text-white 
    mb-[40px] 
    "
    >
      <div
        className="
      max-w-[1300px] 
      mx-auto 
      h-full 
      flex 
      justify-between 
      items-center
      "
      >
        <div
          className="
        flex 
        gap-4
        "
        >
          <GiHamburgerMenu
            size={36}
            onClick={() => setOpened(!opened)}
            className="cursor-pointer "
          />
          {opened ? (
            <>
              <div className="justify-center bg-black/70 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative  my-6 mx-auto w-[90vw] h-full">
                  <div className="border-0  rounded-lg shadow-lg min-h-[280px] relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    <span
                      className="absolute right-4 z-10 top-3 cursor-pointer text-black"
                    >
                      <IoCloseCircleOutline
                        onClick={() => setOpened(false)}
                        size={30}
                        className="cursor-pointer"
                      />
                    </span>
                    <div className="relative p-6 flex-auto">
                      <NavbarItem setOpened={setOpened} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}

          <div
            className="
          flex 
          items-center 
          gap-2
          "
          >
            <Image
              src={gerb}
              width={34}
              height={34}
              alt="Gerb"
              className="object-cover"
            />
            <h1
              className="
            text-white 
            font-semibold 
            lg:text-[21px]
            md:text-[18px] 
            text-[14px] 
            hover:text-blue-400 
            duration-300
            "
            >
              <a href="/">Piskent tumani hokimligi</a>
            </h1>
          </div>
        </div>
        <div>
          <Search />
        </div>
      </div>
      <div>
        <div className="
        lg:block 
        md:block 
        hidden
        ">
          <ul className="
          z-10 
          fixed 
          mt-[160px]
          ">
            {socData.map((sitem, index) => (
              <li
                style={{ backgroundColor: `${sitem.color}` }}
                className="
                bg-[#00afb9]  
                w-[170px] 
                h-[60px] 
                flex  
                items-center 
                ml-[-120px] 
                hover:ml-[-10px] 
                duration-300 "
                key={index}
              >
                <a
                  href={sitem.link}
                  target="_blank"
                  className="
                  flex 
                  pl-9 
                  gap-4 
                  font-medium 
                  items-center 
                  w-full 
                  text-gray-50"
                >
                  <p className="w-[70px]">{sitem.title}</p>
                  {sitem.icon}
                </a>
              </li>
            ))}
            <li className="
            bg-[#00afb9]  
            w-[160px] 
            h-[60px] 
            flex  
            items-center 
            ml-[-110px] 
            hover:ml-[-10px] 
            duration-300 
            ">
              <a
                href="/saytxaritasi"
                className="
                flex 
                pl-3 
                gap-3 
                font-medium 
                items-center 
                w-full 
                text-gray-50
                "
              >
                Sayt xaritasi
                <FiLink size={30} />
              </a>
            </li>
          </ul>
        </div>
      </div>

    </div>
  );
};
export default Navbar;
