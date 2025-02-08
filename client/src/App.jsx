import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import Auth from "./pages/Auth"
import Navbar from "./components/Navbar"
import Modal from "./components/Modal"
import { ToastContainer } from 'react-toastify';
import useToken from "./hooks/useToken";
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
/* import 'react-toastify/dist/ReactToastify.css' */

function App() {
  const [token] = useToken()
  const { modal } = useSelector(state => state.modal)
  const [filteredPosts, setFilteredPosts] = useState([]);
  const { posts } = useSelector(state => state.posts)

  useEffect(() => {
    setFilteredPosts(posts);
  }, [posts]);
  console.log("posts", posts)

  function handleSearch(query) {
    if (!query.trim()) {
      setFilteredPosts(posts);
      return;
    }
    const filtered = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.description.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPosts(filtered);
  }

  return (
    <>
      <BrowserRouter>
        {token?.token && <Navbar onSearch={handleSearch} />}
        {modal && <Modal />}
        <Routes>
          <Route path="/" element={!token?.token ? <Link to={'/auth'} /> : <Home filteredPosts={filteredPosts} />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  )
}

export default App
