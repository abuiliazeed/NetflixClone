import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./Movie";

function Row({ title, fetchURL }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);
  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center">
        <div id={"slider"}>
          {movies.map((item, id) => (
              <Movie item={item} key = {id} />

          ))}
        </div>
      </div>
    </>
  );
}

export default Row;
