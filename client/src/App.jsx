import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import MarketPlace from './pages/MarketPlace';
import Game from './pages/Game';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Profile from './pages/Profile';
import News from './pages/News';
import NewsArticle from './pages/NewsArticle';
import Home from './pages/Home';
import Steps from './pages/Steps';
import TopNav from './components/Home/TopNav';
import BotNav from './components/Home/BotNav';
import Chat from './pages/Chat';
import Leaderboard from './pages/Leaderboard';
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
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<NewsArticle />} />
          <Route path="/steps" element={<Steps />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
        <BotNav />
      </BrowserRouter>
    </>
  );
}

export default App;