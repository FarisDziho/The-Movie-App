import { Config, Movie, tvShow } from "./interfaces";

export const SetSelectedShow = "SET_SELECTED_SHOW";
export const SetShows = "SET_SHOWS";
export const SetTab = "SET_TABS";
export const SetSearch = "SET_SEARCH";
export const SetAsync = "SET_ASYNC";
export const SetTopMovies ="SET_TOP_MOVIES";
export const SetTopTVShows ="SET_TOP_TV_SHOWS";
export const GetConfig = "GET_CONFIG";

export interface SetSelectedShowAction{
    type: typeof SetSelectedShow;
    show: Movie | tvShow;
}

export interface SetShowsAction{
    type:typeof SetShows;
    shows:Movie[] | tvShow[];
}

export interface SetTopMoviesAction{
    type:typeof SetTopMovies;
    movies:Movie[]
}

export interface SetTopTvShowsAction{
    type: typeof SetTopTVShows,
    TVShows:tvShow[]
}

export interface SetTabAction{
    type: typeof SetTab;
    tab:string;
}

export interface SetSearchAction{
    type:typeof SetSearch;
    search:string;
}
export interface SetAsyncAction{
    type:typeof SetAsync,
    async:boolean,
}

export interface getConfigAction{
    type:typeof GetConfig;
    config:Config;
}


export type showActions = 
SetSelectedShowAction | 
SetShowsAction | 
SetTabAction | 
SetSearchAction | 
SetAsyncAction |
SetTopMoviesAction |
SetTopTvShowsAction |
getConfigAction
;