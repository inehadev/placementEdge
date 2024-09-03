import React from 'react'

const Footer = () => {
  return (
    <div className='ml-10 mr-10 h-[200px] bg-opacity-45 bg-green-200 flex justify-evenly gap-24'>
  <div className='text-xl ml-10 justify-center items-center flex'>PlacementEdge</div>
  <div className='flex flex-col justify-center items-center gap-1'>
     <span>Product</span> 
     <span>Overview</span> 
     <span>Features</span> 
     <span>Solution</span> 
     <span>Tutorial</span> 
  </div>
  <div className='flex flex-col justify-center items-center gap-1'>
  <span>Company</span> 
     <span>Carreers</span> 
     <span>Press</span> 
     <span>News</span> 
     <span>Mediakit</span> 
  </div>
  <div className='flex flex-col justify-center items-center gap-1'>
  <span></span> 
     <span></span> 
     <span></span> 
     <span></span> 
     <span></span> 
  </div>
    </div>
  )
}

export default Footer
