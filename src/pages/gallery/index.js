import React from "react";
import Wrapper from "@/layout/wrapper";
import Title from "@/components/title";
import GalleryCard from "@/components/cards/gallery";

const Index = () => {
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

        <GalleryCard />

        <GalleryCard />

        <GalleryCard />

        <GalleryCard />
      </div>
    </Wrapper>
  );
};

export default Index;
