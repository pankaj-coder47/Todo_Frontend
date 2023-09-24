import { useContext, useEffect, useState } from "react"
import axios from 'axios'
import '../styles/home.css'
import { Content, server } from "../main"
import toast from "react-hot-toast"
import TodoItems from "../components/TodoItems"
import { Navigate } from "react-router-dom"

const Home = () => {
  const [title, setTitle] = useState('')
  const [descripation, setDescripation] = useState('');
  const [logading, setLoding] = useState(false)
  const [todo, setTodo] = useState([])
  const [refresh, setRefresh] = useState(false)
  const {  IsAuthenticated } = useContext(Content)
 

  //Add todo handlers
  const addTaskHandler = async (e) => {
    e.preventDefault();
    setLoding(true)
    try {
      const { data } = await axios.post(`${server}/task/new`, {
        title, descripation
      }, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json"
        }
      })
      setDescripation("");
      setTitle("")
      toast.success(data.massege)
      setRefresh((prev) => !prev)
      setLoding(false)
    } catch (error) {
      toast.error(error.response.data.message)
      setLoding(false)
    }

  }


  //Update handler
  const updateHandlers = async (id) => {
    try {
      const { data } = await axios.put(`${server}/task/${id}`, {}, {
        withCredentials: true
      })
      toast.success(data.massege)
      setRefresh((prev) => !prev)
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }

  //Delete handlers
  const deleteHandler = async (id) => {
    try {
      const { data } = await axios.delete(`${server}/task/${id}`, {
        withCredentials: true
      })
      toast.success(data.massege)
      setRefresh((prev) => !prev)
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }
 // check if empty
  if(title || descripation === ""){
    setLoding(true)
  }

  useEffect(() => {
    axios.get(`${server}/task/alltask`, {
      withCredentials: true
    }).then((res) => {
      setTodo(res.data.todo)
    }).catch((error) => {
      toast.error(error.response.data.message)
    })
  }, [refresh])
  if (!IsAuthenticated) return <Navigate to={'/login'} />
  return (
    <>
      <div className="container d-flex bg-dark-subtle py-3 px-4 justify-content-center my-4 ">
        <form className="d-flex flex-column my-3 " onSubmit={addTaskHandler}>
          <input type="text" placeholder="Enter Title" className="my-3 bigint"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }} />

          <input type="text" placeholder="Enter Descripation" className="my-3 bigint" value={descripation}
            onChange={(e) => {
              setDescripation(e.target.value);
            }} />

          <button type="submit" className="btn btn-dark my-3" disabled={logading}> Add Task </button>
        </form>
      </div>
      <section className="container">
        {
          todo.map((value, i) => (
            <TodoItems title={value.title} descripation={value.descripation} key={i} isCompleted={value.isCompleted} updateHandlers={updateHandlers} deleteHandler={deleteHandler} id={value._id} />
          ))
        }
      </section>
    </>
  )
}

export default Home
