import React from 'react'
import { useUserContext } from '../context/UserContext'
import Card from '../components/Bloodbank/Card'
import { useEffect } from 'react'

const BloodBank = () => {
  const { fetchBloodbank, bloodbank } = useUserContext()
  const [location, setLocation] = React.useState('')
  const [searchQuery, setSearchQuery] = React.useState('')

  React.useEffect(() => {
    fetchBloodbank()
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
          <option value="">Select District</option>
          <option value="Kochi">Kochi</option>
          <option value="Kannur">Kannur</option>
          <option value="Ernakulam">Ernakulam</option>
        </select>
        <select
          className="feather bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          value={searchQuery}
          onChange={handleSearchChange}
          style={{ width: '200px' }}
        >
          <option value="">Select Blood Group</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
        </select>
      </div>
      <h1 className='feather font-semibold text-black text-2xl'>Donate your blood now</h1>
      <div className='grid grid-cols-2 gap-2'>
        {bloodbank && bloodbank
          .filter(data => data.address.includes(location))
          .filter(item => item.groups_needed.toLowerCase().includes(searchQuery.toLowerCase()))
          .map(item => (
            <Card key={item._id} id={item._id} img={item.img} name={item.name} number={item.number} address={item.address} groups_needed={item.groups_needed}/>
          ))}
      </div>
    </div>
  )
}

export default BloodBank
