import {
  RECEIVE_CATEGORY_REWARD,
  UPDATE_CATEGORY_REWARD,
  DELETE_CATEGORY_REWARD,
} from "../actions/category-rewards-actions";

const defaultState = {
  byId: {},
  allIds: [],
};

const categoryRewardReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_CATEGORY_REWARD:
      newState.allIds.push(action.categoryRewards.id);
      newState.byId[action.categoryRewards.id] = action.categoryRewards;
      return newState;
    case UPDATE_CATEGORY_REWARD:
      newState.byId[action.categoryRewards.id] = action.categoryRewards;
      return newState;
    case DELETE_CATEGORY_REWARD:
      delete newState.byId[action.id];
      let idx = newState.allIds.indexOf(action.id);
      newState.allIds.splice(idx, 1);
      return newState;
    default:
      return state;
  }
};

export default categoryRewardReducer;
