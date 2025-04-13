import React, { useState } from 'react';
import { RiSendPlaneFill } from "react-icons/ri";
import { IoMdSend } from "react-icons/io";
import { createCard } from '../api/card';

function Textbox({ onCardCreated }) {
   const [isClicked, setIsClicked] = useState(false);
   const [text, setText] = useState(""); 
   const token = localStorage.getItem('token');

   const handleClick = async () => {
      setIsClicked(true);
      if (text.trim() !== "") {
         const result = await createCard(text);
         if(result.success && onCardCreated){
            onCardCreated(result.card);
         }

         console.log("Message sent:", result);
         setText(""); 
      }
   };

   const handleKeyPress = (e) => {
      if (e.key === "Enter") {
         handleClick();
      }
   };

   return (
      <div className="px-4 z-50">
         <div className={`relative flex justify-center items-center w-full max-w-[600px] mx-auto h-16 sm:h-20 rounded-full bg-zinc-600 ${isClicked ? `shadow-zinc-600/20 shadow-lg` : ``}`}>
            <input
               disabled={!token}
               onClick={() => setIsClicked(true)}
               type="text"
               value={text} 
               onChange={(e) => setText(e.target.value)} 
               onKeyPress={handleKeyPress} 
               placeholder="Type Here"
               className={`w-full outline-none text-amber-50 px-4 py-2 sm:px-8 sm:py-4 bg-transparent text-lg sm:text-2xl placeholder-zinc-400`}
            />
            <button className="px-4 sm:px-8 text-xl sm:text-2xl text-zinc-900 cursor-pointer" onClick={handleClick}>
               {isClicked ? <IoMdSend /> : <RiSendPlaneFill />}
            </button>
         </div>
         
      </div>
   );
}

export default Textbox;
