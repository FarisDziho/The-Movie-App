import React from 'react'
import { Movie, tvShow } from '../../types/interfaces'
import './listedItem.scss'
import placeholderImage from '../../assets/moviePlacholder.png';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedShow } from '../../store/actions/showActions';
import { useHistory } from 'react-router';
import { AppState } from '../../store/store';

interface ListedItemProps{
    movie:Movie | tvShow
}

export const ListedItem = ({movie}:ListedItemProps) =>{

    const base_url = useSelector((state:AppState) => state.showReducer.configApi?.images.base_url)


    const img = base_url + 'w780' + movie.poster_path; 

    const dispatch = useDispatch();
    const history = useHistory();

    function onSelectedShow (){
        dispatch(setSelectedShow(movie))
        
        history.push({pathname:"/detailView",state:movie})
    }

    return (
        <div className="listedShow" onClick={onSelectedShow}>
            {
                'title' in movie ?(
                    <div className="showContainer">
                        <div className="imgContainer">
                            <img src={img} alt="" onError ={e => e.currentTarget.src = placeholderImage}/>
                        </div>
                        <div className="showName">
                            <span>{movie.title}</span>
                        </div>
                    </div>
                ):(
                    <div className="showContainer">
                        <div className="imgContainer">
                            <img src={img} alt="" onError ={e => e.currentTarget.src = placeholderImage}/>
                        </div>
                        <div className="showName">
                            <span>{movie.name}</span>
                        </div>
                    </div>
                )
            }
        </div>
    )
} 