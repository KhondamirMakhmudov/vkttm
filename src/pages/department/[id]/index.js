import React, {  useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Wrapper from "@/layout/wrapper";
import useGetQuery from "@/hooks/api/useGetQuery";
import { KEYS } from "@/constants/key";
import { URLS } from "@/constants/url";
import {get} from "lodash";
import Link from "next/link";

const Index = () => {
    const router = useRouter();
    const { id } = router.query;

    const { data: departments } = useGetQuery({
        key: KEYS.departments,
        url: URLS.departments,
    });
    const { data: department } = useGetQuery({
        key: [KEYS.departments,id],
        url: `${URLS.departments}${id}`,
        enabled:!!(id)
    });


    return (
        <Wrapper>
            <section className={"bg-white py-[50px]"}>
                <div className={"grid grid-cols-12 gap-x-[30px] container mx-auto"}>
                    <motion.div
                        initial={{ opacity: 0, translateX: "-100px" }}
                        animate={{ opacity: 100, translateX: "0px" }}
                        transition={{ duration: 0.5 }}
                        className={
                            "col-span-3 bg-[#EFF8F9] font-poppins font-medium max-h-[432px]"
                        }
                    >
                        <ul
                            className={"flex flex-col gap-y-[20px] p-[50px] text-[#494949]"}
                        >{get(departments,'data.results',[]).map(item=>   <li
                            key={get(item,'id')}
                            className={`cursor-pointer ${
                                id == get(item,'id')
                                    ? "text-[#00AFC0]"
                                    : "text-[#2C3E50]"
                            }`}
                        >
                            <Link href={`/department/${get(item,'id')}`}>
                                {get(item,'department_title')}
                            </Link>
                        </li>)}


                        </ul>
                    </motion.div>
    <p>{get(department,'data.department_desc','ddd')}</p>


                </div>
            </section>
        </Wrapper>
    );
};

export default Index;
