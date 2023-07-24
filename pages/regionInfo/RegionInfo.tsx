"use client"
import bgleft from "@/assets/img/bgleft.png";
import bgright from "@/assets/img/bgright.png";
import bg from "@/assets/img/bg.png";
import bg2 from "@/assets/img/bg2.png";
import bg3 from "@/assets/img/bg3.png";
import bg4 from "@/assets/img/bg4.png";
import bg5 from "@/assets/img/bg5.png";
import Image from "next/image"

const RegionInfo = () => {
    return (
        <div className="
        relative 
        h-[400px] 
        my-[100px]
        " >
            <Image src={bgleft} alt="" className="
            absolute 
            left-0
            " />
            <Image src={bgright} alt="" className="
            absolute 
            right-0 
            bottom-0
            " />
            <Image src={bg} alt="" className="
            absolute 
            bottom-0 
            left-[200px]
            " />
            <Image src={bg2} alt="" className="
            absolute 
            bottom-0 
            right-[300px]
            " />
            <Image src={bg3} alt="" className="
            absolute 
            top-0 
            left-[300px]
            " />
            <Image src={bg4} alt="" className="
            absolute 
            top-0 
            right-[100px]
            " />
            <Image src={bg5} alt="" className="
            absolute 
            top-[150px] 
            left-[550px]
            " />
            <div className="
            mx-[100px] 
            py-[60px]
            ">
                <p className="
                text-[18px]
                ">
                    <strong className="
                    ml-10
                    ">Piskent</strong> — Toshkent viloyati Piskent
                    tumanidagi shahar (1966-yildan), Tuman markazi. 1952-yilgacha qishloq.
                    Ohangaron daryosining oʻng sohilida. Yaqin temir yoʻl stansiyasi —
                    Toʻytepa (14 km). Viloyat markazi (Toshkent shahri)dan 41 km. Aholisi
                    31,4 ming kishiga yaqin (2003). Piskent (Biskat) — Toshkent vohasining
                    engqad. shaharlaridan biri. 10-asr geograflarining maʼlumotlarida u
                    Iloq davlati tarkibiga kirgan. V.V.Bartold va M.Ye.Masson Piskentni
                    Ohangaron daryosining chap sohilidagi (hozirgi Piskent shahri
                    chekkasidagi) yodgorlik qoldiqlari bilan aynan bir, deb koʻrsatadilar.
                    Piskentdan 1-asrga mansub qabristonlar (Piskent Mingtepasi) va 5-asrga
                    oid novuslar topilgan.
                </p>
                <p className="
                text-[18px]
                ">
                    Piskentning dastlabki qismi Pushti Mahmud tepaligi boʻlib, u
                    6—7-asrlarda shahar shakliga kira boshlagan10—12-asrlarda ravnaqtopgan.
                    Shosh (Toshkent)dan Fargʻonaga oʻtgan savdo yoʻlining ustida qulay
                    joylashganligi tufayli 9—10-asrlarda buyerda qad.tarixchilar tomonidan
                    Biskat deb atalgan shaharcha paydo boʻlgan.
                    13-asr boshida moʻgʻul bosqinchilari Piskentnivayron qilganlar.13-asr
                    oʻrtalarida uning gʻarbiy chekkasi yana tiklangan
                    boʻlsada shahar kichrayib, qishloq darajasiga tushib qoldi.
                    14—16-asrlarda Piskent temuriylar va boshqa hukmdorlar mulki
                    tarkibiga kirgan 17-asr oxiri va 18-asrda shahar yana inqirozga uchraydi.
                    Aholisi gʻarb tomonga koʻchib oʻtadi. Piskentning
                    19-asrda mudofaa devorlari va 4 darvozasi boʻlgan. Oʻsha davrda Piskent
                    Qoʻqon xonligi tarkibiga kirgan.
                </p>
            </div>
        </div>
    )
}

export default RegionInfo