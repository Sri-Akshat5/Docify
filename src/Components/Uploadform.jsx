import React, { useState } from 'react';
import { RiSendPlaneFill } from "react-icons/ri";
import { IoMdSend } from "react-icons/io";

function Uploadform() {
    const [isClicked, setIsClicked] = useState(false);
    
    function handleClick(){
        setIsClicked(true)
    };

  return (
    <div className={`flex justify-center items-center w-full max-w-[423px] mx-auto h-16 sm:h-20 rounded-full bg-zinc-600 ${isClicked ? `shadow-zinc-600/20 shadow lg `:``}`}>
      <input
      onClick={handleClick}
        id="fileUpload"
        type="file"
        name="hidden"
        accept=".pdf, .doc, .docx"
        required
        className={`w-full outline-none text-zinc-400 px-4 py-2 sm:px-8 sm:py-4 bg-transparent text-lg sm:text-2xl `}
      />
      <button className='px-4 sm:px-8 text-xl sm:text-2xl text-zinc-900'>
      {isClicked ? <IoMdSend /> :  <RiSendPlaneFill /> }
      </button>
    </div>
  );
}

export default Uploadform;
