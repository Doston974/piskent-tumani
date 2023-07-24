"use client";

import GoToPhoto from "@/pages/goToPhoto/GoToPhoto";
import Hokim from "@/pages/hokim/Hokim";
import RegionInfo from "@/pages/regionInfo/RegionInfo";
import UsefulResources from "@/pages/usefullResources/UsefullResources";
import NewsCarousel from "@/pages/newsCarousel/NewsCarousel"
import AllNews from "@/pages/allNews/AllNews";
import NewsHero from "@/pages/newsHero/NewsHero";
import Statistika from "@/pages/statistika/Statistika";

export default function Home() {
  return (
    <main className="max-w-[1300px] mx-auto">
      <div className="lg:flex justify-between gap-4">
        <div className="lg:w-[70%]">
          <NewsCarousel />
        </div>
        <div className=" lg:w-[30%]">
          <Hokim />
        </div>
      </div>
      <NewsHero />
      <div>
        <AllNews />
      </div>
      <div className="lg:block md:block hidden">
      <Statistika />
      <RegionInfo />
      </div>
      <GoToPhoto />
      <UsefulResources />
    </main>
  );
}
