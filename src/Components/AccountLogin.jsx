import React from 'react'


function AccountLogin() {
  return (
    <div className="fixed z-10 inset-0 flex items-center justify-center bg-zinc-600/70 px-4">
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl bg-zinc-900 rounded-xl shadow-lg p-6 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-zinc-300 mb-6">
          Account
        </h2>
        
        <p className="text-lg text-center sm:text-xl font-medium text-red-500">
            Login to access 
          </p>
          <div className='relative flex justify-between'>

          <p className='text-center text-zinc-400 mt-4'>Already have an account ? <a href="/login" className='text-green-400 hover:underline'>Log In</a></p>
          <p className="text-center text-zinc-400 mt-4">
          Don't have an account? <a href="/signup" className="text-green-400 hover:underline">Sign Up</a>
        </p>
          </div>
      </div>
    </div>
  )
}

export default AccountLogin