import React, { useRef } from 'react'
import Cards from './Cards'

const ForeGround = () => {
  const ref = useRef(null)
  const data = [
  {
    desc:" Lorem ipsum, dolor sit amet consectetur adipisicing.",
    fileSize:"1.4mb",
    close: false,
    tag:{
      isOpen: true,
      tagTitle : "Download now!",
      tagColor : "green"
    }
  },
  {
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit.",
    fileSize:"0/5mb",
    close: true,
    tag:{
      isOpen: true,
      tagTitle : "Download now!",
      tagColor : "blue"
    }
  },
  {
    desc:" Lorem ipsum dolor sit amet consectetur adipisicing elit." ,
    fileSize:"1.6mb",
    close: false,
    tag:{
      isOpen: true,
      tagTitle : "Download now!",
      tagColor : "red"
    }
  }
]
  return (
    <>
       <div ref={ref} className=' p-5 flex gap-5 flex-wrap fixed top-0 left-0 z-[3] w-full h-full'>
        {data.map((items,index) =>(
          <Cards data = {items} reference={ref} />
        ))}
        </div>
    </>
  )
}

export default ForeGround
