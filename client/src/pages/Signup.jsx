import React from 'react'
import SignupCard from '../components/Signup/SignupCard'

const Signup = () => {
  React.useEffect(() => {
    if(localStorage.getItem('token')){
      window.location.replace('/')
    }
  })
  return (
    <div className='py-10'>
        <h1 className='text-2xl font-semibold text-black text-center feather'>Sign up</h1>
        <div className='flex justify-center my-10'>
          <SignupCard />
        </div>
    </div>
  )
}

export default Signup