import React from 'react'
import { useUserContext } from '../../context/UserContext'

const TopNav = () => {
  const { profile } = useUserContext()
  return (
    <div className='bg-red-500 py-0 flex items-center z-20 relative'>
        <img src="/bloodlogo.svg" className='w-11 h-11 mr-1 ml-1' />
        <div className='flex ml-7'>
          <span className='feather ml-[-30px] text-center text-white font-bold text-3xl'>med</span><span className='feather text-white font-bold text-3xl'>bot</span>
        </div>
        
    </div>
  )
}

export default TopNav