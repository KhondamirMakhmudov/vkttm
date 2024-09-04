import React from "react";
import Wrapper from "@/layout/wrapper";
import Title from "@/components/title";
import GalleryCard from "@/components/cards/gallery";
import useGetQuery from "@/hooks/api/useGetQuery";
import { KEYS } from "@/constants/key";
import { URLS } from "@/constants/url";
import { get, times } from "lodash";
import ContentLoader from "@/components/content-loader";
import Pagination from "@/components/pagination";

const Index = () => {
  const {
    data: photos,
    isLoading,
    isFetching,
  } = useGetQuery({
    key: KEYS.photo,
    url: URLS.photo,
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
          "grid grid-cols-12 gap-x-[30px] container mx-auto my-[50px] gap-y-[30px]"
        }
      >
        <div className={"col-span-12 "}>
          <Title>Galereya</Title>
        </div>

        {get(photos, "data.results", []).map((photo) => (
          <GalleryCard
            key={get(photo, "id")}
            title={get(photo, "photo_title")}
            views={get(photo, "views_count")}
            date={get(photo, "date_time")}
            time={get(photo, "date_time")}
            url={get(photo, "id")}
            image={get(photo, "images[0].image.file")}
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
