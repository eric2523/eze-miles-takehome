const { combineReducers } = require("redux");
const { default: entitiesReducer } = require("./entities_reducer");

const rootReducer = combineReducers({
  entities: entitiesReducer
})

export default rootReducer