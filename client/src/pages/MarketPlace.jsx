import React from 'react'
import { useUserContext } from '../context/UserContext'
import Card from '../components/Marketplace/Card'


const MarketPlace = () => {
  const { fetchMarketplace, marketItems } = useUserContext()
  const [location, setLocation] = React.useState('')
  React.useEffect(() => {
    fetchMarketplace()
  }, [])
  return (
    <div className='mb-20 px-5'>
      <select className='mt-5 mb-5 feather bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline' onChange={e => setLocation(e.target.value)} name="district" id="">
        <option value="Calicut">Calicut</option>
        <option value="Kannur">Kannur</option>
        <option value="Ernakulam">Ernakulam</option>
        <option value="Trivandrum">Trivandrum</option>

      </select>
      <h1 className='feather font-semibold text-black text-2xl'>Book your appointment now</h1>
      <div className='grid grid-cols-2'>
        {marketItems && marketItems.filter(data => data.address.includes(location)).map(item => (
          <Card key={item._id} id={item._id} img={item.img} name={item.name} number={item.number} address={item.address} />
        ))}
      </div>
    </div>
  )
}

export default MarketPlace