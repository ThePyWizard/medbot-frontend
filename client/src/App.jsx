import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import MarketPlace from './pages/MarketPlace';
import Game from './pages/Game';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Home from './pages/Home';
import TopNav from './components/Home/TopNav';
import BotNav from './components/Home/BotNav';
import Chat from './pages/Chat';
import BloodBank from './pages/Bloodbank';


function App() {
  
  return (
    <>
      <BrowserRouter>
        <TopNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<MarketPlace />} />
          <Route path="/bloodbank" element={<BloodBank />} />
          <Route path="/game" element={<Game />} />
          <Route path="*">"Not Found"</Route>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
        <BotNav />
      </BrowserRouter>
    </>
  );
}

export default App;