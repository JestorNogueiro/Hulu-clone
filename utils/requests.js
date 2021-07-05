const API_KEY = process.env.API_KEY;

export default {
  fetchTrending: {
    title: "Trending",
    url: `/trending/all/day?api_key=${API_KEY}&language=en-US`,
  },
  fetchTopRated: {
    title: "Top Rated",
    url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  },
  fetchComedyMovies: {
    title: "Comedy",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  },
  fetchHorrorMovies: {
    title: "Horor",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  },
  fetchActionMovies: {
    title: "Action",
    url: `/genre/movie/list?api_key=${API_KEY}&language=en-US`,
  },
  fetchRomanceMovies: {
    title: "Romance",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  },

  fetchDocumentaryMovies: {
    title: "Documentary",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  },

  fetchMysteryMovies: {
    title: "Mystery",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
  },
  fetchLatest: {
    title: "Latest",
    url: `/movie/latest?api_key=${API_KEY}&language=en-US`,
  },
};

// const request = {
//   :
//   fetchNetflixOriginal: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
//   fetchActionMovies:

//   fetchRomanceMovies:
//   fetchHorrorMovies:
//   fetchDocumentaryMovies:
//   fetchComedyMovies:
//   fetchLatest:
// };
