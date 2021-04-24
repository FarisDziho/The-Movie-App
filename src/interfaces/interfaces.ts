export interface Movie{
    type:"movie"
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean
    vote_average: number;
    vote_count: number;
  }

  export interface tvShow{
    type:"show"
    poster_path: string
      popularity: number
      id: number
      backdrop_path: string
      vote_average: number
      overview: string
      first_air_date: string
      origin_country: string[]
      genre_ids: number[]
      original_language: string
      vote_count: number
      name: string
      original_name:string
  }

  export interface Config{
    change_keys: string[]
    images:{
      backdrop_sizes: string[]
      base_url: string 
      logo_sizes: string[]
      poster_sizes: string[]
      profile_sizes: string[]
      secure_base_url: string
      still_sizes:string[]
    }
  }