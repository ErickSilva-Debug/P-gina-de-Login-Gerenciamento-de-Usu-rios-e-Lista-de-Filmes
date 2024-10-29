import React from 'react';

const FilmList = ({ films, onEdit, onDelete }) => (
  <div>
    <h2>Lista de Filmes</h2>
    <ul>
      {films.map((film, index) => (
        <li key={index}>
          {film}
          <button onClick={() => onEdit(index)}>Editar</button>
          <button onClick={() => onDelete(index)}>Remover</button>
        </li>
      ))}
    </ul>
  </div>
);

export default FilmList;