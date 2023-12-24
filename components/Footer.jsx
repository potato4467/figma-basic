import React from 'react'
import {
    FaLinkedin,
    FaInstagram,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full mx-auto bg-black text-white py-16 grid-cols-2 flex-col justify-between'>
        <div>
      <ul>
        <li className='ml-72 py-1'>Prompt Generator</li>
        <li className='float-right mr-72'>Dweep.io</li> <br />
        <li className='float-right mr-72'>Made with love in India</li> <br />
        <div className='mr-72'>
                <FaInstagram size={30} className='cursor-pointer float-right size' />
                <FaLinkedin size={30} className='cursor-pointer float-right size' />
                
            </div>
        <li className='ml-72 py-1'>Dweep Daily</li>
        <li className='ml-72 py-1'>All Contributors</li>
        <li className='ml-72 py-1'>Your Data on Dweep.io</li>
        <li className='float-right mr-72'>hello@dweep.io</li>
        <li className='ml-72 py-1'>Contribute to Dweep</li>
      </ul>
      </div>
      <div className=''>
        <ul>
            
            
           
            
        </ul>
      </div>
    </div>
  )
}

export default Footer
