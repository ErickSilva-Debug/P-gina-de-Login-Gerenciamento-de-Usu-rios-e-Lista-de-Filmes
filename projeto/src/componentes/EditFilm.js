import React, { useState, useEffect } from 'react';

const EditUser = ({ currentUser, onUpdate }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate({ ...currentUser, name, email });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Editar Usuário</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">Salvar</button>
    </form>
  );
};

export default EditUser;