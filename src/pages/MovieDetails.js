import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function MovieDetails(props){
    const id = props.match.params.id;

    const [movie, setMovie] = useState(null);

    useEffect(() => {
        fetch(`/api/movies/${id}`)
            .then((res) => res.json())
            .then((data) => setMovie(data));
    }, [id]);

    if (!movie) {
        return <h1>Loading...</h1>;
    }

    return (
        <div
            style={{
                padding: "30px",
                background: "#121212",
                minHeight: "100vh",
                color: "white",
                fontFamily: "Arial",
            }}
        >
            <h1>{movie.title}</h1>

            <div
                style={{
                    background: "#1e1e1e",
                    padding: "25px",
                    borderRadius: "16px",
                    marginTop: "20px",
                }}
            >
                {Object.entries(movie).map(([key, value]) => {
                    if (key === "release_date") {
                        value = new Date(value).toLocaleDateString();
                    }

                    if (key === "runtime") {
                        value = `${value} minutes`;
                    }

                    return (
                        <p key={key} style={{ marginBottom: "14px" }}>
                            <strong style={{ color: "#4da6ff" }}>
                                {key}:
                            </strong>{" "}
                            {JSON.stringify(value)}
                        </p>
                    );
                })}
            </div>

            <Link
                to="/"
                style={{
                    display: "inline-block",
                    marginTop: "20px",
                    color: "#4da6ff",
                    textDecoration: "none",
                    fontWeight: "bold",
                }}
            >
                ← Back to Movies
            </Link>
        </div>
    );
}

export default MovieDetails;