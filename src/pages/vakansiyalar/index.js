import React from "react";
import Wrapper from "@/layout/wrapper";
import Title from "@/components/title";
import Image from "next/image";
import VacancyCard from "@/components/cards/vacancy";
import useGetQuery from "@/hooks/api/useGetQuery";
import { KEYS } from "@/constants/key";
import { URLS } from "@/constants/url";
import { get, isEmpty } from "lodash";
import ContentLoader from "@/components/content-loader";

const Vacancies = () => {
  const {
    data: vacancies,
    isLoading,
    isFetching,
  } = useGetQuery({
    key: KEYS.vacancies,
    url: URLS.vacancies,
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
          "grid grid-cols-12 gap-x-[30px] container mx-auto pt-[50px] gap-y-[30px] px-[20px] md:px-[15px] lg:px-[10px] xl:px-0"
        }
      >
        <div className={"col-span-12 mb-[30px]"}>
          <Title>Vakansiyalar</Title>
        </div>
      </div>

      <div
        className={
          "grid grid-cols-12 gap-x-[30px] container mx-auto pb-[50px]  gap-y-[30px] px-[20px] md:px-[15px] lg:px-[10px] xl:px-0"
        }
      >
        {isEmpty(get(vacancies, "data.results", [])) ? (
          <h1 className="text-[32px] col-span-12 font-mulish font-semibold px-[20px] md:px-[15px] lg:px-[10px] xl:px-0">
            Hozircha bo‘sh ish o‘rinlari mavjud emas
          </h1>
        ) : (
          get(vacancies, "data.results", []).map((item) => (
            <VacancyCard
              url={`/vakansiyalar/${get(item, "id")}`}
              key={get(item, "id")}
              jobTitle={get(item, "job_title")}
              jobDescription={get(item, "job_desc")}
              jobType={get(item, "job_type.job_type")}
              views={get(item, "views_count")}
              time={get(item, "date_time")}
              jobCount={get(item, "job_count")}
            />
          ))
        )}
      </div>
    </Wrapper>
  );
};

export default Vacancies;
