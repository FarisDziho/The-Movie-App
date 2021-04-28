import React from 'react'
import { useSelector } from 'react-redux';
import { GoBackButton } from '../components/goBackButton/goBackButton';
import { ShowDetail } from '../components/showDetail/showDetail';
import {AppState} from '../store/store'

export const DetailedView = () => {

    const data = useSelector((state:AppState) => state.showReducer.selectedShow)
   
    if(data){
        return (
            <div className="wrapper">
            <GoBackButton/>
            {'title' in data ? (
                    <ShowDetail show ={data}/>
                    
                ):
                (
                    <ShowDetail show = {data}/>
                )}
            </div>
        )
    }
    else{
        return(
            <div className="wrapper">
                <GoBackButton/>
                <h1 style={{color: "white"}}>Please Select show</h1>
            </div>
        )
    }
    
}