import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { createMyPost } from '../../../api/post';

import ConfirmHeader from '../../../components/common/ConfirmHeader';
import Posting from '../../../components/Post/Posting';

import {
  contentState,
  imageSrcListState,
  tagListState,
} from '../../../atoms/post';

function PostUpload() {
  const tagList = useRecoilValue(tagListState);
  const content = useRecoilValue(contentState);
  const imageSrcList = useRecoilValue(imageSrcListState);

  const navigate = useNavigate();

  const createPost = async (e) => {
    e.preventDefault();

    const contents = JSON.stringify({
      tags: tagList,
      content,
    });

    try {
      const response = createMyPost(imageSrcList, contents);
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
