import React, { useState } from 'react';
import './LoginStyle.css'

export function Login() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Username: ${username}, Email: ${email}, Password: ${password}`);
  };

  return (
    <div className="login-container">
      <div className="background-shape"></div>
      <div className="login-form-container" style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
        <h2>Log In</h2>
        <form onSubmit={handleSubmit}>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <br />
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <br />
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <br />
          {error && <div style={{ color: 'red' }}>{error}</div>}
          <button type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
}