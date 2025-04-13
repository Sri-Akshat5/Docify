import React, { useState, useEffect } from 'react';
import AccountLogin from './AccountLogin';
import { useNavigate } from 'react-router-dom';
import { userAccount } from '../api/auth';


function Account() {
  const token = localStorage.getItem("token");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const navigate = useNavigate();
  
  const handelSubmit =  function(){
    localStorage.removeItem("token");
   window.location.href = "/";
  }
  const close = function(){
    navigate("/");
  }

  useEffect(() => {
    if (token) {
      userAccount().then(result => {
        if (result.success) {
          setName(result.name);
          setEmail(result.email);
        } else {
          setStatus(result.message);
        }
      });
    }
  }, [token]);

 
  console.log({name , email});

  return (
    <>
      {token ? (
        <div className="fixed z-10 inset-0 flex items-center justify-center bg-zinc-600/70 px-4">
         
          <div className="w-full max-w-md sm:max-w-lg md:max-w-xl bg-zinc-900 rounded-xl shadow-lg p-6 sm:p-8">
          <div className='flex justify-end'>
           <button className='text-zinc-300 cursor-pointer hover:text-red-500' onClick={close}> x </button>
          </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-zinc-300 mb-6">
              Account
            </h2>
            <div className="space-y-4 sm:space-y-5" >
              <p className="text-lg sm:text-xl font-medium text-zinc-300">
                <span className="font-semibold text-zinc-400" >Name:</span> {name}
              </p>
              <p className="text-lg sm:text-xl font-medium text-zinc-300">
                <span className="font-semibold text-zinc-400" >Email:</span> {email}
              </p>
            </div>
            <div className="mt-6 flex justify-center">
              <button onClick={handelSubmit} className="bg-red-600 px-6 py-2 rounded-lg text-lg sm:text-xl font-medium text-white transition-all hover:bg-red-700 active:scale-95 cursor-pointer">
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
