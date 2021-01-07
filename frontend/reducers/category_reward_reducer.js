import {
  RECEIVE_CATEGORY_REWARD,
  UPDATE_CATEGORY_REWARD,
  DELETE_CATEGORY_REWARD,
} from "../actions/category-rewards-actions";
import undoable from "redux-undo"

const defaultState = {
  byId: {},
  allIds: [],
};

const categoryRewardReducer = (state = defaultState, action) => {
  Object.freeze(state);
  //! FINALLY FIXED THIS BUG: Object.assign() is only a shallow dupe!!! 
  //! For deep dupe use the stringify and parsing method bellow 
  let newState = JSON.parse(JSON.stringify(state)) 

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

const undoableCategoryRewardReducer = undoable(categoryRewardReducer, {
  limit: 7
})

export default undoableCategoryRewardReducer;
