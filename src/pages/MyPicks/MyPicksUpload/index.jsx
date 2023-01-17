import React from 'react';
import axios from 'axios';
import MyPicksForm from '../../../components/MyPicks/MyPickForm';

function MyPicksUpload() {
  const url = `https://mandarin.api.weniv.co.kr/product/`;
  const uploadMyPick = async (myPickData) => {
    try {
      const res = await axios(url, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
          'Content-type': 'application/json',
        },
        data: myPickData,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return <MyPicksForm httpReq={uploadMyPick} />;
}

export default MyPicksUpload;
