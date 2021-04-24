import React, { useEffect, useState } from 'react';
import {api} from '../src/API'
import {Movie,Config,tvShow} from './interfaces/interfaces'
import { ListedItem } from './components/listedItem/listedItem';




function App () {

  const [type,setType] = useState<string>("movie")
  const [configApi,setConfigApi] = useState<Config | null>(null);
  const [movies,setMovies] = useState<Movie[] | tvShow[] | null>(null);
  const [async, setAsync] = useState<boolean>(false)
  const [searchQuery, setSearchQuery] = useState<string | null>('')
  
  
  useEffect(()=>{
    fetchConfigApi();
    fetchData();
  },[type,searchQuery])

  async function onSearchChange(e:string){
    if(e.length < 3 && searchQuery)
      setSearchQuery(null)
    else if(e.length < 3)
      return;
    else{
      setSearchQuery(e);
    }
  }

  async function fetchConfigApi(){
    await fetch(`https://api.themoviedb.org/3/configuration?api_key=${api}`)
    .then(res => res.json())
    .then(data => setConfigApi(data))

  }

  async function fetchData(){
    setAsync(true);
    if(searchQuery)
    {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/${type}?api_key=${api}&language=en-US&query=${searchQuery}&page=1&include_adult=false`
      )
      const json = await res.json();

      if(json.result?.title){
        const movies:Movie[] = json.results;
        setMovies(movies)
      }
      else{
        const shows:tvShow[] = json.results;
        setMovies(shows)
      }
    }
    else{
      const res = await fetch(
        `https://api.themoviedb.org/3/${type}/top_rated?api_key=${api}&language=en-US&page=1`
      )
      const json = await res.json();

      if(json.result?.title){
        const movies:Movie[] = json.results;
        setMovies(movies)
      }
      else{
        const shows:tvShow[] = json.results;
        setMovies(shows)
      }
    }
    setAsync(false);
  
  }


  // const listItems = movies?.map((movie) =>
  // <li>{movie.title}</li>)

  return (
    <div className="App">
      <button onClick={() => setType("movie")}>Movies</button>
      <button onClick={() => setType("tv")}>TV shows</button>
      <input onChange = {e => onSearchChange(e.target.value)} type="text"/>
      {
        !async ? (
          movies?.map((movie:Movie | tvShow) => {
            return <ListedItem 
                    movie={movie}   
                    base_url={configApi?.images.base_url}
                    poster_size = 'original'/>;
          })
        ) :(
          <h1>loading</h1>
        ) 
      }
        
    
    </div>
  );
}



export default App;
