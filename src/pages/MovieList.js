import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./MovieList.css";

function MovieList() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch("/api/movies")
            .then((res) => res.json())
            .then((data) => setMovies(data));
    }, []);

    return (
        <div className="container">
            <h1>Movies</h1>

            <div className="grid">
                {movies.map((movie) => (
                    <Link
                        key={movie.id}
                        to={`/movie/${movie.id}`}
                        className="card"
                    >
                        <h2>{movie.title}</h2>

                        <p>{movie.tagline}</p>

                        <strong>
                            Rating: {movie.vote_average}/10
                        </strong>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default MovieList;