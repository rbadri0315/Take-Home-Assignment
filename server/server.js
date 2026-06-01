const express = require("express");
const cors = require("cors");
const movies = require("./movies_metadata.json");

const app = express();

app.use(cors());

app.get("/api/movies", (req, res) => {
    const movieList = movies.map((movie) => ({
        id: movie.id,
        title: movie.title,
        tagline: movie.tagline,
        vote_average: movie.vote_average,
    }));

    res.json(movieList);
});

app.get("/api/movies/:id", (req, res) => {
    const movie = movies.find(
        (m) => String(m.id) === req.params.id
    );

    if (!movie) {
        return res.status(404).json({
            message: "Movie not found",
        });
    }

    res.json(movie);
});

app.listen(3001, () => {
    console.log("Server running on port 3001");
});