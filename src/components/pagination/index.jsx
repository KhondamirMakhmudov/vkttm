import React from "react";
import ReactPaginate from "react-paginate";
import Image from "next/image";

const Pagination = ({ page = 1, pageCount = 1, setPage = () => {} }) => {
  return (
    <div className={"text-lg"}>
      <ReactPaginate
        forcePage={page - 1}
        onPageChange={({ selected }) => setPage(selected + 1)}
        pageCount={pageCount}
        nextLabel={
          <button className="bg-[#00AFC0] px-[9px] py-[6px] rounded-tr-[10px] rounded-bl-[10px] hover:bg-[#00BFD0] active:bg-[#00D1E4]">
            <Image
              src={"/images/navigation.png"}
              alt="navigation"
              width={8}
              height={14}
              className="bg-[#00AFC0] rotate-180"
            />
          </button>
        }
        previousLabel={
          <button className="bg-[#00AFC0] px-[9px] py-[6px] rounded-tl-[10px] rounded-br-[10px] hover:bg-[#00BFD0] active:bg-[#00D1E4]">
            <Image
              src={"/images/navigation.png"}
              alt="navigation"
              width={8}
              height={14}
              className="bg-[#00AFC0] "
            />
          </button>
        }
        className={"flex justify-center my-2 items-center"}
        pageClassName={"ml-[20px]"}
        pageLinkClassName={
          "inline-flex min-w-[32px] h-8 rounded-[10px] justify-center items-center bg-transparent text-black text-lg p-1"
        }
        nextClassName={"ml-[20px]"}
        pageRangeDisplayed={2}
        previousClassName={"text-sm text-[#313B3D]"}
        breakLinkClassName={"ml-4 mr-1.5"}
        activeLinkClassName={"!bg-[#00AFC0] !text-white"}
      />
    </div>
  );
};

export default Pagination;
