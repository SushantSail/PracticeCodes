import React, { useState } from 'react';

export const Login = () => {
  const [password, setPassword] = useState('');
  const [valid, setValid] = useState(false);
  const [focused, setFocused] = useState(false);

  function ValidatePass(password) {
    const lowercase = /[a-z]/.test(password);
    const uppercase = /[A-Z]/.test(password);
    return lowercase && uppercase;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const isValid = ValidatePass(password);
    setValid(isValid);
    console.log('Your Entered Password: ', password);
    if (isValid) {
      alert('Login Successfully');
      setPassword('');
    }
  }

  return (
    <>
      <div>Login Page</div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="password"></label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onFocus={() => setFocused(true)}   // When input is focused
         
        />
        
        <button type="submit">Login</button>
      </form>

      
      
    </>
  );
};
