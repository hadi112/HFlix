import React, { useState, useEffect } from 'react';
//use "rsf"
import axios from './axios';
import './Row.css';
import Youtube from "react-youtube";
//import movieTrailer from "movie-trailer";//not working correctly
const api_key = 'c5ec2ba09981bf1023485c803e9ce3aa';

const baseurl = "https://image.tmdb.org/t/p/original/";

function Row({title, fetchUrl,isLargeRow}){
	const [movies, setMovies] = useState([]);
	const [trailerUrl,setTrailerUrl] = useState("");
	
	// Options for react-youtube
  	const opts = {
    	height: "390",
    	width: "100%",
    	playerVars: {
      	autoplay: 1,
    	},
  	};

	//A snippet of code which runs based on a specific condition/variable.
	useEffect(() => {
		//useState, UseEffect are react hooks
		//if [], run once when the row loads, and don't run again
		//if you pass second argument movies, so on its state basis row can reload
		//we are passing second argument in useEffect b/c it is an outer variable otherwise it will not work

		async function fetchdata(){
			const request = await axios.get(fetchUrl);
			//console.table(request.data.results);
			setMovies(request.data.results);
			return request;
		}
		fetchdata();

	},[fetchUrl])

	 const handleClick =async (movie) => {
		 if(trailerUrl){
			 setTrailerUrl("");
		 }
		 else{ 	
			let trailerurl = await axios.get(`/movie/${movie.id}/videos?api_key=${api_key}&language=en-US`);
		    setTrailerUrl(trailerurl.data.results[0]?.key); 
			//setTrailerUrl(`https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${api_key}&language=en-US`)
		 }
	 }


	return (
		<div className="row">
			<h2>{title}</h2> 
			<div className="row__posters">
				{/*several poster photos*/}
				{
					movies.map(movie => (
						<img
						 key={movie.id}
						 onClick={() => handleClick(movie)}
						 className={`row__poster ${isLargeRow && "row__posterLarge"}`}
						 src={`${baseurl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
						 alt={movie.name}
						 />
					))
				}
			</div>
			<div>
				{trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
			</div>
		</div>
		)
}

export default Row