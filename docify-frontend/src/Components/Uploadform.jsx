import React, { useState } from 'react';
import { IoMdSend } from "react-icons/io";
import { uploadCardFile } from '../api/upload';

function Uploadform() {
  const [isClicked, setIsClicked] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;
    try {
      const data = await uploadCardFile(selectedFile);
      window.location.href = "/";
    } catch (err) {
      console.error("Upload failed:", err);
    }
  };
  function handleClick(){
    setIsClicked(true)
};
  return (
    <div className={`z-50 flex justify-center items-center w-full max-w-[423px] mx-auto h-16 sm:h-20 rounded-full bg-zinc-600 ${isClicked ? `shadow-zinc-600/20 shadow lg` : ``}`}>
      <input
        onChange={handleFileChange}
        id="fileUpload"
        type="file"
        name="hidden"
        accept=".pdf, .doc, .docx"
        required
        className="w-full outline-none text-zinc-400 px-4 py-2 sm:px-8 sm:py-4 bg-transparent text-lg sm:text-2xl cursor-pointer"
      />
      <button
        onClick={function(){handleUpload(); handleClick();}}
        className="px-4 sm:px-8 text-xl sm:text-2xl text-zinc-900"
      >
       <IoMdSend className='cursor-pointer '/> 
      </button>
      
    </div>
  );
}

export default Uploadform;
