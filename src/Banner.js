import axios from './axios';
import requests from './requests';
import React,{useEffect,useState} from 'react'
import './Banner.css'

function Banner(){

    const [movie,setMovie] = useState([]);

    useEffect(() => {
        async function getData(){
            const request = await axios.get(requests.fetchNetflixOriginals)
            setMovie(request.data.results[Math.floor((Math.random() * request.data.results.length -1))])
            return request;
        }
        getData();
    },[])

    console.log(movie);

    function truncate(str,n){
        return str?.length > n ? str.substr(0,n-1) + "..." :str;
    }

    return(
        <header
            className="banner"
            style={{
                backgroundSize:"cover",
                backgroundImage:`url(
                    "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                )`,
                backgroundPosition:"center center"
            }}
        >
           <div className="banner__contents">
            <h1 className="bannerr__title">{movie?.title || movie?.name || movie?.original_name}</h1>

            <div className="banner__buttons">
                <button className="banner__button">Play</button>
                <button className="banner__button">My List</button>
                <div className="banner__desc">{truncate(movie?.overview,150)}</div>
            </div> 
           </div>
           <div className="banner__fadebottom" ></div>
        </header>
    )
}

export default Banner;