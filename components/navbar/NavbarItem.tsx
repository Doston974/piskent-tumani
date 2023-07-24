"use client"
import React from 'react'
import { useGetNavbar } from "@/hooks/index"
import { navbarProps } from "@/types/index"
import Link from 'next/link'

const NavbarItem = ({ setOpened }: any) => {

  const useGetNavbarList = useGetNavbar()
  console.log(useGetNavbarList)

  return (
    <div className='lg:grid lg:grid-cols-5 gap-4 mx-[20px] text-black'>
      {useGetNavbarList.data?.map((item: navbarProps) => (
        <div>
          <h5 className='font-bold my-[20px] text-xl'>{item.name}</h5>
          {item.children.map((subItem: any) => (
            <Link
              onClick={() => setOpened(false)}
              href={`/navDetail/${subItem.slug}`}
              className=" duration-300"
            >
              <li className="hover:bg-[#012a4a] hover:text-white duration-300 px-2">{subItem.name}</li>
            </Link>
          ))}
        </div>
      ))}
    </div>
  )
}

export default NavbarItem
