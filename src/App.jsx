import React from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Login from './pages/Auth/Login/Login';
import Sign from './pages/Auth/Sign/Sign';
import NotFound from './pages/Error/NotFound';
import Home from './pages/Home/Home';
import Edit from './pages/Post/Edit/Edit';
import Post from './pages/Post/Post';
import Upload from './pages/Post/Upload/Upload';
import Follower from './pages/Profile/Follower/Follower';
import Following from './pages/Profile/Following/Following';
import Profile from './pages/Profile/Profile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/*" element={<Outlet />}>
          <Route path="follower" element={<Follower />} />
          <Route path="following" element={<Following />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
