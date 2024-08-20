import React from "react";
import Wrapper from "@/layout/wrapper";
import Title from "@/components/title";
import GalleryCard from "@/components/cards/gallery";
import useGetQuery from "@/hooks/api/useGetQuery";
import { KEYS } from "@/constants/key";
import { URLS } from "@/constants/url";
import { get } from "lodash";
import VideoGallery from "@/components/cards/videogallery";

const Index = () => {
  const {
    data: videoGallery,
    isLoading,
    isFetching,
  } = useGetQuery({
    key: KEYS.video,
    url: URLS.video,
  });
  return (
    <Wrapper>
      <div
        className={
          "grid grid-cols-12 gap-x-[30px] container mx-auto my-[50px] gap-y-[30px]"
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
      </div>
    </Wrapper>
  );
};

export default Index;
