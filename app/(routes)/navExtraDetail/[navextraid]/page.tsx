"use client"
import { useParams } from "next/navigation"
import { useGetNavExtraDetail } from "@/hooks/index";
import { BiCalendar } from "react-icons/bi";

const page = () => {

  const { navextraid }: any = useParams();
  const useGetPostDetailList = useGetNavExtraDetail({
    id: navextraid,
  });

  let date = new Date(useGetPostDetailList.data?.add_time);
  let dateMDY = `${date.getDate()}-${date.getMonth() + 1
    }-${date.getFullYear()} / ${date.getHours()} : ${date.getMinutes()}`;

  return (
    <div className="mb-[40px] lg:mx-0 md:mx-4">
      <div className="max-w-[1300px] mx-auto w-full">  
      <h3 className="text-center my-[30px] lg:text-xl font-semibold">
        {useGetPostDetailList.data?.title}
      </h3>
        <div className="mb-[40px]">
          {useGetPostDetailList.data?.video_file ? (
            <video
              src={useGetPostDetailList.data?.video_file}
              width={1280}
              height={700}
              loop
              controls
            ></video>
          ) : (
            ""
          )}
        </div>

        <p
          dangerouslySetInnerHTML={{
            __html: useGetPostDetailList.data?.html_content,
          }}
          className="mb-[40px]"
        ></p>
        <div className="flex justify-end">
          <div>
            <p className="font-semibold">
              {useGetPostDetailList.data?.author_news}
            </p>
            <p className="flex items-center justify-center gap-2 mt-2 bg-gray-200 w-[200px] rounded">
              <BiCalendar size={18} />
              {dateMDY}
            </p>
          </div>
        </div>
        </div>
    </div>
  );
};
export default page;
