import React from 'react';

export default function Movie({ color, title, director, year, deleteMovie }) {
  return (
    <div onClick={() => deleteMovie ? deleteMovie(title) : null}
      className='movie-item' style={{ background: color }}>
      <h3>{title}</h3>
      <h3>{year}</h3>
      <h3>by {director}</h3>      
    </div>
  );
}
