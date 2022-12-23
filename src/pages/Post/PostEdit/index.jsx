import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { editMyPost } from '../../../api/post';
import getImageFilename from '../../../api/image';

import ConfirmHeader from '../../../components/common/ConfirmHeader';
import Posting from '../../../components/Post/Posting';

import {
  contentState,
  imageFileListState,
  tagListState,
} from '../../../atoms/post';

function PostEdit() {
  const {
    state: { postId, editTagArray, editContent, editImages },
  } = useLocation();

  const tagList = useRecoilValue(tagListState);
  const content = useRecoilValue(contentState);
  const imageFileList = useRecoilValue(imageFileListState);

  const navigate = useNavigate();

  const editPost = async (e) => {
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
      const response = editMyPost(imageUrls, contents, postId);
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
      <ConfirmHeader
        leftClick={goBackPage}
        rightClick={editPost}
        rightButtonText="수정"
      />
      <Posting
        editTagArray={editTagArray}
        editContent={editContent}
        editImages={editImages}
        edit
      />
    </>
  );
}

export default PostEdit;
