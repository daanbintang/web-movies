import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { style } from "../utils/style";
import Navbar from "../components/Navbar";

const MovieDetail = () => {
  const [movie, setMovie] = useState("");

  async function getMovie() {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BASEURL}/movie/${id}`,
        {
          params: {
            api_key: import.meta.env.VITE_APIKEY,
          },
        },
      );
      console.log(data);
      setMovie(data);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getMovie();
  }, []);

  const { id } = useParams();

  return (
    <>
      <Navbar />
      <div className={`${style.bgGradient} flex-col md:flex-row p-5 flex justify-around`}>
        <div>
          <img
            src={`${import.meta.env.VITE_IMGURL}${movie.poster_path}`}
            alt={`Image ${movie.title}`}
            width={"400px"}
            className="rounded-xl"
          />
        </div>
        <div className="text-white w-[50%]">
          <h1 className="font-bold text-xl">{movie.title}</h1>
          <p className="py-4 text-sm text-gray-300">{movie.overview}</p>
          <span>Popularity {movie.popularity}</span>
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
