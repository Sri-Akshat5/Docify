import React from 'react';
import AccountLogin from './AccountLogin';


function Account() {
  const token = localStorage.getItem("token");

  return (
    <>
      {!token ? (
        <div className="fixed z-10 inset-0 flex items-center justify-center bg-zinc-600/70 px-4">
          <div className="w-full max-w-md sm:max-w-lg md:max-w-xl bg-zinc-900 rounded-xl shadow-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-zinc-300 mb-6">
              Account
            </h2>
            <div className="space-y-4 sm:space-y-5">
              <p className="text-lg sm:text-xl font-medium text-zinc-300">
                <span className="font-semibold text-zinc-400">Name:</span> Akshat Srivastava
              </p>
              <p className="text-lg sm:text-xl font-medium text-zinc-300">
                <span className="font-semibold text-zinc-400">Email:</span> Akshatsrivastava@gmail.com
              </p>
            </div>
            <div className="mt-6 flex justify-center">
              <button className="bg-red-600 px-6 py-2 rounded-lg text-lg sm:text-xl font-medium text-white transition-all hover:bg-red-700 active:scale-95">
                Logout
              </button>
            </div>
          </div>
        </div>
      ) : (
        <AccountLogin />
      )}
    </>
  );
}

export default Account;
