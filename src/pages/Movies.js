import { useState } from "react";

function Movies() {
  const [movies, setMovies] = useState([
    {
      poster:
        "https://m.media-amazon.com/images/I/61I62GoKY8L._AC_UF894,1000_QL80_.jpg",
      id: 1,
      title: "Aftersun",
      director: "Charlotte Wells",
    },
    {
      poster:
        "https://m.media-amazon.com/images/M/MV5BMDQ2OTcwYTQtYmViZS00MjkzLWIwNTAtODUwMmJkYjZhMDE0XkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_.jpg",
      id: 2,
      title: "So Long, My Son",
      director: "Wang Xiaoshuai",
    },
    {
      poster:
        "https://m.media-amazon.com/images/I/51u9k77JelL._AC_UF1000,1000_QL80_.jpg",
      id: 3,
      title: "All About My Mother",
      director: "Pedro Almodóvar",
    },
    {
      poster:
        "https://www.posterhub.com.sg/images/detailed/116/in_the_mood_for_love.jpeg",
      id: 4,
      title: "In The Mood For Love",
      director: "Wong Kar Wai",
    },
    {
      poster:
        "https://m.media-amazon.com/images/M/MV5BZDJjY2ZkMTctOTNkOC00MzNiLTgxNzgtMjU2YjgzZTg5ODcwXkEyXkFqcGdeQXVyNjgxODk1MTM@._V1_.jpg",
      id: 5,
      title: "Great Freedom",
      director: "Sebastian Meise",
    },
    {
      poster: "https://images.justwatch.com/poster/300987859/s332/ciro-y-yo",
      id: 6,
      title: "Ciro and Me",
      director: "Miguel Salazar",
    },
    {
      poster: "https://m.media-amazon.com/images/M/MV5BOTk2NTg3YWYtNDM2OC00MzljLThhYmQtNDVhNjU0ZjY1ODJjXkEyXkFqcGdeQXVyMTMwNjQxNDU1._V1_FMjpg_UX1000_.jpg",
      id: 7,
      title: "Wet Sand",
      director: "Elene Naveriani",
    },
    {
      poster:
        "https://upload.wikimedia.org/wikipedia/en/8/85/My_Life_as_a_Zucchini.jpg",
      id: 8,
      title: "My Life as a Zucchini",
      director: "Claude Barras",
    },
    {
      poster:
        "https://i.pinimg.com/474x/0f/51/93/0f5193aac2e0a2d338af038da70e1073.jpg",
      id: 9,
      title: "The Gleaners and I",
      director: "Agnès Varda",
    },
    {
      poster:
        "https://m.media-amazon.com/images/M/MV5BMTY4YjY3ZDgtYjVhZS00MWY4LTlkYmMtNGI4ZGY4YzhiZmIwXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
      id: 10,
      title: "Ankhon Dekhi",
      director: "Rajat Kapoor",
    },
  ]);

  return (
    <div className="movies__list">
      {movies.map((movie) => (
        <div className="movies" key={movie.id}>
          <img
            className="movie__poster"
            src={movie.poster}
            alt="movies posters"
          />
          <h2 className="movie__title">{movie.title}</h2>
          <p className="movie__director">{movie.director}</p>
        </div>
      ))}
    </div>
  );
}

export default Movies;
