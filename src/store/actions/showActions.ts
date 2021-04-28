import { showActions, SetSelectedShow, SetShows, SetTab, SetSearch, SetTopTVShows, GetConfig, SetAsync, SetTopMovies } from "../../types/actions";
import { Config, Movie, tvShow } from "../../types/interfaces";
import { AppState } from "../store";
import {api} from '../../API'
import { ThunkAction } from "../../types/thunks";
import { fetchData } from "../../utils/utils";


export const setSelectedShow = (show:Movie | tvShow):showActions=>
(
    {
        type:SetSelectedShow,
        show:show
    }
)

export const setShows =  (shows:Movie[] | tvShow[]):showActions => (
    {
        type:SetShows,
        shows:shows
    }
)
export const setTopMovies =  (movies:Movie[]):showActions => (
    {
        type:SetTopMovies,
        movies:movies
    }
)
export const setTopTVShows =  (TVShows:tvShow[]):showActions => (
    {
        type:SetTopTVShows,
        TVShows:TVShows
    }
)

export const setTab = (tab:string):showActions => (
    {
        type:SetTab,
        tab:tab
    }
)

export const setSearch = (search:string):showActions => (
    {
       type:SetSearch,
       search:search 
    }
)

export const setAsync = (async:boolean):showActions => (
    {
        type:SetAsync,
        async:async
    }
)

export const getConfig = (config:Config):showActions => (
    {
        type:GetConfig,
        config:config
    }
)


export const getShows = ():ThunkAction => async (dispatch, getState:() => AppState) => {
    const state = getState().showReducer;
    const tab = state.tab
    const search = state.search
    if(search === '')
    {
        dispatch(setAsync(false));
        return;
    }
    const shows = await fetchData(`https://api.themoviedb.org/3/search/${tab}?api_key=${api}&language=en-US&query=${search}&page=1&include_adult=false`)
    dispatch(setShows(shows));
    dispatch(setAsync(false));
}

export const getTopShows = ():ThunkAction => async (dispatch, getState:() => AppState) => {
    dispatch(setAsync(true));
    
    const movies = await fetchData(`https://api.themoviedb.org/3/movie/top_rated?api_key=${api}&language=en-US&page=1`)
    dispatch(setTopMovies(movies));

    const TVShows = await fetchData(`https://api.themoviedb.org/3/tv/top_rated?api_key=${api}&language=en-US&page=1`)
    dispatch(setTopTVShows(TVShows));

    dispatch(setAsync(false));
    
}



