import { ListedItem } from "../components/listedItem/listedItem";
import { Movie, tvShow } from "../types/interfaces";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../store/store";
import { setSearch, setTab } from "../store/actions/showActions";
import './listedShowView.scss';

export const ListedShowsView = () => {


  const dispatch = useDispatch();

 const search =  useSelector((state:AppState) => state.showReducer.search)
 const tab = useSelector((state:AppState) => state.showReducer.tab)
 const shows = useSelector((state:AppState) => state.showReducer.shows)
 const movie = useSelector((state:AppState) => state.showReducer.movie)
 const tv = useSelector((state:AppState) => state.showReducer.tv)
 const async = useSelector((state:AppState) => state.showReducer.async)

 let data;

 if(search.length > 2  && !async){
  data = shows
 }
 else{
  if(tab === "movie")
    data = movie
  else
    data = tv
 }

 
 function setSearchQuery(searchParam:string){
   dispatch(setSearch(searchParam))
  }
  
    return (
    <div className="wrapper">
      <div className="tabButtonnContainer">
        <button className = {`button ${tab === "movie" ? "activeTab" :""}`} onClick={() => dispatch(setTab("movie"))}>Movies</button>
        <button className = {`button ${tab === "tv" ? "activeTab" :""}`} onClick={() => dispatch(setTab("tv"))}>TV shows</button>
      </div>
      <div className="searchInputContainer">
        <input  value = {search} placeholder="Search Movie or TV show" onChange = {e => setSearchQuery(e.target.value)} type="text"/>
      </div>
      
      {
        !async ? (

          data?.length ? (
          <div className="listedItemsContainer">
            {
              data?.map((movie:Movie | tvShow) => {
                return <ListedItem 
                        key = {movie.id}
                        movie={movie}/>;
              })
            }
          </div>
          ):(
            
               <h1>No matches for you search</h1>
          )) :(
          <div className="progressIndicatorContainer">
            <h1>loading</h1>
          </div>
        ) 
      }
      </div>
    )
}