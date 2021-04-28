import { showActions, SetSelectedShow, SetShows, SetTab, SetSearch, SetTopTVShows, GetConfig, SetAsync, SetTopMovies } from "../../types/actions";
import { Config, Movie, tvShow } from "../../types/interfaces";


export interface showState{
    shows:Movie[] | tvShow[] | null;
    selectedShow:Movie | tvShow | null;
    tab:string;
    search:string;
    async:boolean;
    movie:Movie[];
    tv:tvShow[];
    configApi:Config | null;
}

const initialState:showState = {
    shows:null,
    selectedShow:null,
    tab:"movie",
    search:'',
    async:false,
    movie:[],
    tv:[],
    configApi:null
}

export const showReducer = (state = initialState, action:showActions):showState =>{
   switch(action.type)
    {
        case SetSelectedShow:{
            return{
                ...state,
                selectedShow:action.show
            }
        }
        case SetShows:{
            return{
                ...state,
                shows:action.shows
            }
        }
        case SetTopMovies:{
            return {
                ...state,
                movie:action.movies
            }
        }
        case SetTopTVShows:{
            return {
                ...state,
                tv:action.TVShows
            }
        }
        case SetTab:{
            return {
                ...state,
                tab:action.tab
            }
        }
        case SetSearch:{
            return{
                ...state,
                search:action.search
            }
        }
        case SetAsync:{
            return{
                ...state,
                async:action.async
            }
        }
        case GetConfig:{
            return {
                ...state,
                configApi:action.config
            }
        }
        default:{
        return {...state}}
    }
}
