import categoryReducer from "./category_reducer";
import rewardReducer from "./reward_reducer";
import categoryRewardReducer from "./category_reward_reducer";
const { combineReducers } = require("redux");

const entitiesReducer = combineReducers({
  categories: categoryReducer,
  rewards: rewardReducer,
  // joins table
  categoryRewards: categoryRewardReducer
})

export default entitiesReducer