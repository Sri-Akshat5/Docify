import React from 'react'
import { useNavigate } from 'react-router-dom';

function AccountLogin() {

  const navigate = useNavigate();
  const close = function(){
    navigate("/");
  }

  return (
    <div className="fixed z-10 inset-0 flex items-center justify-center bg-zinc-600/70 px-4">
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl bg-zinc-900 rounded-xl shadow-lg p-3 sm:p-8">
      <div className='flex justify-end'>
           <button className='text-zinc-300 cursor-pointer hover:text-red-500' onClick={close}> x </button>
          </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-zinc-300 mb-6">
          Account
        </h2>
        
        <p className="text-lg text-center sm:text-xl font-medium text-red-500">
            Login to access 
          </p>
          <div className='relative flex justify-between'>

          <p className='text-center text-zinc-400 m-0.5 mt-4 '>Already have an account ? <a href="/login" className='cursor-pointer text-green-400 hover:underline'>Log In</a></p>
          <p className="text-center text-zinc-400 m-0.5 mt-4">
          Don't have an account? <a href="/signup" className="text-green-400 hover:underline cursor-pointer">Sign Up</a>
        </p>
          </div>
      </div>
    </div>
  )
}

export default AccountLogin