import { Dispatch, SetStateAction } from "react";

import { Container } from "..";

import { PAGINATION_LIMIT_OPTIONS } from "@/consts";
import { IFilter } from "@/types";

interface IPagination {
  lastPage: number;
  filter: IFilter;
  setFilter: Dispatch<SetStateAction<IFilter>>;
}

const Pagination = ({ lastPage, filter, setFilter }: IPagination) => {
  const currPage = filter.page;
  let check = true;

  return (
    <Container className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div
          className={`w-8 h-8 rounded-md cursor-pointer flex items-center justify-center ${
            currPage === 1 ? "bg-gray-400" : "bg-white text-black hover:bg-blue-500"
          }`}
          onClick={() => currPage !== 1 && setFilter((prev) => ({ ...prev, page: prev.page - 1 }))}
        >
          {"<"}
        </div>
        <div className="flex items-center gap-3">
          {[...Array(lastPage)].map((_, i) => {
            if (
              (i + 3 > currPage && i - 1 < currPage) ||
              (currPage < 3 ? 0 > i - 3 : 0 > i - 1) ||
              (currPage > lastPage - 3 ? lastPage < i + 4 : lastPage < i + 2)
            ) {
              check = true;
              return (
                <div
                  key={i}
                  className={`w-8 h-8 rounded-md cursor-pointer flex items-center justify-center ${
                    currPage === i + 1 ? "bg-blue-800 text-white" : " text-black bg-gray-200 hover:bg-blue-500"
                  }`}
                  onClick={() => setFilter((prev) => ({ ...prev, page: i + 1 }))}
                >
                  {i + 1}
                </div>
              );
            } else {
              if (check) {
                check = false;
                return <div className={` df_alc_jcc`}>...</div>;
              }
            }
          })}
        </div>
        <div
          className={`w-8 h-8 rounded-md cursor-pointer flex items-center justify-center ${
            currPage === lastPage ? "bg-gray-400" : "bg-white text-black hover:bg-blue-500"
          }`}
          onClick={() => currPage !== lastPage && setFilter((prev) => ({ ...prev, page: prev.page + 1 }))}
        >
          {">"}
        </div>
      </div>
      <div>
        <select
          className="p-1 px-3 cursor-pointer bg-gray-400 rounded-md"
          onChange={(e) => setFilter((prev) => ({ ...prev, limit: +e.target.value }))}
        >
          {PAGINATION_LIMIT_OPTIONS.map((option) => (
            <option key={option} selected={filter.limit === option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </Container>
  );
};

export default Pagination;
