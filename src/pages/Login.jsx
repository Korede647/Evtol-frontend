import axios from 'axios'
import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LOGIN_URL } from '../components/API_URL'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const navigate = useNavigate()

  const validateEmail = (email) => {
      const regEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return regEx.test(email)
  }

  const handleLogIn = async (e) => {
      e.preventDefault()
      // clear previous error
      setError("")

      // check that all fields are filled
      if (!email || !password || !validateEmail(email)) {
        setError("All fields are required")
        return
      }
      if(!validateEmail(email)){
         setError("Invalid Email")
         return
      }
      if(password.length < 6){
        setError("Password must be 6 or more characters")
        return
      }
      try{
        const response = await axios.post(LOGIN_URL, {
            email,
            password
        })
        if(response.status === 201){
            navigate("/dashboard")
            console.log(response.data)
            localStorage.setItem("Token", (response.data.accessToken))
            JSON.parse(localStorage.getItem("Token"))
        }
   
    }catch(error){
      setError("Log in failed. Please try again")
    }
  }
return (
  <div className=" w-100 bg-white p-10 rounded-lg shadow-lg mx-115 my-30">
    <div className="flex flex-wrap gap-5 items-center w-full max-md:max-w-full mb-10">
      <div className="flex flex-wrap flex-1 shrink gap-5 items-center self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full ">
        <h2 className="text-blue-900 font-medium text-[20px]">Log In</h2>
      </div>
    </div>

    <form className="grid grid-cols-1 gap-6 mb-10" onSubmit={handleLogIn}>
      <div id="input" className="relative">
        <input
          type="text"
          id="floating_outlined"
          className="block w-full text-sm h-[50px] px-4 text-slate-900 bg-white rounded-[8px] border border-violet-200 appearance-none focus:outline-none focus:ring-1 focus:ring-violet-300 focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]"
          placeholder="E-mail"
          value= {email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label
          for="floating_outlined"
          className="text-blue-900 text-bold peer-placeholder-shown:-z-10 peer-focus:z-10 absolute text-[14px] leading-[150%] text-primary peer-focus:text-primary peer-invalid:text-error-500 focus:invalid:text-error-500 duration-300 transform -translate-y-[1.2rem] scale-75 top-2 z-10 origin-[0] bg-white disabled:bg-gray-50-background- px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-[1.2rem] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
        >
          E-mail
        </label>

      </div>
      
      <div id="input" class="relative">
        <input
          type="password"
          id="floating_outlines"
          className="block w-full text-sm h-[50px] px-4 text-slate-900 bg-white rounded-[8px] border border-violet-200 appearance-none focus:outline-none focus:ring-1 focus:ring-violet-300 focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]"
          placeholder="Password (6 or more characters)"
          value= {password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label
          for="floating_outlines"
          className="text-blue-900 text-bold peer-placeholder-shown:-z-10 peer-focus:z-10 absolute text-[14px] leading-[150%] text-primary peer-focus:text-primary peer-invalid:text-error-500 focus:invalid:text-error-500 duration-300 transform -translate-y-[1.2rem] scale-75 top-2 z-10 origin-[0] bg-white disabled:bg-gray-50-background- px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-[1.2rem] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
        >
          Password
        </label>
        {error && (
        <p className="text-red-500 pt-1 text-sm">{error}</p>
        )}
      </div>


    <div className="sm:flex sm:flex-row-reverse flex ">
      <button
        className="w-fit rounded-lg text-sm px-7 py-3 focus:outline-none h-[50px] border bg-blue-900 hover:bg-blue-800 hover:cursor-pointer focus:bg-violet-700 border-violet-500-violet- text-white focus:ring-4 focus:ring-violet-200 hover:ring-4 hover:ring-violet-100 transition-all duration-300"
        type="submit"
      >
        <div className="text-center">
          Log in
          </div>
      </button>
        
    </div>
    <p className='text-[14px] pl-12'>Dont have an Account? <Link className= "text-blue-600" to="/">Sign up</Link></p>
    </form>
    
  </div>
  )
}

export default Login
