export const preloadedState = {
  entities: {
    categories: {
      byId: {
        1: {
          id: 1,
          name: "Food & Drink",
        },
        2: {
          id: 2,
          name: "Automotive",
        },
        3: {
          id: 3,
          name: "Home",
        },
      },
      allIds: [1, 2, 3],
    },
    rewards: {
      byId: {
        1: {
          id: 1,
          name: "100% OFF",
        },
        2: {
          id: 2,
          name: "$0.01 OFF",
        },
        3: {
          id: 3,
          name: "BOGO",
        },
      },
      allIds: [1, 2, 3],
    },
    categoryRewards: {
      past: [],
      future: [],
      present: {
        byId: {
          1: {
            id: 1,
            categoryId: 1,
            rewardId: 1,
          },
          2: {
            id: 2,
            categoryId: 1,
            rewardId: 2,
          },
          3: {
            id: 3,
            categoryId: 2,
            rewardId: 1,
          },
          4: {
            id: 4,
            categoryId: 2,
            rewardId: 2,
          },
        },
        allIds: [1, 2, 3, 4],
      },
    },
  },
};
