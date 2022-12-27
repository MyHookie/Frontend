import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useRecoilState } from 'recoil';
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
import Search from './pages/Search';
import checkTokenValid from './api/tokenValid';
import loginState from './atoms/login';

function App() {
  const [isLogin, setIsLogin] = useRecoilState(loginState);

  useEffect(() => {
    (async function () {
      return (await checkTokenValid()) ? setIsLogin(true) : setIsLogin(false);
    })();
  }, []);

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
        <Route path="/mypicks" element={<Mypicks />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
