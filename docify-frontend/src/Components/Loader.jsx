import React from 'react';
import { IoDocumentTextOutline } from 'react-icons/io5';

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-16 h-16 animate-pulse">
          <IoDocumentTextOutline className="text-white text-6xl animate-bounce" />
          <div className="absolute -top-3 -right-3 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
        </div>
        <p className="text-white text-sm font-medium animate-pulse">Processing your doc...</p>
      </div>
    </div>
  );
};

export default Loader;
