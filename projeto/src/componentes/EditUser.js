import React from 'react';

const EditFilm = ({ currentFilm, onUpdate, onCancel, setFilmEdited }) => {
  return (
    <div>
      <h2>Editar Filme</h2>
      <input
        type="text"
        value={currentFilm}
        onChange={(e) => setFilmEdited(e.target.value)}
      />
      <button onClick={onUpdate}>Salvar</button>
      <button onClick={onCancel}>Cancelar</button>
    </div>
  );
};

export default EditFilm;