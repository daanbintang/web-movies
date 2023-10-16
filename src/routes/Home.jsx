import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Card, CardBody, CardImg } from "../components/Card";
import MovieList from "../components/MovieList";
import { Link } from "react-router-dom";
import { style } from "../utils/style";
import Navbar from "../components/Navbar";

const App = () => {
  const [movies, setMovies] = useState([]);

  async function getData() {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BASEURL}/discover/movie`,
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

  async function handleSearch(q) {
    try {
      if (q.length > 2) {
        const { data } = await axios.get(
          `${import.meta.env.VITE_BASEURL}/search/movie?query=${q}`,
          {
            params: {
              api_key: import.meta.env.VITE_APIKEY,
            },
          },
        );
        setMovies(data.results);
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <Navbar />
      <div className={`${style.bgGradient}`}>
        <div className="flex items-center justify-center pt-20">
          <input
            autoComplete="off"
            type="text"
            name="search"
            onChange={({ target }) => handleSearch(target.value)}
            placeholder="Search Movie"
            className="bg-white text-center"
          />
        </div>

        {movies.length > 0
          ? (
            <>
              <MovieList>
                {movies.map((m) => (
                  <Card key={m.id}>
                    <CardImg
                      src={m.poster_path}
                      alt={`Image ${m.title}`}
                    />
                    <CardBody>
                      <Link to={`movies/${m.id}`} className="text-white">
                        Movie Detail
                      </Link>
                    </CardBody>
                  </Card>
                ))}
              </MovieList>
            </>
          )
          : (
            <div className="flex items-center justify-center min-h-screen">
              <p className="font-bold text-center text-white">
                Movie Not Found
              </p>
            </div>
          )}
      </div>
    </>
  );
};

export default App;
