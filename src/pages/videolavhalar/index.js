import React from "react";
import Wrapper from "@/layout/wrapper";
import Title from "@/components/title";
import useGetQuery from "@/hooks/api/useGetQuery";
import { KEYS } from "@/constants/key";
import { URLS } from "@/constants/url";
import { get } from "lodash";
import VideoGallery from "@/components/cards/videogallery";
import ContentLoader from "@/components/content-loader";
import Pagination from "@/components/pagination";

const Index = () => {
  const {
    data: videoGallery,
    isLoading,
    isFetching,
  } = useGetQuery({
    key: KEYS.video,
    url: URLS.video,
  });

  if (isLoading || isFetching) {
    return (
      <Wrapper>
        <ContentLoader />
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div
        className={
          "grid grid-cols-12 gap-x-[30px] container mx-auto my-[50px] gap-y-[30px] px-[20px] md:px-[15px] lg:px-[10px] xl:px-0"
        }
      >
        <div className={"col-span-12 "}>
          <Title>Videolavhalar</Title>
        </div>

        {get(videoGallery, "data.results", []).map((video) => (
          <VideoGallery
            key={get(video, "id")}
            title={get(video, "video_title")}
            time={get(video, "date_time")}
            date={get(video, "date_time")}
            views={get(video, "views_count")}
            videoUrl={get(video, "video_main_url")}
            url={get(video, "id")}
          />
        ))}
        <div className="col-span-12">
          <Pagination />
        </div>
      </div>
    </Wrapper>
  );
};

export default Index;
