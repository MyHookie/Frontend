import React from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import MyPicksForm from '../../../components/MyPicks/MyPickForm';

function MyPicksEdit() {
  const location = useLocation();
  const { myPickId, isNoPrice } = location.state;

  console.log(location.state);

  const getMyPickItemDetail = async () => {
    try {
      const response = await axios.get(
        `https://mandarin.api.weniv.co.kr/product/detail/${myPickId}`,
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem('token')
            )}`,
            'Content-type': 'application/json',
          },
        }
      );
      return response.data.product;
    } catch (error) {
      return error;
    }
  };

  const editMyPick = async (myPickData) => {
    const url = `https://mandarin.api.weniv.co.kr/product/${myPickId}`;
    try {
      const res = await axios(url, {
        method: 'PUT',
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

  return <MyPicksForm httpReq={editMyPick} getInfo={getMyPickItemDetail} />;
}

export default MyPicksEdit;
