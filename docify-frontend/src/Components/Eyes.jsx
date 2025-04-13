import React, { useEffect, useState } from 'react'

function Eyes() {
    const [rotate, setRotate] = useState(0);

    useEffect(()=>{
        window.addEventListener("mousemove", (e)=>{
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX= mouseX-window.innerWidth/2;
            let deltaY= mouseY-window.innerHeight/2;

            var angle = Math.atan2(deltaY,deltaX) * (180/Math.PI);

            setRotate(angle-180);
        })
    })
    return (
        <div className='absolute  top-1/4 left-1/2 -translate-[50%] flex gap-10 '>
            <div className='w-[20vw] sm:w-[10vw] h-[20vw] sm:h-[10vw] flex items-center justify-center bg-zinc-500 rounded-full'>
                <div className=' relative w-2/3 h-2/3 flex items-center justify-center  bg-zinc-900 rounded-full'>
                    <div style={{ transform: `rotate(${rotate}deg)` }} className='absolute w-full '>
                    <div className='w-4 h-4 sm:w-8 sm:h-8 bg-zinc-100 rounded-full'>
                    </div>
                    </div>
                </div>
            </div>
            <div className='w-[20vw] sm:w-[10vw] h-[20vw] sm:h-[10vw] flex items-center justify-center bg-zinc-500 rounded-full'>
                <div className=' relative w-2/3 h-2/3 flex items-center justify-center  bg-zinc-900 rounded-full'>
                    <div style={{ transform: `rotate(${rotate}deg)` }} className='absolute w-full'>
                    <div className='w-4 h-4 sm:w-8 sm:h-8 bg-zinc-100 rounded-full'>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Eyes