import { useState } from 'react'
import { IoCloseOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { createPostAction, updatePostAction } from '../redux/actions/post';
import { toast } from 'react-toastify';

function Modal() {
  const dispatch = useDispatch()
  const [postData, setPostData] = useState({ user: "", title: "", description: "" })
  const { modal } = useSelector(state => state.modal)

  function onChangeFunc(e) {
    setPostData({ ...postData, [e.target.name]: e.target.value })
  }
  console.log("modal", modal)
  console.log("postData", postData)

  function postCreate() {
    if (modal?.updateId) {
      dispatch(updatePostAction(modal?.updateId, postData))
    } else {
      dispatch(createPostAction(postData))
    }
    dispatch({ type: "MODAL", payload: false })
    toast("Post uğurla əlavə edildi", {
      position: "top-right",
      autoClose: 5000,
    });
  }

  return (
    <div className='w-full h-screen bg-black/50 backdrop-blur-sm fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center '>
      <div className='bg-white w-1/3 p-2 rounded-md'>
        <div className='flex justify-between items-center'>

          <h1 className='font-bold text-2xl'>{modal?.updateId ? "Post Yenilə" : "Post Paylaş"}</h1>
          <IoCloseOutline onClick={() => dispatch({ type: "MODAL", payload: false })} size={20} className='cursor-pointer' />
        </div>
        <div className='my-4 flex flex-col space-y-3'>
          <input value={postData.user} onChange={onChangeFunc} name='user' className='input-style' type="text" placeholder='İstifadəçi adı' />
          <input value={postData.title} onChange={onChangeFunc} name='title' className='input-style' type="text" placeholder='Başlıq' />
          <input value={postData.description} onChange={onChangeFunc} name='description' className='input-style' type="text" placeholder='Təsvir' />
        </div>
        <div onClick={postCreate} className='w-full p-2 text-center bg-emerald-600 text-white cursor-pointer hover:bg-emerald-800'>
        {modal?.updateId ? "Yenilə" : "Paylaş"}
        </div>
      </div>
    </div>
  )
}

export default Modal