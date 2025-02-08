import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import Auth from "./pages/Auth"
import Navbar from "./components/Navbar"
import Modal from "./components/Modal"
import { ToastContainer } from 'react-toastify';
import useToken from "./hooks/useToken";
import { useSelector } from "react-redux"
/* import 'react-toastify/dist/ReactToastify.css' */

function App() {
  const [token] = useToken()
  const { modal } = useSelector(state => state.modal)

  return (
    <>
      <BrowserRouter>
        {token?.token && <Navbar />}
        {modal && <Modal />}
        <Routes>
          <Route path="/" element={!token?.token ? <Link to={'/auth'} /> : <Home />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  )
}

export default App
