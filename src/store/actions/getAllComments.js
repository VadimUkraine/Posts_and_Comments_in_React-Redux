import axios from 'axios';


export function getCommentsSuccess(comments) {
  return {
    type: 'GET_ALL_COMMENTS',
    payload: comments
  };
}

export function getAllComments() {
  return function (dispatch) {
    axios
      .get(`https://jsonplaceholder.typicode.com/comments`)
      .then((response) => {
        const comments = response.data;
        dispatch(getCommentsSuccess(comments));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}