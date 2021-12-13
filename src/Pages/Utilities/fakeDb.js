const updateDb = movie => {
  const movieShows = JSON.parse(localStorage.getItem("movie_shows") || "[]");

  movieShows.push(movie)

  localStorage.setItem("movie_shows", JSON.stringify(movieShows))

}
export {
  updateDb
}