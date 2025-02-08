/* eslint-disable react/prop-types */
import { useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { useDispatch } from "react-redux";

function Navbar({ onSearch }) {
  const dispatch = useDispatch()
  const [searchQuery, setSearchQuery] = useState("");

  function logOutFunc() {
    localStorage.clear()
    window.location = '/auth'
  }

  function openModal() {
    dispatch({ type: 'MODAL', payload: true })
  }

  function handleSearch(e) {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  }

  return (
    <div className='bg-emerald-700 flex justify-center'>
      <div className="flex items-center justify-between mx-20 h-20 w-3/5 px-5">

        <div className='text-white font-bold text-2xl cursor-pointer'>
          Post Paylaş
        </div>
        <div className='flex items-center space-x-5'>
          <input value={searchQuery}
            onChange={handleSearch}
            type="text"
            placeholder='Axtar'
            className='p-2 outline-none rounded-md bg-white' />
          <div onClick={openModal} className='w-36 border hover:bg-emerald-400 p-2 rounded-md text-center text-white cursor-pointer transition-all duration-200'>Post yarad</div>
          <BiLogOut onClick={logOutFunc} size={25} className="text-white cursor-pointer" />
        </div>
      </div>
    </div>
  )
}

export default Navbar