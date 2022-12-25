import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { editMyPost } from '../../../api/post';

import ConfirmHeader from '../../../components/common/ConfirmHeader';
import Posting from '../../../components/Post/Posting';

import {
  contentState,
  imageSrcListState,
  tagListState,
} from '../../../atoms/post';

function PostEdit() {
  const {
    state: { postId, editTagArray, editContent, editImages },
  } = useLocation();

  const tagList = useRecoilValue(tagListState);
  const content = useRecoilValue(contentState);
  const imageSrcList = useRecoilValue(imageSrcListState);

  const navigate = useNavigate();

  const editPost = async () => {
    const contents = JSON.stringify({
      tags: tagList,
      content,
    });

    try {
      const response = editMyPost(imageSrcList, contents, postId);
      return response.then(navigate(-1));
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
