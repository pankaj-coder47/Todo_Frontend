import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Content, server} from '../main'
import axios from 'axios'
import toast from 'react-hot-toast'

const Header = () => {

  const { setIsAuthenticated , IsAuthenticated,loading,setLoading } = useContext(Content)
  const logOutHandler = async () => {
    setLoading(true)
   try {
      const { data } = await axios.get(`${server}/users/logout`, {
        withCredentials: true,
      })
      toast.success(data.massege )
      setIsAuthenticated(false)
      setLoading(false)
    } catch (error) {
      toast.error(error.response.data.message)
      setIsAuthenticated(true)
      setLoading(false)

    }
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark text-light" >
        <div className="container-fluid">
          <Link className="navbar-brand text-light" to={'/'}>ModernMind</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active text-light" aria-current="page" to={'/'}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to={"/profile"}>Profile</Link>
              </li>

            </ul>
              {
                IsAuthenticated ? (<button className='btn btn-success' onClick={logOutHandler} disabled={loading}>Logout</button>) :
                  (<Link to={"/login"}><button className="btn btn-danger mx-3" >Login</button></Link>)
              }


            
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
