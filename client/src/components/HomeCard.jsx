/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/prop-types */
import { GrUpdate } from "react-icons/gr";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deletePostAction } from "../redux/actions/post"
import { toast } from "react-toastify";

function HomeCard({ post }) {
    const dispatch = useDispatch()

    function updatePost(id) {
        dispatch({ type: "MODAL", payload: { open: true, updateId: id } })
    }

    function deletePost(id) {
        dispatch(deletePostAction(id))
        toast("Post uğurla silindi", {
            position: "top-right",
            autoClose: 5000,
        });
    }


    return (
        <div className="relative w-xl h-full mt-5 shadow-xl p-5 rounded-3xl bg-zinc-50 mx-5">
            <h2 className="font-bold text-xl">{post?.title}</h2>
            <div className="flex justify-between">
                <div>
                    <p className="text-zinc-700 text-sm">{post?.description}</p>
                    <div className="flex flex-col mt-4">
                        <span className="text-xs text-zinc-500">{post?.user}</span>
                        <span className="text-xs text-zinc-500">{(post?.date)?.substring(0, 10)}</span>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <GrUpdate className="text-white bg-gradient-to-t from-yellow-600 to-red-400 duration-200 rounded disabled:opacity-50 p-2 cursor-pointer" onClick={() => updatePost(post._id)} size={30} />
                    <FaTrash className="text-white bg-gradient-to-b from-purple-600 to-blue-700 duration-200 rounded disabled:opacity-50 p-2 cursor-pointer" onClick={() => deletePost(post._id)} size={30} />
                </div>
            </div>
        </div>
    )
}

export default HomeCard