import { useState } from "react"
import { loginAction, registerAction } from "../redux/actions/auth"
import { useDispatch } from "react-redux"
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

function Auth() {
    const [signUp, setSignUp] = useState(true)
    const [authData, setAuthData] = useState({ username: "", email: "", password: "" })
    const [showPassword, setShowPassword] = useState(false);
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
        <div className="w-full h-full bg-gray-100 flex items-center justify-center fixed top-0 right-0 bottom-0 left-0 z-50">
            <div className="flex lg:w-5xl md:w-4xl w-3xl h-[600px]">
                <div className="w-3/5 bg-white p-32 items-center shadow-2xl justify-center rounded-l-3xl">
                    <h1 className="text-3xl text-center font-bold">{signUp ? "Qeydiyyat" : "Giriş"}</h1>
                    <div className="flex flex-col space-y-3 my-5">
                        {signUp && <input value={authData.username} name="username" onChange={onChangeFunc} type="text" placeholder="Ad" className="input-style" />}
                        <input value={authData.email} name="email" onChange={onChangeFunc} type="text" placeholder="Email" className="input-style" />
                        <div className="relative">
                            <input
                                value={authData.password}
                                name="password"
                                onChange={onChangeFunc}
                                type={showPassword ? "text" : "password"}  // Şifrəni göstərmək üçün type dəyişdir
                                placeholder="Şifrə"
                                className="input-style"
                            />
                            <div
                                onClick={() => setShowPassword(!showPassword)}  // Şifrəni göstər/gizlət
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                            >
                                {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}  {/* Şifrəni göstərmək üçün ikon */}
                            </div>
                        </div>
                    </div>
                    <div onClick={authFunc} className="cursor-pointer w-full p-3 text-center bg-gradient-to-b from-purple-600 to-indigo-600 shadow-purple-950 shadow-sm text-white rounded-3xl">{signUp ? "Qeydiyyatdan keç" : "Giriş et"}</div>
                    <div className="text-purple-400 text-sm text-center mt-5">
                        {
                            signUp ?
                                <>
                                    <p>Daha əvvəl giriş etmisiniz mi?</p> <span className="font-bold cursor-pointer" onClick={() => setSignUp(false)}>Giriş edin</span>
                                </>
                                :
                                <>
                                    <p>Hesabınız yoxdur?</p><span className="font-bold cursor-pointer" onClick={() => setSignUp(true)}>Yaradın</span>
                                </>
                        }

                    </div>
                </div>
                <div className="w-2/5 gap-8 bg-gradient-to-b shadow-2xl rounded-r-3xl text-white from-purple-600 to-indigo-600 flex flex-col items-center justify-center">
                    <h1 className="text-3xl font-semibold">{signUp ? "Gəlin, başlayaq!" : "Yenidən xoş gəldiniz!"}</h1>
                    <p className="text-center p-1">{signUp ? "Sadəcə bir neçə saniyə ərzində hesab yaradın və bizə qoşulun!" : "Hesabınıza daxil olun və unikal təcrübənin bir hissəsi olun! Sizi özəlləşdirilmiş imkanlar, intuitiv interfeys və rahat istifadəçi təcrübəsi gözləyir. "}</p>
                </div>
            </div>
        </div>
    )
}

export default Auth