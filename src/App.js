import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import Movie from './Movie.js';
import MovieList from './MovieList.js';
import MovieForm from './MovieForm.js';


function App() {
  const [allMovies, setAllMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState(allMovies);
  const [movieFormYearReleased, setMovieFromYearReleased] = useState('');
  const [movieFormDirector, setMovieFormDirector] = useState('');
  const [movieTitle, setMovieTitle] = useState('');
  const [movieFormColor, setMovieFormColor] = useState('');


  useEffect(() => {
    const filteredMovies = allMovies.filter(movie => 
      movie.title.includes(setMovieTitle));

    setFilteredMovies(filteredMovies);
  }, [setMovieTitle, allMovies]);


  function deleteMovie(title) {
    const index = allMovies.findindex(movie => movie.title === title);
    allMovies.splice(index, 1);

    setFilteredMovies('');
    setAllMovies([...allMovies]);
  }


  function addMovie(newMovie) {
    const updatedMovies = [...allMovies, newMovie];

    setAllMovies(updatedMovies);
  }


  return (
    <div className="App">
      <div className='current-movie-section'>
        <MovieForm 
          setMovieTitle={setMovieTitle}
          setDirectorForm={setMovieFormDirector}
          setYearForm={setMovieFromYearReleased}
          setColorForm={setMovieFormColor}
          addMovie={addMovie}
        />
        {
          movieTitle && <Movie
            title={movieTitle}
            director={movieFormDirector}
            year={movieFormYearReleased}
            color={movieFormColor}
          />
        }
      </div>
      <p>Filter movies</p>
      <input value={setMovieTitle} onChange={(e) => setFilteredMovies(e.target.value)}/>
      <MovieList movies={
        filteredMovies.length ? filteredMovies : allMovies 
      }
      deleteMovie={deleteMovie}
      />
    </div>
  );
}

export default App;
