import React from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../../components/common/Navigation';

function Profile() {
  const param = useParams();
  console.log(param);
  return (
    <div>
      Profile
      <Navigation />
    </div>
  );
}

export default Profile;
