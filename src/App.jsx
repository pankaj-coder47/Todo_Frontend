import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { useContext, useEffect } from "react";
import axios from "axios";
import { Content, server } from "./main";
import { Toaster } from "react-hot-toast";

const App = () => {
  const { setUser, setIsAuthenticated, setLoading } = useContext(Content);

  useEffect(() => {
    setLoading(true)
    axios.get(`${server}/users/me`, {
      withCredentials: true,
    })
      .then((res) => {
        setIsAuthenticated(true);
        setUser(res.data.user);
        setLoading(false)
      })
      .catch(() => {
        setUser(null);
        setIsAuthenticated(false);
        setLoading(false)
      });
  }, [setUser, setIsAuthenticated, setLoading]);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Toaster />
        
      </BrowserRouter>
    </>
  )
}

export default App;
