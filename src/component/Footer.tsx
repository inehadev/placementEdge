import React from 'react'

const Footer = () => {
  return (
    <div className=' h-[200px]  bg-green-900 flex justify-evenly gap-40'>
  <div className='text-xl ml-24 justify-center opacity-80 items-center flex'><span className='text-2xl opacity-70'>PlacementEdge</span></div>
  <div className='flex flex-col justify-center items-center gap-1'>
     <span className='opacity-70'>Product</span> 
     <span className='opacity-70'>Overview</span> 
     <span className='opacity-70'>Features</span> 
     <span className='opacity-70'>Solution</span> 
     <span className='opacity-70'>Tutorial</span> 
  </div>
  <div className='flex flex-col justify-center items-center gap-1'>
  <span className='opacity-70'>Company</span> 
     <span className='opacity-70'>Carreers</span> 
     <span className='opacity-70'>Press</span> 
     <span className='opacity-70'>News</span> 
     <span className='opacity-70'>Mediakit</span> 
  </div>
  
    </div>
  )
}

export default Footer
