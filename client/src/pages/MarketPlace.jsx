import React from 'react'
import { useUserContext } from '../context/UserContext'
import Card from '../components/Marketplace/Card'
import { useEffect } from 'react'

const MarketPlace = () => {
  const { fetchMarketplace, marketItems } = useUserContext()
  const [location, setLocation] = React.useState('')
  const [searchQuery, setSearchQuery] = React.useState('')

  React.useEffect(() => {
    fetchMarketplace()
  }, [])

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
  }

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      window.location.replace('/login');
    }
  }, []);

  return (
    <div className='mb-20 mt-5 px-5'>
      <div className="flex items-center mb-5">
        <select className='mr-3 feather bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline' onChange={e => setLocation(e.target.value)} name="district" id="">
          <option value="Calicut">Calicut</option>
          <option value="Kannur">Kannur</option>
          <option value="Ernakulam">Ernakulam</option>
          <option value="Trivandrum">Trivandrum</option>
        </select>
        <input
          type="text"
          placeholder="Search by role"
          value={searchQuery}
          onChange={handleSearchChange}
          className="feather bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          style={{ width: '200px' }}
        />
      </div>
      <h1 className='feather font-semibold text-black text-2xl'>Book your appointment now</h1>
      <div className='grid grid-cols-2'>
        {marketItems && marketItems
          .filter(data => data.address.includes(location))
          .filter(item => item.role.toLowerCase().includes(searchQuery.toLowerCase()))
          .map(item => (
            <Card key={item._id} id={item._id} img={item.img} name={item.name} number={item.number} role={item.role} address={item.address} />
          ))}
      </div>
    </div>
  )
}

export default MarketPlace
