"use client"
import { useGetMarkaziyApt } from "@/hooks/index";
import MarkaziyAprtItem from "@/pages/markaziyAprtItem/MarkaziyAptItem"
import { MarkaziyAptProps } from "@/types/index"

interface markaziyAprt {
    item: MarkaziyAptProps
}


const MarkaziyAprt: React.FC<markaziyAprt> = () => {
    const useGetMarkaziyAptList = useGetMarkaziyApt();
    return (
        <div className="mb-[40px]">
            <h3 className="text-center my-[20px] text-3xl font-semibold">
                Markaziy apparat
            </h3>
            {useGetMarkaziyAptList.data?.results.map((item:any) => (
                <MarkaziyAprtItem item={item} key={item.id} />
            ))}
        </div>
    );
};
export default MarkaziyAprt;