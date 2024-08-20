import React from "react";
import Wrapper from "@/layout/wrapper";
import Reveal from "@/components/reveal";
import Title from "@/components/title";
import { documents } from "@/dummy-datas";
import { get } from "lodash";
import Image from "next/image";

const Index = () => {
  return (
    <Wrapper>
      <section className={"my-[50px]"}>
        <div
          className={
            "grid grid-cols-12 gap-x-[30px] gap-y-[30px] container mx-auto"
          }
        >
          <div className={"col-span-12"}>
            <Reveal duration={0.2}>
              <Title>Me’yoriy hujjatlar</Title>
            </Reveal>
          </div>

          {documents.map((document) => (
            <Reveal
              duration={0.3}
              key={get(document, "id")}
              classNames={"col-span-3 announce-list-shadow"}
            >
              <div>
                <Reveal duration={0.5}>
                  <Image
                    src={`/images/${get(document, "image")}`}
                    alt={`${get(document, "image")}`}
                    width={330}
                    height={210}
                  />
                  <p className={"font-poppins font-medium px-[10px] py-[20px]"}>
                    Lorem ipsum dolor sit amet consectetur. Vehicula neque sed
                    egestas tellus ut egestas in velit gravida. Sem pretium
                    adipiscing mauris pharetra quisque pulvinar nunc amet.
                  </p>
                </Reveal>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </Wrapper>
  );
};

export default Index;
