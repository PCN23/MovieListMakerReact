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
  submitMovie
}) {

  function handleSubmit(e) {
    e.preventDefault();
    const movie = {
      title: movieTitle,
      director: movieFormDirector,
      year: movieFormYearReleased,
      color: movieFormColor,
    };

    submitMovie(movie);

    setMovieTitle('');
    setMovieFormDirector('');
    setMovieFormYearReleased('');
    setMovieFormColor('blue');



  }


  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title
        <input required onChange={e => setMovieTitle(e.target.value)}/>
      </label>
      <label>
        Director
        <input required onChange={e => setMovieFormDirector(e.target.value)}/>
      </label>
      <label>
        Year Released
        <input required type='number' onChange={e => setMovieFormYearReleased(e.target.value)}/>
      </label>
      <label>
        Color:
        <select>
          <option>Blue</option>
          <option>Green</option>
          <option>Salmon</option>
          <option>Pink</option>

        </select>
        <button>Submit</button>
      </label>


    </form>
  );
}
