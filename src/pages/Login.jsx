/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from 'react';
import '../styles/login.css';
import { Link, Navigate } from 'react-router-dom';
import { Content, server } from '../main';
import toast from 'react-hot-toast';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setIsAuthenticated, IsAuthenticated, loading, setLoading } = useContext(Content);

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(`${server}/users/login`, {
        email,
        password,
      }, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      });
      toast.success(data.message);
      setIsAuthenticated(true);
      setLoading(false);
    } catch (error) {
      toast.error('Failed to login, please try again.');
      setIsAuthenticated(false);
      setLoading(false);
    }
  };

  if (IsAuthenticated) return <Navigate to={'/'} />;

  return (
    <div className="main">
      <div className="login">
        <h2>Login</h2>
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <label htmlFor="email"></label>
            <input
              className="my-2 py-1 px-1"
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              autoComplete="username"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password"></label>
            <input
              className="my-2 py-1 px-1"
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
              autoComplete="current-password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <div className="btn-container">
            <button type="submit" className="btn btn-success my-2 px-4" disabled={loading}>
              Login
            </button>
            <br />
            <h4>Or</h4>
            <p>Don't have an account?</p>
            <Link className="btn btn-primary px-4" to={'/register'}>
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
