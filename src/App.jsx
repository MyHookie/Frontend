import React from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Login from './pages/Auth/Login';
import Sign from './pages/Auth/Sign';
import Chat from './pages/Chat';
import ChatDetail from './pages/Chat/ChatDetail';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import PostDetail from './pages/Post/PostDetail';
import PostEdit from './pages/Post/PostEdit';
import PostUpload from './pages/Post/PostUpload';
import Profile from './pages/Profile';
import Follower from './pages/Profile/Follower';
import Following from './pages/Profile/Following';
import ProfileSetting from './pages/Profile/ProfileSetting';
import Splash from './pages/Splash';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/home" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/chat/:id" element={<ChatDetail />} />
        <Route path="/post/*" element={<Outlet />}>
          <Route path=":id" element={<PostDetail />} />
          <Route path="upload" element={<PostUpload />} />
          <Route path="edit/:id" element={<PostEdit />} />
        </Route>
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/*" element={<Outlet />}>
          <Route path="setting" element={<ProfileSetting />} />
          <Route path="follower" element={<Follower />} />
          <Route path="following" element={<Following />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
