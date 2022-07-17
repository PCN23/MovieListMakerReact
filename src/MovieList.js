import React from 'react';
import Movie from './Movie.js';

export default function MovieList({ deleteMovie, movies }) {
  return (
    <div className='movie-list'>
      {
        movies.map((movie, i) => <Movie
          deleteMovie={deleteMovie}
          key={`${movie.title}-${i}`} {...movie} />)
      }
    </div>
  );
}
