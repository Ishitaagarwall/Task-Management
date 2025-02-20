import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";
const Cards = ({home, setInputDiv}) => {
    const data = [
        {
            title: "Task Manager",
            desc: "Task manager using MERN Stack for assessment",
            status: "Incomplete",
        },
        {
            title: "Task Manager",
            desc: "Task manager using MERN Stack for assessment",
            status: "Complete",
        },
        {
            title: "Task Manager",
            desc: "Task manager using MERN Stack for assessment",
            status: "Incomplete",
        },
        {
            title: "Task Manager",
            desc: "Task manager using MERN Stack for assessment",
            status: "Incomplete",
        },
    ];
    return (
        <div className='grid grid-cols-4 gap-4 p-4'>
            {data && data.map((items, i) => (
                <div className='flex flex-col justify-between border bg-blue-400 rounded-sm p-4'>
                    <h3 className='text-xl font-semibold'>{items.title}</h3>
                    <p className='text-black my-2'>{items.desc}</p>
                    <div className='mt-4 w-full flex items-center'>
                        <button className={`${items.status === "Incomplete"? "bg-red-400" : "bg-green-700"} p-2 rounded w-3/6`}>
                            {items.status}
                        </button>
                        <div className='text-black p-2 w-3/6 text-xl flex justify-around'>
                            <button><FaRegHeart /></button>
                            <button><FaEdit /></button>
                            <button><MdDelete /></button>
                        </div>
                    </div>
                </div>
            ))}
            {home==="true" && (
                 <button className='flex flex-col justify-center items-center border bg-blue-400 rounded-sm p-4 text-black hover:scale-105 hover:cursor-pointer transition-all duration-300' onClick={()=>setInputDiv("fixed")}>
                 <IoMdAddCircle className='text-5xl' />  
                  <h2 className='text-2xl mt-4'>Add Task</h2>
                 </button>
            )}
           
        </div>
    )
}

export default Cards