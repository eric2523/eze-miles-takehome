import React from "react"
import ReactDOM from "react-dom"
import { Root } from "./components/root"
import configureStore from "./store/store"
import { receiveCategoryRewards, updateCategoryRewards, deleteCategoryRewards } from "./actions/category-rewards-actions"
import { preloadedState } from "./preloaded-state"

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root")
  let cache = JSON.parse(window.localStorage.getItem("cache"))
  const initialState = (cache) ? cache : preloadedState
  const store = configureStore(initialState)

  ReactDOM.render(<Root store={ store }/>, root)
  // testing on window stuff 
  window.store = store 
  window.receiveCategoryRewards = receiveCategoryRewards
  window.updateCategoryRewards = updateCategoryRewards
  window.deleteCategoryRewards = deleteCategoryRewards
})