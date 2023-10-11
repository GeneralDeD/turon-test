import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { Banner, Loading, MovieCards, Pagination } from "@/components";

import { getMovListServ } from "@/services";

const Home = () => {
  const [filter, setFilter] = useState({
    page: 1,
    limit: 10,
  });

  const { data, isLoading } = useQuery({
    queryFn: () => getMovListServ({ page: filter.page, items: filter.limit }),
    queryKey: ["getMovListServ", filter],
  });

  return (
    <main>
      <Banner title="Главная" />

      {isLoading ? (
        <Loading />
      ) : (
        data?.data.movies.length && (
          <>
            <MovieCards movies={data?.data.movies} />
            <Pagination lastPage={data.data.lastPage} filter={filter} setFilter={setFilter} />
          </>
        )
      )}
    </main>
  );
};

export default Home;
