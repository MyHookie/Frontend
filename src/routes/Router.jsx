import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from '../components/common/ScrollToTop';
import Login from '../pages/Auth/Login';
import ProfileSetting from '../pages/Auth/ProfileSetting';
import SignUp from '../pages/Auth/SignUp';
import Chat from '../pages/Chat';
import ChatDetail from '../pages/Chat/ChatDetail';
import Home from '../pages/Home';
import MyPicksUpload from '../pages/MyPicksUpload';
import NotFound from '../pages/NotFound';
import PostDetail from '../pages/Post/PostDetail';
import PostEdit from '../pages/Post/PostEdit';
import PostUpload from '../pages/Post/PostUpload';
import Profile from '../pages/Profile';
import Follower from '../pages/Profile/Follower';
import Following from '../pages/Profile/Following';
import ProfileEdit from '../pages/Profile/ProfileEdit';
import Search from '../pages/Search';
import Splash from '../pages/Splash';
import Welcome from '../pages/Welcome';

function Router() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup">
          <Route index element={<SignUp />} />
          <Route path="profile" element={<ProfileSetting />} />
        </Route>
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/chat/:id" element={<ChatDetail />} />
        <Route path="/post">
          <Route path=":id" element={<PostDetail />} />
          <Route path="upload" element={<PostUpload />} />
          <Route path="edit/:id" element={<PostEdit />} />
        </Route>
        <Route path="/profile/edit" element={<ProfileEdit />} />
        <Route path="/profile/:accountname">
          <Route index element={<Profile />} />
          <Route path="follower" element={<Follower />} />
          <Route path="following" element={<Following />} />
        </Route>
        {/* <Route path="/mypicks" element={<MyPicksUpload />} /> */}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
