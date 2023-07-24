"use client"
import { useEffect } from "react"
import { useParams } from 'next/navigation'
import { useGetPostDetail } from "@/hooks/index"
import { GrView } from 'react-icons/gr'
import { BiCalendar } from "react-icons/bi"
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { useViewsPatchMutation } from "@/hooks/index"


const page = () => {


  const { postid }: any = useParams()
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  const useGetPostDetailList = useGetPostDetail({
    id: postid,
  });

  const onPostViewMutation = useViewsPatchMutation({
    id: postid,
  });




  const UpdateUser = () => {
    if (useGetPostDetailList.data?.slug === postid) {
      const PutchView = onPostViewMutation.mutateAsync({
        post_view: useGetPostDetailList?.data?.post_view + 1,
      });
      PutchView.then((res) => {
        useGetPostDetailList.refetch();
      }).catch((err) => {
        console.log(err, "err");
      });
    }
  };
  useEffect(() => {
    UpdateUser();
    window.scrollTo(0, 0);
  }, [useGetPostDetailList.data?.slug == postid, postid]);

  let date = new Date(useGetPostDetailList.data?.add_time);
  let dateMDY = `${date.getDate()}-${date.getMonth() + 1
    }-${date.getFullYear()} / ${date.getHours()} : ${date.getMinutes()}`;

  return (
    <div className="lg:mx-0 md:mx-4 mx-6">
      <div className="max-w-[1300px] mx-auto w-full">

        <h3 className="text-center mb-[40px] lg:text-2xl md:text-xl font-semibold">
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
            />
          ) : (
            ""
          )}

          {useGetPostDetailList.data?.post_file ? (
            <div className="h-[100vh]">
              <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                <Viewer
                  fileUrl={useGetPostDetailList.data?.post_file}
                  plugins={[defaultLayoutPluginInstance]}
                />
              </Worker>
            </div>
          ) : (
            ""
          )}
         

        </div>
        <p
          className="mb-[40px]"
          dangerouslySetInnerHTML={{ __html: useGetPostDetailList.data?.html }}
        ></p>


        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            {useGetPostDetailList?.data?.post_view}
            <GrView />
          </div>
          <div>
            <div className="font-bold lg:mt-[10px] md:mt-0 mt-[-50px] lg:block md:block hidden">
              {useGetPostDetailList?.data?.author_news}
            </div>
            <div className="flex items-center gap-1 py-[20px] text-gray-700 lg:ml-0 md:ml-0 ml-[130px]">
              <BiCalendar />
              {dateMDY}
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default page