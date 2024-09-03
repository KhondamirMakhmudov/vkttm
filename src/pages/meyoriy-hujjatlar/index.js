import React from "react";
import Wrapper from "@/layout/wrapper";
import Reveal from "@/components/reveal";
import Title from "@/components/title";
import { documents } from "@/dummy-datas";
import { get } from "lodash";
import Image from "next/image";
import useGetQuery from "@/hooks/api/useGetQuery";
import { KEYS } from "@/constants/key";
import { URLS } from "@/constants/url";
import ContentLoader from "@/components/content-loader";
import Link from "next/link";

const Index = () => {
  const {
    data: normativeDocuments,
    isLoading,
    isFetching,
  } = useGetQuery({
    key: KEYS.normativeDocs,
    url: URLS.normativeDocs,
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

          {get(normativeDocuments, "data.results").map((document) => (
            <Reveal
              duration={0.3}
              key={get(document, "id")}
              classNames={
                "xl:col-span-3 md:col-span-6 col-span-12 announce-list-shadow hover:shadow-2xl transition-all duration-300"
              }
            >
              <div>
                <Reveal duration={0.5}>
                  <Image
                    src={get(document, "document_image")}
                    loader={() => get(document, "document_image")}
                    alt={`${get(document, "image")}`}
                    width={330}
                    height={210}
                    className="xl:w-[330px] xl:h-[210px] lg:w-full lg:h-[180px] object-cover object-center md:w-full md:h-[150px] w-full h-[250px] rounded-tr-[20px] rounded-bl-[20px]"
                  />
                  <Link
                    href={get(document, "document_url")}
                    className="hover:text-[#037582] transition-all duration-300"
                  >
                    <p
                      className={"font-poppins font-medium px-[10px] py-[20px]"}
                    >
                      {get(document, "document_title")}
                    </p>
                  </Link>
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
