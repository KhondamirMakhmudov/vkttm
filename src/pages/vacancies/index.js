import React from "react";
import Wrapper from "@/layout/wrapper";
import Title from "@/components/title";
import Image from "next/image";
import VacancyCard from "@/components/cards/vacancy";

const Vacancies = () => {
  return (
    <Wrapper>
      <div
        className={
          "grid grid-cols-12 gap-x-[30px] container mx-auto py-[50px] gap-y-[30px]"
        }
      >
        <div className={"col-span-12 mb-[30px]"}>
          <Title>Vakansiyalar</Title>
        </div>

        <VacancyCard />
        <VacancyCard />
        <VacancyCard />
        <VacancyCard />
      </div>
    </Wrapper>
  );
};

export default Vacancies;
