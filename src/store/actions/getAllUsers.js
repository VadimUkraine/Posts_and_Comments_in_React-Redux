import axios from 'axios';


export function getUsersSuccess(users) {
  return {
    type: 'GET_ALL_USERS',
    payload: users
  };
}

export function getAllUsers() {
  return function (dispatch) {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => {
        const users = response.data;
        dispatch(getUsersSuccess(users));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}