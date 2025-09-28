import React, { useState } from 'react';
import passwordValidation from '../auth/passwordValidation';

export const NewUserPage = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [valid, setValid] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setUser(prevUser => ({
      ...prevUser,
      [name]: value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Form Submitted:', user);
    setValid(passwordValidation(user.password));
  }

  return (
    <>
      <h2>New User Page</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username: </label>
        <input
          id="username"
          name="username"
          type="text"
          value={user.username}
          onChange={handleChange}
        />
        <br />

        <label htmlFor="email">Email: </label>
        <input
          id="email"
          name="email"
          type="email"
          value={user.email}
          onChange={handleChange}
        />
        <br />

        <label htmlFor="password">Password: </label>
        <input
          id="password"
          name="password"
          type="password"
          value={user.password}
          onChange={handleChange}
        />
        <br />

        {valid ? (
          <p style={{ color: 'green' }}></p>
        ) : (
          <p style={{ color: 'red' }}>Password must have uppercase, lowercase, and special character.</p>
        )}

        <button type="submit">Create</button>
      </form>
    </>
  );
};
