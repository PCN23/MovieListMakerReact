import React from 'react';



export default function MovieForm({ 
  titleForm, 
  setTitleForm, 
  directorForm, 
  setDirectorForm, 
  yearForm, 
  setYearForm, 
  ColorForm, 
  setColorForm, 
  addMovie
}) {

  function handleSubmit(e) {
    e.preventDefault();
    const movie = {
      title: titleForm,
      director: directorForm,
      year: yearForm,
      color: ColorForm,
    };

    addMovie(movie);

    setTitleForm('');
    setDirectorForm('');
    setYearForm('');
    setColorForm('blue');



  }


  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title
        <input required value={titleForm} onChange={e => setTitleForm(e.target.value)}/>
      </label>
      <label>
        Director
        <input required value={directorForm} onChange={e => setDirectorForm(e.target.value)}/>
      </label>
      <label>
        Year Released
        <input required value={yearForm} type='number' onChange={e => setYearForm(e.target.value)}/>
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
