const redux = require("redux");
const createStore = redux.createStore;

const initialState = {
  authenticated: true
};

//REDUCER

const rootReducer = (state = initialState, action) => {
  return state;
};

//STORE

const store = createStore(rootReducer);
console.log(store.getState());

//DISPATCHING ACTIONS

store.dispatch(() => {
  console.log("");
});

//SUBSCRIPTIONS
