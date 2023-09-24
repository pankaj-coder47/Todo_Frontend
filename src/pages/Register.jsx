import { useContext, useState } from 'react';
import { Link, Navigate } from 'react-router-dom'
import axios from 'axios'
import { Content, server } from '../main';
import '../styles/home.css'
import toast from 'react-hot-toast'
const Register = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setIsAuthenticated, IsAuthenticated, loading, setLoading } = useContext(Content)

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      const { data } = await axios.post(`${server}/users/register`, {
        name, email, password
      }, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true
      })
      toast.success(data.message)
      setIsAuthenticated(true)
      setLoading(false)
    } catch (error) {
      toast.error(error.response.data.message)
      setIsAuthenticated(false)
      setLoading(false)

    }
  }
  if (IsAuthenticated) return <Navigate to={'/'} />
  return (
    <div className="main defaultd ">
      <div className="login-container ">
        <h2 className='py-3'>Register</h2>
        <form onSubmit={submitHandler}>
          <div className="form-group">

            <input type="text" className='my-2 py-1 px-1' id="name" name="name" placeholder="Enter your name" value={name}
              required
              onChange={(e) => {
                setName(e.target.value);
              }} />

          </div>

          <div className="form-group">

            <input className='my-2 py-1 px-1' type="email" id="email" name="email" placeholder="Enter your email" value={email}
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }} />

          </div>

          <div className="form-group">
            <input className='my-2 py-1 px-1' type="password" id="password" name="password" placeholder="Enter your password"
              required
              value={password} onChange={(e) => {
                setPassword(e.target.value);
              }} />

          </div>

          <div className="btn-container">
            <button type="submit" className="btn btn-success my-2" disabled={loading}>Register</button>
            <br />
            <h4>Or</h4>
            <p>I have Account</p>
            <Link to={'/login'} className=' btn btn-primary py-2 px-4'>login</Link>

          </div>
        </form>
      </div>

    </div>
  )
}

export default Register
