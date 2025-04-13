import React from 'react'
import { useNavigate } from 'react-router-dom'

function LoginSignup() {
    
    const navigate = useNavigate();

  return (
    <div className=' absolute flex justify-center items-center w-full max-w-[423px] mx-auto h-16 sm:h-20 rounded-full bg-zinc-600 hover:shadow-zinc-600/20 shadow-lg'>
        <div className='flex gap-10'>
            <button onClick={()=> navigate("/login")} className='cursor-pointer p-5 text-zinc-400 text-2xl font-medium hover:text-green-500'>Log In          
            </button>
            <button onClick={()=> navigate("/signup")} className='cursor-pointer p-5 text-zinc-400 text-2xl font-medium hover:text-green-500'>Sign Up          
            </button>

        </div>
    </div>
  )
}

export default LoginSignup