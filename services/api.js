export const TMDB_CONFIG ={
    BASE_URL : 'https://api.themoviedb.org/3',
    API_KEY : process.env.EXPO_PUBLIC_MOVIE_KEY,
    headers :{
        accept : 'application/json',
        Authorization :`Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`
    }
}


export const fetchMovies = async ({query})=>{
    const endpoint = query 
    ? `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
    : `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;

    const response = await fetch(endpoint,{
        method:'GET',
        headers: TMDB_CONFIG.headers,
    })

    if(!response.ok) {
        throw new Error("Failed to fetch movies", response.statusText);
    }

    const data = await response.json();

    return data.results;

}

export const fetchMoviesDetails = async (moiveId)=>{
    try {
        const response = await fetch(`${TMDB_CONFIG.BASE_URL}/movie/${moiveId}?api_key=${TMDB_CONFIG.API_KEY}`,{
            method:'GET',
            headers:TMDB_CONFIG.headers,
        })
         
        if(!response.ok) throw new Error ('Failed to fetch Moviees');

        const data = await response.json();

        return data;
        
    } catch (error) {
        console.log(error);
        throw error ;
        
    }

}

export const fetchMovieVideos = async (movieId) => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}`
    );
    const data = await response.json();
    return data.results; // Returns array of video objects
  } catch (error) {
    console.error('Error fetching movie videos:', error);
    return [];
  }
};

// const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4N2NmZWUyMTc5OTA5ZDRlZjc5MjNmODkxODQ4NGMxNSIsIm5iZiI6MTc1OTc4MjM4OC4zOTYsInN1YiI6IjY4ZTQyNWY0MjdkMmNhYTNiZTI1YmEzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.THP-6z-8MaecWCam-7RyPsQStKbVCSC-c3I0etnXfv4'
//   }
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error(err));