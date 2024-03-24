import React from 'react'
import { useUserContext } from '../context/UserContext'

const displayMessage = (message, position) => {
  if(position == 'right'){
    return (
      <div className='flex relative items-center my-5 ml-[270px]'>
        <div className='rounded-[15px] px-3 py-2 bg-red-300 '>
          <p className='feather text-black'>{message}</p>
        </div>
        <i class="ml-2 fa-solid fa-user"></i>
      </div>
    )
  }else if(position == 'left'){
    return (
      <div className='flex relative items-center my-5'>
        <i class="mr-2 fa-solid fa-robot text-2xl"></i>
        <div className='rounded-[15px] px-3 py-2 bg-zinc-300 '>
          <p className='feather text-black'>{message}</p>
        </div>
      </div>
    )
  }
}

const Chat = () => {
  const [message, setMessage] = React.useState('')

  const { messages, setMessages, sendMessage } = useUserContext()

  const handleSubmit = () => {
    setMessages([...messages, {from: 'user', message: message}])
    setMessage('')
    sendMessage(message)
  }
  return (
    <div>
        {/* <div className='bg-gray-100 px-3 py-3 flex items-center'>
            <i class="fa-solid fa-carrot text-2xl"></i>
            <p className='ml-2 text-xl font-semibold'>Tomato</p>
        </div> */}
        

        <div className='px-5 py-5 overflow-y-auto mb-40'>
          {messages.map(message => {
            if(message.from == 'user'){
              return displayMessage(message.message, 'right')
            }else{
              return displayMessage(message.message, 'left')
            }
          })}
        </div>

        <div className='fixed bottom-[100px] w-full px-3 flex bg-white '>
            <input onChange={(e) => setMessage(e.target.value)} type="text" placeholder="Enter message" className='feather rounded border-2 w-full px-5 py-2' />
            <button onClick={handleSubmit} className='rounded bg-[#f44242] px-5 ml-2'>
              <i class="fa-solid fa-paper-plane text-white"></i>
            </button>
        </div>
    </div>
  )
}

export default Chat