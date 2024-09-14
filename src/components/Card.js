import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoCloseCircleSharp } from "react-icons/io5";
import { motion } from "framer-motion"

function Card({data,reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.1}} className='relative w-60 h-72 bg-zinc-900 rounded-[40px] text-white px-8 py-10 overflow-hidden flex-shrink-0'>
        <FaFileAlt />
        <p className='text-sm mt-5 font-semibold'>{data.desc}</p>
        <div className='footer absolute bottom-0  w-full  left-0'>
            <div className='flex items-center justify-between py-3 px-8 mb-3'>
                <h5>{data.filesize}</h5>
                <span className='w-7 h-7 rounded-full flex items-center justify-center'>
                   {!data.close ? <LuDownload size='1.3em' color='#fff'  style={{ border: '2px solid #000',  borderRadius: '50%',  padding: '4px'}}/> 
                              : <IoCloseCircleSharp size='1.3em' color='#fff' style={{ border: '2px solid #000',  borderRadius: '50%',  padding: '2px'}}/>} 
                </span>
            </div>
            {
                data.tag.isOpen && (
                <div className={`tag w-full py-4 ${data.tag.tagColor} flex items-center justify-center`}>
                    <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
                </div>
                )
            }
        </div>
    </motion.div>
  )
}

export default Card