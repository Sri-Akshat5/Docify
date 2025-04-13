import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import { FaFileDownload } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import 'react-quill/dist/quill.snow.css';


function Card({ title, description, id, onDelete, onEdit }) {
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(title);
    const [newDesc, setNewDesc] = useState(description);

    const handleSave = () => {
        onEdit(id, newTitle, newDesc);
        setIsEditing(false);
        window.location.href = "/";
    };

    const handleDownload = () => {
        const content = `
            <html>
            <head><meta charset='utf-8'><title>Export</title></head>
            <body>
                <h2>${newTitle}</h2>
                <p>${newDesc}</p>
            </body>
            </html>`;
    
        const blob = new Blob(['\ufeff', content], {
            type: 'application/msword',
        });
    
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `${newTitle || "card"}.doc`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
        
    return (
        <motion.div
            className="relative w-[200px] sm:w-[250px] h-[240px] sm:h-[260px] rounded-[20px] bg-zinc-800/90 text-white px-4 py-5 overflow-hidden shadow-lg cursor-grab active:cursor-grabbing"
            drag
            dragConstraints={{ left: -0, right: 100, top: -50, bottom: 50 }}
            animate={{ scale: 1, opacity: 1 }}
            initial={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
           
            <IoDocumentTextOutline className="text-lg sm:text-xl" />

            
            <div className="mt-2">
                {isEditing ? (
                    <>
                        <input
                            value={newTitle}
                            onChange={(e) => setNewTitle(e.target.value)}
                            className="w-full mb-1 px-1 text-sm bg-zinc-700 rounded"
                        />
                        <textarea
                            value={newDesc}
                            onChange={(e) => setNewDesc(e.target.value)}
                            className="w-full px-1 text-sm bg-zinc-700 rounded "
                        />
                        <button onClick={handleSave} className="text-green-400 mt-1 text-xs cursor-pointer">
                            Save
                        </button>
                    </>
                ) : (
                    <p className="text-sm leading-tight">{description}</p>
                )}
            </div>

          
            <div className="absolute bottom-0 left-0 flex justify-between items-center px-5 bg-zinc-600 w-full h-8 rounded-b-[20px]">
                <p className="text-xs sm:text-sm truncate">{title}</p>
                <div className="flex gap-2">
                    <FiEdit
                        className="text-lg cursor-pointer hover:text-green-300"
                        onClick={() => setIsEditing(!isEditing)}
                    />
                    <FaFileDownload className="text-lg cursor-pointer hover:text-gray-300"  onClick={handleDownload}/>
                    <RiDeleteBinLine
                        className="text-lg cursor-pointer hover:text-red-500"
                        onClick={function(){onDelete(id);  window.location.href = "/";}}
                    />
                </div>
            </div>
            
        </motion.div>
    );
}

export default Card;
