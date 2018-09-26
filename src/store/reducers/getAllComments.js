const INIT_STATE = {
  comments: []
};

export default function getAllComments(state = INIT_STATE, action) {
  switch (action.type) {
    case 'GET_ALL_COMMENTS':
      return { comments: action.payload };
    default:
      return state;
  }
}
