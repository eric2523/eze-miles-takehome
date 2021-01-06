export const RECEIVE_CATEGORY_REWARD = "RECEIVE_CATEGORY_REWARD";
export const UPDATE_CATEGORY_REWARD = "UPDATE_CATEGORY_REWARD";
export const DELETE_CATEGORY_REWARD = "DELETE_CATEGORY_REWARD";

// sample dispatch
// store.dispatch(receiveCategoryRewards({
//   id: 1234,
//   categoryId: 5,
//   rewardId: 5
// }));

export const receiveCategoryRewards = (categoryRewards) => {
  return {
    type: RECEIVE_CATEGORY_REWARD,
    categoryRewards,
  };
};

export const updateCategoryRewards = (categoryRewards) => {
  return {
    type: UPDATE_CATEGORY_REWARD,
    categoryRewards,
  };
};

export const deleteCategoryRewards = (id) => {
  return {
    type: DELETE_CATEGORY_REWARD, 
    id
  }
};
