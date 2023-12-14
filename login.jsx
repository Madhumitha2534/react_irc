// src/HandleLogin.js
import React, { useState } from 'react';
import './loginapp.css';

function HandleLogin() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);

  const handleLogin = () => {
    // Add your login logic here
    console.log('Login clicked');
  };

  const handleSignUp = () => {
    // Add your signup logic here
    console.log('Sign up clicked');
  };

  return (
    <div className="App">
      <div className="login-container">
        <div className="left-container">
          <img src="download.png" alt="Background" />
        </div>
        <div className="right-container">
          <h1>{isSignUp ? 'Sign Up' : 'Login'}</h1>
          <label>Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          {isSignUp && (
            <>
              <label>Email</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </>
          )}
          <button onClick={isSignUp ? handleSignUp : handleLogin}>
            {isSignUp ? 'Sign Up' : 'Login'}
          </button>
          <p onClick={() => setIsSignUp(!isSignUp)}>
            {isSignUp ? 'Already have an account? Login here.' : 'Don\'t have an account? Sign up here.'}
          </p>
        </div>
      </div>
    </div>
  );
}

export default HandleLogin;
