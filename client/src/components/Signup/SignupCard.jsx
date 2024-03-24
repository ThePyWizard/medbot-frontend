import React from 'react'
import { useAuthContext } from '../../context/AuthContext'
import { Link } from 'react-router-dom'

const SignupCard = () => {
    const { Signup, authError } = useAuthContext()
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [name, setName] = React.useState('')
    const [phone, setPhone] = React.useState('')
    const [date, setDate] = React.useState('')
    const [address, setAddress] = React.useState('')
  return (
    <div className='flex flex-col'>
      <div className='bg-white rounded-[10px] px-5 py-10 flex flex-col md:w-[500px]'>
          {authError.error && <p className='text-red-500'>{authError.message}</p>}
          <input onChange={e => setEmail(e.target.value)} type="text" placeholder='Enter email' className='feather border border-1 pl-2 py-1 my-3' />
          <input onChange={e => setPassword(e.target.value)} type="password" placeholder='Enter password' className='feather border border-1 pl-2 py-1 my-3' />
          <input onChange={e => setName(e.target.value)} type="text" placeholder='Enter name' className='feather border border-1 pl-2 py-1 my-3' />
          <input onChange={e => setDate(e.target.value)} type="date" className='feather border border-1 pl-2 py-1 my-3' />
          <input onChange={e => setPhone(e.target.value)} type="text" placeholder='Enter phone number' className='feather border border-1 pl-2 py-1 my-3' />
          <textarea onChange={e => setAddress(e.target.value)} type="text" placeholder='Enter address' className='feather border border-1 pl-2 py-1 my-3' />
           <button onClick={() => Signup(email, password, name, date, phone, address)} className='feather bg-red-500 hover:bg-red-600 text-white rounded px-3 py-1 mt-5'>Signup</button>
      </div>
      <p className='text-black feather'>Already have an account? <Link to='/login' className='text-red-500'>Sign in</Link> </p>
    </div>
  )
}

export default SignupCard