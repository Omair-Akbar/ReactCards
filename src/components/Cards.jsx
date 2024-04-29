import React from 'react'
import { FaRegFileLines } from "react-icons/fa6";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"


const Cards = ({data,reference}) => {
    let styles = {
        fontFamily: "Righteous",
        fontWeight: "400",
        fontStyle: "normal",
    }
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.1}} className='relative flex-shrink-0 p-8 w-60 h-72 rounded-[50px] text-white bg-black z-30 overflow-hidden' >
    <FaRegFileLines />
    <p style={styles} className=' text-x mt-5 font-semibold '>{data.desc}</p>
    <div className='footer absolute bottom-8 mb-4  w-full h-10 left-0' >
      <div className='flex mb-4 items-center justify-between px-10'>
        <h5>{data.fileSize} </h5>
        <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
        {data.close ? <IoClose size=".9em" color='#fff' /> : <LuDownload size=".7em" color='#fff'/> }
        </span>
      </div>
      {data.tag.isOpen && <div className={`tag w-full py-3 ${data.tag.tagColor === "blue" && "bg-blue-600"} ${data.tag.tagColor === "green" && "bg-green-600"} ${ data.tag.tagColor === "red" && "bg-red-600"} flex justify-center items-center`}>
        <h3 className='text-sm font-semibold'>{data.tag.tagTitle} </h3>
      </div>}
    </div>

        tag
    </motion.div>
  )
}

export default Cards
