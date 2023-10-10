import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { getMovListServ } from "@/services";
import { Banner, Loading, MovieCards } from "@/components";
import { Pagination } from "@/components/pagination";

const Home = () => {
  const [filter, setFilter] = useState({
    page: 1,
    items: 10,
  });

  const { data, isLoading } = useQuery({
    queryFn: () => getMovListServ({ page: filter.page, items: filter.items }),
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
            <Pagination currPage={filter.page} lastPage={data.data.lastPage} setFilter={setFilter} />
          </>
        )
      )}
    </main>
  );
};

export default Home;
