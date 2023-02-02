import { authInstance } from './instance';
import { API_URLS } from '../constants/apiUrls';

export const getCommentList = async (postId) => {
  const { data } = await authInstance(API_URLS.GET_COMMENTS(postId));

  return data.comments;
};

export const postCommentData = async (postId, commentData) => {
  await authInstance.post(API_URLS.CREATE_COMMENT(postId), {
    comment: {
      content: commentData,
    },
  });
};

export const deleteCommentItem = async (postId, commentId) => {
  await authInstance.delete(API_URLS.DELETE_COMMENT(postId, commentId));
};

export const reportCommentItem = async (postId, commentId) => {
  await authInstance.post(API_URLS.REPORT_COMMENT(postId, commentId));
};
