import React from 'react';
import Movie from './Movie.js';

export default function MovieList() {
  return (
    <div className='movie-list'>
      {
        MovieList.map((movie, i) => <Movie
        deleteMovie={deleteMovie}
        key={} />
        )

      }
      
      </div>
  );
}
