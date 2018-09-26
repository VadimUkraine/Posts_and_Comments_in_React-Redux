import axios from 'axios';


export function getPostsSuccess(posts) {
  return {
    type: 'GET_ALL_POSTS',
    payload: posts
  };
}

export function getAllPosts() {
  return function (dispatch) {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => {
        const posts = response.data;
        dispatch(getPostsSuccess(posts));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}