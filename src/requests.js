const API_KEY = 'c5ec2ba09981bf1023485c803e9ce3aa';

const requests = {
	fetchTrending:`trending/all/week?api_key=${API_KEY}&language=en-US`,
	fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
	fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
	fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
	fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
	fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
	fetchDocumentries:`/discover/tv?api_key=${API_KEY}&with_genres=99`,
	fetchTopRated:`movie/top_rated?api_key=${API_KEY}&language=en-US`
}

export default requests;

//whatever you wanna call it b/c of default keyword when you import 
//to another file you can name it anything. In this way you can have multiple names.
// you can export particular objects like "exports const requests= {...}"
//you can use default keyword only once in each module 