import React, { useRef } from 'react'
import Card from './Card'


function Foreground() {

    const ref = useRef(null);

    const data = [
        {
            desc: 'This project utilizes React and Tailwind CSS to bulid project.',
            filesize: '.7mb',
            close:true,
            tag: {
                isOpen:true,
                tagTitle:'Download Now',
                tagColor:'bg-green-600',
            }
        },
        {
            desc: 'Key features include drag-and-drop functionality with Framer Motion',
            filesize: '.5mb',
            close:false,
            tag: {
                isOpen:true,
                tagTitle:'Download Now',
                tagColor:'bg-blue-600',
            }
        },
        {
            desc: 'To create a dynamic, interactive user interface with draggable components and customizable styles',
            filesize: '.9mb',
            close:true,
            tag: {
                isOpen:false,
                tagTitle:'Download Now',
                tagColor:'bg-green-600',
            }
        },
        {
            desc: 'To run the application locally and view the interactive features.',
            filesize: '.11mb',
            close:false,
            tag: {
                isOpen:true,
                tagTitle:'Download Now',
                tagColor:'bg-red-500',
            }
        }
    ]
  return (
    <div ref={ref} className='fixed top-0 z-[3] w-full h-full by-sky-800 flex gap-10 flex-wrap p-5'>
       { 
           data.map((item,idx)=>{
              return <Card data={item} reference={ref}/>
           })
       }
    </div>
  )
}

export default Foreground