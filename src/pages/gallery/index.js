import React from "react";
import Wrapper from "@/layout/wrapper";
import Title from "@/components/title";
import GalleryCard from "@/components/cards/gallery";
import useGetQuery from "@/hooks/api/useGetQuery";
import { KEYS } from "@/constants/key";
import { URLS } from "@/constants/url";
import { get, times } from "lodash";

const Index = () => {
  const { data: photos, isLoading } = useGetQuery({
    key: KEYS.photo,
    url: URLS.photo,
  });
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
          />
        ))}
      </div>
    </Wrapper>
  );
};

export default Index;
