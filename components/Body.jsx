import React from 'react'
import Dweep from '../assets/dweep io 1.png'

const Body = () => {
  return (
    <div className='bg-[#FFCD9E] py-28'>
      <img className='mr-24' align="right" src={Dweep} alt="/" />
      <h1 className='ml-60 font-body font-bold text-3xl flex justify-between items-center max-w-[1440px] mx-auto py-8'>An inspiring design delivered to <br /> your inbox every morning</h1>
      <p className='ml-60 font-body flex justify-between items-center max-w-[1440px] mx-auto'>Our team scouts the internet for the best designs, <br />illustrations and art and delivers a truly inspiring <br />one every day to your inbox</p>
      <h2 className='ml-60 font-body flex justify-between items-center max-w-[1440px] mx-auto font-bold py-8'>Show me how it looks</h2>  
      
    
        <input className='ml-60 font-body rounded-md p-3 border-black w-72' type="email" placeholder='Your e-mail address' />
        <button className='font-body bg-black text-white rounded-md font-medium w-[200px] ml-4 my-6 p-3.5'>Register Now</button>
        <p className='text-white ml-64'>Free - No spam - No Data Sharing</p>
        
    
    
    </div>
    
    
  )
}

export default Body
