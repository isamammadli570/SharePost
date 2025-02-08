/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/prop-types */
import { RiDeleteBin5Line } from "react-icons/ri";
import { GrUpdate } from "react-icons/gr";
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
        <div className="relative w-1/4 border p-3 rounded-md bg-zinc-50 mx-5">
            <h2 className="font-bold text-xl">{post?.title}</h2>
            <p className="text-zinc-700 text-sm">{post?.description}</p>
            <div className="flex items-center justify-between mt-4">
                <span className="text-xs text-zinc-500">{post?.user}</span>
                <span className="text-xs text-zinc-500">{(post?.date)?.substring(0, 10)}</span>
            </div>
            <div className="flex items-center space-x-3 absolute -top-3 -right-3">
                <GrUpdate className="cursor-pointer" onClick={() => updatePost(post._id)} size={22} />
                <RiDeleteBin5Line className="cursor-pointer" onClick={() => deletePost(post._id)} size={25} />
            </div>
        </div>
    )
}

export default HomeCard