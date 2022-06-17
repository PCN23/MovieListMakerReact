import React from 'react';

export default function MovieForm({ 
  setMovieTitle,
  setMovieFormColor,
  setMovieFormDirector,
  setMovieFormYearReleased, 
  movieFormDirector,
  movieFormColor,
  movieFormYearReleased,
  movieTitle,
  handleSubmit
}) {

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title
        <input value={ movieTitle } required onChange={e => setMovieTitle(e.target.value)}/>
      </label>
      <label>
        Director
        <input value={ movieFormDirector } required onChange={e => setMovieFormDirector(e.target.value)}/>
      </label>
      <label>
        Year Released
        <input value={ movieFormYearReleased } required type='number' onChange={e => setMovieFormYearReleased(e.target.value)}/>
      </label>
      <label>
        Color:
        <select value={ movieFormColor } onChange={e => setMovieFormColor(e.target.value)}>
          <option value='blue'>Blue</option>
          <option value='green'>Green</option>
          <option value='salmon'>Salmon</option>
          <option value='pink'>Pink</option>

        </select>
        <button>Submit</button>
      </label>


    </form>
  );
}
