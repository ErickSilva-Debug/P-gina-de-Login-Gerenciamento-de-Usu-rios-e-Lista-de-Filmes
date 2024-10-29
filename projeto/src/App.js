import React, { useState } from 'react';
import './App.css';
import AddUser from './componentes/AddUser';
import EditUser from './componentes/EditUser';
import UserList from './componentes/UserList';
import Login from './componentes/Login';
import AddFilm from './componentes/AddFilm';
import EditFilm from './componentes/EditFilm';
import FilmList from './componentes/FilmList';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [films, setFilms] = useState([]);
  const [newFilm, setNewFilm] = useState('');
  const [filmEdited, setFilmEdited] = useState('');
  const [editingFilm, setEditingFilm] = useState(null);
  const [message, setMessage] = useState('');

  const handleLogin = () => setLoggedIn(true);


  const addFilm = () => {
    if (newFilm.trim()) {
      setFilms([...films, newFilm]);
      setNewFilm('');
      setMessage('Filme adicionado com sucesso!');
      setTimeout(() => setMessage(''), 3000);
    }
  };

  const startEditingFilm = (index) => {
    setEditingFilm(index);
    setFilmEdited(films[index]);
  };

  const saveEditedFilm = () => {
    const updatedFilms = [...films];
    updatedFilms[editingFilm] = filmEdited;
    setFilms(updatedFilms);
    setEditingFilm(null);
    setFilmEdited('');
    setMessage('Filme editado com sucesso!');
    setTimeout(() => setMessage(''), 3000);
  };

  const deleteFilm = (index) => {
    const updatedFilms = films.filter((_, i) => i !== index);
    setFilms(updatedFilms);
    setMessage('Filme removido com sucesso!');
    setTimeout(() => setMessage(''), 3000);
  };

 
  const addUser = (user) => setUsers([...users, user]);
  
  const updateUser = (updatedUser) => {
    setUsers(users.map((user) => (user.id === updatedUser.id ? updatedUser : user)));
    setEditingUser(null);
  };

  const deleteUser = (id) => setUsers(users.filter((user) => user.id !== id));

  return (
    <div className="App">
      {loggedIn ? (
        <>
          <h1>Bem-vindo à sua Aplicação</h1>
          
          <section>
            <h2>Gerenciamento de Usuários</h2>
            {editingUser ? (
              <EditUser
                currentUser={editingUser}
                onUpdate={updateUser}
              />
            ) : (
              <AddUser onAdd={addUser} />
            )}
            <UserList users={users} onEdit={setEditingUser} onDelete={deleteUser} />
          </section>

          <section>
            <h2>Minha Lista de Filmes</h2>
            <div className="formulario">
              <input
                type="text"
                value={newFilm}
                onChange={(e) => setNewFilm(e.target.value)}
                placeholder="Digite o nome de um filme"
              />
              <button onClick={addFilm}>Adicionar Filme</button>
            </div>
            {message && <div className="mensagem">{message}</div>}
            <FilmList films={films} onEdit={startEditingFilm} onDelete={deleteFilm} />
            {editingFilm !== null && (
              <EditFilm
                currentFilm={filmEdited}
                onUpdate={saveEditedFilm}
                onCancel={() => setEditingFilm(null)}
                setFilmEdited={setFilmEdited}
              />
            )}
          </section>
        </>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;