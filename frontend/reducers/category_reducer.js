const defaultState = {
  byId: {},
  allIds: []
}
// No actions to dispatch right now. In the future we can make it so that user can create categories 
// example action.type: RECEIVE_CATEGORY
const categoryReducer = (state = defaultState, action) => {
  return state;
}

export default categoryReducer