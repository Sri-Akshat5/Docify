import React from "react";
import { motion } from "framer-motion";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaFileDownload } from "react-icons/fa";

function Card() {
    return (
        <motion.div
            className=" relative w-[200px] sm:w-[250px] h-[240px] sm:h-[260px] rounded-[20px] bg-zinc-800/90 text-white px-4 py-5 overflow-hidden shadow-lg cursor-grab active:cursor-grabbing"
            drag
            dragConstraints={{ left: -100, right: 100, top: -50, bottom: 50 }}
            animate={{ scale: 1, opacity: 1 }}
            initial={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {/* Icon */}
            <IoDocumentTextOutline className="text-lg sm:text-xl" />

            {/* Text */}
            <p className="text-sm leading-tight mt-2">
            Hi, I'm Docify, the new-gen document creator and manager!  
        Just type here, and your doc is ready—no need to create a new file every time like before.  
        I'm ready with my frontend, coming soon with full working potential!
            </p>

            {/* Footer */}
            <div className="absolute bottom-0 left-0 flex justify-between items-center px-5 bg-zinc-600 w-full h-8 rounded-b-[20px]">
                <p className="text-xs sm:text-sm">Docify</p>
                <FaFileDownload className="text-lg cursor-pointer hover:text-gray-300" />
            </div>
        </motion.div>
    );
}

export default Card;
