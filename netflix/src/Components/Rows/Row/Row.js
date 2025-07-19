import React, { useEffect, useState } from "react";
import axios from "../../../utils/axios";

import MovieTrailer from "movie-trailer";
import YouTube from "react-youtube";
import "./Row.css";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movie, setMovie] = useState({});
  const [trailerUrl, setTrailerUrl] = useState("");
  const baseUrl = "https://image.tmdb.org/t/p/original";
  useEffect(() => {
    (async () => {
      try {
        console.log(fetchUrl);
        const request = await axios.get(fetchUrl);
        console.log(request);
        setMovie(request.data.results);
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, [fetchUrl]);

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      MovieTrailer(movie?.title || movie?.name || movie?.original_name)
        .then((url) => {
          console.log(url);
          const urlParams = new URLSearchParams(new URL(url).search);
          console.log(urlParams);
          console.log(urlParams.get("v"));
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => {
          console.error("Error fetching trailer URL:", error);
        });
    }
  };
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row-posters">
        {Array.isArray(movie) &&
          movie.map((movieItem, index) => (
            <img
              onClick={() => handleClick(movieItem)}
              key={index}
              src={`${baseUrl}${
                isLargeRow ? movieItem.poster_path : movieItem.backdrop_path
              }`}
              alt={movieItem.name}
              className={`row-poster ${isLargeRow ? "row-poster-large" : ""}`}
            />
          ))}
      </div>

      <div style={{ padding: "40px" }}>
        {trailerUrl && <YouTube videoId={[trailerUrl]} opt={opts} />}
      </div>
    </div>
  );
};
export default Row;
