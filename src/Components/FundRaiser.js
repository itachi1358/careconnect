import React, { useState } from 'react';
import styles from './Login.css';
import { Link } from 'react-router-dom';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [key,setKey]=useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    alert("SuccessFully Logged In")
  };

  return (
    <>
    <div className={styles.container}>
    <div className="image_container">
        <img src="./assets/logo.png" alt="" srcset="" />
    </div>
      <div className={styles.loginBox}>
        <h2>Login As a FundRaiser</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <input
              type="Number"
              placeholder="Licence Key"
              value={key}
              onChange={(e) => setKey(e.target.value)}
              required
            />
          </div>
          <Link to="/homepage">
          <button type="submit" className={styles.loginButton}>Login</button>
          </Link>
        </form>
        <p className={styles.forgotPassword}>Forgot Password?</p>
        <p className={styles.forgotPassword}>New? Register</p>
      </div>
    </div>
    </>
  );
};

export default Login;
