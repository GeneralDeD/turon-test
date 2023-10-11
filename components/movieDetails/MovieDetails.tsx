import { IData } from "@/types/IMovie";
import { formatDate } from "@/utils";

import styles from "./movieDetails.module.css";

interface IMovieDetails {
  data: IData;
}

const MovieDetails = ({ data }: IMovieDetails) => {
  return (
    <table className={styles.movieDetails}>
      <tbody>
        <tr>
          <th>Рейтинги:</th>
          <td>
            <div className="flex gap-3">
              <span>
                IMDb: <strong>{data.rating.imdb.rating}</strong> ({data.rating.imdb.count})
              </span>
              <span>
                Кинопоиск: <strong>{data.rating.kp.rating}</strong> ({data.rating.kp.count})
              </span>
            </div>
          </td>
        </tr>
        <tr>
          <th>Слоган:</th>
          <td>{data.slogan}</td>
        </tr>
        <tr>
          <th>Бюджет:</th>
          <td>{data.budget}</td>
        </tr>
        <tr>
          <th>Дата выхода:</th>
          <td>{formatDate(data.uploadTime)}</td>
        </tr>
        <tr>
          <th>Страна:</th>
          <td>{data.countries.map((country) => country.title).join(", ")}</td>
        </tr>
        <tr>
          <th>Режиссер:</th>
          <td>
            {data.people
              .find((item) => item.post === "Режиссеры")
              ?.employees?.map((item) => item.fullName)
              .join(", ")}
          </td>
        </tr>
        <tr>
          <th>Жанр:</th>
          <td>{data.genres.map((genre) => genre.title).join(", ")}</td>
        </tr>
        <tr>
          <th>В ролях актеры:</th>
          <td>{data.actors.map((actor) => actor.fullName).join(", ")}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default MovieDetails;
