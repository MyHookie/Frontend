import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { useMutation } from 'react-query';

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
  const navigate = useNavigate();

  const tagList = useRecoilValue(tagListState);
  const content = useRecoilValue(contentState);
  const imageSrcList = useRecoilValue(imageSrcListState);

  const contents = JSON.stringify({
    tags: tagList,
    content,
  });

  const editPost = useMutation({
    mutationFn: () => editMyPost(imageSrcList, contents, postId),
    onSuccess: () => {
      navigate(-1);
    },
  });

  const onClickEdit = () => {
    editPost.mutate();
  };

  const goBackPage = () => {
    navigate(-1);
  };

  return (
    <>
      <ConfirmHeader
        leftClick={goBackPage}
        rightClick={onClickEdit}
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
