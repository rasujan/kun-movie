import React from "react";

function SimpleMovieCard(props) {
  const { movie } = props;
  return (
    <>
      <div className="flex flex-col  w-36 h-auto rounded-lg p-1 bg-gray-50">
        <div id="poster ">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            className="h-52 w-36 rounded-lg"
          />
        </div>
        <div className="m-2">
          <h1 className="font-medium tracking-wide">{movie.title}</h1>
          <h1 className="font-thin text-xs">{movie.release_date} </h1>
        </div>
      </div>
    </>
  );
}

export default SimpleMovieCard;
