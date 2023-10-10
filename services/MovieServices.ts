import { objToQuery } from "@/utils";
import { headerInterceptor } from "./base";
import { IGetMovListServ } from "@/types/MovieTypes";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

type GetMovListServProps = {
  page: number;
  items: number;
};

export const getMovListServ = async (query: GetMovListServProps) => {
  try {
    const response = await fetch(BASE_URL + `/movie-list${objToQuery(query)}`, {
      method: "GET",
      headers: headerInterceptor,
    });
    const result = response.json() as Promise<IGetMovListServ>;
    return result;
  } catch (err) {
    throw err;
  }
};

export const getOneMovServ = async (id: number) => {
  try {
    const response = await fetch(BASE_URL + `/movie-detail?id=${id}`, {
      method: "GET",
      headers: headerInterceptor,
    });
    return response.json();
  } catch (err) {
    throw err;
  }
};
