import React from 'react'

const Card = ({order, img, name, price}) => {
  return (
    <div className='px-5 py-2'>
        <div className='shadow-xl flex justify-between rounded p-5 mb-5'>
            <div>
                <img src={img} alt={name} className='w-20 h-20' />
            </div>
            <div>
                <h1 className='feather text-xl font-semibold'>{name}</h1>
                <h1 className='feather text-xl font-semibold'>₹ {price}</h1>
            </div>
            <div>
                <h1 className='feather text-xl font-semibold'>Qty: {order.quantity}</h1>
            </div>
        </div>
    </div>
  )
}

export default Card