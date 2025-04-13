import React from 'react';
import Eyes from './Eyes';

function Background() {
  return (
    <div className="w-full h-screen bg-zinc-900">
   
      <div className="w-full h-full flex justify-center items-center px-4">
      <Eyes/>
        <h1 className="text-zinc-600 text-5xl sm:text-7xl md:text-9xl font-bold leading-tight text-center">
          DOCIFY.
        </h1>
      </div>
    </div>
  );
}

export default Background;
