import React from 'react'
import { Movie, tvShow } from '../../interfaces/interfaces'
import './listedItem.scss'
import placeholderImage from '../../assets/moviePlacholder.png';
import { type } from 'node:os';

interface ListedItemProps{
    movie:Movie | tvShow
    base_url:string | undefined
    poster_size:string | undefined
    
}

export const ListedItem = ({movie,base_url,poster_size}:ListedItemProps) =>{

    const img = poster_size ? base_url + poster_size + movie.poster_path:placeholderImage; 

    return (
        <div className="listedItem">
            {
                'title' in movie ?(
                    <div>
                        <img src={img} alt={movie.title}/>
                        <span>{movie.title}</span>
                    </div>
                ):(
                    <>
                        <img src={img} alt={movie.name}/>
                        <span>{movie.name}</span>
                    </>
                )
            }
        </div>
    )
} 