import React from 'react';
import Card from '../components/Game/Card';
import Content from '../components/Home/Content';
import { useEffect } from 'react';

const Home = () => {

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      window.location.replace('/login');
    }
  }, []);
  return (
    
    <div className='px-5 py-5'>
      <Card />
      <Content />
      
    </div>
  );
};

export default Home;
