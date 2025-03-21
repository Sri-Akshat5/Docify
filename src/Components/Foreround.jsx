import React from 'react';
import Textbox from './Textbox';
import Uploadform from './Uploadform';
import { useLocation } from 'react-router-dom';

import LoginSignup from './LoginSignup';
import Account from './Account';
import Card from './Card';


const token = localStorage.getItem("token");

function Foreround() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <>
   
    {!token && (
        <div className="absolute z-10 flex flex-wrap gap-2 mt-18 mx-5 w-full max-w-[90%] ">
          <Card /> 
        </div>
    )}
      <div className="absolute w-full h-full bg-transparent left-0 top-0 flex justify-center items-end pb-6 sm:pb-10 text-amber-50 text-2xl">
     
        {!token ? (
          path === "/" ? (<Textbox />) : path === "/upload" ? (<Uploadform />) : ("AI Coming Soon")  
        ) : (<LoginSignup />) }
        {!token ? (path === "/account" ? <Account /> : null) : null}
       
      </div>





    </>
  );
}

export default Foreround;

