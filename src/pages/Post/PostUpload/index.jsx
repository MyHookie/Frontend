import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { createMyPost } from '../../../api/post';
import getImageFilename from '../../../api/image';

import ConfirmHeader from '../../../components/common/ConfirmHeader';
import Posting from '../../../components/Post/Posting';

import {
  contentState,
  imageFileListState,
  tagListState,
} from '../../../atoms/post';

function PostUpload() {
  const tagList = useRecoilValue(tagListState);
  const content = useRecoilValue(contentState);
  const imageFileList = useRecoilValue(imageFileListState);

  const navigate = useNavigate();

  const createPost = async (e) => {
    e.preventDefault();
    const promiseImageArray = [];

    for (let index = 0; index < imageFileList.length; index += 1) {
      promiseImageArray.push(getImageFilename(imageFileList[index]));
    }

    const imageUrls = await Promise.all(promiseImageArray);

    const contents = JSON.stringify({
      tags: tagList,
      content,
    });

    try {
      const response = createMyPost(imageUrls, contents);
      return response.then(navigate(`/profile`));
    } catch (error) {
      return error;
    }
  };

  const goBackPage = () => {
    navigate(-1);
  };

  return (
    <>
      <ConfirmHeader leftClick={goBackPage} rightClick={createPost} />
      <Posting />
    </>
  );
}

export default PostUpload;
