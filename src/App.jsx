import React from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Login from './pages/Auth/Login';
import SignUp from './pages/Auth/SignUp';
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
import Splash from './pages/Splash';
import Welcome from './pages/Welcome';
import ProfileEdit from './pages/Profile/ProfileEdit';
import ProfileSetting from './pages/Auth/ProfileSetting';
import Mypicks from './pages/Mypicks';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup">
          <Route index element={<SignUp />} />
          <Route path="profile" element={<ProfileSetting />} />
        </Route>
        <Route path="/home" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/chat/:id" element={<ChatDetail />} />
        <Route path="/post">
          <Route path=":id" element={<PostDetail />} />
          <Route path="upload" element={<PostUpload />} />
          <Route path="edit/:id" element={<PostEdit />} />
        </Route>
        <Route path="/profile">
          <Route index element={<Profile />} />
          <Route path=":id" element={<Profile />} />
          <Route path="edit" element={<ProfileEdit />} />
          <Route path="follower" element={<Follower />} />
          <Route path="following" element={<Following />} />
        </Route>
        <Route path="/mypicks" element={<Mypicks />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
