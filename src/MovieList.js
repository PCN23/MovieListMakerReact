import React from 'react';
import Movie from './Movie.js';

export default function MovieList({ deleteMovie, movieList }) {
  return (
    <div className='movie-list'>
      {
        movieList.map((movie, i) => <Movie
          deleteMovie={deleteMovie}
          key={`${movie.title}-${i}`} {...movie} />)
      }
    </div>
  );
}
