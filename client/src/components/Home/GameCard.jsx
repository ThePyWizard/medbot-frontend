import React from 'react'
import { Link } from 'react-router-dom';
import { useUserContext } from '../../context/UserContext';

const doctorsData = [
  {
    name: "Dr. John Doe",
    specialization: "Oncologist",
    hospital: "Medical College, Ernakulam",
    phoneNumber: "9854756321"
  },
  {
    name: "Dr. Varghese Pappachan",
    specialization: "Dermatologist",
    hospital: "Medical College, Kottayam",
    phoneNumber: "9854756456"
  }
  // Add more doctor objects as needed
];

const GameCard = () => {
  const { profile } = useUserContext();

  return (
    <>
      {doctorsData.map((doctor, index) => (
        <Link to='/game' key={index}>
          <div className='rounded-[15px] h-[130px] bg-white custom-shadow-1 mb-10 px-5'>
            <div className='flex'>
              
              {profile && (
                <h3 className='ml-[90px] !font-extrabold text-xl mt-3 feather text-zinc-800'>
                  {doctor.name} <span className='text-[#16A637]'>{profile.day * profile.day * 10}</span>
                </h3>
              )}
            </div>
            {profile && profile.day === 0 ? (
              <p className='ml-[90px] mt-2 text-zinc-500 feather'>
                {doctor.specialization} <br />
                {doctor.hospital} <br />
                {doctor.phoneNumber}
              </p>
            ) : (
              <p className='ml-[90px] mt-2 text-zinc-500 feather'>
                {doctor.specialization} <br />
                {doctor.hospital} <br />
                {doctor.phoneNumber}
              </p>
            )}
          </div>
        </Link>
      ))}
    </>
  );
};
export default GameCard