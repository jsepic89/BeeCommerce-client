import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import beeLogo from '../images/beeLogo.png'
import { loginStart, loginSuccess, loginError } from '../redux/userSlice'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Login = () => {

  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const dispatch = useDispatch();
  const { error } = useSelector( (state) => state.user)


  const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/auth/login`, user)
        dispatch(loginSuccess(res.data))
    } catch (error) {
        dispatch(loginError())
    }
}

  const handleSubmit = (e) => {
    e.preventDefault();
    login(dispatch, { email, password})
  }

  return (
    <div className='flex flex-col items-center justify-center h-[70vh] sm:h-[80vh]'>
      <Link to={'/'}>
        <img src={beeLogo} className='w-[40px]'/>
      </Link>
      
      <div className="w-[70%] sm:w-[50%] h-fit p-4 bg-zinc-400/50 min-w-fit rounded-md border-2 border-slate-400">
          <div className="flex flex-col w-full h-full justify-center items-center">
              <h1 className="mb-4 text-xl sm:text-2xl md:text-3xl">Login</h1>
              <form action="" className="flex flex-col gap-4 justify-center w-[80%] sm:w-[60%]">
                  <input onChange={(e) => setEmail(e.target.value)} type="email" autoComplete='username' placeholder="Email" className='p-2 text-black/50 border-2 border-transparent rounded-md hover:border-black/50'/>
                  <input onChange={(e) => setPassword(e.target.value)} type="password" autoComplete='current-password' placeholder="Password" className='p-2 text-black/50 border-2 border-transparent rounded-md hover:border-black/50'/>
                  {error && <div className='bg-red-500 p-2 text-white rounded-md text-center'>Invalid email or password</div>}
                  <button onClick={handleSubmit} className='sm:w-[60%] sm:self-center mt-2 text-md sm:text-lg md:text-xl bg-black text-white px-8 py-2 rounded-md'>Login</button>
              </form>
              <a href="" className='text-blue-600 hover:text-blue-800 font-medium'>Forgot your password?</a>
              <p>Or <Link to={'/signup'} className='text-blue-600 hover:text-blue-800 font-medium'>sign up</Link> if you don't have an account.</p>
          </div>
      </div>
    </div>
  )
}

export default Login