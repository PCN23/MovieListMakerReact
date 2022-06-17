import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import Movie from './Movie.js';
import MovieList from './MovieList.js';
import MovieForm from './MovieForm.js';


function App() {
  const [allMovies, setAllMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState(allMovies);
  const [movieFormYearReleased, setMovieFormYearReleased] = useState('');
  const [movieFormDirector, setMovieFormDirector] = useState('');
  const [movieTitle, setMovieTitle] = useState('');
  const [movieFormColor, setMovieFormColor] = useState('');
  const [movieFilter, setMovieFilter] = useState('');

  useEffect(() => {
    setFilteredMovies(allMovies);
    setMovieFilter('');
  }, [allMovies]);

  function handleSubmit(e) {
    e.preventDefault();
    const movie = {
      title: movieTitle,
      director: movieFormDirector,
      year: movieFormYearReleased,
      color: movieFormColor,
    };

    const updatedMovies = [...allMovies, movie];

    setAllMovies(updatedMovies);
    
    setMovieTitle('');
    setMovieFormDirector('');
    setMovieFormYearReleased('');
    setMovieFormColor('');

  }

  function deleteMovie(title) {
    const index = allMovies.findIndex(movie => movie.title === title);
    allMovies.splice(index, 1);

    setAllMovies([...allMovies]);
  }

  function handleFilter(movieFilter) {
    const searchedMovie = allMovies.filter(movie => 
      movie.title.includes(movieFilter));
    setFilteredMovies(searchedMovie);
  }


  return (
    <div className="App">
      <div className='current-movie-section'>
        <MovieForm 
          setMovieTitle={setMovieTitle}
          setMovieFormDirector={setMovieFormDirector}
          setMovieFormYearReleased={setMovieFormYearReleased}
          setMovieFormColor={setMovieFormColor}
          handleSubmit={handleSubmit}
        />
        {
          <Movie
            title={movieTitle}
            director={movieFormDirector}
            year={movieFormYearReleased}
            color={movieFormColor}
          />
        }
      </div>
      <p>Filter movies</p>
      <input onChange={(e) => handleFilter(e.target.value)}/>
      <MovieList movies={
        filteredMovies.length ? filteredMovies : allMovies 
      }
      deleteMovie={deleteMovie}
      />
    </div>
  );
}

export default App;
