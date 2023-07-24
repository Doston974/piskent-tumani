"use client"
import React from 'react'
import { useGetStatistika } from '@/hooks'
import { statistikaProps } from "@/types/index"
import icon1 from "@/assets/img/icon1.svg"
import icon2 from "@/assets/img/icon2.svg"
import icon3 from "@/assets/img/icon3.svg"
import icon4 from "@/assets/img/icon4.svg"
import icon5 from "@/assets/img/icon5.svg"
import Image from 'next/image'


const Statistika = () => {
    const useGetStatistikaList = useGetStatistika()
    return (
        <div className=' 
        mt-[30px]
        '>
            <h3 className=' 
            font-[700] 
            text-center 
            text-[30px] 
            text-#121221 
            mb-6
            '>Murojaatlar statistikasi</h3>
            {useGetStatistikaList.data?.map((item: statistikaProps) => (
                <div key={item.id}>
                    <div className="
                    bg-[#eef2ff]
                    h-[250px]    
                    rounded-xl
                    flex 
                    items-center
                    justify-evenly
                    px-8
                    ">
                        <div className=' 
                        flex 
                        gap-4 
                        w-[250px]
                        '>
                            <div>
                                <p className='
                                text-[24px] 
                                font-bold
                                '>
                                    {item.appeals}
                                </p>
                                <p>Umumiy murojaatlar</p>
                            </div>
                            <Image
                                src={icon3}
                                width={80}
                                height={60}
                                alt="icons"
                                className='
                            object-contain
                            ' />
                            <span className='
                            border-r-4 
                            my-[-45px] 
                            rounded-xl 
                            ml-[20px]
                            ' />
                        </div>
                        <div className=' 
                        flex 
                        gap-4 
                        ' >
                            <div>
                                <p className='
                                text-[24px] 
                                font-bold
                                '>
                                    {item.looking_appeals}
                                </p>
                                <p >Jarayonda</p>
                            </div>
                            <Image
                                src={icon4}
                                width={80}
                                height={60}
                                alt="icons" />
                            <span className='
                            border-r-4 
                            my-[-50px] 
                            rounded-xl 
                            ml-[20px]
                            ' />
                        </div>
                        <div className=' 
                        flex
                        gap-4 
                        w-[260px]
                        '>
                            <div>
                                <p className='
                                text-[24px] 
                                font-bold
                                '>{item.expertiza}</p>
                                <p >Qanoatlantirildi</p>
                            </div>
                            <Image
                                src={icon5}
                                width={80}
                                height={60}
                                alt="icons" />
                            <span className='
                            border-r-4 
                            ml-[20px] 
                            my-[-50px] 
                            rounded-xl
                            ' />
                        </div>
                        <div className=' 
                        flex 
                        gap-4 
                        w-[260px]
                        '>
                            <div>
                                <p className='
                                text-[24px] 
                                font-bold
                                '>{item.understand}</p>
                                <p >Tushuntirildi</p>
                            </div>
                            <Image
                                src={icon1}
                                width={70}
                                height={60}
                                alt="icons" />
                            <span className='
                            border-r-4 
                            my-[-50px] 
                            rounded-xl 
                            ml-[20px]
                            ' />
                        </div>
                        <div className='
                        flex 
                        gap-4 
                        '>
                            <div>
                                <p className='
                                text-[24px] 
                                font-bold
                                '>{item.canceled}</p>
                                <p >Rad etildi</p>
                            </div>
                            <Image
                                src={icon2}
                                width={80}
                                height={60}
                                alt="icons" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Statistika