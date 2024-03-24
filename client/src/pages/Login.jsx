import React from 'react'
import LoginCard from '../components/Login/LoginCard'

const Login = () => {
  React.useEffect(() => {
    if(localStorage.getItem('token')){
      window.location.replace('/')
    }
  })
  return (
    <div className='py-40'>
        <h1 className='text-2xl font-semibold text-black text-center feather'>Login</h1>
        <div className='flex justify-center my-10'>
            <LoginCard />
        </div>
    </div>
  )
}

export default Login