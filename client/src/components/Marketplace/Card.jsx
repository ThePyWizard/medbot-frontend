import React from 'react'
import { useUserContext } from '../../context/UserContext'

const Card = ({id, name, number, address, img}) => {
    return(
        <div className='my-3 shadow-xl rounded px-2 py-2 h-400'>
            
            <div key={id} className="flex flex-col">
                <img src={img} className="w-52 h-52" />
                <h1 className="feather font-semibold text-black">{name}</h1>
                <h1 className="feather text-gray-500"> {address}</h1>
                <h1 className="feather text-gray-500"> {number}</h1>

                <a href={`tel:${number}`} className="feather bg-red-500 mt-20 text-white rounded-md px-2 py-1">Contact Now</a>
            </div>
        </div>
    )
}

export default Card