"use client"
import React from 'react'
import { useGetNavDetail } from "@/hooks/index"
import { useParams } from "next/navigation"
import NavbarDetailItem from '@/components/navbar/navbarDetailItem/NavbarDetailItem'
import {navDetailListProps} from "@/types/index"

const page = () => {

  const { navid }: any = useParams()
  const useGetNavDetailList = useGetNavDetail({
    id: navid
  })
  // console.log(useGetNavDetailList)



  return (
    <div className="
    max-w-[1300px]
    mx-auto
    ">

      {useGetNavDetailList.data?.results.map((item:navDetailListProps) => {
        return <NavbarDetailItem item={item} key={item.id} />;
      })}
      {useGetNavDetailList.data?.results == 0 && (
        <p className="
        text-center 
        text-red-500 
        my-[200px] 
        font-semibold 
        text-2xl">
          Ma'lumot mavjud emas
        </p>
      )}
    </div>
  )
}

export default page