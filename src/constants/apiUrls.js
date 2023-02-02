export const API_URLS = {
  HOME: '/',
  CREATE_IMAGE: '/image/uploadfile',
  SIGNUP: '/user',
  LOGIN: '/user/login',
  CHECK_EMAIL_VALID: '/user/emailvalid',
  CHECK_ACCOUNT_VALID: '/user/accountnamevalid',

  UPDATE_PROFILE: '/user',
  GET_PROFILE: (accountName) => `/profile/${accountName}`,
  CREATE_FOLLOW: (accountName) => `/profile/${accountName}/follow`,
  DELETE_FOLLOW: (accountName) => `/profile/${accountName}/unfollow`,
  GET_FOLLOWING: (accountName, limit = 0, skip = 0) =>
    `/profile/${accountName}/following?limit=${limit}&skip=${skip}`,
  GET_FOLLOWER: (accountName, limit = 0, skip = 0) =>
    `/profile/${accountName}/follower?limit=${limit}&skip=${skip}`,

  GET_SEARCHED_USER: (keyword) => `/user/searchuser/?keyword=${keyword}`,

  CREATE_POST: `/post`,
  GET_FOLLOW_POST: (limit = 0, skip = 0) =>
    `/post/feed/?limit=${limit}&skip=${skip}`,
  GET_ACCOUNT_POST: (accountName, limit = 0, skip = 0) =>
    `/post/${accountName}/userpost/?limit=${limit}&skip=${skip * 3}`,
  GET_POST_DETAIL: (postId) => `/post/${postId}`,
  UPDATE_POST: (postId) => `/post/${postId}`,
  DELETE_POST: (postId) => `/post/${postId}`,
  REPORT_POST: (postId) => `/post/${postId}/report`,
  LIKE_POST: (postId) => `/post/${postId}/heart`,
  UNLIKE_POST: (postId) => `/post/${postId}/unheart`,

  GET_COMMENTS: (postId, limit = 0, skip = 0) =>
    `/post/${postId}/comments/?limit=${limit}&skip=${skip}`,
  CREATE_COMMENT: (postId) => `/post/${postId}/comments`,
  DELETE_COMMENT: (postId, commentId) =>
    `/post/${postId}/comments/${commentId}`,
  REPORT_COMMENT: (postId, commentId) =>
    `/post/${postId}/comments/${commentId}/report`,

  GET_PRODUCTS: (accountName, limit = 0, skip = 0) =>
    `/product/${accountName}/?limit=${limit}&skip=${skip}`,
  GET_PRODUCT_DETAIL: (productId) => `/product/detail/${productId}`,
  CREATE_PRODUCT: `/product`,
  UPDATE_PRODUCT: (productId) => `/product/${productId}`,
  DELETE_PRODUCT: (productId) => `/product/${productId}`,

  CHECK_USER_TOKEN: `/user/checktoken`,
};
