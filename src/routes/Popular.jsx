import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Card, CardBody, CardImg, CardTitle } from "../components/Card";
import MovieList from "../components/MovieList";
import Navbar from "../components/Navbar";
import { style } from "../utils/style";

const App = () => {
  const [movies, setMovies] = useState([]);

  async function getData() {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BASEURL}/movie/top_rated`,
        {
          params: {
            api_key: import.meta.env.VITE_APIKEY,
          },
        },
      );
      setMovies(data.results);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  async function handleImg(id) {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BASEURL}/movie/${id}`,
        {
          params: {
            api_key: import.meta.env.VITE_APIKEY,
          },
        },
      );
      setDetail(data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className={`${style.bgGradient}`}>
      <Navbar />
      <MovieList>
        {movies.map((m) => (
          <Card key={m.id}>
            <CardImg
              src={m.poster_path}
              alt={`Image ${m.title}`}
              handleImg={() => handleImg(m.id)}
            />
          </Card>
        ))}
      </MovieList>
    </div>
  );
};

export default App;
