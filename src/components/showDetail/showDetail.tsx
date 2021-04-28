import {useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { api } from "../../API";
import { AppState } from "../../store/store";
import { Movie, tvShow, VideoInfo } from "../../types/interfaces";
import { getVideoURL } from "../../utils/utils";
import './showDetail.scss'

export interface MovieCardProps{
    show:Movie | tvShow
}



export const ShowDetail = ({show: movie}:MovieCardProps) => {

    const base_url = useSelector((state:AppState) => state.showReducer.configApi?.images.base_url)
    const img = base_url + 'w780' + movie?.poster_path;
    const [videoURL,setVideoURL] = useState<string | null>(null)


      useEffect(() => {
        async function fetchVideoUrl(){
            const video = `https://api.themoviedb.org/3/movie/${movie?.id}/videos?api_key=${api}&language=en-US`;
            try{
                let response = await fetch(video)
                const json = await response.json()
                const allVideos = json.results;
                allVideos.map((video:VideoInfo) => {
                    if(video.type === "Trailer"){
                        const videoURL = getVideoURL(video.site,video.key)
                        setVideoURL(videoURL);
                    }
                    return null;
                })
            }
            catch(e){

            }
        };
        fetchVideoUrl();
        }
      ,[movie?.id])
    
    
    return(
        <div className={videoURL ? "videoWrapper" : "imageWrapper"}>
            <div className="videoImageContainer">
                {
                    videoURL ? (
                        <iframe src={videoURL} title={movie.id.toString()}></iframe>
                    ):(
                        <img src={img} alt=""/>
                    )
                }
            </div>
            <div className="titleDescriptionContainer">
                <h1>{'title' in movie ? movie.title:movie.name}</h1>
                <p>{movie.overview}</p>
            </div>
        </div>
    )   

}