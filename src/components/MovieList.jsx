import React from "react";

const MovieList = ({ children }) => {
  return (
    <>
      <div className="container mx-auto gap-5 flex flex-wrap py-10 justify-center items-center">
        {children}
      </div>
    </>
  );
};

export default MovieList;
