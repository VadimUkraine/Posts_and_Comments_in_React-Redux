const INIT_STATE = {
  users: []
};

export default function getAllUsers(state = INIT_STATE, action) {
  switch (action.type) {
    case 'GET_ALL_USERS':
      return { users: action.payload };
    default:
      return state;
  }
}
