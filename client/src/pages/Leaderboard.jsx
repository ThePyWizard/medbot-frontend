import React from 'react'
import { useUserContext } from '../context/UserContext'

const Leaderboard = () => {
    const { users, fetchUsers, fetchProfile } = useUserContext()
    React.useEffect(() => {
        fetchUsers()
        fetchProfile()
    }, [])
  return (
    <div className='flex flex-col'>
        <i class="fa-solid fa-trophy text-[#F1FF05] text-5xl text-center my-10"></i>
        <div className='px-5'>
            { users && users.sort((a, b) => b.points - a.points).map((user, i) => (
                <div key={i} className='flex justify-between bg-[#E9E9E9] px-5 py-5 my-5 rounded-[20px]'>
                    <p className='feather text-xl'>{user.name}</p>
                    <div className='flex items-center'>
                        <i class="fa-solid fa-leaf text-purple-600 mr-3"></i>
                        <p className='feather text-xl'>{user.points}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Leaderboard