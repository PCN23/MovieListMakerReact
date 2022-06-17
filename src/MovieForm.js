import React from 'react';



export default function MovieForm({ titleForm, setTitleForm, directorForm,  setDirectorForm, yearForm, setYearForm, ColorForm, setColorForm, addMovie}) {

function handleSubmit(e) {
  e.preventDefault();
  const movie = {
    title: titleForm,
    director: directorForm,
    year: yearForm,
    color: ColorForm,
  };



}


  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title
        <input required value={} onChange={e => (e.target.value)}/>
      </label>
      <label>
        Director
        <input required value={} onChange={e => (e.target.value)}/>
      </label>
      <label>
        Year Released
        <input required value={} onChange={e => (e.target.value)}/>
      </label>


    </form>
  );
}
