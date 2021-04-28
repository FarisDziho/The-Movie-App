import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { getConfig, getShows, getTopShows, setAsync } from './store/actions/showActions';
import { DetailedView } from './views/detailShowView';
import { ListedShowsView } from './views/listedShowsView';
import './App.scss';
import { api } from './API';
import { debounce } from './utils/utils';
import { AppState } from './store/store';




function App () {

  const dispatch = useDispatch();

  const search =  useSelector((state:AppState) => state.showReducer.search)
  const tab = useSelector((state:AppState) => state.showReducer.tab)
  
  useEffect(() => {
    async function fetchConfigApi(){
      await fetch(`https://api.themoviedb.org/3/configuration?api_key=${api}`)
      .then(res => res.json())
      .then(data => dispatch(getConfig(data)))
    }
    fetchConfigApi();
    dispatch(getTopShows())  
  },[dispatch])

  function debounceTest(){
    return dispatch(getShows())
  }
  // eslint-disable-next-line
  const debounceSearch = useCallback(
    debounce( debounceTest ,1000),[]
  )
  
  
  useEffect(()=>{
    if(search.length > 2)
      {
        dispatch(setAsync(true));
          debounceSearch();
      }
    },[search,tab,debounceSearch,dispatch])

  
  return (
    <div className="App">
      <Router >
        <Switch>
          <Route exact path = "/" >
              <ListedShowsView/>
          </Route>
          <Route path = "/detailView">
              <DetailedView/>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}



export default App;
