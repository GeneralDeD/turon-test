export interface IGetMovListServ {
  status: boolean;
  code: number;
  message: string;
  data: IMovListData;
}

export interface IMovListData {
  currentPage: number;
  lastPage: number;
  perPage: number;
  total: number;
  movies: IMovie[];
}

export interface IMovie {
  id: number;
  moduleId: number;
  cardType: string;
  moduleSlug: string;
  poster: string;
  title: string;
  titleEn: string;
  year: number;
  quality: string;
  ageLimit: number;
  isSerial: boolean;
  isFree: boolean;
  isNew: boolean;
  isFavourite: boolean;
  countries: ISlugTitle[];
  genres: ISlugTitle[];
}

export interface ISlugTitle {
  id: number;
  slug: string;
  title: string;
}

export interface IGetOneMovServ {
  status: boolean;
  code: number;
  message: string;
  data: IData;
}

export interface IData extends Omit<IMovie, "moduleSlug" | "quality" | "isNew"> {
  description: string;
  movieSlug: string;
  budget: string;
  slogan: string;
  uploadTime: number;
  rating: IRating;
  people: IPeople[];
  actors: IPeopleItem[];
}

export interface IRating {
  kp: IRatingItem;
  imdb: IRatingItem;
}

export interface IRatingItem {
  rating: number;
  count: number;
}

export interface IPeople {
  post: string;
  employees: IPeopleItem[];
}

export interface IPeopleItem {
  id: number;
  fullName: string;
  fullNameEn: string;
  photo?: string;
}
