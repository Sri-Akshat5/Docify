import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

  };

  return (
        <div className="absolute w-full h-full bg-zinc-600/70 left-0 top-0 flex justify-center items-end pb-6 sm:pb-10">
      <div className=" w-xl  px-8 py-6 bg-zinc-900 rounded-xl shadow-md">
        <h2 className="text-3xl font-bold text-center text-zinc-300 mb-6">Log In</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-lg bg-zinc-800 text-zinc-300 placeholder-zinc-400 focus:outline-none"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-lg bg-zinc-800 text-zinc-300 placeholder-zinc-400 focus:outline-none"
            required
          />
          <button
            type="submit"
            className="w-full p-3 mt-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium"
          >
            Log In
          </button>
        </form>
        <p className="text-center text-zinc-400 mt-4">
          Don't have an account? <a href="/signup" className="text-green-400 hover:underline">Sign Up</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
