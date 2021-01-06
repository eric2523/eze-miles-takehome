import React from "react"
import ReactDOM from "react-dom"
import { Root } from "./components/root"
import configureStore from "./store/store"
import { receiveCategoryRewards, updateCategoryRewards, deleteCategoryRewards } from "./actions/category-rewards-actions"

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root")

  const preloadedState = {
    entities: {
      categories: { byId: {
        1: {
          id: 1,
          name: "C1"
        },
        2: {
          id: 2,
          name: "C2"
        }
      }, allIds: [1, 2] },
      rewards: { byId: {
        1: {
          id: 1,
          name: "R1"
        },
        2: {
          id: 2,
          name: "R2"
        }
      }, allIds: [1, 2] },
      categoryRewards: {
        byId: {
          1: {
            id: 1,
            categoryId: 1,
            rewardId: 1
          },
          2: {
            id: 2,
            categoryId: 1,
            rewardId: 2
          },
          3: {
            id: 3,
            categoryId: 2,
            rewardId: 1
          },
          4: {
            id: 4,
            categoryId: 2,
            rewardId: 2
          }
        },
        allIds: [1, 2, 3, 4]
      }
    }
  }

  const store = configureStore(preloadedState)

  ReactDOM.render(<Root store={ store }/>, root)
  // testing on window stuff 
  window.store = store 
  window.receiveCategoryRewards = receiveCategoryRewards
  window.updateCategoryRewards = updateCategoryRewards
  window.deleteCategoryRewards = deleteCategoryRewards
})