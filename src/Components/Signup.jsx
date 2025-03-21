import React, { useState } from 'react'

function Signup() {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
    };

  return (
    <div className='absolute w-full h-full bg-zinc-600/70 left-0 top-0 flex justify-center items-end pb-6 sm:pb-10'>
        <div className='w-xl px-8 py-4 bg-zinc-900 rounded-xl shadow-md '>
            <h2 className='text-3xl font-bold text-center text-zinc-300 mb-4'>Sign Up</h2>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                <input type='text' placeholder='Name' value={name} onChange={(e)=> setname(e.target.value)} className='w-full p-3 rounded-lg bg-zinc-800 text-zinc-300 placeholder-zinc-400 focus:outline-none'/>
                <input type="text" placeholder='Email' value={email} onChange={(e)=>setname(e.target.value)} className='w-full p-3 rounded-lg bg-zinc-800 text-zinc-300 placeholder-zinc-400 focus:outline-none'/>
                <input type="text" placeholder='Password' value={password} onChange={(e)=> setpassword(e.target.value)} className='w-full p-3 rounded-lg bg-zinc-800 text-zinc-300 placeholder-zinc-400 focus:outline-none'/>
                <button type='submit' className='w-full p-3 mt-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium'>
                    Sign Up
                </button>
            </form>
            <p className='text-center text-zinc-400 mt-4'>Already have an account ? <a href="/login" className='text-green-400 hover:underline'>Log In</a></p>
        </div>
    </div>
  )
}

export default Signup