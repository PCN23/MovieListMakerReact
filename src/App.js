import { useEf, useState } from 'react.js';
import './App.css';
import Movie from './Movie.js';
import MovieList from './MovieList.js';
import { useMovieForm } from './useMovieForm.js';


function App() {
  const [allMovies, setAllMovies] = useState('');
  const [filteredMovies, setFilteredMovies] = useState('');
  const [movieFormYearReleased, setMovieFromYearReleased] = useState('');
  const [movieFormDirector, setMovieFormDirector] = useState('');
  const [movieTitle, setMovieTitle] = useState('');
  const [movieFormColor, setMovieFormColor] = useState('');

  const {
    titleForm, setTitleForm,
    directorForm, setDirectorForm,
    yearForm, setYearForm,
    colorForm, setColorForm,
  } = useMovieForm();

function addMovie(newMovie) {
  const updatedMovies
}

  return (
    <div className="App">
      <div className='current-movie-section'>
        <MovieForm 
          titleForm={setTitleForm}
          setTitleForm={setTitleForm}
          directorForm={directorForm}
          setDirectorForm={setDirectorForm}
          yearForm={yearForm}
          setYearForm={setYearForm}
          colorForm={colorForm}
          setColorForm={setColorForm}
          addMovie={addMovie}
        />
        {
          titleForm && <Movie
            title={titleForm}
            director={directorForm}
            year={yearForm}
            color={colorForm}
          />
        }
      </div>
      <p>Filter movies</p>
      <input value={} onChange={(e) => setFilteredMovies(e.target.value)}/>
      <MovieList movies={}/>
    </div>
  );
}

export default App;
