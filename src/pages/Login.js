import React, {useState, useEffect} from 'react'
import NavBar from '../components/NavBar'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errormsg, setErrorMsg] = useState("")
    
    useEffect(() => {
        if(sessionStorage.getItem("createAccount")){
            const createAccountEmail = JSON.parse(sessionStorage.getItem('createAccount'))
            setEmail(createAccountEmail.email)
            setPassword(createAccountEmail.password)
        }
        
    },[])
    const loginUser = (e) => {
        e.preventDefault()
        if(password.length < 1 || email.length < 1){
            setErrorMsg("email and password are both required")    
        }else{
            axios.post('http://localhost:9000/login', {
                email: email,
                password: password
            }).then(res => {
                if(res.data.error){
                    setErrorMsg(res.data.error)
                }else{
                    sessionStorage.setItem("client", JSON.stringify(res.data))
                }
            }).catch(err => {

            })
        }
    }
    return (
        <div className="bg-gradient-to-r from-blue-700 via-blue-500 to-blue-500  h-screen">
            <NavBar/>

            <div className="bg-white w-6/12 mx-auto p-8 my-20">
                <h1 className="text-3xl mb-2 font-bold">Login</h1>
                <p className="flex mb-4"><p className="mr-2">By Signing in you agree to our </p><span className="underline text-blue-400">Terms and Conditions</span></p>

                <p className="mb-4 text-red-500">{errormsg}</p>
                <form className="flex flex-col" onSubmit={(e) => loginUser(e)}>
                    <div className="flex flex-col">
                        <label className="text-sm">Email</label>
                        <input type="email" value={email} onChange={(e) => {
                            setErrorMsg("")
                            setEmail(e.target.value)
                        }} className="border-b-2  focus:border-blue-400"/>
                    </div>
                    <div className="flex flex-col mt-4">
                        <label className="text-sm">Password</label>
                        <input type="password" value={password} onChange={(e) => {
                            setPassword(e.target.value)
                            setErrorMsg("")
                        }} className="border-b-2  focus:border-blue-400"/>
                    </div>
                    <button className="bg-blue-500 my-4 py-2 text-white" type="submit" >Login</button>
                    <Link to="/signup" className="text-blue-400">Create Account</Link>
                </form>
            </div>
        </div>
    )
}

export default Login
