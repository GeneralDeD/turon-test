import { GetServerSidePropsContext } from "next";
import Image from "next/image";

import { Banner, Container, MovieDetails } from "@/components";

import { LINKS } from "@/consts";
import { getOneMovServ } from "@/services";
import { IData } from "@/types/IMovie";

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const { id } = ctx.query;

  if (!id || !isFinite(+id))
    return {
      redirect: {
        destination: LINKS.HOME,
        permanent: true,
      },
    };

  const res = await getOneMovServ(+id);

  return !res?.data?.title
    ? {
        notFound: true,
      }
    : {
        props: { data: res.data },
      };
};

interface IMovieItem {
  data: IData;
}

const MovieItem = ({ data }: IMovieItem) => {
  return (
    <>
      <Banner title={data.title} subTitle={data.titleEn} breadCrumb={[{ title: data.title }]} />

      <Container className="flex flex-col gap-5 md:flex-row py-0">
        <div className="w-1/5 p-1 bg-white h-fit">
          <Image src={data.poster} width={250} height={400} alt={data.title} quality={100} className="w-full" />
        </div>
        <div className="w-2/3">
          <MovieDetails data={data} />
        </div>
      </Container>
      <Container className="py-5">
        <h2 className="text-xl font-medium mb-2">Про что фильм «{data.title}»:</h2>
        <p>{data.description}</p>
      </Container>

      <Container className="py-5">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/kUYlp1YgOhs?si=IeygmBVzKwY6qYIy"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </Container>
    </>
  );
};

export default MovieItem;
