import { useState } from "react"
import { loginAction, registerAction } from "../redux/actions/auth"
import { useDispatch } from "react-redux"

function Auth() {
    const [signUp, setSignUp] = useState(true)
    const [authData, setAuthData] = useState({ username: "", email: "", password: "" })
    const dispatch = useDispatch()

    function onChangeFunc(e) {
        setAuthData({ ...authData, [e.target.name]: e.target.value })
    }

    function authFunc() {
        if (signUp) {
            dispatch(registerAction(authData))
        } else {
            dispatch(loginAction(authData))
        }
    }
    console.log("authData", authData)

    return (
        <div className="w-full h-screen bg-gray-100 flex items-center justify-center fixed top-0 right-0 bottom-0">
            <div className="w-1/3 bg-white p-3">
                <h1 className="text-2xl text-gray-700 font-bold">{signUp ? "Qeydiyyat" : "Giriş"}</h1>
                <div className="flex flex-col space-y-3 my-5">
                    {signUp && <input value={authData.username} name="username" onChange={onChangeFunc} type="text" placeholder="Ad" className="input-style" />}
                    <input value={authData.email} name="email" onChange={onChangeFunc} type="text" placeholder="Email" className="input-style" />
                    <input value={authData.password} name="password" onChange={onChangeFunc} type="text" placeholder="Şifrə" className="input-style" />
                </div>
                <div className="cursor-pointer text-red-400 text-sm">
                    {
                        signUp ?
                            <span onClick={() => setSignUp(false)}>Daha əvvəl giriş etmisiniz mi?</span>
                            :
                            <span onClick={() => setSignUp(true)}>Giriş etmək üçün irəliləyin</span>
                    }

                </div>
                <div onClick={authFunc} className="cursor-pointer w-full p-2 mt-2 text-center bg-indigo-600 text-white rounded-md">{signUp ? "Qeydiyyatdan keç" : "Giriş et"}</div>
            </div>
        </div>
    )
}

export default Auth