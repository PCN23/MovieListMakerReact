import { useEf, useState } from 'react.js';
import './App.css';
import Movie from './Movie.js';
import MovieList from './MovieList.js';
import { useMovieForm } from './useMovieForm.js';


function App() {
  const [allMovies, setAllMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState(allMovies);
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
  const updatedMovies = [...allMovies , newMovie];

  setAllMovies(updatedMovies);
}

  return (
    <div className="App">
      <div className='current-movie-section'>
        <MovieForm 
          setTitleForm={setTitleForm}
          setDirectorForm={setDirectorForm}
          setYearForm={setYearForm}
          setColorForm={setColorForm}
          titleForm={setTitleForm}
          directorForm={directorForm}
          yearForm={yearForm}
          colorForm={colorForm}
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
      <input value={currentFilter} onChange={(e) => setFilteredMovies(e.target.value)}/>
      <MovieList movies={}/>
    </div>
  );
}

export default App;
