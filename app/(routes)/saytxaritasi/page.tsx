"use client"
import React from 'react'
import { useGetNavbar } from "@/hooks/index"
import { navbarProps } from "@/types/index"
import Link from 'next/link'

const page = () => {
  const useGetNavbarList = useGetNavbar()
  console.log(useGetNavbarList)
  return (
    <div className='mx-[20px] text-black my-[100px]'>
  <div className="max-w-[1300px] mx-auto">
    <h3 className="text-center font-bold text-[30px]">Sayt xaritasi</h3>
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
  </div>
  )
}

export default page