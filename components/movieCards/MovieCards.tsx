import Image from "next/image";
import Link from "next/link";

import { Container } from "..";

import { IMovie } from "@/types/IMovie";

interface MovieCard {
  movies: IMovie[];
}

const MovieCard = ({ movies }: MovieCard) => {
  return (
    <Container>
      <div className="flex flex-wrap gap-y-5 gap-x-[2%] sm:flex-row md:gap-x-[2.5%]">
        {movies.map((movie) => (
          <div key={movie.id} className="w-[49%] sm:w-[32%] md:w-[23%]">
            <div className="bg-white p-1 mb-2 w-fit">
              <Link href={`/${movie.id}`}>
                <Image
                  src={movie.poster}
                  width={100}
                  height={200}
                  alt={movie.title}
                  quality={100}
                  className="w-full max-h-[500px] object-contain sm:h-[280px]"
                />
              </Link>
            </div>
            <div className="text-sm">
              <Link href={`/${movie.id}`} className="text-blue-800 font-medium block mb-1">
                {movie.title}
              </Link>
              <div className="text-xs">
                {movie.year}, {movie.countries.map((country) => country.title).join(", ")},{" "}
                {movie.genres.map((genre) => genre.title).join(", ")}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default MovieCard;
