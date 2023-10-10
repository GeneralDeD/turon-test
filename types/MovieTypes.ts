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
  moduleSlug: string;
  cardType: string;
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
  countries: ICountry[];
  genres: IGenre[];
}

export interface ICountry {
  id: number;
  slug: string;
  title: string;
}

export interface IGenre {
  id: number;
  slug: string;
  title: string;
}
